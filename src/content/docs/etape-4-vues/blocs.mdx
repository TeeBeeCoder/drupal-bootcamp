---
title: Blocs dynamiques
description: Créer des blocs de contenu dynamique avec Views
sidebar:
  order: 4
---

import { Tabs, TabItem, Aside, Steps } from '@astrojs/starlight/components';

## 🧱 Blocs Views

Les blocs Views permettent d'afficher du contenu dynamique dans les régions du thème :
- Sidebar
- Header
- Footer
- Contenu secondaire

## 📋 Blocs à créer pour TailStore

| Bloc | Contenu | Emplacement |
|------|---------|-------------|
| Produits récents | 4 derniers produits | Sidebar, Homepage |
| Produits populaires | Sélection manuelle | Homepage |
| Articles blog récents | 3 derniers articles | Sidebar |
| Marques | Logos des marques | Footer |
| Produits de la même catégorie | Produits liés | Page produit |

## 🆕 Bloc "Produits récents"

### Option 1 : Ajouter à une vue existante

Si vous avez déjà la vue `products_catalog` :

<Steps>

1. Éditez la vue `products_catalog`

2. Cliquez sur **+Add** → **Block**

3. Configurez le display :

</Steps>

| Paramètre | Valeur |
|-----------|--------|
| Display name | `Block - Produits récents` |
| Admin title | `Produits récents` |

4. **Override** les paramètres :

| Section | Override | Valeur |
|---------|----------|--------|
| Title | This block | `Nouveautés` |
| Pager | This block | `Display a specified number: 4` |
| Format | This block | `Unformatted list` |
| Show | This block | `Rendered entity: Mini` |

5. Dans **Block Settings** :

| Paramètre | Valeur |
|-----------|--------|
| Block admin title | `Produits récents` |
| Block category | `Views` |

6. **Save**

### Option 2 : Créer une vue dédiée

1. **Structure** → **Views** → **Add view**

| Champ | Valeur |
|-------|--------|
| View name | `Blocs Produits` |
| Machine name | `products_blocks` |
| Show | `Content` of type `Product` |
| Sorted by | `Newest first` |
| ☐ Create a page | `Non` |
| ☑ Create a block | `Oui` |
| Block title | `Nouveautés` |
| Display format | `Unformatted list` of `teasers` |
| Items per page | `4` |

2. **Save and edit**

### Placer le bloc

1. **Structure** → **Block layout**
2. Choisissez la région (ex: **Sidebar first**)
3. Cliquez **Place block**
4. Recherchez "Produits récents" ou "Nouveautés"
5. Configurez la visibilité :

| Paramètre | Valeur |
|-----------|--------|
| Title | `☐ Display title` (si déjà dans la vue) |
| Pages | `/shop` (optionnel) |

6. **Save block**

## ⭐ Bloc "Produits populaires"

Ce bloc affiche une sélection manuelle de produits.

### Méthode 1 : Champ Entityqueue

Installez le module Entityqueue :

```bash
composer require drupal/entityqueue
drush en entityqueue -y
```

1. **Structure** → **Entityqueues** → **Add entity queue**

| Champ | Valeur |
|-------|--------|
| Label | `Produits populaires` |
| Machine name | `featured_products` |
| Queue type | `Simple queue` |
| Target type | `Content` |
| Bundles | `☑ Product` |
| Minimum items | `4` |
| Maximum items | `8` |

2. Créez une vue qui filtre sur cette queue

### Méthode 2 : Champ "Mis en avant"

1. Ajoutez un champ booléen `field_featured` au type Product
2. Créez une vue qui filtre sur ce champ

Vue **Block - Produits populaires** :

| Paramètre | Valeur |
|-----------|--------|
| Filter | Content: Featured = True |
| Sort | Random (module Views Random Seed) ou manuel |
| Pager | 8 items |

## 📰 Bloc "Articles blog récents"

1. Créez une nouvelle vue ou ajoutez un display à une vue Blog existante

| Paramètre | Valeur |
|-----------|--------|
| View name | `Blog Blocks` |
| Show | `Content` of type `Blog Article` |
| Sort | `Newest first` |
| Block title | `Derniers articles` |
| Items | `3` |
| Show | `Rendered entity: Teaser` |

