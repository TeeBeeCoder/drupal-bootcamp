---
title: Tailwind CSS
description: Intégrer Tailwind CSS v4 dans un thème Drupal
sidebar:
  order: 4
---

import { Tabs, TabItem, Aside, Steps } from '@astrojs/starlight/components';

## 🎨 Pourquoi Tailwind CSS ?

**Tailwind CSS** est un framework CSS "utility-first" qui permet de :

- Développer rapidement sans quitter le HTML
- Créer des designs personnalisés facilement
- Réduire la taille du CSS final (purge)
- Maintenir une cohérence de design

<Aside type="tip" title="Tailwind v4">
La version 4 de Tailwind simplifie grandement la configuration et utilise CSS natif.
</Aside>

## 🚀 Installation

### 1. Initialiser npm dans le thème

```bash
cd themes/custom/tailstore
npm init -y
```

### 2. Installer Tailwind CSS v4

```bash
npm install -D tailwindcss @tailwindcss/cli
```

### 3. Créer le fichier CSS source

Créez `css/src/tailwind.css` :

```css
/* css/src/tailwind.css */

/* Import Tailwind */
@import "tailwindcss";

/* Personnalisation du thème */
@theme {
  /* Couleurs */
  --color-primary: #0073e6;
  --color-primary-dark: #005bb5;
  --color-secondary: #6c757d;
  --color-success: #28a745;
  --color-warning: #ffc107;
  --color-danger: #dc3545;
  --color-dark: #1a1a2e;
  --color-light: #f8f9fa;
  
  /* Fonts */
  --font-sans: 'Inter', system-ui, sans-serif;
  
  /* Spacing custom */
  --spacing-18: 4.5rem;
  --spacing-128: 32rem;
  
  /* Border radius */
  --radius-btn: 0.375rem;
  --radius-card: 0.5rem;
}

/* Composants personnalisés */
@layer components {
  /* Boutons */
  .btn {
    @apply inline-flex items-center justify-center gap-2 px-4 py-2 font-semibold rounded-btn transition-all duration-200;
  }
  
  .btn-primary {
    @apply bg-primary text-white hover:bg-primary-dark;
  }
  
  .btn-secondary {
    @apply bg-secondary text-white hover:bg-secondary/90;
  }
  
  .btn-outline {
    @apply border border-current bg-transparent hover:bg-primary hover:text-white hover:border-primary;
  }
  
  /* Cards */
  .card {
    @apply bg-white rounded-card shadow-md overflow-hidden;
  }
  
  .card-body {
    @apply p-4;
  }
  
  /* Badges */
  .badge {
    @apply inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full;
  }
  
  .badge-primary {
    @apply bg-primary/10 text-primary;
  }
  
  .badge-danger {
    @apply bg-danger/10 text-danger;
  }
  
  .badge-success {
    @apply bg-success/10 text-success;
  }
  
  /* Formulaires */
  .form-input {
    @apply w-full px-3 py-2 border border-gray-300 rounded-btn focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors;
  }
  
  .form-label {
    @apply block text-sm font-medium text-gray-700 mb-1;
  }
  
  /* Container */
  .container {
    @apply mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl;
  }
}

/* Utilitaires personnalisés */
@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
  
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
```

### 4. Configurer le build

Créez `package.json` avec les scripts :

```json
{
  "name": "tailstore-theme",
  "version": "1.0.0",
  "scripts": {
    "build": "tailwindcss -i css/src/tailwind.css -o css/dist/tailwind.css --minify",
    "watch": "tailwindcss -i css/src/tailwind.css -o css/dist/tailwind.css --watch"
  },
  "devDependencies": {
    "@tailwindcss/cli": "^4.0.0",
    "tailwindcss": "^4.0.0"
  }
}
```

### 5. Configurer la détection des classes

Créez `tailwind.config.js` (optionnel pour v4, mais utile) :

```javascript
// tailwind.config.js
export default {
  content: [
    './templates/**/*.twig',
    './js/**/*.js',
    '../../../modules/custom/**/*.twig',
  ],
};
```

### 6. Builder le CSS

```bash
# Build production
npm run build

# Développement avec watch
npm run watch
```

### 7. Déclarer dans libraries.yml

```yaml
# tailstore.libraries.yml
global:
  version: 1.0
  css:
    theme:
      css/dist/tailwind.css: { minified: true }
  dependencies:
    - core/drupal
```

## 📄 Intégration avec les templates

