---
title: htmx
description: Intégrer htmx pour des interactions dynamiques sans JavaScript complexe
sidebar:
  order: 5
---

import { Tabs, TabItem, Aside, Steps } from '@astrojs/starlight/components';

## 🎯 Qu'est-ce que htmx ?

**htmx** permet d'ajouter des comportements AJAX directement dans le HTML :

```html
<button 
  hx-post="/cart/add/42"
  hx-target="#cart-count"
  hx-swap="innerHTML"
>
  Ajouter au panier
</button>
```

<Aside type="tip" title="Avantages">
- **Pas de JavaScript** à écrire
- **Déclaratif** : comportement dans le HTML
- **Léger** : ~14kb gzipped
- **Compatible** avec tout backend
</Aside>

## 📦 Installation

### Déclarer la librairie

```yaml
# tailstore_cart.libraries.yml
htmx:
  version: 2.0
  js:
    https://unpkg.com/htmx.org@2.0.4/dist/htmx.min.js:
      type: external
      minified: true
      attributes:
        defer: true

# Ou en local
htmx_local:
  version: 2.0
  js:
    js/vendor/htmx.min.js: { minified: true }
```

### Attacher sur toutes les pages

```php
// tailstore_cart.module

/**
 * Implements hook_page_attachments().
 */
function tailstore_cart_page_attachments(array &$attachments): void {
  $attachments['#attached']['library'][] = 'tailstore_cart/htmx';
}
```

## 🛒 Bouton "Ajouter au panier"

### Template Twig

```twig
{# templates/add-to-cart.html.twig #}
<button 
  class="btn btn-primary"
  hx-post="/cart/add/{{ product_id }}"
  hx-target="#mini-cart"
  hx-swap="innerHTML"
  hx-indicator="#cart-loading"
  hx-vals='{"quantity": 1}'
>
  <span class="htmx-indicator" id="cart-loading">
    <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24">...</svg>
  </span>
  <span>Ajouter au panier</span>
</button>
```

### Controller

```php
<?php

namespace Drupal\tailstore_cart\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class CartController extends ControllerBase {

  /**
   * Add product to cart (htmx endpoint).
   */
  public function add(int $product_id, Request $request): Response {
    $quantity = (int) $request->request->get('quantity', 1);
    
    $this->cartService->add($product_id, $quantity);
    
    // Détecter requête htmx
    if ($request->headers->has('HX-Request')) {
      return $this->renderMiniCart();
    }
    
    // Fallback JSON pour JS classique
    return new JsonResponse([
      'success' => TRUE,
      'count' => $this->cartService->getCount(),
    ]);
  }

  /**
   * Render mini-cart HTML fragment.
   */
  private function renderMiniCart(): Response {
    $build = [
      '#theme' => 'mini_cart',
      '#count' => $this->cartService->getCount(),
      '#total' => $this->cartService->getTotal(),
      '#items' => $this->cartService->getItems(),
    ];

    $html = \Drupal::service('renderer')->renderRoot($build);
    
    $response = new Response($html);
    // Headers htmx optionnels
    $response->headers->set('HX-Trigger', 'cartUpdated');
    
    return $response;
  }
}
```

## 📊 Attributs htmx essentiels

### Requêtes

| Attribut | Description |
|----------|-------------|
| `hx-get` | Requête GET |
| `hx-post` | Requête POST |
| `hx-put` | Requête PUT |
| `hx-patch` | Requête PATCH |
| `hx-delete` | Requête DELETE |

### Ciblage

| Attribut | Description |
|----------|-------------|
| `hx-target` | Élément à mettre à jour |
| `hx-swap` | Comment remplacer le contenu |
| `hx-select` | Sélectionner une partie de la réponse |

### Modes de swap

| Valeur | Description |
|--------|-------------|
| `innerHTML` | Remplace le contenu (défaut) |
| `outerHTML` | Remplace tout l'élément |
| `beforebegin` | Avant l'élément |
| `afterbegin` | Au début du contenu |
| `beforeend` | À la fin du contenu |
| `afterend` | Après l'élément |
| `delete` | Supprime l'élément |
| `none` | Pas de swap |

