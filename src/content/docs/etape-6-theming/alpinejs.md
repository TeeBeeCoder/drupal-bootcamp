---
title: Alpine.js
description: Ajouter des interactions JavaScript avec Alpine.js dans Drupal
sidebar:
  order: 5
---

import { Tabs, TabItem, Aside, Steps } from '@astrojs/starlight/components';

## 🏔️ Pourquoi Alpine.js ?

**Alpine.js** est un framework JavaScript léger (~15kb) parfait pour :

- Ajouter de l'interactivité sans framework lourd
- Syntaxe déclarative directement dans le HTML
- Excellent avec Tailwind CSS
- Pas de build step requis

<Aside type="note" title="Alpine.js vs autres frameworks">
Alpine.js est idéal pour les interactions légères. Pour les applications complexes (SPA), considérez React ou Vue.
</Aside>

## 📦 Installation

### Option 1 : CDN (simple)

```yaml
# tailstore.libraries.yml
alpine:
  version: 3.x
  header: true
  js:
    https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js: 
      type: external
      minified: true
      attributes:
        defer: true

global:
  version: 1.0
  css:
    theme:
      css/dist/tailwind.css: { minified: true }
  dependencies:
    - tailstore/alpine
```

### Option 2 : npm (recommandé)

```bash
cd themes/custom/tailstore
npm install alpinejs
```

Créez `js/src/alpine.js` :

```javascript
// js/src/alpine.js
import Alpine from 'alpinejs';

// Plugins optionnels
// import collapse from '@alpinejs/collapse';
// import focus from '@alpinejs/focus';

// Alpine.plugin(collapse);
// Alpine.plugin(focus);

// Rendre Alpine accessible globalement
window.Alpine = Alpine;

// Démarrer Alpine
Alpine.start();
```

Bundle avec un outil comme **esbuild** :

```json
{
  "scripts": {
    "build:js": "esbuild js/src/alpine.js --bundle --minify --outfile=js/dist/app.js",
    "watch:js": "esbuild js/src/alpine.js --bundle --outfile=js/dist/app.js --watch"
  }
}
```

Déclarez dans libraries.yml :

```yaml
global:
  version: 1.0
  css:
    theme:
      css/dist/tailwind.css: { minified: true }
  js:
    js/dist/app.js: { minified: true }
```

## 🛒 Composants TailStore

### Panier (Cart)

```javascript
// js/src/stores/cart.js
document.addEventListener('alpine:init', () => {
  Alpine.store('cart', {
    items: JSON.parse(localStorage.getItem('cart') || '[]'),
    
    get count() {
      return this.items.reduce((sum, item) => sum + item.quantity, 0);
    },
    
    get total() {
      return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    },
    
    add(product) {
      const existing = this.items.find(i => i.id === product.id);
      
      if (existing) {
        existing.quantity++;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
      
      this.save();
      this.notify(`${product.name} ajouté au panier`);
    },
    
    remove(productId) {
      this.items = this.items.filter(i => i.id !== productId);
      this.save();
    },
    
    updateQuantity(productId, quantity) {
      const item = this.items.find(i => i.id === productId);
      if (item) {
        item.quantity = Math.max(1, quantity);
        this.save();
      }
    },
    
    clear() {
      this.items = [];
      this.save();
    },
    
    save() {
      localStorage.setItem('cart', JSON.stringify(this.items));
    },
    
    notify(message) {
      // Dispatch event pour les toasts
      window.dispatchEvent(new CustomEvent('toast', { 
        detail: { message, type: 'success' } 
      }));
    }
  });
});
```

### Template bouton "Ajouter au panier"

```twig
{# node--product--card.html.twig #}
<article 
  class="card group"
  x-data="{ 
    product: {
      id: {{ node.id }},
      name: '{{ label|escape('js') }}',
      price: {{ node.field_price.value }},
      image: '{{ file_url(node.field_images.0.entity.fileuri) }}'
    }
  }"
>
  {# ... image et infos ... #}
  
  <button 
    @click="$store.cart.add(product)"
    class="btn btn-primary w-full"
  >
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
    </svg>
    Ajouter au panier
  </button>
</article>
```

### Mini-cart header

