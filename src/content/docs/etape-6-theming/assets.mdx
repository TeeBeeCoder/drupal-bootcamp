---
title: Assets (CSS/JS)
description: Gérer les fichiers CSS et JavaScript dans un thème Drupal
sidebar:
  order: 3
---

import { Tabs, TabItem, Aside, Steps } from '@astrojs/starlight/components';

## 📚 Système de librairies

Drupal utilise un système de **librairies** pour gérer les assets CSS et JavaScript. Chaque librairie est déclarée dans le fichier `*.libraries.yml`.

### Avantages

- Chargement conditionnel
- Gestion des dépendances
- Agrégation et minification
- Cache optimisé

## 🎨 Déclarer des CSS

### Structure du fichier .libraries.yml

```yaml
# tailstore.libraries.yml

global:
  version: 1.0
  css:
    # Catégories (ordre de chargement)
    base:
      css/base/reset.css: {}
      css/base/typography.css: {}
    layout:
      css/layout/grid.css: {}
      css/layout/regions.css: {}
    component:
      css/components/buttons.css: {}
      css/components/cards.css: {}
      css/components/forms.css: {}
    theme:
      css/tailstore.css: {}
```

### Catégories CSS

| Catégorie | Poids | Usage |
|-----------|-------|-------|
| `base` | -200 | Reset, normalisation |
| `layout` | -100 | Grilles, mise en page |
| `component` | 0 | Composants |
| `state` | 100 | États (hover, active) |
| `theme` | 200 | Styles finaux, surcharges |

### Options CSS

```yaml
css:
  theme:
    css/style.css:
      weight: 10                    # Poids relatif
      media: screen                 # Media query
      preprocess: true              # Agrégation
      minified: false               # Déjà minifié
      attributes:
        crossorigin: anonymous
```

## 📜 Déclarer des JavaScript

```yaml
global:
  js:
    js/tailstore.js: {}
  dependencies:
    - core/drupal
    - core/once

cart:
  js:
    js/cart.js:
      attributes:
        defer: true
  dependencies:
    - core/drupalSettings
    - tailstore/global
```

### Options JavaScript

```yaml
js:
  js/script.js:
    weight: -10                    # Chargement prioritaire
    minified: true                 # Fichier déjà minifié
    preprocess: true               # Inclure dans l'agrégation
    attributes:
      defer: true                  # Attribut defer
      async: true                  # Attribut async
      type: module                 # ES modules
```

### Dépendances courantes

| Dépendance | Description |
|------------|-------------|
| `core/drupal` | Objet Drupal, behaviors |
| `core/once` | Helper pour exécuter une seule fois |
| `core/jquery` | jQuery (éviter si possible) |
| `core/drupalSettings` | Variables PHP → JS |

## 🔗 Attacher les librairies

### 1. Globalement (toutes les pages)

Dans `tailstore.info.yml` :

```yaml
libraries:
  - tailstore/global
```

### 2. Dans un template Twig

```twig
{{ attach_library('tailstore/slider') }}

<div class="slider">
  {# Contenu du slider #}
</div>
```

### 3. Dans un preprocess PHP

```php
function tailstore_preprocess_node(&$variables) {
  if ($variables['node']->bundle() === 'product') {
    $variables['#attached']['library'][] = 'tailstore/product';
  }
}
```

### 4. Dans un contrôleur/service

```php
public function build() {
  return [
    '#markup' => '<div class="my-component"></div>',
    '#attached' => [
      'library' => ['tailstore/component'],
      'drupalSettings' => [
        'tailstore' => [
          'apiUrl' => '/api/endpoint',
        ],
      ],
    ],
  ];
}
```

## 🌐 CDN et ressources externes

### Déclarer une librairie externe

```yaml
swiper:
  version: 11.0
  remote: https://swiperjs.com/
  license:
    name: MIT
    url: https://github.com/nolimits4web/swiper/blob/master/LICENSE
    gpl-compatible: true
  css:
    theme:
      https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css:
        type: external
        minified: true
  js:
    https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js:
      type: external
      minified: true
```

<Aside type="caution" title="Licence GPL">
Les librairies externes doivent être GPL-compatible pour être distribuées avec Drupal.
</Aside>

## 🔄 Surcharger des librairies

### libraries-override

Dans `tailstore.info.yml` :

```yaml
libraries-override:
  # Désactiver complètement une librairie
  core/normalize: false
  
  # Remplacer un fichier CSS
  core/drupal.vertical-tabs:
    css:
      component:
        misc/vertical-tabs.css: css/components/vertical-tabs.css
  
  # Remplacer par une librairie CDN
  core/jquery: tailstore/jquery-cdn
```

### libraries-extend

Ajouter des assets à une librairie existante :

```yaml
libraries-extend:
  core/ckeditor5:
    - tailstore/ckeditor-custom
```

## 💻 JavaScript moderne

### Drupal Behaviors

