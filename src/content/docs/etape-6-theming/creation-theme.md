---
title: Créer un thème
description: Structure et fichiers de base d'un thème Drupal personnalisé
sidebar:
  order: 1
---

import { Tabs, TabItem, Aside, Steps, FileTree } from '@astrojs/starlight/components';

## 📁 Emplacement des thèmes

Les thèmes personnalisés se placent dans :

```
drupal/
├── core/
│   └── themes/           # Thèmes du core (ne pas modifier)
│       ├── olivero/
│       ├── claro/
│       └── stark/
├── themes/
│   └── custom/           # Vos thèmes personnalisés
│       └── tailstore/    # Notre thème
└── sites/
```

## 🏗️ Créer la structure

<Steps>

1. Créez le dossier du thème

```bash
mkdir -p themes/custom/tailstore
cd themes/custom/tailstore
```

2. Créez les sous-dossiers

```bash
mkdir -p css/{base,components,layout}
mkdir -p js
mkdir -p images
mkdir -p templates/{layout,block,node,field,views,misc}
mkdir -p config/install
```

</Steps>

### Structure finale

<FileTree>
- tailstore/
  - tailstore.info.yml
  - tailstore.libraries.yml
  - tailstore.theme
  - tailstore.breakpoints.yml
  - css/
    - base/
    - components/
    - layout/
    - tailstore.css
  - js/
    - tailstore.js
  - images/
    - logo.svg
  - templates/
    - layout/
    - block/
    - node/
    - field/
    - views/
    - misc/
</FileTree>

## 📄 Fichier .info.yml

Le fichier **tailstore.info.yml** est obligatoire et déclare le thème :

```yaml
# tailstore.info.yml
name: TailStore
type: theme
description: 'Thème e-commerce moderne pour la boutique TailStore'
package: Custom
core_version_requirement: ^10 || ^11

# Thème parent (héritage)
base theme: false
# Ou hériter d'un thème : base theme: olivero

# Logo et screenshot
logo: images/logo.svg
screenshot: screenshot.png

# Régions du thème
regions:
  header: 'Header'
  primary_menu: 'Primary menu'
  secondary_menu: 'Secondary menu'
  highlighted: 'Highlighted'
  help: 'Help'
  breadcrumb: 'Breadcrumb'
  content: 'Content'
  sidebar: 'Sidebar'
  content_below: 'Content below'
  footer_top: 'Footer top'
  footer_bottom: 'Footer bottom'

# Librairies attachées globalement
libraries:
  - tailstore/global

# Formulaires de configuration du thème
ckeditor5-stylesheets:
  - css/ckeditor.css

# Configuration par défaut
libraries-override: {}
libraries-extend: {}
```

<Aside type="tip" title="core_version_requirement">
Utilisez `^10 || ^11` pour supporter Drupal 10 et 11.
</Aside>

## 📚 Fichier .libraries.yml

Le fichier **tailstore.libraries.yml** déclare les CSS et JS :

```yaml
# tailstore.libraries.yml

# Librairie globale (chargée sur toutes les pages)
global:
  version: 1.0
  css:
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
      css/components/navigation.css: {}
    theme:
      css/tailstore.css: {}
  js:
    js/tailstore.js: {}
  dependencies:
    - core/drupal
    - core/once

# Librairie spécifique pour le slider
slider:
  version: 1.0
  css:
    component:
      css/components/slider.css: {}
  js:
    js/slider.js: {}
  dependencies:
    - tailstore/global
    - core/once

# Librairie pour le panier
cart:
  version: 1.0
  js:
    js/cart.js: { attributes: { defer: true } }
  dependencies:
    - tailstore/global
    - core/drupalSettings

# CDN externes
swiper:
  version: 11.0
  remote: https://swiperjs.com/
  license:
    name: MIT
    url: https://github.com/nolimits4web/swiper/blob/master/LICENSE
    gpl-compatible: true
  css:
    theme:
      https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css: { type: external, minified: true }
  js:
    https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js: { type: external, minified: true }

# Alpine.js
alpine:
  version: 3.x
  remote: https://alpinejs.dev/
  license:
    name: MIT
    url: https://github.com/alpinejs/alpine/blob/main/LICENSE.md
    gpl-compatible: true
  js:
    https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js: { type: external, attributes: { defer: true } }
```

<Aside type="note" title="Poids des CSS">
L'ordre de chargement dépend de la catégorie :
1. `base` - Reset, normalisation
2. `layout` - Structure, grille
3. `component` - Composants individuels
4. `state` - États (hover, active...)
5. `theme` - Styles finaux, surcharges
</Aside>

## 🐘 Fichier .theme

Le fichier **tailstore.theme** contient les fonctions PHP :

