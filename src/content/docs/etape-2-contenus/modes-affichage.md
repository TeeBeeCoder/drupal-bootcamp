---
title: Modes d'affichage
description: Configurer les modes d'affichage et les modes de formulaire dans Drupal 11
sidebar:
  order: 3
---

import { Steps, Tabs, TabItem } from '@astrojs/starlight/components';

Les **modes d'affichage** (view modes) et **modes de formulaire** (form modes) permettent de définir différentes présentations pour un même contenu.

## 🤔 Concepts clés

### View Modes (Modes d'affichage)

Les view modes définissent **comment afficher** un contenu selon le contexte :

| View Mode | Usage typique |
|-----------|---------------|
| **Full** (Complet) | Page complète du contenu |
| **Teaser** | Liste, résumé |
| **Card** | Grille de produits |
| **Search result** | Résultats de recherche |

### Form Modes (Modes de formulaire)

Les form modes définissent **comment éditer** un contenu selon le contexte :

| Form Mode | Usage typique |
|-----------|---------------|
| **Default** | Formulaire complet |
| **Quick edit** | Édition rapide |
| **Register** | Inscription simplifiée |

## 📊 View Modes du projet TailStore

Pour notre boutique, nous aurons besoin de :

### Pour le type "Produit"

| View Mode | Usage | Champs affichés |
|-----------|-------|-----------------|
| **Full** | Page produit | Tous les champs |
| **Teaser** | Liste boutique | Image, titre, prix |
| **Card** | Grille accueil | Image, titre, catégorie, prix |

### Pour le type "Article de Blog"

| View Mode | Usage | Champs affichés |
|-----------|-------|-----------------|
| **Full** | Page article | Tous les champs |
| **Teaser** | Liste blog | Image, titre, extrait |
| **Card** | Accueil | Image, catégorie, titre, extrait |

### Pour le type "Slide"

| View Mode | Usage | Champs affichés |
|-----------|-------|-----------------|
| **Full** | Carrousel | Image, titre, sous-titre, CTA |

## 🎨 Créer un view mode personnalisé

### Via l'interface

<Steps>

1. Aller à **Structure** > **Modes d'affichage** (`/admin/structure/display-modes`)

2. Cliquer sur **Modes d'affichage de l'entité Contenu**

3. Cliquer sur **Ajouter un mode d'affichage contenu**

4. Remplir les informations :
   - Nom : Card
   - Identifiant machine : `card`

5. Enregistrer

</Steps>

### Créer le view mode "Card"

Nous allons créer un mode "Card" pour afficher les produits en grille :

<Steps>

1. Aller à `/admin/structure/display-modes/view`

2. Ajouter un mode pour "Contenu" :
   - Nom : **Card**
   - Machine name : `card`

3. Enregistrer

</Steps>

## ⚙️ Configurer l'affichage des champs

### Accéder à la configuration

1. Aller à `/admin/structure/types/manage/product/display`
2. Vous voyez les onglets pour chaque view mode actif

### Activer un view mode

<Steps>

1. Descendre jusqu'à **Modes d'affichage personnalisés**

2. Cocher les modes à activer :
   - ✅ Teaser
   - ✅ Card
   - ✅ Full (toujours actif)

3. Enregistrer

</Steps>

### Configurer le mode "Full" pour Produit

Accédez à l'onglet **Par défaut** (Full) :

<Steps>

1. **Organiser les champs** (glisser-déposer)
   
   Ordre recommandé :
   1. field_images
   2. field_price
   3. field_sale_price
   4. field_availability
   5. body
   6. field_material
   7. field_category
   8. field_brand
   9. field_sizes
   10. field_colors

2. **Masquer les champs inutiles**
   
   Glissez vers la section "Désactivé" :
   - field_sku (visible ailleurs)
   - Liens (géré manuellement)

3. **Configurer les formateurs**
   
   | Champ | Formateur | Options |
   |-------|-----------|---------|
   | field_images | Media | Rendered entity, view mode: Full |
   | field_price | Default | Préfixe: €, Décimales: 2 |
   | field_sale_price | Default | Préfixe: €, Décimales: 2 |
   | field_availability | Boolean | Yes/No personnalisé |
   | field_category | Label | Link: Yes |
   | field_brand | Label | Link: Yes |

4. **Enregistrer**

</Steps>

### Configurer le mode "Teaser" pour Produit

<Steps>

1. Cliquer sur l'onglet **Teaser**

2. **Champs affichés** (ordre) :
   1. field_images (formateur: Image, style: Medium)
   2. title (lien vers le contenu)
   3. field_price
   4. field_sale_price

3. **Champs masqués** :
   - body
   - field_sku
   - field_material
   - field_availability
   - field_category
   - field_brand
   - field_sizes
   - field_colors

4. **Enregistrer**

</Steps>

### Configurer le mode "Card" pour Produit