### Autres

| Attribut | Description |
|----------|-------------|
| `hx-trigger` | Événement déclencheur |
| `hx-indicator` | Élément loading |
| `hx-vals` | Valeurs à envoyer (JSON) |
| `hx-confirm` | Demander confirmation |
| `hx-push-url` | Mettre à jour l'URL |

## 🔄 Mini-cart dynamique

### Template

```twig
{# templates/mini-cart.html.twig #}
<div id="mini-cart" class="relative" hx-get="/cart/mini" hx-trigger="cartUpdated from:body">
  
  {# Icône panier #}
  <button 
    class="p-2 relative"
    hx-get="/cart/dropdown"
    hx-target="#cart-dropdown"
    hx-swap="innerHTML"
    hx-trigger="click"
  >
    <svg class="w-6 h-6">...</svg>
    
    {% if count > 0 %}
      <span class="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center">
        {{ count }}
      </span>
    {% endif %}
  </button>
  
  {# Dropdown #}
  <div id="cart-dropdown" class="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl hidden">
    {# Chargé dynamiquement #}
  </div>
  
</div>
```

### Dropdown content

```twig
{# templates/cart-dropdown.html.twig #}
<div class="p-4">
  {% if items is empty %}
    <p class="text-center text-gray-500 py-4">Votre panier est vide</p>
  {% else %}
    <ul class="divide-y max-h-64 overflow-y-auto">
      {% for item in items %}
        <li class="py-3 flex gap-3" id="cart-item-{{ item.product.id }}">
          <img src="{{ item.product.field_images.0.entity.uri.value|image_style('thumbnail') }}" 
               class="w-16 h-16 object-cover rounded">
          
          <div class="flex-1 min-w-0">
            <p class="font-medium truncate">{{ item.product.label }}</p>
            <p class="text-sm text-gray-500">
              {{ item.quantity }} × {{ item.price|number_format(2, ',', ' ') }} €
            </p>
          </div>
          
          <button 
            class="text-gray-400 hover:text-red-500"
            hx-delete="/cart/remove/{{ item.product.id }}"
            hx-target="#cart-item-{{ item.product.id }}"
            hx-swap="outerHTML"
            hx-confirm="Supprimer cet article ?"
          >
            ✕
          </button>
        </li>
      {% endfor %}
    </ul>
    
    <div class="border-t pt-4 mt-4">
      <div class="flex justify-between font-bold mb-4">
        <span>Total</span>
        <span>{{ total|number_format(2, ',', ' ') }} €</span>
      </div>
      
      <a href="/checkout" class="btn btn-primary w-full">
        Commander
      </a>
    </div>
  {% endif %}
</div>
```

## 📝 Mise à jour de quantité

### Template ligne panier

```twig
{# templates/cart-item.html.twig #}
<tr id="cart-item-{{ product.id }}" class="border-b">
  <td class="py-4">
    <div class="flex items-center gap-4">
      <img src="{{ product.field_images.0.entity.uri.value|image_style('thumbnail') }}" 
           class="w-20 h-20 object-cover rounded">
      <div>
        <h3 class="font-medium">{{ product.label }}</h3>
        <p class="text-sm text-gray-500">{{ product.field_sku.value }}</p>
      </div>
    </div>
  </td>
  
  <td class="py-4">
    {{ price|number_format(2, ',', ' ') }} €
  </td>
  
  <td class="py-4">
    <div class="flex items-center border rounded-lg overflow-hidden w-fit">
      <button 
        class="px-3 py-2 bg-gray-100 hover:bg-gray-200"
        hx-patch="/cart/update/{{ product.id }}"
        hx-target="#cart-item-{{ product.id }}"
        hx-swap="outerHTML"
        hx-vals='{"quantity": {{ quantity - 1 }}}'
        {% if quantity <= 1 %}disabled{% endif %}
      >−</button>
      
      <input 
        type="number" 
        value="{{ quantity }}"
        min="1"
        class="w-16 text-center border-0"
        hx-patch="/cart/update/{{ product.id }}"
        hx-target="#cart-item-{{ product.id }}"
        hx-swap="outerHTML"
        hx-trigger="change"
        hx-include="this"
        name="quantity"
      >
      
      <button 
        class="px-3 py-2 bg-gray-100 hover:bg-gray-200"
        hx-patch="/cart/update/{{ product.id }}"
        hx-target="#cart-item-{{ product.id }}"
        hx-swap="outerHTML"
        hx-vals='{"quantity": {{ quantity + 1 }}}'
      >+</button>
    </div>
  </td>
  
  <td class="py-4 font-bold">
    {{ subtotal|number_format(2, ',', ' ') }} €
  </td>
  
  <td class="py-4">
    <button 
      class="text-red-500 hover:text-red-700"
      hx-delete="/cart/remove/{{ product.id }}"
      hx-target="#cart-item-{{ product.id }}"
      hx-swap="outerHTML swap:0.3s"
      hx-confirm="Supprimer cet article ?"
    >
      Supprimer
    </button>
  </td>
</tr>
```

