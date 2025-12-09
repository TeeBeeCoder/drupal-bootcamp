---
title: Médias
description: Configurer la gestion des médias dans Drupal 11
sidebar:
  order: 4
---

import { Steps } from '@astrojs/starlight/components';

Le système de **médias** de Drupal 11 offre une gestion centralisée des fichiers : images, documents, vidéos, etc. Contrairement aux champs "image" classiques, les médias sont réutilisables.

## 🤔 Média vs Image

### Champ Image (classique)

- ❌ Fichier attaché directement au contenu
- ❌ Non réutilisable
- ❌ Pas de métadonnées avancées

### Champ Média (recommandé)

- ✅ Entité indépendante
- ✅ Réutilisable dans plusieurs contenus
- ✅ Métadonnées (alt, title, crédits...)
- ✅ Bibliothèque centralisée
- ✅ Différents types (image, vidéo, document...)

## 📚 Types de médias par défaut

Drupal 11 inclut plusieurs types de médias :

| Type | Extension | Usage |
|------|-----------|-------|
| **Image** | jpg, png, gif, webp | Photos, illustrations |
| **Document** | pdf, doc, xls | Fichiers à télécharger |
| **Audio** | mp3, wav | Podcasts, musique |
| **Vidéo** | mp4, webm | Vidéos locales |
| **Vidéo distante** | YouTube, Vimeo | Vidéos embarquées |

## 🛠️ Configurer le type "Image"

### Accéder à la configuration

1. Aller à **Structure** > **Types de médias** (`/admin/structure/media`)
2. Cliquer sur **Modifier** pour "Image"

### Champs du type Image

Par défaut, le type Image contient :

| Champ | Type | Description |
|-------|------|-------------|
| Name | Texte | Nom du média |
| Image | Image | Le fichier image |

### Ajouter des champs personnalisés

Pour TailStore, ajoutons des métadonnées :

<Steps>

1. Aller à `/admin/structure/media/manage/image/fields`

2. Ajouter un champ **Crédits** :
   - Type : Texte (brut)
   - Label : Crédits
   - Machine name : `field_credits`
   - Requis : Non

3. Ajouter un champ **Légende** :
   - Type : Texte (brut)
   - Label : Légende
   - Machine name : `field_caption`
   - Requis : Non

4. Enregistrer

</Steps>

### Configurer les paramètres du type Image

<Steps>

1. Aller à `/admin/structure/media/manage/image`

2. **Champ source** : Image

3. **Paramètres du champ Image** :
   - Extensions autorisées : `png gif jpg jpeg webp`
   - Taille maximale : `10 MB`
   - Résolution minimale : `100x100`
   - Résolution maximale : `4000x4000`

4. **Texte alternatif** :
   - ✅ Obligatoire

5. Enregistrer

</Steps>

## 🖼️ La bibliothèque de médias

### Accéder à la bibliothèque

- **Contenu** > **Médias** (`/admin/content/media`)
- Ou via le widget "Media Library" dans les formulaires

### Ajouter un média

<Steps>

1. Cliquer sur **Ajouter un média**

2. Choisir le type (Image, Document, etc.)

3. Uploader le fichier

4. Remplir les métadonnées :
   - Nom
   - Texte alternatif
   - Crédits (si ajouté)

5. Enregistrer

</Steps>

### Filtrer et rechercher

La bibliothèque permet de :
- Rechercher par nom
- Filtrer par type
- Filtrer par statut (publié/non publié)
- Trier par date

## 🎯 Configurer le widget Media Library

Le widget "Media Library" offre une interface moderne pour sélectionner des médias.

### Activer le widget

<Steps>

1. Aller à `/admin/structure/types/manage/product/form-display`

2. Pour le champ `field_images` :
   - Widget : **Media library**
   - Configurer (engrenage) :
     - Types de médias : ✅ Image

3. Enregistrer

</Steps>

### Options du widget

| Option | Description |
|--------|-------------|
| Media types | Types de médias autorisés |
| Sort | Ordre d'affichage dans la bibliothèque |
| Upload location | Dossier de stockage |

## 📐 Styles d'images pour TailStore

Créons les styles d'images nécessaires :

### Accéder aux styles

`/admin/config/media/image-styles`

### Styles à créer

<Steps>

1. **product_card** (Image produit en carte)
   - Ajouter un style
   - Nom : Product Card
   - Machine name : `product_card`
   - Effet : **Scale and crop**
     - Largeur : 400
     - Hauteur : 500
   - Enregistrer

