---
title: Exercices - Taxonomies
description: Exercices pratiques sur les taxonomies et les relations entre entités
sidebar:
  order: 4
---

import { Aside, Tabs, TabItem, Card, CardGrid } from '@astrojs/starlight/components';

## 🎯 Exercice 1 : Compléter les vocabulaires

### Objectif
Créer un nouveau vocabulaire "Collection" pour regrouper les produits par saison.

### Instructions

1. Créez le vocabulaire **Collection** (`collection`)
2. Ajoutez les termes suivants :
   - Printemps/Été 2025
   - Automne/Hiver 2024
   - Capsule Limitée
   - Classiques
3. Ajoutez un champ **Date de fin** (type Date) au vocabulaire
4. Créez le champ de référence `field_collection` dans le type Product
5. Configurez le widget et le formatter

<details>
<summary>💡 Solution</summary>

```php
// Via Drush
drush ev "
// Créer le vocabulaire
\Drupal\taxonomy\Entity\Vocabulary::create([
  'vid' => 'collection',
  'name' => 'Collection',
  'description' => 'Collections saisonnières',
])->save();
echo \"Vocabulaire créé\n\";

// Créer les termes
\$terms = [
  'Printemps/Été 2025',
  'Automne/Hiver 2024',
  'Capsule Limitée',
  'Classiques',
];
foreach (\$terms as \$name) {
  \Drupal\taxonomy\Entity\Term::create([
    'vid' => 'collection',
    'name' => \$name,
  ])->save();
  echo \"Terme créé: \$name\n\";
}
"
```

Pour le champ Date :
1. **Structure** → **Taxonomy** → **Collection** → **Manage fields**
2. **Add field** → **Date** → `field_end_date`
3. Widget : **Date et heure**

Pour le champ de référence dans Product :
1. **Structure** → **Content types** → **Product** → **Manage fields**
2. **Add field** → **Reference** → **Taxonomy term**
3. Configurer : `field_collection`, lié à "Collection"

</details>

---

## 🎯 Exercice 2 : Hiérarchie de catégories

### Objectif
Transformer le vocabulaire "Catégorie Produit" en structure hiérarchique.

### Instructions

Réorganisez les termes ainsi :

```
Catégorie Produit
├── Hommes
│   ├── T-shirts Hommes
│   ├── Pantalons Hommes
│   └── Sweats Hommes
├── Femmes
│   ├── Robes
│   ├── Jupes
│   └── Blouses
├── Accessoires
│   ├── Sacs
│   ├── Bijoux
│   └── Lunettes
└── Chaussures
    ├── Sneakers
    └── Bottes
```

### Questions

1. Comment créer un terme enfant dans l'interface ?
2. Comment accéder au terme parent en PHP ?
3. Comment afficher tous les enfants d'un terme ?

<details>
<summary>💡 Solutions</summary>

**1. Créer un terme enfant :**
- Éditez un terme existant
- Dans **Relations** → **Parent terms**, sélectionnez le parent
- Ou lors de la création, indiquez le parent

**2. Accéder au parent en PHP :**

```php
$term = \Drupal::entityTypeManager()
  ->getStorage('taxonomy_term')
  ->load($tid);

// Récupérer les parents
$parents = \Drupal::entityTypeManager()
  ->getStorage('taxonomy_term')
  ->loadParents($term->id());

foreach ($parents as $parent) {
  echo $parent->label();
}
```

**3. Afficher les enfants :**

```php
$children = \Drupal::entityTypeManager()
  ->getStorage('taxonomy_term')
  ->loadChildren($parent_tid);

foreach ($children as $child) {
  echo $child->label();
}

// Ou récursivement (tous les descendants)
$tree = \Drupal::entityTypeManager()
  ->getStorage('taxonomy_term')
  ->loadTree('product_category', $parent_tid);
```

</details>

---

## 🎯 Exercice 3 : Requêtes avancées

### Objectif
Écrire des requêtes pour filtrer les produits par taxonomie.

### Instructions

Écrivez les requêtes pour :

1. **Trouver tous les produits Nike de couleur Noir**
2. **Compter les produits par catégorie**
3. **Trouver les produits disponibles en taille L ET XL**

<details>
<summary>💡 Solution 1 : Produits Nike noirs</summary>

