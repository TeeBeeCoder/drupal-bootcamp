---
title: Termes de taxonomie
description: Créer et organiser les termes dans les vocabulaires
sidebar:
  order: 2
---

import { Tabs, TabItem, Aside, Steps } from '@astrojs/starlight/components';

## 📝 Créer des termes

Les termes sont les éléments individuels dans un vocabulaire. C'est ce qui sera assigné au contenu.

### Interface de gestion

Pour chaque vocabulaire, accédez à :
- **Structure** → **Taxonomy** → **[Vocabulaire]** → **List terms**
- Ou directement : `/admin/structure/taxonomy/manage/{vocabulary}/overview`

## 🏷️ Termes du vocabulaire "Catégorie Produit"

<Steps>

1. Allez dans **Structure** → **Taxonomy** → **Catégorie Produit**

2. Cliquez sur **Add term**

3. Créez les termes suivants :

</Steps>

| Nom | Machine name | Description | Parent |
|-----|--------------|-------------|--------|
| Hommes | `hommes` | Vêtements pour hommes | - |
| Femmes | `femmes` | Vêtements pour femmes | - |
| Accessoires | `accessoires` | Bijoux, sacs, lunettes | - |
| T-shirts | `t-shirts` | Hauts décontractés | - |
| Sweats | `sweats` | Hoodies et pulls | - |
| Pantalons | `pantalons` | Jeans, chinos, joggers | - |
| Chaussures | `chaussures` | Sneakers, bottes | - |

<Aside type="tip" title="Hiérarchie optionnelle">
Vous pouvez aussi créer une structure hiérarchique :
- Hommes
  - T-shirts Hommes
  - Pantalons Hommes
- Femmes
  - T-shirts Femmes
  - Robes Femmes
</Aside>

## 🏢 Termes du vocabulaire "Marque"

| Nom | Machine name | Logo (si champ ajouté) |
|-----|--------------|------------------------|
| Nike | `nike` | `/images/brands/nike.png` |
| Adidas | `adidas` | `/images/brands/adidas.png` |
| Puma | `puma` | `/images/brands/puma.png` |
| Levi's | `levis` | `/images/brands/levis.png` |
| Zara | `zara` | `/images/brands/zara.png` |

## 📏 Termes du vocabulaire "Taille"

L'ordre (poids) est important pour l'affichage.

| Nom | Machine name | Poids |
|-----|--------------|-------|
| XS | `xs` | 0 |
| S | `s` | 1 |
| M | `m` | 2 |
| L | `l` | 3 |
| XL | `xl` | 4 |
| XXL | `xxl` | 5 |

<Aside type="note" title="Réorganiser par glisser-déposer">
Après création, vous pouvez réorganiser les termes par glisser-déposer dans la liste des termes.
</Aside>

## 🎨 Termes du vocabulaire "Couleur"

Avec le champ `field_color_code` :

| Nom | Code couleur | Machine name |
|-----|--------------|--------------|
| Noir | `#000000` | `noir` |
| Blanc | `#FFFFFF` | `blanc` |
| Rouge | `#FF0000` | `rouge` |
| Bleu | `#0000FF` | `bleu` |
| Vert | `#00FF00` | `vert` |
| Jaune | `#FFFF00` | `jaune` |
| Rose | `#FFC0CB` | `rose` |
| Gris | `#808080` | `gris` |
| Beige | `#F5F5DC` | `beige` |
| Marine | `#000080` | `marine` |

<Aside type="tip" title="Utilisation du code couleur">
Le code couleur peut être utilisé dans les templates Twig pour afficher une pastille de couleur :

```twig
<span 
  class="color-swatch" 
  style="background-color: {{ term.field_color_code.value }}">
</span>
```
</Aside>

## 📰 Termes du vocabulaire "Catégorie Blog"

| Nom | Machine name | Description |
|-----|--------------|-------------|
| Tendances Mode | `tendances-mode` | Actualités et nouveautés |
| Conseils Style | `conseils-style` | Tips et astuces mode |
| Témoignages | `temoignages` | Avis et retours clients |
| Lookbook | `lookbook` | Inspirations visuelles |

## 🔌 Création via Drush

<Tabs>
<TabItem label="Interface graphique">
Utilisez l'interface comme décrit ci-dessus.
</TabItem>
<TabItem label="Script Drush">

Créez un fichier `create-terms.php` :