```php
<?php

/**
 * @file
 * Functions to support theming in the TailStore theme.
 */

use Drupal\Core\Form\FormStateInterface;

/**
 * Implements hook_preprocess_HOOK() for html.html.twig.
 */
function tailstore_preprocess_html(&$variables) {
  // Ajouter des classes au body
  $variables['attributes']['class'][] = 'tailstore-theme';
  
  // Ajouter une classe pour les pages produit
  $node = \Drupal::routeMatch()->getParameter('node');
  if ($node && $node->bundle() === 'product') {
    $variables['attributes']['class'][] = 'page-product';
  }
}

/**
 * Implements hook_preprocess_HOOK() for page.html.twig.
 */
function tailstore_preprocess_page(&$variables) {
  // Charger la librairie slider sur la page d'accueil
  if (\Drupal::service('path.matcher')->isFrontPage()) {
    $variables['#attached']['library'][] = 'tailstore/slider';
    $variables['#attached']['library'][] = 'tailstore/swiper';
  }
}

/**
 * Implements hook_preprocess_HOOK() for node.html.twig.
 */
function tailstore_preprocess_node(&$variables) {
  /** @var \Drupal\node\NodeInterface $node */
  $node = $variables['node'];
  
  // Variables personnalisées pour les produits
  if ($node->bundle() === 'product') {
    // Formater le prix
    if ($node->hasField('field_price') && !$node->get('field_price')->isEmpty()) {
      $variables['formatted_price'] = number_format(
        $node->get('field_price')->value,
        2,
        ',',
        ' '
      ) . ' €';
    }
    
    // Vérifier le stock
    if ($node->hasField('field_stock')) {
      $variables['in_stock'] = $node->get('field_stock')->value > 0;
    }
    
    // Prix barré si promo
    if ($node->hasField('field_old_price') && !$node->get('field_old_price')->isEmpty()) {
      $variables['old_price'] = number_format(
        $node->get('field_old_price')->value,
        2,
        ',',
        ' '
      ) . ' €';
      $variables['is_on_sale'] = TRUE;
    }
  }
}

/**
 * Implements hook_preprocess_HOOK() for field.html.twig.
 */
function tailstore_preprocess_field(&$variables) {
  $field_name = $variables['field_name'];
  
  // Ajouter une classe spécifique pour le prix
  if ($field_name === 'field_price') {
    $variables['attributes']['class'][] = 'product-price';
  }
}

/**
 * Implements hook_form_alter().
 */
function tailstore_form_alter(&$form, FormStateInterface $form_state, $form_id) {
  // Personnaliser le formulaire de recherche
  if ($form_id === 'search_block_form') {
    $form['keys']['#attributes']['placeholder'] = t('Rechercher...');
    $form['keys']['#attributes']['class'][] = 'search-input';
  }
  
  // Personnaliser les filtres exposés
  if (strpos($form_id, 'views_exposed_form') === 0) {
    $form['#attributes']['class'][] = 'filters-form';
  }
}

/**
 * Implements hook_theme_suggestions_HOOK_alter() for node.
 */
function tailstore_theme_suggestions_node_alter(array &$suggestions, array $variables) {
  /** @var \Drupal\node\NodeInterface $node */
  $node = $variables['elements']['#node'];
  $view_mode = $variables['elements']['#view_mode'];
  
  // Ajouter une suggestion basée sur un champ
  if ($node->bundle() === 'product' && $node->hasField('field_featured')) {
    if ($node->get('field_featured')->value) {
      $suggestions[] = 'node__product__featured';
      $suggestions[] = 'node__product__' . $view_mode . '__featured';
    }
  }
}
```

## 📐 Fichier .breakpoints.yml

Le fichier **tailstore.breakpoints.yml** définit les points de rupture responsive :

```yaml
# tailstore.breakpoints.yml

tailstore.mobile:
  label: Mobile
  mediaQuery: ''
  weight: 0
  multipliers:
    - 1x
    - 2x

tailstore.narrow:
  label: Narrow
  mediaQuery: 'all and (min-width: 560px)'
  weight: 1
  multipliers:
    - 1x
    - 2x

tailstore.medium:
  label: Medium
  mediaQuery: 'all and (min-width: 768px)'
  weight: 2
  multipliers:
    - 1x
    - 2x

tailstore.wide:
  label: Wide
  mediaQuery: 'all and (min-width: 1024px)'
  weight: 3
  multipliers:
    - 1x
    - 2x

tailstore.extra_wide:
  label: Extra Wide
  mediaQuery: 'all and (min-width: 1280px)'
  weight: 4
  multipliers:
    - 1x
    - 2x
```

## ✅ Activer le thème

### Via l'interface

1. **Appearance** (`/admin/appearance`)
2. Trouvez "TailStore" dans la liste
3. Cliquez sur **Install and set as default**

### Via Drush

```bash
# Activer le thème
drush theme:enable tailstore

# Définir comme thème par défaut
drush config:set system.theme default tailstore -y

# Vider le cache
drush cr
```

## 🎨 CSS de base

### css/base/reset.css

```css
/* Reset moderne */
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}
```

### css/base/typography.css

```css
/* Variables de typographie */
:root {
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'Fira Code', monospace;
  
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 2rem;
  --text-4xl: 2.5rem;
}

body {
  font-family: var(--font-sans);
  font-size: var(--text-base);
  color: var(--color-dark, #1a1a2e);
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
  line-height: 1.2;
}

h1 { font-size: var(--text-4xl); }
h2 { font-size: var(--text-3xl); }
h3 { font-size: var(--text-2xl); }
h4 { font-size: var(--text-xl); }

a {
  color: var(--color-primary, #0073e6);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
```

## 🖼️ Logo

Placez votre logo dans `images/logo.svg` ou configurez-le via :

1. **Appearance** → **Settings** → **TailStore**
2. Section **Logo image**
3. Uploadez ou spécifiez le chemin

## 💾 Vérifier l'installation

```bash
# Vérifier que le thème est actif
drush config:get system.theme default

# Devrait retourner : 'tailstore'

# Vider le cache
drush cr

# Visitez le site pour voir le thème
```

## ✅ Checklist

- [ ] Dossier `themes/custom/tailstore` créé
- [ ] `tailstore.info.yml` configuré
- [ ] `tailstore.libraries.yml` avec librairie global
- [ ] `tailstore.theme` avec hooks de base
- [ ] `tailstore.breakpoints.yml` pour le responsive
- [ ] CSS de base (reset, typography)
- [ ] Thème activé et défini par défaut
- [ ] Site accessible avec le nouveau thème

## 🔜 Prochaine étape

Le thème est créé ! Passons aux [Templates Twig](/etape-6-theming/twig/).