```php
<?php
// Récupérer les TIDs
$brand_tid = \Drupal::entityTypeManager()
  ->getStorage('taxonomy_term')
  ->getQuery()
  ->accessCheck(FALSE)
  ->condition('vid', 'brand')
  ->condition('name', 'Nike')
  ->execute();
$brand_tid = reset($brand_tid);

$color_tid = \Drupal::entityTypeManager()
  ->getStorage('taxonomy_term')
  ->getQuery()
  ->accessCheck(FALSE)
  ->condition('vid', 'color')
  ->condition('name', 'Noir')
  ->execute();
$color_tid = reset($color_tid);

// Requête sur les produits
$nids = \Drupal::entityTypeManager()
  ->getStorage('node')
  ->getQuery()
  ->accessCheck(TRUE)
  ->condition('type', 'product')
  ->condition('status', 1)
  ->condition('field_brand', $brand_tid)
  ->condition('field_colors', $color_tid)
  ->execute();

$products = \Drupal::entityTypeManager()
  ->getStorage('node')
  ->loadMultiple($nids);

foreach ($products as $product) {
  echo $product->label() . "\n";
}
```

</details>

<details>
<summary>💡 Solution 2 : Compter par catégorie</summary>

```php
<?php
// Charger tous les termes de catégorie
$categories = \Drupal::entityTypeManager()
  ->getStorage('taxonomy_term')
  ->loadByProperties(['vid' => 'product_category']);

foreach ($categories as $category) {
  $count = \Drupal::entityTypeManager()
    ->getStorage('node')
    ->getQuery()
    ->accessCheck(TRUE)
    ->condition('type', 'product')
    ->condition('status', 1)
    ->condition('field_category', $category->id())
    ->count()
    ->execute();
  
  echo $category->label() . ': ' . $count . " produits\n";
}
```

</details>

<details>
<summary>💡 Solution 3 : Produits avec L ET XL</summary>

```php
<?php
// Récupérer les TIDs des tailles
$sizes = \Drupal::entityTypeManager()
  ->getStorage('taxonomy_term')
  ->getQuery()
  ->accessCheck(FALSE)
  ->condition('vid', 'size')
  ->condition('name', ['L', 'XL'], 'IN')
  ->execute();

// Requête avec plusieurs conditions sur le même champ
$query = \Drupal::entityTypeManager()
  ->getStorage('node')
  ->getQuery()
  ->accessCheck(TRUE)
  ->condition('type', 'product')
  ->condition('status', 1);

// Ajouter une condition pour chaque taille (AND)
foreach ($sizes as $size_tid) {
  $query->condition('field_sizes', $size_tid);
}

$nids = $query->execute();
```

</details>

---

## 🎯 Exercice 4 : Template Twig avec taxonomies

### Objectif
Afficher les informations de taxonomie dans un template Twig personnalisé.

### Instructions

Créez un template qui affiche :
- Le nom de la marque avec son logo (si disponible)
- Les tailles sous forme de badges
- Les couleurs sous forme de pastilles colorées

### Fichier à créer : `node--product--teaser.html.twig`

<details>
<summary>💡 Solution</summary>

```twig
{#
/**
 * @file
 * Theme override for product teaser.
 */
#}
<article{{ attributes.addClass('product-teaser') }}>
  
  {# Image produit #}
  {% if content.field_images|render %}
    <div class="product-image">
      {{ content.field_images.0 }}
    </div>
  {% endif %}
  
  <div class="product-info">
    {# Marque avec logo #}
    {% if node.field_brand.entity %}
      <div class="product-brand">
        {% if node.field_brand.entity.field_brand_logo.entity %}
          <img src="{{ file_url(node.field_brand.entity.field_brand_logo.entity.fileuri) }}" 
               alt="{{ node.field_brand.entity.label }}"
               class="brand-logo">
        {% else %}
          <span class="brand-name">{{ node.field_brand.entity.label }}</span>
        {% endif %}
      </div>
    {% endif %}
    
    {# Titre #}
    <h3 class="product-title">
      <a href="{{ url }}">{{ label }}</a>
    </h3>
    
    {# Catégorie #}
    {% if node.field_category.entity %}
      <span class="product-category">
        {{ node.field_category.entity.label }}
      </span>
    {% endif %}
    
    {# Prix #}
    <div class="product-price">
      {{ content.field_price }}
    </div>
    
    {# Tailles disponibles #}
    {% if node.field_sizes|length > 0 %}
      <div class="product-sizes">
        <span class="label">Tailles :</span>
        {% for size in node.field_sizes %}
          <span class="size-badge">{{ size.entity.label }}</span>
        {% endfor %}
      </div>
    {% endif %}
    
    {# Couleurs avec pastilles #}
    {% if node.field_colors|length > 0 %}
      <div class="product-colors">
        <span class="label">Couleurs :</span>
        {% for color in node.field_colors %}
          <span class="color-swatch" 
                style="background-color: {{ color.entity.field_color_code.value }}"
                title="{{ color.entity.label }}">
          </span>
        {% endfor %}
      </div>
    {% endif %}
    
  </div>
</article>
```

