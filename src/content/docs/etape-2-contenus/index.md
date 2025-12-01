---
title: Étape 2 - Types de Contenu & Médias
description: Créer des types de contenu personnalisés et gérer les médias dans Drupal 11
sidebar:
  order: 0
---

import { Card, CardGrid } from '@astrojs/starlight/components';

<div class="duration-badge">⏱️ Durée estimée : 3h30</div>

## 🎯 Objectifs de cette étape

À la fin de cette étape, vous serez capable de :

- ✅ Créer des types de contenu personnalisés
- ✅ Ajouter et configurer différents types de champs
- ✅ Comprendre les modes d'affichage (view modes / form modes)
- ✅ Gérer les médias (images, documents)
- ✅ Créer les types de contenu du projet TailStore

## 📋 Prérequis

- [x] Étape 1 terminée (Drupal installé et fonctionnel)
- [x] Accès à l'administration Drupal
- [x] Drush configuré

## 📚 Sommaire

<CardGrid>
  <Card title="1. Types de contenu" icon="document">
    Comprendre et créer des types de contenu (node types).
    [Voir →](/etape-2-contenus/types-de-contenu/)
  </Card>
  <Card title="2. Champs" icon="list-format">
    Ajouter et configurer tous les types de champs.
    [Voir →](/etape-2-contenus/champs/)
  </Card>
  <Card title="3. Modes d'affichage" icon="setting">
    Gérer les form modes et view modes.
    [Voir →](/etape-2-contenus/modes-affichage/)
  </Card>
  <Card title="4. Médias" icon="open-book">
    Configurer la gestion des médias.
    [Voir →](/etape-2-contenus/medias/)
  </Card>
</CardGrid>

## 🛍️ Types de contenu du projet TailStore

Dans cette étape, nous allons créer les trois types de contenu principaux de notre boutique :

### 1. Produit (`product`)

Le type de contenu principal pour les articles de la boutique.

| Champ | Type | Description |
|-------|------|-------------|
| Titre | Text | Nom du produit |
| Body | Text (long) | Description |
| `field_images` | Media (Image) | Galerie photos (multiple) |
| `field_price` | Decimal | Prix régulier |
| `field_sale_price` | Decimal | Prix soldé (optionnel) |
| `field_sku` | Text | Code produit |
| `field_category` | Entity Reference | Catégorie(s) |
| `field_brand` | Entity Reference | Marque |
| `field_sizes` | Entity Reference | Tailles disponibles |
| `field_colors` | Entity Reference | Couleurs disponibles |
| `field_availability` | Boolean | En stock ? |
| `field_material` | Text | Matière |

### 2. Article de Blog (`blog_article`)

Pour la section blog de la boutique.

| Champ | Type | Description |
|-------|------|-------------|
| Titre | Text | Titre de l'article |
| Body | Text (long) | Contenu |
| `field_image` | Media (Image) | Image principale |
| `field_blog_category` | Entity Reference | Catégorie blog |

### 3. Slide (`slide`)

Pour le carrousel de la page d'accueil.

| Champ | Type | Description |
|-------|------|-------------|
| `field_title` | Text | Titre du slide |
| `field_subtitle` | Text | Sous-titre |
| `field_image` | Media (Image) | Image de fond |
| `field_link` | Link | Lien du CTA |
| `field_cta_text` | Text | Texte du bouton |

## 📊 Schéma des relations

```
┌─────────────────┐     ┌──────────────────┐
│    Product      │────▶│ Catégorie (Tax)  │
│                 │     └──────────────────┘
│   field_brand ──┼────▶┌──────────────────┐
│                 │     │   Marque (Tax)   │
│   field_sizes ──┼────▶└──────────────────┘
│                 │     ┌──────────────────┐
│  field_colors ──┼────▶│   Taille (Tax)   │
│                 │     └──────────────────┘
│  field_images ──┼────▶┌──────────────────┐
│                 │     │   Couleur (Tax)  │
└─────────────────┘     └──────────────────┘
                        ┌──────────────────┐
┌─────────────────┐     │   Media Image    │
│  Blog Article   │────▶└──────────────────┘
│                 │
│ field_category ─┼────▶┌──────────────────┐
│                 │     │ Cat. Blog (Tax)  │
└─────────────────┘     └──────────────────┘
```

## 🔧 Commandes Drush utiles

```bash
# Lister les types de contenu
drush entity:type:list --group=content

# Créer du contenu de test
drush genc 10 --bundles=product

# Voir les champs d'un type
drush field:list node.product

# Exporter la configuration
drush cex -y
```

## ⚡ Workflow de création

Pour chaque type de contenu, nous suivrons ce processus :

1. **Créer le type de contenu** (`/admin/structure/types/add`)
2. **Ajouter les champs** (`/admin/structure/types/manage/{type}/fields`)
3. **Configurer le formulaire** (`/admin/structure/types/manage/{type}/form-display`)
4. **Configurer l'affichage** (`/admin/structure/types/manage/{type}/display`)
5. **Exporter la configuration** (`drush cex -y`)
6. **Créer du contenu de test**

## 🚀 C'est parti !

Commencez par comprendre les [Types de contenu](/etape-2-contenus/types-de-contenu/) dans Drupal.