2. **product_gallery** (Galerie produit)
   - Nom : Product Gallery
   - Machine name : `product_gallery`
   - Effet : **Scale**
     - Largeur : 800
     - Hauteur : (vide)
   - Enregistrer

3. **product_thumbnail** (Miniature galerie)
   - Nom : Product Thumbnail
   - Machine name : `product_thumbnail`
   - Effet : **Scale and crop**
     - Largeur : 100
     - Hauteur : 100
   - Enregistrer

4. **slider_full** (Slide plein écran)
   - Nom : Slider Full
   - Machine name : `slider_full`
   - Effet : **Scale and crop**
     - Largeur : 1920
     - Hauteur : 800
   - Enregistrer

5. **blog_card** (Carte article blog)
   - Nom : Blog Card
   - Machine name : `blog_card`
   - Effet : **Scale and crop**
     - Largeur : 400
     - Hauteur : 300
   - Enregistrer

6. **blog_full** (Article blog complet)
   - Nom : Blog Full
   - Machine name : `blog_full`
   - Effet : **Scale**
     - Largeur : 1200
     - Hauteur : (vide)
   - Enregistrer

</Steps>

### Effets disponibles

| Effet | Description |
|-------|-------------|
| **Scale** | Redimensionne proportionnellement |
| **Scale and crop** | Redimensionne et coupe pour remplir |
| **Crop** | Coupe sans redimensionner |
| **Resize** | Force les dimensions (déforme) |
| **Convert** | Change le format (jpg, png, webp) |
| **Rotate** | Rotation |
| **Desaturate** | Noir et blanc |

## 🖼️ Images responsive

### Configurer les images responsives

<Steps>

1. Installer le module Responsive Image (core)
   ```bash
   drush en responsive_image -y
   ```

2. Créer un style responsive : `/admin/config/media/responsive-image-style`

3. **Product Responsive** :
   - Nom : Product Responsive
   - Breakpoint group : Responsive Image
   - Fallback : product_card
   
   Mapping :
   - Mobile : product_thumbnail
   - Tablet : product_card
   - Desktop : product_gallery

4. Enregistrer

</Steps>

### Utiliser dans l'affichage

1. Configuration d'affichage du type de contenu
2. Champ image > Formateur : **Responsive image**
3. Sélectionner le style responsive

## 📁 Organisation des fichiers

### Structure recommandée

Les fichiers sont stockés dans `web/sites/default/files/` :

```
files/
├── 2024-12/           # Fichiers uploadés (par mois)
│   ├── image1.jpg
│   └── document.pdf
├── styles/            # Images dérivées (auto-généré)
│   ├── product_card/
│   ├── product_thumbnail/
│   └── slider_full/
└── media-icons/       # Icônes des types de médias
```

### Configurer le dossier d'upload

Dans le champ Media, vous pouvez définir :

```
public://products/[date:custom:Y]/[date:custom:m]
```

Résultat : `files/products/2024/12/image.jpg`

## 🔒 Permissions des médias

### Configurer les permissions

`/admin/people/permissions`

Permissions importantes :

| Permission | Admin | Éditeur | Anonyme |
|------------|-------|---------|---------|
| Créer un média | ✅ | ✅ | ❌ |
| Modifier ses médias | ✅ | ✅ | ❌ |
| Modifier tous les médias | ✅ | ❌ | ❌ |
| Supprimer ses médias | ✅ | ✅ | ❌ |
| Supprimer tous les médias | ✅ | ❌ | ❌ |
| Accéder à la bibliothèque | ✅ | ✅ | ❌ |

## 💾 Exporter la configuration

```bash
drush cex -y
git add config/sync/media.type.*.yml
git add config/sync/field.field.media.*.yml
git add config/sync/image.style.*.yml
git add config/sync/responsive_image.styles.*.yml
git commit -m "feat: configure media types and image styles"
```

## ✅ Exercice pratique

<Steps>

1. **Créer les styles d'images** listés ci-dessus

2. **Uploader des images de test** via la bibliothèque de médias

3. **Créer un produit** avec plusieurs images

4. **Vérifier l'affichage** :
   - Les images s'affichent correctement
   - Les styles sont appliqués
   - Le texte alternatif est présent

5. **Exporter la configuration**

</Steps>

## 🚀 Étape suivante

Testez vos connaissances avec les [Exercices de l'Étape 2](/etape-2-contenus/exercices/), puis passez à l'[Étape 3 - Taxonomies](/etape-3-taxonomies/).