CSS associé :

```css
.product-teaser {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 8px;
}

.brand-logo {
  max-height: 30px;
  width: auto;
}

.size-badge {
  display: inline-block;
  padding: 2px 8px;
  background: #f0f0f0;
  border-radius: 4px;
  font-size: 0.875rem;
  margin-right: 4px;
}

.color-swatch {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #ccc;
  margin-right: 4px;
  cursor: help;
}
```

</details>

---

## 🎯 Exercice 5 : Créer le contenu de démonstration

### Objectif
Créer le contenu de la boutique TailStore avec les taxonomies.

### Instructions

Créez les contenus suivants :

#### 5 Produits

| Titre | Catégorie | Marque | Tailles | Couleurs | Prix |
|-------|-----------|--------|---------|----------|------|
| Nike Air Force 1 | Chaussures | Nike | 40, 41, 42, 43, 44 | Blanc, Noir | 119.99 |
| T-shirt Adidas Sport | T-shirts | Adidas | S, M, L, XL | Noir, Bleu | 35.99 |
| Hoodie Puma Essential | Sweats | Puma | M, L, XL | Gris, Noir | 69.99 |
| Jean Levi's 501 | Pantalons | Levi's | S, M, L | Bleu | 89.99 |
| Sac à main Zara | Accessoires | Zara | - | Beige, Noir | 49.99 |

#### 3 Articles de blog

| Titre | Catégorie | Extrait |
|-------|-----------|---------|
| Les tendances mode été 2025 | Tendances Mode | Découvrez les couleurs... |
| Comment choisir ses sneakers | Conseils Style | Guide complet pour... |
| Notre client parle de nous | Témoignages | Interview de Jean... |

<details>
<summary>💡 Script de création</summary>

