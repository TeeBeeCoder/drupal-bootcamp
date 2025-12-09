---
title: Introduction à Views
description: Comprendre le module Views et son interface
sidebar:
  order: 1
---

import { Tabs, TabItem, Aside, Steps } from '@astrojs/starlight/components';

## 🔍 Qu'est-ce que Views ?

**Views** est l'un des modules les plus puissants de Drupal. Il permet de créer des requêtes sur la base de données et d'afficher les résultats de manière formatée, sans écrire une seule ligne de code.

### Exemples d'utilisation

- Liste des derniers articles publiés
- Catalogue de produits avec filtres
- Galerie d'images
- Tableau de bord administrateur
- Flux RSS
- API REST

<Aside type="tip" title="Core depuis Drupal 8">
Views fait partie du core depuis Drupal 8. Plus besoin de l'installer comme module contrib !
</Aside>

## 🏠 Accéder à Views

1. Naviguez vers **Structure** → **Views**
2. URL directe : `/admin/structure/views`

Vous verrez la liste des vues existantes :
- **Archive** : Articles par date
- **Content** : Liste de contenu (admin)
- **Files** : Fichiers utilisés
- **Frontpage** : Page d'accueil par défaut
- **Taxonomy term** : Contenu par terme

## 🛠️ Interface de création

### Créer une nouvelle vue

<Steps>

1. Cliquez sur **Add view**

2. Remplissez les informations de base :
   - **View name** : Nom affiché dans l'admin
   - **Machine name** : Identifiant système
   - **Description** : But de la vue
   - **Show** : Type d'entité (Content, Users, Terms...)
   - **of type** : Bundle (Product, Article...)

3. Choisissez le type d'affichage initial :
   - ☑ Create a page
   - ☑ Create a block

4. Cliquez sur **Save and edit**

</Steps>

## 📐 L'interface d'édition

L'interface Views est divisée en plusieurs zones :

```
┌─────────────────────────────────────────────────────────────────────┐
│                      DISPLAYS (tabs)                                │
│  [Page] [Block] [+ Add]                                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌──────────────────┐   ┌──────────────────┐   ┌──────────────────┐ │
│  │     TITLE        │   │     FORMAT       │   │      FIELDS      │ │
│  │                  │   │  Unformatted ▼   │   │  + Add field     │ │
│  │  View: Products  │   │  Settings        │   │  - Content: Title│ │
│  │                  │   │  Show: Fields ▼  │   │  - Content: Image│ │
│  └──────────────────┘   └──────────────────┘   └──────────────────┘ │
│                                                                      │
│  ┌──────────────────┐   ┌──────────────────┐   ┌──────────────────┐ │
│  │ FILTER CRITERIA  │   │  SORT CRITERIA   │   │  PAGE SETTINGS   │ │
│  │ + Add filter     │   │  + Add sort      │   │  Path: /shop     │ │
│  │ - type = product │   │  - Created DESC  │   │  Menu: Shop      │ │
│  │ - status = 1     │   │                  │   │                  │ │
│  └──────────────────┘   └──────────────────┘   └──────────────────┘ │
│                                                                      │
│  ┌──────────────────┐   ┌──────────────────┐   ┌──────────────────┐ │
│  │     PAGER        │   │      HEADER      │   │      FOOTER      │ │
│  │ Full | 10 items  │   │ + Add header     │   │ + Add footer     │ │
│  └──────────────────┘   └──────────────────┘   └──────────────────┘ │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────────┐│
│  │                    PREVIEW (Auto-update)                        ││
│  │  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐                             ││
│  │  │ P1  │  │ P2  │  │ P3  │  │ P4  │  ...                        ││
│  │  └─────┘  └─────┘  └─────┘  └─────┘                             ││
│  └─────────────────────────────────────────────────────────────────┘│
│                                                                      │
│  [Save]  [Cancel]  [Delete]                                         │
└─────────────────────────────────────────────────────────────────────┘
```

## 📑 Les composants clés

### 1. Displays

Les différentes "sorties" de la vue :
- **Page** : Accessible via URL
- **Block** : Plaçable dans les régions
- **Attachment** : Attaché à un autre display
- **Feed** : RSS/Atom
- **REST Export** : API JSON

<Aside type="note" title="Héritage">
Les displays héritent de la configuration du display "Master" (par défaut). Vous pouvez surcharger chaque paramètre.
</Aside>

### 2. Format

Comment afficher les résultats :