```twig
{# block--mini-cart.html.twig #}
<div 
  x-data="{ open: false }"
  class="relative"
>
  {# Trigger #}
  <button 
    @click="open = !open"
    class="relative p-2 text-gray-600 hover:text-primary transition-colors"
  >
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
    </svg>
    
    {# Badge count #}
    <span 
      x-show="$store.cart.count > 0"
      x-text="$store.cart.count"
      class="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center"
    ></span>
  </button>
  
  {# Dropdown #}
  <div 
    x-show="open"
    x-transition:enter="transition ease-out duration-200"
    x-transition:enter-start="opacity-0 translate-y-1"
    x-transition:enter-end="opacity-100 translate-y-0"
    x-transition:leave="transition ease-in duration-150"
    x-transition:leave-start="opacity-100 translate-y-0"
    x-transition:leave-end="opacity-0 translate-y-1"
    @click.outside="open = false"
    class="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-50"
  >
    <div class="p-4 border-b">
      <h3 class="font-semibold">Votre panier</h3>
    </div>
    
    <template x-if="$store.cart.items.length === 0">
      <div class="p-8 text-center text-gray-500">
        Votre panier est vide
      </div>
    </template>
    
    <template x-if="$store.cart.items.length > 0">
      <div>
        <ul class="divide-y max-h-64 overflow-y-auto">
          <template x-for="item in $store.cart.items" :key="item.id">
            <li class="p-4 flex gap-4">
              <img :src="item.image" class="w-16 h-16 object-cover rounded">
              <div class="flex-1 min-w-0">
                <p x-text="item.name" class="font-medium truncate"></p>
                <p class="text-sm text-gray-500">
                  <span x-text="item.quantity"></span> × 
                  <span x-text="item.price.toFixed(2) + ' €'"></span>
                </p>
              </div>
              <button 
                @click="$store.cart.remove(item.id)"
                class="text-gray-400 hover:text-red-500"
              >
                ✕
              </button>
            </li>
          </template>
        </ul>
        
        <div class="p-4 border-t bg-gray-50">
          <div class="flex justify-between font-semibold mb-4">
            <span>Total</span>
            <span x-text="$store.cart.total.toFixed(2) + ' €'"></span>
          </div>
          <a href="/checkout" class="btn btn-primary w-full">
            Commander
          </a>
        </div>
      </div>
    </template>
  </div>
</div>
```

### Menu Mobile

```twig
{# block--mobile-menu.html.twig #}
<div 
  x-data="{ open: false }"
  @toggle-mobile-menu.window="open = !open"
>
  {# Overlay #}
  <div 
    x-show="open"
    x-transition:enter="transition-opacity ease-linear duration-300"
    x-transition:enter-start="opacity-0"
    x-transition:enter-end="opacity-100"
    x-transition:leave="transition-opacity ease-linear duration-300"
    x-transition:leave-start="opacity-100"
    x-transition:leave-end="opacity-0"
    @click="open = false"
    class="fixed inset-0 bg-black/50 z-40 md:hidden"
  ></div>
  
  {# Drawer #}
  <aside
    x-show="open"
    x-transition:enter="transform transition ease-in-out duration-300"
    x-transition:enter-start="-translate-x-full"
    x-transition:enter-end="translate-x-0"
    x-transition:leave="transform transition ease-in-out duration-300"
    x-transition:leave-start="translate-x-0"
    x-transition:leave-end="-translate-x-full"
    class="fixed top-0 left-0 bottom-0 w-72 bg-white z-50 overflow-y-auto md:hidden"
  >
    <div class="p-4 border-b flex justify-between items-center">
      <span class="font-bold text-xl">Menu</span>
      <button @click="open = false" class="p-2 hover:bg-gray-100 rounded">
        ✕
      </button>
    </div>
    
    <nav class="p-4">
      {{ content }}
    </nav>
  </aside>
</div>
```

### Sélecteur de quantité

```twig
{# field--field-quantity.html.twig #}
<div 
  x-data="{ quantity: 1 }"
  class="flex items-center border rounded-lg overflow-hidden w-fit"
>
  <button 
    @click="quantity = Math.max(1, quantity - 1)"
    class="px-3 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
  >−</button>
  
  <input 
    type="number" 
    x-model.number="quantity"
    min="1"
    class="w-16 text-center border-0 focus:ring-0"
  >
  
  <button 
    @click="quantity++"
    class="px-3 py-2 bg-gray-100 hover:bg-gray-200 transition-colors"
  >+</button>
</div>
```

