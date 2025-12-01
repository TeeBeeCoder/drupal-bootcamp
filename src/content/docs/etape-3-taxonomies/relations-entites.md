---
title: Relations entre entités
description: Configurer les champs Entity Reference pour relier contenu et taxonomies
sidebar:
  order: 3
---

import { Tabs, TabItem, Aside, Steps } from '@astrojs/starlight/components';

## 🔗 Entity Reference

Le champ **Entity Reference** permet de créer des relations entre différentes entités Drupal :
- Contenu → Taxonomie
- Contenu → Contenu
- Contenu → Utilisateur
- Contenu → Média

C'est le cœur du modèle relationnel de Drupal !

## 🛒 Champs de référence pour le type "Product"

### 1. Champ Catégorie (`field_category`)

Ce champ a normalement été créé dans l'Étape 2. Vérifions sa configuration :

<Steps>

1. Allez dans **Structure** → **Content types** → **Product** → **Manage fields**

2. Si le champ `field_category` n'existe pas, créez-le :

3. **Create a new field** → **Reference** → **Taxonomy term**

</Steps>

:::note[Configuration détaillée]
| Paramètre | Valeur |
|-----------|--------|
| Label | `Catégorie` |
| Machine name | `field_category` |
| Type of item | `Taxonomy term` |
| Allowed vocabularies | `✓ Catégorie Produit` |
| Required | `Yes` |
| Allowed number of values | `1` |
| Reference method | `Default` |
| Create referenced entities | `Yes` (optionnel) |
:::

#### Configuration du widget

Dans **Manage form display** :

| Widget | Utilisation |
|--------|-------------|
| Select list | Peu d'options (< 20) |
| Autocomplete | Beaucoup d'options |
| Check boxes/radio | Afficher toutes les options |

→ Choisissez **Select list** pour ce champ

### 2. Champ Marque (`field_brand`)

<Steps>

1. **Create a new field** → **Reference** → **Taxonomy term**

2. Configurez :

</Steps>

| Paramètre | Valeur |
|-----------|--------|
| Label | `Marque` |
| Machine name | `field_brand` |
| Allowed vocabularies | `✓ Marque` |
| Required | `Yes` |
| Allowed number of values | `1` |

Widget : **Select list**

### 3. Champ Tailles (`field_sizes`)

Ce champ permet de sélectionner **plusieurs** tailles disponibles.

| Paramètre | Valeur |
|-----------|--------|
| Label | `Tailles disponibles` |
| Machine name | `field_sizes` |
| Allowed vocabularies | `✓ Taille` |
| Required | `No` |
| Allowed number of values | `Unlimited` |

Widget : **Checkboxes/radio buttons**

<Aside type="tip" title="Affichage des cases à cocher">
Le widget Checkboxes est idéal pour les tailles car il affiche toutes les options en un coup d'œil :

☑ S ☑ M ☐ L ☑ XL ☐ XXL
</Aside>

### 4. Champ Couleurs (`field_colors`)

Même logique que les tailles.

| Paramètre | Valeur |
|-----------|--------|
| Label | `Couleurs disponibles` |
| Machine name | `field_colors` |
| Allowed vocabularies | `✓ Couleur` |
| Required | `No` |
| Allowed number of values | `Unlimited` |

Widget : **Checkboxes/radio buttons**

## 📝 Champ de référence pour "Blog Article"

### Champ Catégorie Blog (`field_blog_category`)

<Steps>

1. Allez dans **Structure** → **Content types** → **Blog Article** → **Manage fields**

2. **Create a new field** → **Reference** → **Taxonomy term**

3. Configurez :

</Steps>

| Paramètre | Valeur |
|-----------|--------|
| Label | `Catégorie` |
| Machine name | `field_blog_category` |
| Allowed vocabularies | `✓ Catégorie Blog` |
| Required | `Yes` |
| Allowed number of values | `1` |

Widget : **Select list**

## 🎨 Configurer l'affichage des références

### Manage display

Allez dans **Manage display** de chaque type de contenu.

#### Options de formatage pour les références taxonomie

| Formatter | Rendu |
|-----------|-------|
| Label | Texte simple : "Nike" |
| Label (linked) | Lien vers la page du terme : `<a href="/taxonomy/term/1">Nike</a>` |
| Entity ID | Juste l'ID : "1" |
| Rendered entity | Affiche le terme avec son template |

**Recommandations :**
- `Label` pour affichage simple
- `Label (linked)` si la page du terme existe et est utile
- `Rendered entity` pour les marques avec logo

### Exemple de configuration

Pour le type **Product** :

| Champ | Formatter | Format |
|-------|-----------|--------|
| field_category | Label (linked) | - |
| field_brand | Label | - |
| field_sizes | Label | Inline, séparé par ", " |
| field_colors | Label | Inline, séparé par ", " |

## 📊 Récapitulatif des relations

