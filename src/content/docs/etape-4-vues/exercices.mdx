---
title: Exercices - Views
description: Exercices pratiques sur le module Views
sidebar:
  order: 6
---

import { Aside, Card, CardGrid } from '@astrojs/starlight/components';

## 🎯 Exercice 1 : Vue "Promotions"

### Objectif
Créer une page listant les produits en promotion.

### Prérequis
Ajoutez un champ `field_on_sale` (booléen) au type Product.

### Instructions

1. Créez la vue `promotions` avec :
   - URL : `/promotions`
   - Titre : `Nos promotions`
   - Filtre : `field_on_sale = 1`
   - Tri : Prix croissant
   - Format : Grid 3 colonnes
   - Pagination : 9 items

2. Ajoutez un bloc "Promos" pour le sidebar :
   - 3 items
   - Mode d'affichage : Mini

<details>
<summary>💡 Solution</summary>

1. **Add view** avec configuration :

```yaml
View name: Promotions
Machine name: promotions
Show: Content of type Product
Create page: Yes
  Path: /promotions
  Title: Nos promotions
  Display format: Grid of teasers
  Items per page: 9
```

2. Dans l'éditeur :
   - **Filter Criteria** → Add → `Content: On Sale (field_on_sale)` = `True`
   - **Sort Criteria** → Add → `Content: Price` → `Ascending`
   - **Format** → Grid → 3 columns

3. **+Add** → Block :
   - Override pager : 3 items
   - Override format : Unformatted, Mini

</details>

---

## 🎯 Exercice 2 : Vue "Nouveautés de la semaine"

### Objectif
Afficher les produits créés dans les 7 derniers jours.

### Instructions

1. Créez un bloc "Nouveautés de la semaine"
2. Filtrez sur la date de création (moins de 7 jours)
3. Affichez 4 produits
4. Triez par date de création DESC

### Indice

Utilisez le filtre **Content: Authored on** avec l'opérateur `>=` et la valeur relative `-7 days`.

<details>
<summary>💡 Solution</summary>

1. Créez une vue ou ajoutez un display block

2. **Filter Criteria** → Add → `Content: Authored on`

Configuration :
```
Operator: Is greater than or equal to
Value type: An offset from the current time
Value: -7 days
```

3. **Pager** : 4 items

4. **Sort** : `Content: Authored on` DESC

</details>

---

## 🎯 Exercice 3 : Vue avec argument contextuel

### Objectif
Créer une page `/products-by-brand/{brand}` qui affiche les produits d'une marque.

### Instructions

1. Créez la vue `products_by_brand`
2. Ajoutez un contextual filter sur `field_brand`
3. Configurez la validation du terme
4. Personnalisez le titre avec le nom de la marque

### Résultat attendu

- `/products-by-brand/nike` → "Produits Nike"
- `/products-by-brand/adidas` → "Produits Adidas"

<details>
<summary>💡 Solution</summary>

1. **Add view** :
   - Machine name : `products_by_brand`
   - Path : `/products-by-brand/%`

2. **Contextual Filters** → Add → `Content: Brand (field_brand)`

Configuration :
```yaml
When filter value is NOT available:
  Display a summary
  
When filter value IS available:
  Specify validation criteria:
    Validator: Taxonomy term
    Vocabularies: Brand
    Validate: Term name converted to Term ID
    Transform dashes: Yes

More:
  Override title: Yes
  Title: Produits {{ arguments.field_brand }}
```

3. Le `%` dans l'URL capture le nom de la marque

</details>

---

## 🎯 Exercice 4 : Vue "Tableau des produits" (Admin)

### Objectif
Créer un tableau administratif listant tous les produits avec actions.

### Instructions

1. Créez une vue admin à `/admin/products`
2. Format : Tableau avec colonnes triables
3. Colonnes : Image (mini), Titre, SKU, Prix, Catégorie, Stock, Actions
4. Filtres exposés : Recherche titre, catégorie, en stock
5. Permission : Administer content

<details>
<summary>💡 Solution</summary>

1. **Add view** :
   - Machine name : `admin_products`
   - Path : `/admin/products`

2. **Format** → Table (sortable)