## 🔔 Events et triggers

### Déclencher un event depuis le serveur

```php
$response = new Response($html);
$response->headers->set('HX-Trigger', 'cartUpdated');
return $response;
```

### Écouter dans le HTML

```html
<div hx-trigger="cartUpdated from:body" hx-get="/cart/total" hx-target="#cart-total">
  <!-- Met à jour le total quand cartUpdated est déclenché -->
</div>
```

### Events multiples

```php
$response->headers->set('HX-Trigger', json_encode([
  'cartUpdated' => null,
  'showToast' => ['message' => 'Produit ajouté !', 'type' => 'success'],
]));
```

### Écouter avec JavaScript

```javascript
document.body.addEventListener('showToast', function(event) {
  const { message, type } = event.detail;
  showToast(message, type);
});
```

## 🔒 Sécurité CSRF

### Générer le token

```php
// Dans un preprocess ou controller
$token = \Drupal::csrfToken()->get('tailstore_cart');
```

### Inclure dans les requêtes

```html
<meta name="csrf-token" content="{{ csrf_token }}">

<script>
  document.body.addEventListener('htmx:configRequest', function(event) {
    event.detail.headers['X-CSRF-Token'] = document.querySelector('meta[name="csrf-token"]').content;
  });
</script>
```

### Valider côté serveur

```php
public function add(int $product_id, Request $request): Response {
  $token = $request->headers->get('X-CSRF-Token');
  
  if (!\Drupal::csrfToken()->validate($token, 'tailstore_cart')) {
    throw new AccessDeniedHttpException('Invalid CSRF token');
  }
  
  // ... suite
}
```

## 📊 Indicateurs de chargement

### CSS pour htmx

```css
/* Indicateur de chargement */
.htmx-indicator {
  display: none;
}

.htmx-request .htmx-indicator {
  display: inline-block;
}

.htmx-request.htmx-indicator {
  display: inline-block;
}

/* Opacity pendant le chargement */
.htmx-request {
  opacity: 0.5;
  pointer-events: none;
}
```

### Spinner SVG

```twig
<span class="htmx-indicator">
  <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
</span>
```

## 🧪 Debug htmx

### Activer les logs

```javascript
htmx.logAll();
```

### Extension de debug

```html
<script src="https://unpkg.com/htmx.org/dist/ext/debug.js"></script>
<div hx-ext="debug">
  <!-- Contenu avec debug -->
</div>
```

## ✅ Checklist

- [ ] htmx installé et chargé
- [ ] Bouton ajout panier fonctionnel
- [ ] Mini-cart mis à jour dynamiquement
- [ ] Mise à jour quantités en temps réel
- [ ] Suppression avec confirmation
- [ ] Token CSRF configuré
- [ ] Indicateurs de chargement

## 🔜 Prochaine étape

htmx est intégré ! Finalisons avec [Stripe Checkout](/etape-8-developpement/stripe/).
