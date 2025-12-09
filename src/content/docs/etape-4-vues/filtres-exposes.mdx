---
title: Filtres exposés
description: Permettre aux utilisateurs de filtrer les résultats dans Views
sidebar:
  order: 3
---

import { Tabs, TabItem, Aside, Steps } from '@astrojs/starlight/components';

## 🔍 Qu'est-ce qu'un filtre exposé ?

Un **filtre exposé** est un filtre de vue que l'utilisateur peut modifier. Il génère un formulaire de recherche/filtrage.

### Types de filtres exposés

| Type | Widget | Usage |
|------|--------|-------|
| Sélection | Select / Checkboxes | Catégories, marques |
| Texte | Champ texte | Recherche par mot-clé |
| Numérique | Min/Max | Fourchette de prix |
| Date | Sélecteur de date | Période |
| Booléen | Checkbox | En stock / Promo |

## 🛒 Filtres pour le catalogue

Nous allons ajouter :
1. Filtre par **catégorie**
2. Filtre par **marque**
3. Filtre par **fourchette de prix**
4. **Recherche** par mot-clé
5. **Tri** exposé

## 📝 Ajouter les filtres

Ouvrez la vue `products_catalog` :
- **Structure** → **Views** → **Catalogue Produits** → **Edit**

### 1. Filtre par catégorie

<Steps>

1. Dans **Filter Criteria**, cliquez sur **Add**

2. Recherchez "category" et sélectionnez **Content: Category (field_category)**

3. Cliquez sur **Add and configure filter criteria**

4. Configurez :

</Steps>

| Paramètre | Valeur |
|-----------|--------|
| Expose this filter to visitors | `☑ Oui` |
| Required | `☐ Non` |
| Label | `Catégorie` |
| Operator | `Is one of` |
| Vocabulary | `Catégorie Produit` |
| Selection type | `Dropdown` |

5. Dans **More** :

| Paramètre | Valeur |
|-----------|--------|
| Filter identifier | `category` |
| Remember last selection | `☐ Non` |

6. **Apply**

### 2. Filtre par marque

Répétez le processus :

1. **Add** → Rechercher "brand" → **Content: Brand (field_brand)**

| Paramètre | Valeur |
|-----------|--------|
| Expose this filter | `☑ Oui` |
| Label | `Marque` |
| Operator | `Is one of` |
| Vocabulary | `Marque` |
| Selection type | `Dropdown` |
| Filter identifier | `brand` |

### 3. Filtre par prix (fourchette)

Pour le prix, nous avons besoin de deux filtres : Min et Max.

#### Prix minimum

1. **Add** → Rechercher "price" → **Content: Price (field_price)**

| Paramètre | Valeur |
|-----------|--------|
| Expose this filter | `☑ Oui` |
| Label | `Prix min` |
| Operator | `Is greater than or equal to` |
| Value | *(vide)* |
| Filter identifier | `price_min` |

#### Prix maximum

1. **Add** → **Content: Price (field_price)** (nouveau)

| Paramètre | Valeur |
|-----------|--------|
| Expose this filter | `☑ Oui` |
| Label | `Prix max` |
| Operator | `Is less than or equal to` |
| Value | *(vide)* |
| Filter identifier | `price_max` |

### 4. Recherche par mot-clé

1. **Add** → Rechercher "title" → **Content: Title**

| Paramètre | Valeur |
|-----------|--------|
| Expose this filter | `☑ Oui` |
| Label | `Rechercher` |
| Operator | `Contains` |
| Case sensitive | `Non` |
| Filter identifier | `search` |

<Aside type="tip" title="Recherche avancée">
Pour une recherche full-text (dans titre + description), installez le module **Search API** (Étape 7).
</Aside>

### 5. Tri exposé

1. Dans **Sort Criteria**, cliquez sur le sort existant **Content: Authored on**
2. Cochez **Expose this sort to visitors**
3. **Apply**

4. Ajoutez d'autres critères de tri :

**Add** → **Content: Title**
- Label : `Nom (A-Z)`
- Order : `Asc`
- Expose : `Oui`

**Add** → **Content: Price (field_price)**
- Label : `Prix`
- Order : `Asc`
- Expose : `Oui`

5. Configurez les labels du tri :

Dans **Sort Criteria**, cliquez sur **Settings** (engrenage) :

| Paramètre | Valeur |
|-----------|--------|
| Exposed sort label | `Trier par` |

## ⚙️ Configuration du formulaire de filtres

### Exposed Form Settings

1. Dans la colonne **Advanced** (à droite)
2. Cliquez sur **Exposed form** → **Settings**