### Template page.html.twig avec Tailwind

```twig
{#
/**
 * @file
 * TailStore page template with Tailwind CSS.
 */
#}
<div class="min-h-screen flex flex-col bg-light">
  
  {# Header #}
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="container">
      <div class="flex items-center justify-between h-16">
        
        {# Logo #}
        <div class="flex-shrink-0">
          {{ page.header }}
        </div>
        
        {# Navigation principale #}
        <nav class="hidden md:flex items-center space-x-8">
          {{ page.primary_menu }}
        </nav>
        
        {# Actions header #}
        <div class="flex items-center space-x-4">
          {{ page.secondary_menu }}
          
          {# Mobile menu button #}
          <button 
            type="button" 
            class="md:hidden p-2 text-gray-600 hover:text-primary"
            x-data
            @click="$dispatch('toggle-mobile-menu')"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
        
      </div>
    </div>
  </header>

  {# Hero/Highlighted #}
  {% if page.highlighted %}
    <section class="relative">
      {{ page.highlighted }}
    </section>
  {% endif %}

  {# Breadcrumb #}
  {% if page.breadcrumb %}
    <nav class="bg-gray-50 border-b" aria-label="Breadcrumb">
      <div class="container py-3">
        {{ page.breadcrumb }}
      </div>
    </nav>
  {% endif %}

  {# Main content #}
  <main class="flex-grow py-8" id="main-content">
    <div class="container">
      
      {{ page.help }}
      
      <div class="{% if page.sidebar %}grid lg:grid-cols-4 gap-8{% endif %}">
        
        {# Content #}
        <div class="{% if page.sidebar %}lg:col-span-3{% endif %}">
          {{ page.content }}
        </div>
        
        {# Sidebar #}
        {% if page.sidebar %}
          <aside class="lg:col-span-1 space-y-6">
            {{ page.sidebar }}
          </aside>
        {% endif %}
        
      </div>
      
      {% if page.content_below %}
        <div class="mt-12">
          {{ page.content_below }}
        </div>
      {% endif %}
      
    </div>
  </main>

  {# Footer #}
  <footer class="bg-dark text-white">
    {% if page.footer_top %}
      <div class="container py-12">
        <div class="grid md:grid-cols-4 gap-8">
          {{ page.footer_top }}
        </div>
      </div>
    {% endif %}
    
    {% if page.footer_bottom %}
      <div class="border-t border-white/10">
        <div class="container py-6">
          <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            {{ page.footer_bottom }}
          </div>
        </div>
      </div>
    {% endif %}
  </footer>

</div>
```

### Template Product Card avec Tailwind

```twig
{#
/**
 * @file
 * Product card template with Tailwind CSS.
 */
#}
<article class="group card hover:-translate-y-1 transition-transform duration-200">
  
  {# Badges #}
  <div class="absolute top-2 left-2 z-10 flex gap-1">
    {% if is_on_sale %}
      <span class="badge badge-danger">-{{ discount_percent }}%</span>
    {% endif %}
    {% if node.isPromoted() %}
      <span class="badge badge-primary">Nouveau</span>
    {% endif %}
  </div>
  
  {# Quick actions #}
  <div class="absolute top-2 right-2 z-10 flex flex-col gap-1 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
    <button class="w-8 h-8 bg-white rounded-full shadow flex items-center justify-center text-gray-600 hover:text-primary hover:scale-110 transition-transform">
      ♡
    </button>
    <button class="w-8 h-8 bg-white rounded-full shadow flex items-center justify-center text-gray-600 hover:text-primary hover:scale-110 transition-transform">
      👁
    </button>
  </div>
  
  {# Image #}
  <a href="{{ url }}" class="block aspect-square overflow-hidden">
    {% if content.field_images.0 %}
      <img 
        src="{{ file_url(node.field_images.0.entity.fileuri) }}"
        alt="{{ node.field_images.0.alt }}"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      >
    {% else %}
      <div class="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
        No image
      </div>
    {% endif %}
  </a>
  
  {# Info #}
  <div class="card-body flex flex-col">
    
    {# Brand #}
    {% if node.field_brand.entity %}
      <span class="text-xs uppercase tracking-wider text-gray-500">
        {{ node.field_brand.entity.label }}
      </span>
    {% endif %}
    
    {# Title #}
    <h3 class="font-semibold text-gray-900 line-clamp-2 mt-1">
      <a href="{{ url }}" class="hover:text-primary transition-colors">
        {{ label }}
      </a>
    </h3>
    
    {# Price #}
    <div class="mt-auto pt-2">
      {% if is_on_sale and old_price %}
        <span class="text-sm text-gray-500 line-through mr-2">{{ old_price }}</span>
        <span class="text-lg font-bold text-danger">{{ formatted_price }}</span>
      {% else %}
        <span class="text-lg font-bold text-gray-900">{{ formatted_price }}</span>
      {% endif %}
    </div>
    
    {# Colors #}
    {% if node.field_colors|length > 0 %}
      <div class="flex gap-1 mt-2">
        {% for color in node.field_colors|slice(0, 5) %}
          <span 
            class="w-4 h-4 rounded-full border border-gray-200"
            style="background-color: {{ color.entity.field_color_code.value }}"
            title="{{ color.entity.label }}"
          ></span>
        {% endfor %}
        {% if node.field_colors|length > 5 %}
          <span class="text-xs text-gray-500 self-center">+{{ node.field_colors|length - 5 }}</span>
        {% endif %}
      </div>
    {% endif %}
    
  </div>
  
  {# Add to cart button #}
  <div class="p-4 pt-0">
    <button 
      class="btn btn-primary w-full"
      data-product-id="{{ node.id }}"
      {% if not in_stock %}disabled{% endif %}
    >
      {% if in_stock %}
        Ajouter au panier
      {% else %}
        Indisponible
      {% endif %}
    </button>
  </div>
  
</article>
```

