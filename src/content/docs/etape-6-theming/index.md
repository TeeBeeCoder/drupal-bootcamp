---
title: Étape 6 - Theming Drupal
description: Créer un thème personnalisé avec Twig, CSS et JavaScript
sidebar:
  order: 0
---

import { Card, CardGrid } from '@astrojs/starlight/components';

<div class="duration-badge">⏱️ Durée estimée : 5h</div>

## 🎯 Objectifs de cette étape

À la fin de cette étape, vous serez capable de :

- ✅ Créer un thème personnalisé Drupal
- ✅ Comprendre le système de templates Twig
- ✅ Personnaliser l'affichage du contenu
- ✅ Ajouter des CSS et JavaScript au thème
- ✅ Intégrer Tailwind CSS dans Drupal
- ✅ Utiliser Alpine.js pour les interactions

## 📋 Prérequis

- [x] Étape 5 terminée
- [x] Connaissance de base en HTML/CSS
- [x] Template TailStore analysé (Étape 1)

## 📚 Sommaire

<CardGrid>
  <Card title="1. Créer un thème" icon="setting">
    Structure et fichiers de base d'un thème.
    [Voir →](/etape-6-theming/creation-theme/)
  </Card>
  <Card title="2. Templates Twig" icon="document">
    Personnaliser l'affichage avec Twig.
    [Voir →](/etape-6-theming/twig/)
  </Card>
  <Card title="3. Assets (CSS/JS)" icon="puzzle">
    Ajouter des librairies CSS et JavaScript.
    [Voir →](/etape-6-theming/assets/)
  </Card>
  <Card title="4. Tailwind CSS" icon="seti:css">
    Intégrer Tailwind CSS v4 dans Drupal.
    [Voir →](/etape-6-theming/tailwind/)
  </Card>
  <Card title="5. Alpine.js" icon="rocket">
    Ajouter des interactions dynamiques.
    [Voir →](/etape-6-theming/alpinejs/)
  </Card>
</CardGrid>

## 🏗️ Architecture du thème TailStore

### Structure de fichiers

```
themes/custom/tailstore/
├── tailstore.info.yml          # Déclaration du thème
├── tailstore.libraries.yml      # CSS et JS
├── tailstore.theme              # Fonctions PHP
├── tailstore.breakpoints.yml    # Points de rupture responsive
│
├── css/
│   ├── base/
│   │   ├── reset.css
│   │   └── typography.css
│   ├── components/
│   │   ├── buttons.css
│   │   ├── cards.css
│   │   ├── forms.css
│   │   └── navigation.css
│   ├── layout/
│   │   ├── grid.css
│   │   └── regions.css
│   └── tailstore.css            # Import principal
│
├── js/
│   ├── tailstore.js             # Scripts principaux
│   ├── cart.js                  # Panier
│   └── slider.js                # Carousel
│
├── images/
│   ├── logo.svg
│   └── icons/
│
├── templates/
│   ├── layout/
│   │   ├── page.html.twig
│   │   └── region.html.twig
│   ├── block/
│   │   ├── block.html.twig
│   │   └── block--system-branding-block.html.twig
│   ├── node/
│   │   ├── node.html.twig
│   │   ├── node--product.html.twig
│   │   ├── node--product--teaser.html.twig
│   │   └── node--product--card.html.twig
│   ├── field/
│   │   └── field--field-price.html.twig
│   ├── views/
│   │   └── views-view--products-catalog.html.twig
│   └── misc/
│       ├── pager.html.twig
│       └── breadcrumb.html.twig
│
└── config/
    └── install/
        └── tailstore.settings.yml
```

## 🎨 Design System TailStore

### Couleurs

| Variable | Hex | Usage |
|----------|-----|-------|
| `--color-primary` | `#0073e6` | Actions principales |
| `--color-secondary` | `#6c757d` | Actions secondaires |
| `--color-success` | `#28a745` | Succès, en stock |
| `--color-warning` | `#ffc107` | Alertes |
| `--color-danger` | `#dc3545` | Erreurs, soldes |
| `--color-dark` | `#1a1a2e` | Texte principal |
| `--color-light` | `#f8f9fa` | Arrière-plans |

### Typographie

| Élément | Font | Size | Weight |
|---------|------|------|--------|
| H1 | Inter | 2.5rem | 700 |
| H2 | Inter | 2rem | 600 |
| H3 | Inter | 1.5rem | 600 |
| Body | Inter | 1rem | 400 |
| Small | Inter | 0.875rem | 400 |
| Price | Inter | 1.25rem | 700 |

### Espacements

```css
--spacing-xs: 0.25rem;  /* 4px */
--spacing-sm: 0.5rem;   /* 8px */
--spacing-md: 1rem;     /* 16px */
--spacing-lg: 1.5rem;   /* 24px */
--spacing-xl: 2rem;     /* 32px */
--spacing-2xl: 3rem;    /* 48px */
```

## 🔄 Workflow de développement

### Mode développement

```bash
# Désactiver le cache pour le développement
drush state:set system.performance css_preprocess 0 --input-format=string
drush state:set system.performance js_preprocess 0 --input-format=string

# Activer le débogage Twig
# Dans sites/default/services.yml :
# twig.config:
#   debug: true
#   cache: false

# Vider le cache
drush cr
```

### Rafraîchir après modification

```bash
# Cache des templates
drush cr

# Cache des CSS (si agrégation activée)
drush cc css-js
```

## 🛠️ Outils recommandés

### Extensions VS Code

- **Drupal Syntax Highlighting**
- **Twig Language 2**
- **Tailwind CSS IntelliSense**
- **Alpine.js IntelliSense**

### Inspection du DOM

1. Activez le débogage Twig
2. Inspectez le HTML source pour voir :
   - Les suggestions de templates
   - Les variables disponibles
   - Les chemins des fichiers

```html
<!-- THEME DEBUG -->
<!-- THEME HOOK: 'node' -->
<!-- FILE NAME SUGGESTIONS:
   * node--product--full.html.twig
   * node--product.html.twig
   * node--1.html.twig
   * node.html.twig
-->
<!-- BEGIN OUTPUT from 'themes/custom/tailstore/templates/node/node--product.html.twig' -->
```

## 📊 Composants à créer

### Pages

| Page | Template | Description |
|------|----------|-------------|
| Homepage | `page--front.html.twig` | Slider + produits + blog |
| Shop | `page--shop.html.twig` | Catalogue avec sidebar |
| Product | `node--product--full.html.twig` | Fiche produit |
| Cart | `page--cart.html.twig` | Panier |
| Blog | `page--blog.html.twig` | Liste articles |

### Composants

| Composant | Template/CSS | Description |
|-----------|--------------|-------------|
| Product Card | `node--product--card.html.twig` | Carte produit grille |
| Product Teaser | `node--product--teaser.html.twig` | Produit sidebar |
| Hero Slider | `block--hero-banner.html.twig` | Carousel homepage |
| Mega Menu | `menu--main.html.twig` | Navigation |
| Cart Icon | `block--cart-summary.html.twig` | Icône panier |

## 🚀 C'est parti !

Commencez par [Créer le thème](/etape-6-theming/creation-theme/).