| Format | Description | Usage |
|--------|-------------|-------|
| Unformatted list | Liste simple sans wrapper | Flexbox/Grid CSS |
| HTML List | Liste `<ul><li>` | Listes sémantiques |
| Table | Tableau `<table>` | Données tabulaires |
| Grid | Grille responsive | Galeries, catalogues |

**Show** : Quoi afficher dans chaque item :
- **Fields** : Champs individuels
- **Content** : Entité rendue (view mode)
- **Rendered entity** : Avec mode d'affichage

### 3. Fields (si Show = Fields)

Les champs à afficher pour chaque résultat :
- Réordonnez par glisser-déposer
- Configurez le label, le formatter, le wrapper
- Réécrivez la sortie avec des tokens

### 4. Filter Criteria

Les conditions de filtrage :
- **Content: Type** = product
- **Content: Publishing status** = Published
- **Field: Category** = T-shirts

<Tabs>
<TabItem label="Filtres standards">
Appliqués automatiquement, invisibles pour l'utilisateur.
</TabItem>
<TabItem label="Filtres exposés">
Affichés à l'utilisateur qui peut les modifier.
</TabItem>
</Tabs>

### 5. Sort Criteria

L'ordre des résultats :
- **Content: Authored on** (DESC) → Plus récent d'abord
- **Content: Title** (ASC) → Alphabétique
- **Field: Price** (ASC) → Moins cher d'abord

### 6. Pager

La pagination :
- **Full** : Pagination complète avec numéros
- **Mini** : Juste Précédent/Suivant
- **Display a specified number of items** : Sans pagination
- **Display all items** : Tout afficher

### 7. Header / Footer

Contenu avant/après les résultats :
- Texte global
- Résultat de vue
- Zone de texte
- Compteur "X résultats"

### 8. No Results Behavior

Que faire si aucun résultat :
- Afficher un message
- Afficher un autre contenu
- Afficher une vue alternative

## 🔧 Première vue de test

Créons une vue simple pour comprendre le workflow :

<Steps>

1. **Structure** → **Views** → **Add view**

2. Configuration de base :
   | Champ | Valeur |
   |-------|--------|
   | View name | `Test Products` |
   | Show | `Content` |
   | of type | `Product` |
   | sorted by | `Newest first` |
   | ☑ Create a page | `Yes` |
   | Page title | `Produits` |
   | Path | `/test-products` |
   | Display format | `Unformatted list` of `teasers` |
   | Items per page | `10` |
   | ☐ Create a block | `No` |

3. Cliquez sur **Save and edit**

4. Observez l'aperçu en bas de page

5. Cliquez sur **Save** pour sauvegarder

6. Visitez `/test-products` pour voir le résultat

</Steps>

## 🎨 Personnaliser l'affichage

### Changer le format

1. Dans **Format**, cliquez sur **Unformatted list**
2. Choisissez **Grid**
3. Configurez :
   - Number of columns: `4`
   - Alignment: `Horizontal`
4. **Apply**

### Ajouter un champ

1. Dans **Fields**, cliquez sur **Add**
2. Recherchez "price"
3. Sélectionnez **Content: Price**
4. Configurez :
   - Label: `Prix`
   - Formatter: `Default`
5. **Apply and continue**

### Ajouter un filtre

1. Dans **Filter criteria**, cliquez sur **Add**
2. Recherchez "category"
3. Sélectionnez **Content: Category (field_category)**
4. Configurez :
   - Expose this filter: `Yes`
   - Label: `Catégorie`
5. **Apply**

## 💾 Export et configuration

Les vues sont exportées en YAML :

```yaml
# views.view.test_products.yml
langcode: fr
status: true
dependencies:
  config:
    - node.type.product
  module:
    - node
    - user
id: test_products
label: 'Test Products'
description: ''
tag: ''
base_table: node_field_data
base_field: nid
display:
  default:
    id: default
    display_title: Default
    display_plugin: default
    # ... configuration
```

```bash
# Exporter
drush cex -y

# Vérifier
cat config/sync/views.view.test_products.yml
```

## ⚠️ Points d'attention

1. **Performance** : Chaque champ = une jointure potentielle
2. **Cache** : Configurez le cache pour les vues publiques
3. **Permissions** : Vérifiez les droits d'accès
4. **Preview** : Utilisez "Auto preview" avec modération sur gros volumes

## ✅ Vérification

Avant de continuer :

- [ ] Vue de test créée
- [ ] Aperçu fonctionnel
- [ ] Page accessible à `/test-products`
- [ ] Comprendre les zones de l'interface

## 🔜 Prochaine étape

Maintenant que vous comprenez Views, créons le [Catalogue produits](/etape-4-vues/catalogue/) complet.