| Paramètre | Valeur |
|-----------|--------|
| Exposed form style | `Basic` |
| Submit button text | `Filtrer` |
| Reset button | `☑ Oui` |
| Reset button label | `Réinitialiser` |
| Exposed sorts label | `Trier par` |
| Sort asc label | `Croissant` |
| Sort desc label | `Décroissant` |

3. **Apply**

### Position du formulaire

Par défaut, le formulaire est dans le header de la vue.

Pour le déplacer dans un bloc séparé (sidebar) :

1. **Exposed form** → **Exposed form in block** : `☑ Oui`
2. Sauvegardez la vue
3. Placez le bloc dans la région souhaitée via **Block layout**

## 🎨 Style : Better Exposed Filters

Pour un formulaire plus moderne, installez le module **Better Exposed Filters** :

```bash
composer require drupal/better_exposed_filters
drush en better_exposed_filters -y
```

### Configuration BEF

1. Retournez dans la vue
2. **Exposed form** → **Exposed form style** → Sélectionnez **Better Exposed Filters**
3. **Apply**
4. Cliquez sur **Settings** pour configurer :

| Filtre | Widget BEF |
|--------|------------|
| Category | Checkboxes/Radio |
| Brand | Checkboxes/Radio |
| Price min/max | Slider (avec JS) |
| Search | Autocomplete |
| Sort | Links |

<Aside type="caution" title="Module contrib">
BEF est un module contributif. Installez-le via Composer, pas via l'interface.
</Aside>

## 📊 URL et paramètres GET

Les filtres modifient l'URL avec des paramètres GET :

```
/shop?category=5&brand=2&price_min=20&price_max=100&search=nike&sort_by=field_price&sort_order=ASC
```

Cela permet :
- Partager un lien filtré
- Bookmark d'une recherche
- SEO (pages catégorie)

## 🔗 Filtres contextuels (Arguments)

Pour créer des pages comme `/category/t-shirts` ou `/brand/nike` :

### Ajouter un argument

1. Dans **Advanced** → **Contextual Filters**, cliquez sur **Add**
2. Recherchez "category" → **Content: Category (field_category)**
3. Configurez :

| Paramètre | Valeur |
|-----------|--------|
| When filter value is NOT available | `Display all results` |
| When filter value IS available | `Specify validation criteria` |
| Validator | `Taxonomy term` |
| Vocabularies | `☑ Catégorie Produit` |
| Filter value type | `Term name converted to Term ID` |
| Transform dashes | `☑ Oui` |

4. Dans **More** :

| Paramètre | Valeur |
|-----------|--------|
| Case in path | `Lower case` |

5. **Apply**

### Créer la page de catégorie

1. **+Add** → **Page**
2. Display name : `Page Catégorie`
3. Path : `/category/%`
4. Menu : Normal menu entry → `Catégorie`

Le `%` sera remplacé par le terme de taxonomie.

### URLs résultantes

- `/category/t-shirts` → Produits catégorie T-shirts
- `/category/chaussures` → Produits catégorie Chaussures
- `/brand/nike` → Produits marque Nike

## 🧪 Tester les filtres

1. Sauvegardez la vue : **Save**
2. Visitez `/shop`
3. Testez chaque filtre :
   - Sélectionnez une catégorie
   - Sélectionnez une marque
   - Entrez un prix min/max
   - Recherchez un mot
   - Changez le tri

### Vérifier l'URL

L'URL doit se mettre à jour avec les paramètres :

```
/shop?category=5&brand=2&price_min=0&price_max=100
```

## 💾 Export

```bash
drush cex -y
```

## 🎨 CSS pour le formulaire

Ajoutez du style au formulaire exposé :

```css
/* Formulaire de filtres */
.views-exposed-form {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.views-exposed-form .form-item {
  flex: 1;
  min-width: 150px;
}

.views-exposed-form .form-item label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.views-exposed-form .form-select,
.views-exposed-form .form-text {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.views-exposed-form .form-actions {
  display: flex;
  gap: 0.5rem;
  align-items: flex-end;
}

.views-exposed-form .button {
  padding: 0.5rem 1rem;
  background: #0073e6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.views-exposed-form .button--secondary {
  background: #6c757d;
}
```

## ✅ Checklist

- [ ] Filtre catégorie exposé
- [ ] Filtre marque exposé
- [ ] Filtres prix min/max
- [ ] Recherche par mot-clé
- [ ] Tri exposé (date, prix, nom)
- [ ] Boutons Filtrer/Réinitialiser
- [ ] (Optionnel) BEF installé
- [ ] (Optionnel) Page `/category/%` créée
- [ ] Configuration exportée

## 🔜 Prochaine étape

Les filtres sont en place ! Créons maintenant les [Blocs dynamiques](/etape-4-vues/blocs/).
