---
title: Metatag
description: Optimiser le SEO avec les métadonnées Open Graph et Twitter Cards
sidebar:
  order: 3
---

import { Tabs, TabItem, Aside, Steps } from '@astrojs/starlight/components';

## 🎯 Qu'est-ce que Metatag ?

**Metatag** permet de gérer les métadonnées pour :

- **SEO** : title, description, robots
- **Réseaux sociaux** : Open Graph (Facebook), Twitter Cards
- **Autres** : canonical, hreflang

<Aside type="tip" title="Impact SEO">
Les métadonnées bien configurées améliorent le référencement et l'apparence dans les partages sociaux.
</Aside>

## 📦 Installation

```bash
# Installer Metatag
ddev composer require drupal/metatag

# Activer les sous-modules
ddev drush en metatag metatag_open_graph metatag_twitter_cards -y
```

### Sous-modules disponibles

| Module | Description |
|--------|-------------|
| `metatag` | Module principal |
| `metatag_open_graph` | Facebook, LinkedIn |
| `metatag_twitter_cards` | Twitter/X |
| `metatag_verification` | Google Search Console |
| `metatag_google_cse` | Google Custom Search |

## ⚙️ Configuration globale

### Accès

**Configuration** → **Recherche et métadonnées** → **Metatag**

Ou : `/admin/config/search/metatag`

### Métadonnées par défaut (Global)

<Steps>

1. Cliquez sur **Global** → **Modifier**

2. Configurez les valeurs par défaut :

   **Basique**
   - **Titre de la page** : `[current-page:title] | [site:name]`
   - **Description** : `[site:slogan]`

   **Avancé**
   - **URL canonique** : `[current-page:url]`
   - **Robots** : index, follow

3. **Enregistrer**

</Steps>

## 📝 Configuration par type

### Produits

Allez dans **Contenu** → **Produit** → **Modifier** :

```yaml
# Basique
Titre: "[node:title] - [site:name]"
Description: "[node:field_description:summary]"

# Open Graph
og:type: "product"
og:title: "[node:title]"
og:description: "[node:field_description:summary]"
og:image: "[node:field_images:0:entity:url]"

# Twitter Cards
twitter:card: "summary_large_image"
twitter:title: "[node:title]"
twitter:description: "[node:field_description:summary]"
twitter:image: "[node:field_images:0:entity:url]"

# Produit
product:price:amount: "[node:field_price:value]"
product:price:currency: "EUR"
```

### Articles de blog

```yaml
# Basique
Titre: "[node:title] | Blog - [site:name]"
Description: "[node:body:summary]"

# Open Graph
og:type: "article"
og:title: "[node:title]"
og:description: "[node:body:summary]"
og:image: "[node:field_image:entity:url]"

# Article
article:published_time: "[node:created:html_datetime]"
article:modified_time: "[node:changed:html_datetime]"
article:author: "[node:author:display-name]"
```

### Catégories

```yaml
# Basique
Titre: "[term:name] - Catégories | [site:name]"
Description: "Découvrez nos [term:name] dans notre boutique."

# Open Graph
og:type: "website"
og:title: "[term:name]"
```

## 🖼️ Images Open Graph

### Dimensions recommandées

| Plateforme | Taille | Ratio |
|------------|--------|-------|
| Facebook | 1200×630 | 1.91:1 |
| Twitter | 1200×600 | 2:1 |
| LinkedIn | 1200×627 | 1.91:1 |

### Configuration dans Drupal

Créez un style d'image pour Open Graph :

<Steps>

1. **Configuration** → **Médias** → **Styles d'image**

2. **Ajouter un style d'image** : `open_graph`

3. Ajouter l'effet **Redimensionner et recadrer** :
   - Largeur : 1200
   - Hauteur : 630

4. Dans Metatag, référencez le style :
   ```
   [node:field_images:0:entity:url]
   ```

</Steps>

<Aside type="note" title="Fallback">
Créez une image par défaut pour les contenus sans image.
</Aside>