```php
<?php
/**
 * Script pour créer les termes de taxonomie.
 * Usage: drush php:script create-terms.php
 */

use Drupal\taxonomy\Entity\Term;

// Catégories produits
$product_categories = ['Hommes', 'Femmes', 'Accessoires', 'T-shirts', 'Sweats', 'Pantalons', 'Chaussures'];
foreach ($product_categories as $name) {
  Term::create([
    'vid' => 'product_category',
    'name' => $name,
  ])->save();
  echo "Created product_category: $name\n";
}

// Marques
$brands = ['Nike', 'Adidas', 'Puma', "Levi's", 'Zara'];
foreach ($brands as $name) {
  Term::create([
    'vid' => 'brand',
    'name' => $name,
  ])->save();
  echo "Created brand: $name\n";
}

// Tailles (avec poids)
$sizes = ['XS' => 0, 'S' => 1, 'M' => 2, 'L' => 3, 'XL' => 4, 'XXL' => 5];
foreach ($sizes as $name => $weight) {
  Term::create([
    'vid' => 'size',
    'name' => $name,
    'weight' => $weight,
  ])->save();
  echo "Created size: $name\n";
}

// Couleurs (avec code)
$colors = [
  'Noir' => '#000000',
  'Blanc' => '#FFFFFF',
  'Rouge' => '#FF0000',
  'Bleu' => '#0000FF',
  'Vert' => '#00FF00',
  'Jaune' => '#FFFF00',
  'Rose' => '#FFC0CB',
  'Gris' => '#808080',
];
foreach ($colors as $name => $code) {
  Term::create([
    'vid' => 'color',
    'name' => $name,
    'field_color_code' => $code,
  ])->save();
  echo "Created color: $name ($code)\n";
}

// Catégories blog
$blog_categories = ['Tendances Mode', 'Conseils Style', 'Témoignages', 'Lookbook'];
foreach ($blog_categories as $name) {
  Term::create([
    'vid' => 'blog_category',
    'name' => $name,
  ])->save();
  echo "Created blog_category: $name\n";
}

echo "\nAll terms created successfully!\n";
```

Exécutez le script :

```bash
drush php:script create-terms.php
```

</TabItem>
</Tabs>

## 📋 Vérifier les termes créés

### Via l'interface

Allez dans **Structure** → **Taxonomy** → **[Vocabulaire]**

### Via Drush

```bash
# Lister tous les termes d'un vocabulaire
drush taxonomy:term-list product_category

# Compter les termes par vocabulaire
drush ev "
\$storage = \Drupal::entityTypeManager()->getStorage('taxonomy_term');
\$vocabs = ['product_category', 'brand', 'size', 'color', 'blog_category'];
foreach (\$vocabs as \$vid) {
  \$count = \$storage->getQuery()
    ->accessCheck(FALSE)
    ->condition('vid', \$vid)
    ->count()
    ->execute();
  echo \"\$vid: \$count termes\n\";
}
"
```

Résultat attendu :

```
product_category: 7 termes
brand: 5 termes
size: 6 termes
color: 8 termes
blog_category: 4 termes
```

## 🔄 Modifier et réorganiser

### Modifier un terme

1. **Structure** → **Taxonomy** → **[Vocabulaire]**
2. Cliquez sur **Edit** à côté du terme
3. Modifiez les valeurs
4. **Save**

### Réorganiser les termes

1. Accédez à la liste des termes du vocabulaire
2. Glissez-déposez les termes pour les réordonner
3. Cliquez sur **Save**

### Créer une hiérarchie

Pour créer un terme enfant :

1. Lors de la création/modification d'un terme
2. Dans le champ **Relations** → **Parent terms**
3. Sélectionnez le terme parent
4. **Save**

## 🌐 URL des termes

Par défaut, chaque terme a une page accessible à :
- `/taxonomy/term/{tid}`

Avec Pathauto (Étape 7), vous pourrez configurer :
- `/categorie/[term:name]`
- `/marque/[term:name]`

## 💾 Exporter les termes

<Aside type="caution" title="Termes et configuration">
Par défaut, les **termes de taxonomie sont du contenu**, pas de la configuration. Ils ne sont PAS exportés avec `drush cex`.
</Aside>

### Avec le module Default Content

```bash
# Installer le module
composer require drupal/default_content
drush en default_content -y

# Exporter les termes d'un vocabulaire
drush dce taxonomy_term --bundle=product_category
```

### Alternative : Script de migration

Vous pouvez créer un fichier de migration YAML pour importer les termes.

## ✅ Points de validation

Vérifiez que vous avez :

- [ ] 7 termes dans "Catégorie Produit"
- [ ] 5 termes dans "Marque"
- [ ] 6 termes dans "Taille" (ordonnés)
- [ ] 8 termes dans "Couleur" (avec codes hexadécimaux)
- [ ] 4 termes dans "Catégorie Blog"

## 🔜 Prochaine étape

Les termes sont prêts ! Il faut maintenant les [relier aux types de contenu](/etape-3-taxonomies/relations-entites/).