```javascript
// js/tailstore.js

(function (Drupal, once) {
  'use strict';

  /**
   * Product gallery behavior.
   */
  Drupal.behaviors.productGallery = {
    attach: function (context, settings) {
      // once() s'assure que le code ne s'exécute qu'une fois par élément
      once('product-gallery', '.product__gallery', context).forEach(function (gallery) {
        const thumbnails = gallery.querySelectorAll('.product__thumbnail');
        const mainImage = gallery.querySelector('.product__main-image img');

        thumbnails.forEach(function (thumb) {
          thumb.addEventListener('click', function () {
            const img = this.querySelector('img');
            mainImage.src = img.src;
            mainImage.alt = img.alt;

            // Active state
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
          });
        });
      });
    },
    
    detach: function (context, settings, trigger) {
      // Nettoyage si nécessaire (avant suppression AJAX)
      if (trigger === 'unload') {
        // Cleanup code
      }
    }
  };

  /**
   * Add to cart behavior.
   */
  Drupal.behaviors.addToCart = {
    attach: function (context, settings) {
      once('add-to-cart', '.product__add-to-cart', context).forEach(function (button) {
        button.addEventListener('click', function () {
          const productId = this.dataset.productId;
          const quantity = document.getElementById('quantity')?.value || 1;

          // Récupérer les options
          const size = document.querySelector('.size-btn.active')?.dataset.size;
          const color = document.querySelector('.color-btn.active')?.dataset.color;

          // Appel API ou action
          Drupal.tailstore.addToCart(productId, quantity, { size, color });
        });
      });
    }
  };

  /**
   * Namespace pour les fonctions TailStore.
   */
  Drupal.tailstore = {
    addToCart: function (productId, quantity, options) {
      console.log('Adding to cart:', productId, quantity, options);
      
      // Exemple avec fetch
      fetch('/api/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product_id: productId,
          quantity: quantity,
          options: options,
        }),
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // Mettre à jour l'icône panier
          document.dispatchEvent(new CustomEvent('cart-updated', {
            detail: data.cart
          }));
          
          // Notification
          Drupal.announce(Drupal.t('Product added to cart'));
        }
      });
    }
  };

})(Drupal, once);
```

### Utiliser drupalSettings

**PHP (dans .theme ou module) :**

```php
function tailstore_preprocess_page(&$variables) {
  $variables['#attached']['drupalSettings']['tailstore'] = [
    'cartApiUrl' => '/api/cart',
    'currency' => '€',
    'locale' => 'fr-FR',
  ];
}
```

**JavaScript :**

```javascript
(function (Drupal, drupalSettings) {
  const config = drupalSettings.tailstore;
  
  console.log('API URL:', config.cartApiUrl);
  console.log('Currency:', config.currency);
})(Drupal, drupalSettings);
```

## 📦 CSS Composants

### css/components/buttons.css

```css
/* Variables boutons */
:root {
  --btn-padding-x: 1rem;
  --btn-padding-y: 0.5rem;
  --btn-border-radius: 0.375rem;
  --btn-font-weight: 600;
  --btn-transition: all 0.2s ease;
}

/* Base button */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: var(--btn-padding-y) var(--btn-padding-x);
  font-weight: var(--btn-font-weight);
  text-align: center;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: var(--btn-border-radius);
  cursor: pointer;
  transition: var(--btn-transition);
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Variantes */
.btn--primary {
  background-color: var(--color-primary);
  color: white;
}

.btn--primary:hover:not(:disabled) {
  background-color: var(--color-primary-dark);
}

.btn--secondary {
  background-color: var(--color-secondary);
  color: white;
}

.btn--outline {
  background-color: transparent;
  border-color: currentColor;
}

.btn--outline:hover:not(:disabled) {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  color: white;
}

/* Tailles */
.btn--sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}

.btn--lg {
  padding: 0.75rem 1.5rem;
  font-size: 1.125rem;
}

.btn--full {
  width: 100%;
}
```

### css/components/cards.css

```css
/* Product Card */
.product-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.product-card__badges {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  z-index: 10;
  display: flex;
  gap: 0.25rem;
}

.product-card__image-link {
  display: block;
  aspect-ratio: 1;
  overflow: hidden;
}

.product-card__image-link img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.product-card:hover .product-card__image-link img {
  transform: scale(1.05);
}

.product-card__quick-actions {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  opacity: 0;
  transform: translateX(10px);
  transition: opacity 0.2s, transform 0.2s;
}

.product-card:hover .product-card__quick-actions {
  opacity: 1;
  transform: translateX(0);
}

.product-card__info {
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.product-card__brand {
  font-size: 0.75rem;
  color: var(--color-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.product-card__title {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.3;
}

.product-card__title a {
  color: inherit;
  text-decoration: none;
}

.product-card__title a:hover {
  color: var(--color-primary);
}

.product-card__price {
  margin-top: auto;
  padding-top: 0.5rem;
}

.price--current {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-dark);
}

.price--sale {
  color: var(--color-danger);
}

.price--old {
  font-size: 0.875rem;
  color: var(--color-secondary);
  text-decoration: line-through;
  margin-right: 0.5rem;
}

.product-card__colors {
  display: flex;
  gap: 0.25rem;
  margin-top: 0.5rem;
}

.color-dot {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.product-card__add-to-cart {
  margin: 1rem;
  margin-top: 0;
}
```

## 🔧 Vérifier le chargement

```bash
# Mode développement
drush state:set system.performance css_preprocess 0
drush state:set system.performance js_preprocess 0
drush cr

# Mode production
drush state:set system.performance css_preprocess 1
drush state:set system.performance js_preprocess 1
drush cr
```

Inspectez le code source HTML pour voir les fichiers chargés.

## ✅ Checklist

- [ ] Librairie `global` déclarée et attachée
- [ ] CSS organisés par catégories
- [ ] JavaScript avec Drupal.behaviors
- [ ] Dépendances correctement déclarées
- [ ] Librairies externes (CDN) configurées
- [ ] drupalSettings utilisé si nécessaire
- [ ] Librairies testées en dev et prod

## 🔜 Prochaine étape

Les assets sont configurés ! Passons à l'intégration de [Tailwind CSS](/etape-6-theming/tailwind/).
