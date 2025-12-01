---
title: Vocabulaires de taxonomie
description: Créer et configurer les vocabulaires de taxonomie dans Drupal
sidebar:
  order: 1
---

import { Tabs, TabItem, Aside } from '@astrojs/starlight/components';

## 🏷️ Comprendre les taxonomies

### Qu'est-ce qu'une taxonomie ?

La **taxonomie** est le système de classification de Drupal. Elle permet d'organiser le contenu en catégories, tags, ou tout autre type de regroupement.

```
Taxonomie
├── Vocabulaire (= type de classification)
│   ├── Terme 1
│   ├── Terme 2
│   │   ├── Sous-terme 2.1
│   │   └── Sous-terme 2.2
│   └── Terme 3
└── Autre vocabulaire
    ├── Terme A
    └── Terme B
```

### Vocabulaire vs Terme

| Concept | Description | Exemple |
|---------|-------------|---------|
| **Vocabulaire** | Un type de classification | "Catégories" |
| **Terme** | Un élément dans le vocabulaire | "Mode", "Sport" |

<Aside type="tip" title="Analogie">
Un vocabulaire est comme un tiroir étiqueté, et les termes sont les dossiers rangés dedans.
</Aside>

### Hiérarchie

Les termes peuvent être hiérarchiques (parent/enfant) :

```
Vêtements
├── Hommes
│   ├── T-shirts
│   ├── Pantalons
│   └── Vestes
└── Femmes
    ├── Robes
    ├── Jupes
    └── Blouses
```

## 🔧 Créer un vocabulaire

### 1. Vocabulaire "Catégorie Produit"

1. Naviguez vers **Structure** → **Taxonomy**
2. Cliquez sur **Add vocabulary**

:::note[Configuration]
| Champ | Valeur |
|-------|--------|
| Name | `Catégorie Produit` |
| Description | `Classification des produits` |
| Machine name | `product_category` |
:::

3. Cliquez sur **Save**

### 2. Vocabulaire "Marque"

Répétez le processus :

| Champ | Valeur |
|-------|--------|
| Name | `Marque` |
| Description | `Marques disponibles` |
| Machine name | `brand` |

### 3. Vocabulaire "Taille"

| Champ | Valeur |
|-------|--------|
| Name | `Taille` |
| Description | `Tailles disponibles (S, M, L, XL...)` |
| Machine name | `size` |

### 4. Vocabulaire "Couleur"

| Champ | Valeur |
|-------|--------|
| Name | `Couleur` |
| Description | `Couleurs des produits` |
| Machine name | `color` |

Ce vocabulaire nécessite un champ supplémentaire pour le code couleur. Nous l'ajouterons après.

### 5. Vocabulaire "Catégorie Blog"

| Champ | Valeur |
|-------|--------|
| Name | `Catégorie Blog` |
| Description | `Classification des articles de blog` |
| Machine name | `blog_category` |

## 🎨 Ajouter des champs aux vocabulaires

Certains vocabulaires nécessitent des champs supplémentaires.

### Champ "Code couleur" pour le vocabulaire Couleur

1. Allez dans **Structure** → **Taxonomy**
2. Cliquez sur **Manage fields** à côté de "Couleur"
3. Cliquez sur **Create a new field**

:::note[Configuration du champ]
| Paramètre | Valeur |
|-----------|--------|
| Add a new field | `Text (plain)` |
| Label | `Code couleur` |
| Machine name | `field_color_code` |
| Maximum length | `7` |
| Required | `Yes` |
| Help text | `Code hexadécimal (ex: #FF0000)` |
:::

4. Sauvegardez

### Champ "Image" pour le vocabulaire Marque (optionnel)

Si vous souhaitez afficher les logos des marques :

1. **Manage fields** sur le vocabulaire "Marque"
2. **Create a new field** → **Image**

| Paramètre | Valeur |
|-----------|--------|
| Label | `Logo` |
| Machine name | `field_brand_logo` |
| Required | `No` |
| Allowed file extensions | `png jpg svg` |
| File directory | `brands` |
| Alt text | `Required` |

## 📋 Vérification

À ce stade, vous devriez avoir 5 vocabulaires :

```bash
# Via Drush
drush ev "foreach(\Drupal::entityTypeManager()->getStorage('taxonomy_vocabulary')->loadMultiple() as \$v) { echo \$v->id() . ' - ' . \$v->label() . PHP_EOL; }"
```

Résultat attendu :

```
blog_category - Catégorie Blog
brand - Marque
color - Couleur
product_category - Catégorie Produit
size - Taille
```

## 🔌 Via Drush (Alternative)

<Tabs>
<TabItem label="Création manuelle">
Utilisez l'interface d'administration comme décrit ci-dessus.
</TabItem>
<TabItem label="Via Drush">

```bash
# Créer les vocabulaires
drush php-eval "
\$vocabs = [
  ['vid' => 'product_category', 'name' => 'Catégorie Produit'],
  ['vid' => 'brand', 'name' => 'Marque'],
  ['vid' => 'size', 'name' => 'Taille'],
  ['vid' => 'color', 'name' => 'Couleur'],
  ['vid' => 'blog_category', 'name' => 'Catégorie Blog'],
];
foreach (\$vocabs as \$vocab) {
  \Drupal\taxonomy\Entity\Vocabulary::create(\$vocab)->save();
  echo \"Created: \" . \$vocab['name'] . PHP_EOL;
}
"
```

</TabItem>
</Tabs>

## 💾 Exporter la configuration

Après avoir créé tous les vocabulaires :

```bash
# Exporter
drush cex -y

# Vérifier les fichiers créés
ls -la config/sync/taxonomy.vocabulary.*.yml
```

Fichiers générés :
- `taxonomy.vocabulary.product_category.yml`
- `taxonomy.vocabulary.brand.yml`
- `taxonomy.vocabulary.size.yml`
- `taxonomy.vocabulary.color.yml`
- `taxonomy.vocabulary.blog_category.yml`

## 📁 Structure d'un fichier de configuration

Exemple de `taxonomy.vocabulary.product_category.yml` :

```yaml
langcode: fr
status: true
dependencies: {  }
name: 'Catégorie Produit'
vid: product_category
description: 'Classification des produits'
weight: 0
```

## ✅ Points de validation

Avant de passer à la suite, vérifiez :

- [ ] 5 vocabulaires créés
- [ ] Champ `field_color_code` ajouté au vocabulaire Couleur
- [ ] (Optionnel) Champ `field_brand_logo` ajouté au vocabulaire Marque
- [ ] Configuration exportée

## 🔜 Prochaine étape

Maintenant que les vocabulaires sont créés, passons à l'ajout des [Termes de taxonomie](/etape-3-taxonomies/termes/).