```
┌──────────────────────────────────────────────────────────┐
│                        PRODUCT                           │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  field_category  ──────►  product_category (1)           │
│                           └── Hommes, Femmes, etc.       │
│                                                          │
│  field_brand     ──────►  brand (1)                      │
│                           └── Nike, Adidas, etc.         │
│                                                          │
│  field_sizes     ──────►  size (*)                       │
│                           └── S, M, L, XL...             │
│                                                          │
│  field_colors    ──────►  color (*)                      │
│                           └── Rouge, Bleu, Noir...       │
│                                                          │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│                     BLOG ARTICLE                         │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  field_blog_category ──────►  blog_category (1)          │
│                               └── Tendances, Conseils... │
│                                                          │
└──────────────────────────────────────────────────────────┘

Légende : (1) = une seule valeur, (*) = valeurs multiples
```

## 🔧 Création via YAML (configuration)

<Tabs>
<TabItem label="Interface graphique">
Utilisez l'interface comme décrit ci-dessus.
</TabItem>
<TabItem label="Fichier de configuration">

Exemple de `field.field.node.product.field_brand.yml` :

```yaml
langcode: fr
status: true
dependencies:
  config:
    - field.storage.node.field_brand
    - node.type.product
    - taxonomy.vocabulary.brand
id: node.product.field_brand
field_name: field_brand
entity_type: node
bundle: product
label: Marque
description: 'Sélectionnez la marque du produit'
required: true
translatable: false
default_value: []
default_value_callback: ''
settings:
  handler: 'default:taxonomy_term'
  handler_settings:
    target_bundles:
      brand: brand
    sort:
      field: name
      direction: asc
    auto_create: false
field_type: entity_reference
```

</TabItem>
</Tabs>

## 🧪 Tester les relations

### Créer un produit de test

1. Allez dans **Content** → **Add content** → **Product**
2. Remplissez les champs :
   - Titre : `T-shirt Nike Sportswear`
   - Catégorie : `T-shirts`
   - Marque : `Nike`
   - Tailles : `S`, `M`, `L`, `XL`
   - Couleurs : `Noir`, `Blanc`, `Rouge`
   - Prix : `39.99`
   - Description : `T-shirt confortable pour le sport`
3. **Save**

### Vérifier les valeurs

```bash
# Voir les champs d'un nœud
drush ev "
\$node = \Drupal::entityTypeManager()->getStorage('node')->load(1);
echo 'Catégorie: ' . \$node->field_category->entity->label() . PHP_EOL;
echo 'Marque: ' . \$node->field_brand->entity->label() . PHP_EOL;
echo 'Tailles: ';
foreach (\$node->field_sizes as \$size) {
  echo \$size->entity->label() . ' ';
}
echo PHP_EOL;
"
```

## 🔍 Requêtes sur les relations

### Trouver les produits d'une catégorie

```php
// Via Entity Query
$query = \Drupal::entityTypeManager()
  ->getStorage('node')
  ->getQuery()
  ->accessCheck(TRUE)
  ->condition('type', 'product')
  ->condition('status', 1)
  ->condition('field_category.entity.name', 'T-shirts');

$nids = $query->execute();
```

### Trouver les produits d'une marque

```php
// Récupérer le TID de la marque
$brand_tid = \Drupal::entityTypeManager()
  ->getStorage('taxonomy_term')
  ->getQuery()
  ->accessCheck(FALSE)
  ->condition('vid', 'brand')
  ->condition('name', 'Nike')
  ->execute();

$brand_tid = reset($brand_tid);

// Trouver les produits de cette marque
$query = \Drupal::entityTypeManager()
  ->getStorage('node')
  ->getQuery()
  ->accessCheck(TRUE)
  ->condition('type', 'product')
  ->condition('field_brand', $brand_tid);

$nids = $query->execute();
```

## 💾 Exporter la configuration

```bash
# Exporter tous les fichiers de configuration
drush cex -y

# Vérifier les fichiers de champs créés
ls config/sync/field.field.node.product.field_*.yml
```

Fichiers attendus :
```
field.field.node.product.field_category.yml
field.field.node.product.field_brand.yml
field.field.node.product.field_sizes.yml
field.field.node.product.field_colors.yml
field.field.node.blog_article.field_blog_category.yml
```

## ✅ Points de validation

Vérifiez que :

- [ ] field_category créé et lié à product_category
- [ ] field_brand créé et lié à brand
- [ ] field_sizes créé (multiple) et lié à size
- [ ] field_colors créé (multiple) et lié à color
- [ ] field_blog_category créé et lié à blog_category
- [ ] Widgets configurés dans Manage form display
- [ ] Formatters configurés dans Manage display
- [ ] Au moins un produit de test créé avec les références
- [ ] Configuration exportée

## 🔜 Prochaine étape

Excellent ! Les taxonomies et les relations sont en place. Passons aux [Exercices](/etape-3-taxonomies/exercices/) pour consolider ces acquis.
