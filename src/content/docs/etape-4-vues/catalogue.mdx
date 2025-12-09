---
title: Catalogue produits
description: Créer la vue principale du catalogue avec grille de produits
sidebar:
  order: 2
---

import { Tabs, TabItem, Aside, Steps } from '@astrojs/starlight/components';

## 🛒 Vue "Catalogue produits"

Nous allons créer la vue principale de la boutique, accessible à `/shop`.

### Objectif final

Une page avec :
- Grille de produits (4 colonnes desktop)
- Filtres par catégorie, marque, prix
- Tri par date, prix, nom
- Pagination de 12 produits par page
- Compteur de résultats

## 📝 Créer la vue

<Steps>

1. Allez dans **Structure** → **Views** → **Add view**

2. Configuration initiale :

</Steps>

| Champ | Valeur |
|-------|--------|
| View name | `Catalogue Produits` |
| Machine name | `products_catalog` |
| Description | `Liste des produits de la boutique` |
| Show | `Content` |
| of type | `Product` |
| tagged with | *(vide)* |
| sorted by | `Newest first` |

### Display Page

| Champ | Valeur |
|-------|--------|
| ☑ Create a page | `Oui` |
| Page title | `Boutique` |
| Path | `/shop` |
| Display format | `Unformatted list` of `teasers` |
| Items per page | `12` |

3. Cliquez sur **Save and edit**

## ⚙️ Configurer le display Page

### Format : Grid responsive

1. Cliquez sur **Unformatted list** dans la section FORMAT
2. Sélectionnez **Grid**
3. **Apply**

4. Cliquez sur **Settings** à côté de Grid :

| Paramètre | Valeur |
|-----------|--------|
| Number of columns | `4` |
| Alignment | `Horizontal` |
| Column class | `col` |
| Row class | `row` |

5. **Apply**

### Show : Rendered entity

1. Cliquez sur **Fields** (à côté de Grid)
2. Changez pour **Rendered entity**
3. **Apply**

4. Cliquez sur **Settings** :

| Paramètre | Valeur |
|-----------|--------|
| View mode | `Card` |

<Aside type="note" title="View Mode Card">
Assurez-vous d'avoir créé le mode d'affichage "Card" dans l'Étape 2. Sinon, utilisez "Teaser".
</Aside>

5. **Apply**

### Filtres de base

Vérifiez que ces filtres existent (ils devraient être par défaut) :

1. Dans **Filter Criteria**, vous devriez voir :
   - **Content: Publishing status** = `Published` (Yes)
   - **Content: Content type** = `Product`

Si non, ajoutez-les avec **Add** :

```
Filter: Content: Publishing status
  Status: Published
  [x] Exposed: No
  
Filter: Content: Content type
  Content types: Product
  [x] Exposed: No
```

## 🎯 Configuration avancée

### Header : Compteur de résultats

1. Dans **Header**, cliquez sur **Add**
2. Sélectionnez **Result summary**
3. Configurez :

| Paramètre | Valeur |
|-----------|--------|
| Display | `Displaying @start - @end of @total` |

4. Personnalisez le texte :

```
Affichage de @start à @end sur @total produits
```

5. **Apply**

### Pager : Pagination complète

1. Cliquez sur le lien **Mini** dans PAGER
2. Sélectionnez **Paged output, full pager**
3. **Apply**

4. Configurez les options :

| Paramètre | Valeur |
|-----------|--------|
| Items per page | `12` |
| Offset | `0` |
| Link to more | `No` |

5. Dans **More pager options** :

| Paramètre | Valeur |
|-----------|--------|
| Expose items per page | `No` |
| Pager ID | `0` |
| Tags → First | `« Premier` |
| Tags → Previous | `‹ Précédent` |
| Tags → Next | `Suivant ›` |
| Tags → Last | `Dernier »` |

6. **Apply**

### Tri par défaut

1. Vérifiez les **Sort Criteria**
2. Gardez **Content: Authored on (DESC)**
3. Nous ajouterons le tri exposé plus tard

### No Results Behavior

1. Dans **No Results Behavior**, cliquez sur **Add**
2. Sélectionnez **Global: Text area**
3. Contenu :

```html
<div class="no-results">
  <h3>Aucun produit trouvé</h3>
  <p>Essayez de modifier vos critères de recherche.</p>
  <a href="/shop" class="btn">Voir tous les produits</a>
</div>
```

4. Format : **Full HTML** (ou Basic HTML)
5. **Apply**