<Steps>

1. Cliquer sur l'onglet **Card**

2. **Champs affichés** :
   1. field_images (Image, style: Thumbnail)
   2. field_category (Label, sans lien)
   3. title (Lien)
   4. field_price
   5. field_sale_price

3. **Tous les autres champs masqués**

4. **Enregistrer**

</Steps>

## 📝 Configurer l'affichage pour Blog Article

### Mode "Full"

| Champ | Formateur | Position |
|-------|-----------|----------|
| field_image | Media (Full) | 1 |
| field_blog_category | Label (Link) | 2 |
| body | Default | 3 |

### Mode "Card"

| Champ | Formateur | Position |
|-------|-----------|----------|
| field_image | Image (Medium) | 1 |
| field_blog_category | Label | 2 |
| title | Link | 3 |
| body | Trimmed (100 chars) | 4 |

## 🎠 Configurer l'affichage pour Slide

### Mode "Full" (utilisé dans le carrousel)

| Champ | Formateur | Position |
|-------|-----------|----------|
| field_image | Media (Full) | 1 |
| field_title | Default | 2 |
| field_subtitle | Default | 3 |
| field_link | Link | 4 |
| field_cta_text | Default | 5 |

## 📋 Configurer les modes de formulaire

### Accéder à la configuration

1. Aller à `/admin/structure/types/manage/product/form-display`

### Organiser le formulaire du Produit

<Steps>

1. **Ordre des champs** (recommandé) :
   1. title
   2. field_sku
   3. field_images
   4. body
   5. field_price
   6. field_sale_price
   7. field_availability
   8. field_material
   9. field_category
   10. field_brand
   11. field_sizes
   12. field_colors

2. **Configurer les widgets** :
   
   | Champ | Widget | Options |
   |-------|--------|---------|
   | field_images | Media library | Multiple |
   | field_availability | Single checkbox | - |
   | field_category | Checkboxes | - |
   | field_brand | Select | - |
   | field_sizes | Checkboxes | - |
   | field_colors | Checkboxes | - |

3. **Enregistrer**

</Steps>

## 🖼️ Styles d'images

Les styles d'images définissent les dimensions des images affichées.

### Styles par défaut

| Style | Dimensions |
|-------|------------|
| Thumbnail | 100×100 |
| Medium | 220×220 |
| Large | 480×480 |

### Créer un style personnalisé

<Steps>

1. Aller à `/admin/config/media/image-styles`

2. Cliquer sur **Ajouter un style d'image**

3. Créer les styles pour TailStore :

   **Product Card** (300×400) :
   - Effet : Scale and crop
   - Largeur : 300
   - Hauteur : 400

   **Product Gallery** (600×800) :
   - Effet : Scale and crop
   - Largeur : 600
   - Hauteur : 800

   **Slider Full** (1920×800) :
   - Effet : Scale and crop
   - Largeur : 1920
   - Hauteur : 800

4. Enregistrer chaque style

</Steps>

### Appliquer un style d'image

Dans la configuration d'affichage :

1. Cliquez sur l'engrenage du champ image
2. Sélectionnez le style d'image
3. Enregistrez

## 🔧 Configuration YAML

Les configurations sont stockées dans :

```
config/sync/
├── core.entity_view_display.node.product.default.yml
├── core.entity_view_display.node.product.teaser.yml
├── core.entity_view_display.node.product.card.yml
├── core.entity_form_display.node.product.default.yml
└── image.style.product_card.yml
```

Exemple `core.entity_view_display.node.product.card.yml` :

```yaml
langcode: fr
status: true
dependencies:
  config:
    - field.field.node.product.field_images
    - field.field.node.product.field_price
    - node.type.product
  module:
    - media
    - user
id: node.product.card
targetEntityType: node
bundle: product
mode: card
content:
  field_images:
    type: media_thumbnail
    label: hidden
    settings:
      image_style: product_card
    weight: 0
  field_price:
    type: number_decimal
    label: hidden
    settings:
      prefix_suffix: true
    weight: 3
  title:
    type: string
    label: hidden
    settings:
      link_to_entity: true
    weight: 2
hidden:
  body: true
  field_availability: true
  # ...
```

## 💾 Exporter la configuration

```bash
drush cex -y
git add config/sync/core.entity_view_display.*.yml
git add config/sync/core.entity_form_display.*.yml
git add config/sync/image.style.*.yml
git commit -m "feat: configure view modes and form displays"
```

## ✅ Vérification

Testez vos configurations :

1. Créez un produit test
2. Visualisez-le en mode "Full" (page complète)
3. Vérifiez le mode "Teaser" dans une vue
4. Vérifiez le mode "Card" dans une grille

## 🚀 Étape suivante

Passez à la gestion des [Médias](/etape-2-contenus/medias/) pour configurer la bibliothèque de médias.