## ⚙️ Workflow de développement

### Mode développement

<Tabs>
<TabItem label="Terminal 1 - Tailwind">

```bash
cd themes/custom/tailstore
npm run watch
```

</TabItem>
<TabItem label="Terminal 2 - DDEV">

```bash
ddev drush cr  # Après modification des templates
```

</TabItem>
</Tabs>

### Mode production

```bash
# Build minifié
npm run build

# Vérifier la taille
ls -lh css/dist/tailwind.css
```

## 🔧 Intégration avec le formulaire exposé Views

```twig
{# views-exposed-form.html.twig #}
<form{{ attributes.addClass('flex flex-wrap gap-4 p-4 bg-gray-50 rounded-lg mb-8') }}>
  
  {% for element in form %}
    {% if element['#type'] is defined and element['#type'] != 'hidden' %}
      <div class="flex-1 min-w-[150px]">
        {% if element['#title'] %}
          <label class="form-label">{{ element['#title'] }}</label>
        {% endif %}
        {{ element|merge({'#attributes': {'class': ['form-input']}}) }}
      </div>
    {% endif %}
  {% endfor %}
  
  <div class="flex gap-2 items-end">
    <button type="submit" class="btn btn-primary">
      Filtrer
    </button>
    {% if form['#info'] is defined and form['#info']['filter'] is defined %}
      <a href="{{ path('<current>') }}" class="btn btn-outline">
        Réinitialiser
      </a>
    {% endif %}
  </div>
  
</form>
```

## 📦 Optimisation production

### Purge CSS

Tailwind v4 purge automatiquement les classes non utilisées. Assurez-vous que tous les templates sont listés dans `content`.

### Vérifier les classes dynamiques

Si vous générez des classes dynamiquement, utilisez la syntaxe complète :

```twig
{# ❌ Ne fonctionne pas - classe coupée #}
<div class="bg-{{ color }}">

{# ✅ Fonctionne - classe complète dans le code #}
{% set color_classes = {
  'red': 'bg-red-500',
  'blue': 'bg-blue-500',
  'green': 'bg-green-500',
} %}
<div class="{{ color_classes[color] }}">
```

### Fichier de safelist (optionnel)

```javascript
// tailwind.config.js
export default {
  safelist: [
    'bg-red-500',
    'bg-blue-500',
    'text-green-600',
    // Classes générées dynamiquement
  ],
};
```

## ✅ Checklist

- [ ] Tailwind CSS v4 installé
- [ ] Fichier source `css/src/tailwind.css` créé
- [ ] @theme configuré avec les couleurs
- [ ] Scripts build/watch fonctionnels
- [ ] CSS compilé dans `css/dist/`
- [ ] Librairie déclarée dans libraries.yml
- [ ] Templates convertis avec classes Tailwind
- [ ] Build production testé

## 🔜 Prochaine étape

Tailwind est intégré ! Ajoutons maintenant [Alpine.js](/etape-6-theming/alpinejs/) pour les interactions.