```php
<?php
/**
 * Script pour créer le contenu de démonstration.
 * Usage: drush php:script create-demo-content.php
 */

use Drupal\node\Entity\Node;

// Fonction helper pour récupérer un TID par nom
function get_term_id($vid, $name) {
  $terms = \Drupal::entityTypeManager()
    ->getStorage('taxonomy_term')
    ->getQuery()
    ->accessCheck(FALSE)
    ->condition('vid', $vid)
    ->condition('name', $name)
    ->execute();
  return reset($terms);
}

// Fonction helper pour récupérer plusieurs TIDs
function get_term_ids($vid, $names) {
  $terms = \Drupal::entityTypeManager()
    ->getStorage('taxonomy_term')
    ->getQuery()
    ->accessCheck(FALSE)
    ->condition('vid', $vid)
    ->condition('name', $names, 'IN')
    ->execute();
  return array_values($terms);
}

// Créer les produits
$products = [
  [
    'title' => 'Nike Air Force 1',
    'category' => 'Chaussures',
    'brand' => 'Nike',
    'sizes' => ['M', 'L', 'XL'],
    'colors' => ['Blanc', 'Noir'],
    'price' => 119.99,
    'sku' => 'NIKE-AF1-001',
    'description' => 'Les légendaires Air Force 1 de Nike. Confort et style intemporel.',
  ],
  [
    'title' => 'T-shirt Adidas Sport',
    'category' => 'T-shirts',
    'brand' => 'Adidas',
    'sizes' => ['S', 'M', 'L', 'XL'],
    'colors' => ['Noir', 'Bleu'],
    'price' => 35.99,
    'sku' => 'ADIDAS-TS-001',
    'description' => 'T-shirt de sport respirant, idéal pour l\'entraînement.',
  ],
  [
    'title' => 'Hoodie Puma Essential',
    'category' => 'Sweats',
    'brand' => 'Puma',
    'sizes' => ['M', 'L', 'XL'],
    'colors' => ['Gris', 'Noir'],
    'price' => 69.99,
    'sku' => 'PUMA-HD-001',
    'description' => 'Hoodie confortable avec capuche et poche kangourou.',
  ],
  [
    'title' => 'Jean Levi\'s 501',
    'category' => 'Pantalons',
    'brand' => "Levi's",
    'sizes' => ['S', 'M', 'L'],
    'colors' => ['Bleu'],
    'price' => 89.99,
    'sku' => 'LEVIS-501-001',
    'description' => 'Le jean iconique 501, coupe droite classique.',
  ],
  [
    'title' => 'Sac à main Zara',
    'category' => 'Accessoires',
    'brand' => 'Zara',
    'sizes' => [],
    'colors' => ['Beige', 'Noir'],
    'price' => 49.99,
    'sku' => 'ZARA-SAC-001',
    'description' => 'Sac à main élégant en similicuir, parfait pour toutes les occasions.',
  ],
];

foreach ($products as $data) {
  $node = Node::create([
    'type' => 'product',
    'title' => $data['title'],
    'status' => 1,
    'field_category' => get_term_id('product_category', $data['category']),
    'field_brand' => get_term_id('brand', $data['brand']),
    'field_sizes' => $data['sizes'] ? get_term_ids('size', $data['sizes']) : [],
    'field_colors' => get_term_ids('color', $data['colors']),
    'field_price' => $data['price'],
    'field_sku' => $data['sku'],
    'field_description' => [
      'value' => '<p>' . $data['description'] . '</p>',
      'format' => 'basic_html',
    ],
  ]);
  $node->save();
  echo "Produit créé: " . $data['title'] . "\n";
}

// Créer les articles de blog
$articles = [
  [
    'title' => 'Les tendances mode été 2025',
    'category' => 'Tendances Mode',
    'body' => 'Découvrez les couleurs et les styles qui vont marquer cet été...',
  ],
  [
    'title' => 'Comment choisir ses sneakers',
    'category' => 'Conseils Style',
    'body' => 'Guide complet pour trouver la paire parfaite selon votre style...',
  ],
  [
    'title' => 'Notre client parle de nous',
    'category' => 'Témoignages',
    'body' => 'Interview de Jean, client fidèle depuis 3 ans...',
  ],
];

foreach ($articles as $data) {
  $node = Node::create([
    'type' => 'blog_article',
    'title' => $data['title'],
    'status' => 1,
    'field_blog_category' => get_term_id('blog_category', $data['category']),
    'body' => [
      'value' => '<p>' . $data['body'] . '</p>',
      'format' => 'basic_html',
    ],
  ]);
  $node->save();
  echo "Article créé: " . $data['title'] . "\n";
}

echo "\nContenu de démonstration créé avec succès!\n";
```

</details>

---

## ✅ Checklist de validation

Avant de passer à l'étape suivante, vérifiez :

<CardGrid>
  <Card title="Vocabulaires" icon="approve-check">
    - [ ] 5 vocabulaires créés + Collection
    - [ ] Champ code couleur sur Couleur
    - [ ] Hiérarchie dans Catégorie Produit
  </Card>
  <Card title="Termes" icon="list-format">
    - [ ] Tous les termes créés
    - [ ] Termes ordonnés (Tailles)
    - [ ] Codes couleur renseignés
  </Card>
  <Card title="Relations" icon="puzzle">
    - [ ] Champs de référence créés
    - [ ] Widgets configurés
    - [ ] Formatters configurés
  </Card>
  <Card title="Contenu" icon="document">
    - [ ] 5 produits de démonstration
    - [ ] 3 articles de blog
    - [ ] Configuration exportée
  </Card>
</CardGrid>

## 📤 Export final

```bash
# Exporter toute la configuration
drush cex -y

# Commiter les changements
cd /path/to/your/drupal
git add config/sync/
git commit -m "feat: add taxonomies and entity references"
```

## 🔜 Prochaine étape

Félicitations ! 🎉 Les taxonomies sont en place. Dans l'[Étape 4 - Vues](/etape-4-vues/), nous allons créer les listes de produits, le catalogue avec filtres, et les blocs dynamiques.