## 📱 Page Settings

1. Dans **Page Settings** :

| Paramètre | Valeur |
|-----------|--------|
| Path | `/shop` |
| Menu | Normal menu entry |
| Menu link title | `Boutique` |
| Parent | `<Main navigation>` |
| Weight | `0` |

2. **Apply**

### Access

1. Cliquez sur **Access** → **Permission**
2. Gardez **View published content**
3. **Apply**

## 🎨 Classes CSS personnalisées

### Wrapper de la vue

1. Dans **Advanced** (colonne de droite), cliquez sur **CSS class**
2. Ajoutez : `products-catalog shop-grid`
3. **Apply**

### Row class

1. Dans **Format** → **Grid** → **Settings**
2. Row class : `products-row`
3. Column class : `product-col`

## 💾 Sauvegarder et tester

1. Cliquez sur **Save**
2. Visitez `/shop` pour voir le résultat

### Aperçu attendu

```
┌─────────────────────────────────────────────────────────┐
│                       Boutique                          │
│        Affichage de 1 à 12 sur 15 produits             │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐       │
│  │ Prod 1 │  │ Prod 2 │  │ Prod 3 │  │ Prod 4 │       │
│  │  Nike  │  │ Adidas │  │  Puma  │  │ Levi's │       │
│  │ 119.99 │  │  35.99 │  │  69.99 │  │  89.99 │       │
│  └────────┘  └────────┘  └────────┘  └────────┘       │
│                                                         │
│  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐       │
│  │ Prod 5 │  │ Prod 6 │  │ Prod 7 │  │ Prod 8 │       │
│  │  ...   │  │  ...   │  │  ...   │  │  ...   │       │
│  └────────┘  └────────┘  └────────┘  └────────┘       │
│                                                         │
│        [« Premier] [‹ Précédent] 1 2 [Suivant ›]       │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

## 🔧 Alternative : Affichage par champs

Si vous préférez un contrôle total sur l'affichage :

<Tabs>
<TabItem label="Rendered Entity">
Utilise le view mode "Card" configuré dans Manage display.
Avantage : Cohérence, maintenance centralisée.
</TabItem>
<TabItem label="Fields">

1. Changez **Show** → **Fields**
2. Supprimez les champs par défaut
3. Ajoutez manuellement :

| Champ | Label | Formatter |
|-------|-------|-----------|
| Content: Product Image | Hidden | Image (Card) |
| Content: Category | Hidden | Label |
| Content: Title | Hidden | Link to content |
| Content: Brand | Hidden | Label |
| Content: Price | Hidden | Default |

4. Pour chaque champ, configurez le wrapper et les classes CSS

Avantage : Flexibilité totale.
Inconvénient : Plus de maintenance.

</TabItem>
</Tabs>

## 📤 Export de configuration

```bash
# Exporter la vue
drush cex -y

# Vérifier le fichier créé
cat config/sync/views.view.products_catalog.yml | head -50
```

## 🎯 Créer le display Block

Ajoutons un bloc "Produits récents" pour la sidebar.

1. Dans l'interface Views, cliquez sur **+Add** dans les displays
2. Sélectionnez **Block**
3. Configurez :

| Paramètre | Valeur |
|-----------|--------|
| Display name | `Block - Produits récents` |
| Block admin title | `Produits récents` |

4. **Override** les paramètres suivants :

- **Title** : `Nouveautés`
- **Format** : `Unformatted list` of `Rendered entity`
- **View mode** : `Mini` (ou Teaser)
- **Pager** : `Display a specified number of items` : `4`

5. **Save**

### Placer le bloc

1. **Structure** → **Block layout**
2. Dans la région **Sidebar first**, cliquez **Place block**
3. Cherchez "Produits récents"
4. Configurez la visibilité si nécessaire
5. **Save block**

## ✅ Checklist

Avant de continuer :

- [ ] Vue `products_catalog` créée
- [ ] Page accessible à `/shop`
- [ ] Grille 4 colonnes
- [ ] Compteur de résultats dans le header
- [ ] Pagination avec labels français
- [ ] Message "Aucun produit" configuré
- [ ] Lien dans le menu principal
- [ ] (Optionnel) Bloc "Produits récents" créé

## 🔜 Prochaine étape

Le catalogue est fonctionnel ! Ajoutons les [Filtres exposés](/etape-4-vues/filtres-exposes/) pour permettre aux utilisateurs de filtrer les produits.
