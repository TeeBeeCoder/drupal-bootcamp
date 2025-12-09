---
title: Champs
description: Ajouter et configurer les champs pour les types de contenu Drupal 11
sidebar:
  order: 2
---

import { Steps, Tabs, TabItem } from '@astrojs/starlight/components';

Les **champs** (fields) sont les éléments de données qui composent vos types de contenu. Drupal propose de nombreux types de champs pour répondre à tous les besoins.

## 🤔 Concepts clés

### Field Storage vs Field Instance

Drupal sépare la **définition du stockage** de l'**instance du champ** :

- **Field Storage** : Définit le type de données et le stockage (une fois par champ)
- **Field Instance** : Configure le champ pour un type de contenu spécifique

Cela permet de **réutiliser** un champ entre plusieurs types de contenu.

### Exemple

```
field_image (storage)
├── node.product.field_image (instance)
├── node.blog_article.field_image (instance)
└── taxonomy_term.brand.field_image (instance)
```

## 📋 Types de champs disponibles

### Texte

| Type | Description | Usage |
|------|-------------|-------|
| **Texte (brut)** | Texte simple, une ligne | Titre, code |
| **Texte (brut, long)** | Texte simple, multi-lignes | Description simple |
| **Texte (formaté)** | Avec éditeur WYSIWYG | Corps d'article |
| **Texte (formaté, long)** | WYSIWYG multi-lignes | Contenu riche |
| **Texte (formaté, résumé)** | Avec résumé optionnel | Articles blog |

### Nombres

| Type | Description | Usage |
|------|-------------|-------|
| **Entier** | Nombre entier | Quantité, stock |
| **Décimal** | Nombre avec décimales fixes | Prix |
| **Flottant** | Nombre avec précision variable | Coordonnées |

### Références

| Type | Description | Usage |
|------|-------------|-------|
| **Référence à un contenu** | Lien vers un nœud | Produits liés |
| **Référence à un terme** | Lien vers une taxonomie | Catégorie |
| **Référence à un utilisateur** | Lien vers un user | Auteur |
| **Référence à un média** | Lien vers un média | Images |

### Autres

| Type | Description | Usage |
|------|-------------|-------|
| **Booléen** | Vrai/Faux | En stock, Actif |
| **Date** | Date et/ou heure | Événement |
| **Email** | Adresse email | Contact |
| **Lien** | URL avec titre | CTA, menu |
| **Téléphone** | Numéro de téléphone | Contact |
| **Liste (texte)** | Valeurs prédéfinies | Statut |

## 🛍️ Ajouter les champs du type "Produit"

### Accéder à la gestion des champs

1. Aller à `/admin/structure/types/manage/product/fields`
2. Cliquer sur **Ajouter un champ**

### Champ : Prix (`field_price`)

<Steps>

1. **Créer le champ**
   - Type : **Nombre** > **Décimal**
   - Label : Prix
   - Identifiant machine : `field_price`

2. **Configuration du stockage**
   - Précision : 10
   - Échelle : 2 (pour les centimes)

3. **Paramètres du champ**
   - Requis : ✅
   - Valeur minimum : 0
   - Préfixe : € (ou configurer en affichage)

4. **Enregistrer**

</Steps>

### Champ : Prix soldé (`field_sale_price`)

<Steps>

1. **Créer le champ**
   - Type : **Nombre** > **Décimal**
   - Label : Prix soldé
   - Identifiant machine : `field_sale_price`

2. **Configuration du stockage**
   - Précision : 10
   - Échelle : 2

3. **Paramètres du champ**
   - Requis : ❌
   - Valeur minimum : 0
   - Texte d'aide : "Laisser vide si pas de promotion"

4. **Enregistrer**

</Steps>

### Champ : Code produit (`field_sku`)

<Steps>

1. **Créer le champ**
   - Type : **Texte** > **Texte (brut)**
   - Label : Code produit (SKU)
   - Identifiant machine : `field_sku`

2. **Configuration du stockage**
   - Longueur maximale : 50

3. **Paramètres du champ**
   - Requis : ✅
   - Texte d'aide : "Code unique du produit"

4. **Enregistrer**

</Steps>

### Champ : Images (`field_images`)

<Steps>

1. **Créer le champ**
   - Type : **Référence** > **Média**
   - Label : Images
   - Identifiant machine : `field_images`

2. **Configuration du stockage**
   - Type de média : Image
   - Nombre de valeurs : **Illimité**

3. **Paramètres du champ**
   - Requis : ✅
   - Texte d'aide : "Ajoutez au moins une image du produit"

4. **Enregistrer**

</Steps>

### Champ : Disponibilité (`field_availability`)

<Steps>

1. **Créer le champ**
   - Type : **Booléen**
   - Label : Disponibilité
   - Identifiant machine : `field_availability`

2. **Paramètres du champ**
   - Label activé : En stock
   - Label désactivé : Rupture de stock
   - Valeur par défaut : ✅ Coché

3. **Enregistrer**

</Steps>

### Champ : Matière (`field_material`)

<Steps>

1. **Créer le champ**
   - Type : **Texte** > **Texte (brut)**
   - Label : Matière
   - Identifiant machine : `field_material`

2. **Configuration du stockage**
   - Longueur maximale : 255

3. **Paramètres du champ**
   - Requis : ❌
   - Placeholder : "Ex: 100% coton"

4. **Enregistrer**

</Steps>