3. **Fields** (dans l'ordre) :
   - `Content: Product Image` → Formatter: Thumbnail
   - `Content: Title` → Link to content
   - `Content: SKU`
   - `Content: Price`
   - `Content: Category` → Label
   - `Content: Stock` → Default
   - `Content: Edit link`
   - `Content: Delete link`

4. Table settings :
   - Sortable: Title, Price, Stock

5. **Filter Criteria** exposés :
   - Title (Contains)
   - Category (Dropdown)
   - Stock (Greater than 0)

6. **Access** → Permission → `Administer content`

</details>

---

## 🎯 Exercice 5 : Vue REST API

### Objectif
Exposer les produits via une API REST JSON.

### Instructions

1. Ajoutez un display **REST export** à la vue catalogue
2. URL : `/api/products`
3. Format : Serializer (JSON)
4. Champs : nid, title, price, category, image_url

### Test

```bash
curl http://your-site.ddev.site/api/products | jq
```

<details>
<summary>💡 Solution</summary>

1. Éditez la vue `products_catalog`

2. **+Add** → **REST export**

3. Configuration :
   - Path : `/api/products`
   - Access : Permission → View published content

4. **Format** → Serializer → JSON

5. **Show** → Fields

6. **Fields** :
   ```
   Content: ID (nid)
     Administrative title: id
   
   Content: Title
     Administrative title: title
   
   Content: Price
     Administrative title: price
   
   Content: Category
     Formatter: Entity ID
     Administrative title: category_id
   
   Content: Product Image
     Formatter: URL to image
     Administrative title: image_url
   ```

7. Save et tester :
   ```bash
   curl "http://tailstore.ddev.site/api/products" | jq
   ```

Résultat :
```json
[
  {
    "id": "1",
    "title": "Nike Air Force 1",
    "price": "119.99",
    "category_id": "5",
    "image_url": "/sites/default/files/products/nike-af1.jpg"
  }
]
```

</details>

---

## 🎯 Exercice 6 : Vue avec relations

### Objectif
Afficher les avis clients sur la page produit.

### Prérequis

1. Créez un type de contenu `Review` avec :
   - Title
   - `field_rating` (Number, 1-5)
   - `field_review_text` (Text long)
   - `field_product_reference` (Entity Reference → Product)

2. Créez quelques avis de test

### Instructions

1. Créez un bloc "Avis clients" qui affiche les reviews du produit courant
2. Utilisez un contextual filter avec relation
3. Affichez : Rating (étoiles), Texte, Auteur, Date

<details>
<summary>💡 Solution</summary>

1. **Add view** :
   - Machine name : `product_reviews`
   - Show : Content of type Review
   - Block title : Avis clients

2. **Contextual Filters** → Add :
   - Recherchez dans "Relationships" → **Content: Product Reference**
   
   Ou ajoutez d'abord une **Relationship** :
   - Add → `Content: Référenced Content (field_product_reference)`
   - Required: No

3. Puis **Contextual Filter** :
   - `Content: ID (from Relationship)`
   - When NOT available : Hide view
   - When available : Content ID from URL

4. **Fields** :
   ```
   Content: Rating
     Rewrite: {{ field_rating }}/5 ★
   
   Content: Review Text
   
   Content: Author
   
   Content: Authored on
     Format: Temps relatif (il y a 2 jours)
   ```

5. **Sort** : Authored on DESC

6. Place le bloc avec visibilité : Content type = Product

</details>

---

## ✅ Checklist de validation

<CardGrid>
  <Card title="Vues de base" icon="approve-check">
    - [ ] Catalogue produits `/shop`
    - [ ] Blog `/blog`
    - [ ] Promotions `/promotions`
  </Card>
  <Card title="Blocs" icon="puzzle">
    - [ ] Produits récents
    - [ ] Articles récents
    - [ ] Marques
    - [ ] Produits similaires
  </Card>
  <Card title="Fonctionnalités" icon="setting">
    - [ ] Filtres exposés
    - [ ] Tri exposé
    - [ ] Pagination Ajax
    - [ ] Arguments contextuels
  </Card>
  <Card title="Avancé" icon="rocket">
    - [ ] Vue admin tableau
    - [ ] API REST
    - [ ] Relations/Relationships
  </Card>
</CardGrid>

## 📤 Export final

```bash
# Exporter toutes les vues
drush cex -y

# Commiter
git add config/sync/views.view.*.yml
git commit -m "feat: add all views for TailStore"
```

## 🎓 Compétences acquises

À la fin de cette étape, vous savez :

- ✅ Créer des vues Page et Block
- ✅ Configurer les formats d'affichage (Grid, Table, List)
- ✅ Utiliser les filtres standards et exposés
- ✅ Configurer le tri (standard et exposé)
- ✅ Gérer la pagination
- ✅ Utiliser les arguments contextuels
- ✅ Créer des relations entre entités dans Views
- ✅ Exporter et versionner les vues

## 🔜 Prochaine étape

Passez à l'[Étape 5 - Navigation & Blocs](/etape-5-navigation/) pour créer les menus, configurer les régions et gérer les permissions.