2. Placez le bloc dans la sidebar

## 🏷️ Bloc "Marques"

Affiche les logos de toutes les marques.

<Steps>

1. **Add view**

</Steps>

| Paramètre | Valeur |
|-----------|--------|
| View name | `Marques` |
| Machine name | `brands` |
| Show | `Taxonomy terms` |
| of type | `Marque` |
| ☐ Create a page | `Non` |
| ☑ Create a block | `Oui` |
| Block title | `Nos marques` |
| Items per page | `Unlimited` |

2. Dans l'éditeur, configurez les champs :

| Champ | Configuration |
|-------|---------------|
| Taxonomy term: Name | Hidden label, Link to term page |
| Taxonomy term: Brand Logo | Image style "Thumbnail" |

3. Format : **Grid** (ou **HTML List**)

4. Placez le bloc dans le **Footer**

## 🔗 Bloc "Produits de la même catégorie"

Ce bloc apparaît sur les pages produit et affiche des produits liés.

### Utilisation des Contextual Filters

<Steps>

1. Éditez la vue `products_blocks` (ou créez-en une nouvelle)

2. **+Add** → **Block**

3. Display name : `Block - Produits similaires`

4. Dans **Contextual Filters**, cliquez **Add**

5. Sélectionnez **Content: Category (field_category)**

</Steps>

6. Configurez :

| Paramètre | Valeur |
|-----------|--------|
| When filter value is NOT available | `Hide view` |
| When filter value IS available | `Provide default value` |
| Type | `Content ID from URL` |

7. **Apply**

### Exclure le produit courant

1. Ajoutez un autre **Contextual Filter** : **Content: ID**
2. Configurez :

| Paramètre | Valeur |
|-----------|--------|
| When filter value IS available | `Provide default value` |
| Type | `Content ID from URL` |
| More → Exclude | `☑ Yes` |

### Placement conditionnel

Ce bloc n'apparaît que sur les pages produit :

1. **Block layout** → Place block
2. Visibility → **Content type** → `☑ Product`

## 🎨 Templates de blocs

Créez des templates Twig personnalisés pour les blocs :

### views-view--products-blocks--block-1.html.twig

```twig
{#
/**
 * Block: Produits récents
 */
#}
<div class="products-recent-block">
  <div class="block-header">
    {% if title %}
      <h3 class="block-title">{{ title }}</h3>
    {% endif %}
    <a href="/shop" class="view-all">Voir tout →</a>
  </div>
  
  <div class="products-grid products-grid--mini">
    {{ rows }}
  </div>
</div>
```

### CSS associé

```css
.products-recent-block {
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.products-recent-block .block-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #ddd;
}

.products-recent-block .block-title {
  margin: 0;
  font-size: 1.25rem;
}

.products-recent-block .view-all {
  font-size: 0.875rem;
  color: #0073e6;
  text-decoration: none;
}

.products-grid--mini {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
}
```

## 📊 Récapitulatif des blocs

| Bloc | Vue | Display | Région |
|------|-----|---------|--------|
| Produits récents | products_blocks | block_1 | Sidebar |
| Produits populaires | products_blocks | block_2 | Content (Homepage) |
| Articles récents | blog_blocks | block_1 | Sidebar |
| Marques | brands | block_1 | Footer |
| Produits similaires | products_blocks | block_3 | Sidebar (Product) |

## 🔧 Commandes Drush

```bash
# Lister les blocs Views disponibles
drush views:list --type=block

# Afficher les displays d'une vue
drush views:analyze products_blocks

# Vider le cache des blocs
drush cc block
```

## 💾 Export

```bash
# Exporter les vues et la configuration des blocs
drush cex -y

# Vérifier les fichiers
ls config/sync/block.block.*.yml
ls config/sync/views.view.*.yml
```

## ✅ Checklist

- [ ] Bloc "Produits récents" créé et placé
- [ ] Bloc "Articles récents" créé et placé
- [ ] Bloc "Marques" créé et placé dans le footer
- [ ] Bloc "Produits similaires" avec contextual filter
- [ ] Blocs configurés avec visibilité appropriée
- [ ] Configuration exportée

## 🔜 Prochaine étape

Les blocs sont en place ! Finalisons avec la [Pagination & Tri](/etape-4-vues/pagination/).