### Champs de référence (Taxonomie)

Ces champs référencent des taxonomies que nous créerons à l'Étape 3 :

| Champ | Référence vers | Cardinalité |
|-------|----------------|-------------|
| `field_category` | Catégorie Produit | Multiple |
| `field_brand` | Marque | Simple |
| `field_sizes` | Taille | Multiple |
| `field_colors` | Couleur | Multiple |

:::note[À faire à l'Étape 3]
Nous créerons ces champs de référence après avoir créé les vocabulaires de taxonomie.
:::

## 📝 Ajouter les champs du type "Article de Blog"

### Champ : Image (`field_image`)

<Steps>

1. **Réutiliser ou créer**
   - Si `field_image` existe déjà : "Réutiliser un champ existant"
   - Sinon : Type **Référence** > **Média**

2. **Paramètres**
   - Requis : ✅
   - Nombre de valeurs : 1

3. **Enregistrer**

</Steps>

### Champ : Catégorie Blog (`field_blog_category`)

:::note[À faire à l'Étape 3]
Ce champ sera créé après avoir créé le vocabulaire "Catégorie Blog".
:::

## 🎠 Ajouter les champs du type "Slide"

### Champ : Titre du slide (`field_title`)

<Steps>

1. **Créer le champ**
   - Type : **Texte** > **Texte (brut)**
   - Label : Titre du slide
   - Identifiant machine : `field_title`

2. **Paramètres**
   - Requis : ✅
   - Longueur maximale : 255

3. **Enregistrer**

</Steps>

### Champ : Sous-titre (`field_subtitle`)

<Steps>

1. **Créer le champ**
   - Type : **Texte** > **Texte (brut, long)**
   - Label : Sous-titre
   - Identifiant machine : `field_subtitle`

2. **Paramètres**
   - Requis : ❌

3. **Enregistrer**

</Steps>

### Champ : Image de fond (`field_image`)

Réutilisez le champ média créé pour les articles.

### Champ : Lien (`field_link`)

<Steps>

1. **Créer le champ**
   - Type : **Lien**
   - Label : Lien
   - Identifiant machine : `field_link`

2. **Paramètres**
   - Types de liens autorisés : ✅ Interne ✅ Externe
   - Autoriser le texte du lien : ✅

3. **Enregistrer**

</Steps>

### Champ : Texte du bouton (`field_cta_text`)

<Steps>

1. **Créer le champ**
   - Type : **Texte** > **Texte (brut)**
   - Label : Texte du bouton
   - Identifiant machine : `field_cta_text`

2. **Paramètres**
   - Requis : ❌
   - Valeur par défaut : "Découvrir"

3. **Enregistrer**

</Steps>

## 🔧 Configuration avancée des champs

### Cardinalité (nombre de valeurs)

| Option | Description |
|--------|-------------|
| 1 | Une seule valeur |
| 2, 3... | Nombre fixe |
| Illimité | Autant que voulu |

### Widgets de formulaire

Chaque type de champ a des widgets différents :

| Champ | Widgets disponibles |
|-------|---------------------|
| Texte | Textfield, Textarea |
| Référence | Autocomplete, Select, Checkboxes, Radios |
| Booléen | Checkbox, Radio buttons |
| Média | Media Library, File upload |

### Formateurs d'affichage

Pour l'affichage, chaque champ a des formateurs :

| Champ | Formateurs |
|-------|------------|
| Texte | Default, Trimmed, Summary |
| Nombre | Default, avec préfixe/suffixe |
| Référence | Label, Entity, Rendered entity |
| Booléen | Default, Yes/No, Custom |
| Image | Image, URL, Responsive |

## 📊 Récapitulatif des champs créés

### Type "Produit"

| Champ | Type | Requis | Cardinalité |
|-------|------|--------|-------------|
| title | Texte | ✅ | 1 |
| body | Texte formaté | ❌ | 1 |
| field_images | Média | ✅ | ∞ |
| field_price | Décimal | ✅ | 1 |
| field_sale_price | Décimal | ❌ | 1 |
| field_sku | Texte | ✅ | 1 |
| field_availability | Booléen | ❌ | 1 |
| field_material | Texte | ❌ | 1 |
| field_category | Taxonomie | ❌ | ∞ |
| field_brand | Taxonomie | ❌ | 1 |
| field_sizes | Taxonomie | ❌ | ∞ |
| field_colors | Taxonomie | ❌ | ∞ |

### Type "Article de Blog"

| Champ | Type | Requis | Cardinalité |
|-------|------|--------|-------------|
| title | Texte | ✅ | 1 |
| body | Texte formaté | ✅ | 1 |
| field_image | Média | ✅ | 1 |
| field_blog_category | Taxonomie | ❌ | 1 |

### Type "Slide"

| Champ | Type | Requis | Cardinalité |
|-------|------|--------|-------------|
| field_title | Texte | ✅ | 1 |
| field_subtitle | Texte long | ❌ | 1 |
| field_image | Média | ✅ | 1 |
| field_link | Lien | ❌ | 1 |
| field_cta_text | Texte | ❌ | 1 |

## 💾 Exporter la configuration

```bash
drush cex -y
git add config/sync/field.*.yml
git commit -m "feat: add fields for product, blog_article and slide"
```

## 🚀 Étape suivante

Passez aux [Modes d'affichage](/etape-2-contenus/modes-affichage/) pour configurer comment les contenus sont affichés.