### Galerie produit

```twig
{# field--field-images--full.html.twig #}
<div 
  x-data="{ 
    active: 0,
    images: {{ images|json_encode|raw }}
  }"
  class="grid gap-4"
>
  {# Main image #}
  <div class="aspect-square overflow-hidden rounded-lg bg-gray-100">
    <template x-for="(image, index) in images" :key="index">
      <img 
        x-show="active === index"
        x-transition:enter="transition ease-out duration-200"
        x-transition:enter-start="opacity-0"
        x-transition:enter-end="opacity-100"
        :src="image.url"
        :alt="image.alt"
        class="w-full h-full object-cover"
      >
    </template>
  </div>
  
  {# Thumbnails #}
  <div class="grid grid-cols-5 gap-2">
    <template x-for="(image, index) in images" :key="index">
      <button 
        @click="active = index"
        :class="{ 'ring-2 ring-primary': active === index }"
        class="aspect-square overflow-hidden rounded-lg"
      >
        <img 
          :src="image.url" 
          :alt="image.alt"
          class="w-full h-full object-cover"
        >
      </button>
    </template>
  </div>
</div>
```

### Système de Toast notifications

```twig
{# block--toasts.html.twig #}
<div 
  x-data="{
    toasts: [],
    add(message, type = 'success') {
      const id = Date.now();
      this.toasts.push({ id, message, type });
      setTimeout(() => this.remove(id), 5000);
    },
    remove(id) {
      this.toasts = this.toasts.filter(t => t.id !== id);
    }
  }"
  @toast.window="add($event.detail.message, $event.detail.type)"
  class="fixed bottom-4 right-4 z-50 space-y-2"
>
  <template x-for="toast in toasts" :key="toast.id">
    <div 
      x-show="true"
      x-transition:enter="transform ease-out duration-300"
      x-transition:enter-start="translate-x-full opacity-0"
      x-transition:enter-end="translate-x-0 opacity-100"
      x-transition:leave="transform ease-in duration-200"
      x-transition:leave-start="translate-x-0 opacity-100"
      x-transition:leave-end="translate-x-full opacity-0"
      :class="{
        'bg-green-500': toast.type === 'success',
        'bg-red-500': toast.type === 'error',
        'bg-blue-500': toast.type === 'info'
      }"
      class="px-4 py-3 rounded-lg text-white shadow-lg flex items-center gap-2"
    >
      <span x-text="toast.message"></span>
      <button @click="remove(toast.id)" class="ml-2 hover:opacity-75">✕</button>
    </div>
  </template>
</div>
```

## 🔗 Communication avec Drupal via htmx

Alpine.js gère l'UI, htmx gère les requêtes AJAX :

```twig
<div 
  x-data="{ loading: false }"
  @htmx:before-request="loading = true"
  @htmx:after-request="loading = false"
>
  <button
    hx-post="/api/cart/add"
    hx-vals='{"product_id": "{{ node.id }}"}'
    hx-swap="none"
    class="btn btn-primary"
    :class="{ 'opacity-50 cursor-wait': loading }"
    :disabled="loading"
  >
    <span x-show="!loading">Ajouter au panier</span>
    <span x-show="loading">Chargement...</span>
  </button>
</div>
```

## 🧪 Debug Alpine

Ajoutez dans votre code pour debug :

```twig
<div x-data="{ items: [] }">
  {# Debug panel #}
  <pre x-show="false" x-text="JSON.stringify($data, null, 2)"></pre>
</div>
```

Ou utilisez l'extension navigateur **Alpine.js devtools**.

## ✅ Checklist

- [ ] Alpine.js installé (CDN ou npm)
- [ ] Store panier implémenté
- [ ] Mini-cart avec dropdown
- [ ] Menu mobile avec drawer
- [ ] Galerie produit interactive
- [ ] Toasts notifications
- [ ] Debug configuré

## 🔜 Prochaine étape

L'interactivité est en place ! Passons aux [exercices](/etape-6-theming/exercices/) pour mettre tout en pratique.