## 🔧 Métadonnées avancées

### Robots

Contrôlez l'indexation :

| Valeur | Effet |
|--------|-------|
| `index, follow` | Indexer, suivre liens |
| `noindex, follow` | Ne pas indexer |
| `noindex, nofollow` | Ignorer complètement |

### Canonical

Évitez le contenu dupliqué :

```
canonical: [current-page:url]
```

### Hreflang (multilingue)

Pour les sites multilingues :

```
hreflang: fr
```

## 🐦 Twitter Cards

### Types de cartes

| Type | Usage |
|------|-------|
| `summary` | Petit aperçu avec vignette |
| `summary_large_image` | Grande image en haut |
| `app` | Application mobile |
| `player` | Vidéo |

### Configuration site

```yaml
twitter:card: "summary_large_image"
twitter:site: "@votre_compte"
twitter:creator: "@votre_compte"
```

## 📊 Métadonnées Produit

### Schema.org Product

Installez le module Schema.org :

```bash
ddev composer require drupal/schema_metatag
ddev drush en schema_metatag schema_product -y
```

Configuration pour un produit :

```json
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "[node:title]",
  "image": "[node:field_images:0:entity:url]",
  "description": "[node:field_description:value]",
  "brand": {
    "@type": "Brand",
    "name": "[node:field_brand:entity:name]"
  },
  "offers": {
    "@type": "Offer",
    "price": "[node:field_price:value]",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock"
  }
}
```

## 🧪 Validation

### Outils de test

| Outil | URL |
|-------|-----|
| Facebook Debugger | [developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug) |
| Twitter Card Validator | [cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator) |
| LinkedIn Inspector | [linkedin.com/post-inspector](https://www.linkedin.com/post-inspector/) |
| Google Rich Results | [search.google.com/test/rich-results](https://search.google.com/test/rich-results) |

### Vérifier dans le code source

```html
<!-- Attendu dans <head> -->
<meta property="og:title" content="T-Shirt Blanc - TailStore">
<meta property="og:description" content="T-shirt en coton bio...">
<meta property="og:image" content="https://example.com/sites/default/files/tshirt.jpg">
<meta property="og:type" content="product">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="T-Shirt Blanc - TailStore">
```

## 📋 Configuration complète TailStore

### Hiérarchie des métadonnées

```
Global (défaut)
├── Front page (page d'accueil)
├── Contenu
│   ├── Produit
│   ├── Article
│   └── Slide
├── Taxonomie
│   ├── Catégorie
│   ├── Marque
│   └── Couleur
└── Utilisateur
```

### Export configuration

Les métadonnées sont exportées dans :

```
config/sync/metatag.metatag_defaults.global.yml
config/sync/metatag.metatag_defaults.node__product.yml
config/sync/metatag.metatag_defaults.taxonomy_term__category.yml
```

## 📱 Exemple rendu social

### Facebook

```
┌─────────────────────────────────┐
│ [Image 1200×630]                │
├─────────────────────────────────┤
│ tailstore.com                   │
│ T-Shirt Blanc Premium           │
│ T-shirt en coton bio, coupe...  │
└─────────────────────────────────┘
```

### Twitter

```
┌─────────────────────────────────┐
│ [Image 1200×600]                │
│                                 │
├─────────────────────────────────┤
│ T-Shirt Blanc Premium           │
│ T-shirt en coton bio, coupe...  │
│ tailstore.com                   │
└─────────────────────────────────┘
```

## ✅ Checklist

- [ ] Metatag installé
- [ ] Open Graph activé
- [ ] Twitter Cards activé
- [ ] Métadonnées globales configurées
- [ ] Métadonnées par type de contenu
- [ ] Image style Open Graph créé
- [ ] Testé avec les validateurs

## 🔜 Prochaine étape

SEO optimisé ! Créons des [Formulaires avec Webform](/etape-7-modules/webform/).
