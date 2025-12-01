---
title: Étape 4 - Vues (Views)
description: Créer des listes dynamiques et des catalogues avec le module Views
sidebar:
  order: 0
---

import { Card, CardGrid } from '@astrojs/starlight/components';

<div class="duration-badge">⏱️ Durée estimée : 4h</div>

## 🎯 Objectifs de cette étape

À la fin de cette étape, vous serez capable de :

- ✅ Comprendre le module Views et son fonctionnement
- ✅ Créer des vues de type Page et Block
- ✅ Configurer les filtres exposés pour les utilisateurs
- ✅ Gérer la pagination et le tri
- ✅ Créer le catalogue produits de TailStore
- ✅ Créer des blocs dynamiques (produits récents, articles blog)

## 📋 Prérequis

- [x] Étape 3 terminée (taxonomies et relations)
- [x] Contenu de démonstration créé (produits, articles)
- [x] Module Views activé (inclus dans le core)

## 📚 Sommaire

<CardGrid>
  <Card title="1. Introduction à Views" icon="open-book">
    Comprendre l'architecture du module Views.
    [Voir →](/etape-4-vues/introduction/)
  </Card>
  <Card title="2. Catalogue produits" icon="list-format">
    Créer la vue principale du catalogue.
    [Voir →](/etape-4-vues/catalogue/)
  </Card>
  <Card title="3. Filtres exposés" icon="magnifier">
    Permettre aux utilisateurs de filtrer les résultats.
    [Voir →](/etape-4-vues/filtres-exposes/)
  </Card>
  <Card title="4. Blocs dynamiques" icon="puzzle">
    Créer des blocs de contenu dynamique.
    [Voir →](/etape-4-vues/blocs/)
  </Card>
  <Card title="5. Pagination & Tri" icon="bars-ascending">
    Gérer l'affichage des grands ensembles de données.
    [Voir →](/etape-4-vues/pagination/)
  </Card>
</CardGrid>

## 🏪 Vues du projet TailStore

Nous allons créer les vues suivantes :

### Pages

| Vue | URL | Description |
|-----|-----|-------------|
| Catalogue produits | `/shop` | Liste paginée avec filtres |
| Articles blog | `/blog` | Liste des articles du blog |
| Produits par catégorie | `/category/{term}` | Filtrage par catégorie |
| Produits par marque | `/brand/{term}` | Filtrage par marque |

### Blocs

| Bloc | Emplacement | Contenu |
|------|-------------|---------|
| Produits récents | Sidebar, Homepage | 4 derniers produits |
| Produits populaires | Homepage | 8 produits (manuel) |
| Articles récents | Sidebar | 3 derniers articles |
| Marques | Footer | Logos des marques |

## 🏗️ Architecture de Views

```
┌─────────────────────────────────────────────────────────────┐
│                          VIEW                               │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │   DISPLAY   │  │   DISPLAY   │  │   DISPLAY   │  ...    │
│  │   (Page)    │  │   (Block)   │  │    (Feed)   │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
├─────────────────────────────────────────────────────────────┤
│  FORMAT: Unformatted, Table, Grid, HTML List               │
├─────────────────────────────────────────────────────────────┤
│  FIELDS: title, image, price, category...                  │
├─────────────────────────────────────────────────────────────┤
│  FILTER: type=product, status=published, category=X        │
├─────────────────────────────────────────────────────────────┤
│  SORT: created DESC, title ASC, price ASC                  │
├─────────────────────────────────────────────────────────────┤
│  PAGER: Full, Mini, Load more, None                        │
└─────────────────────────────────────────────────────────────┘
```

## 🎨 Modes d'affichage

Views peut afficher le contenu de deux manières :

### 1. Champs individuels

Vous sélectionnez quels champs afficher :
- Titre
- Image
- Prix
- Catégorie

→ Plus de contrôle, mais configuration plus longue

### 2. Rendered Entity (View Mode)

Vous utilisez un mode d'affichage pré-configuré :
- Teaser
- Card
- Full

→ Plus rapide, réutilise la configuration existante

## 🔧 Commandes Drush utiles

```bash
# Lister les vues existantes
drush views:list

# Activer/désactiver une vue
drush views:enable view_name
drush views:disable view_name

# Exécuter une vue en CLI
drush views:execute view_name display_id

# Exporter la configuration des vues
drush cex -y
```

## 📊 Vue d'ensemble des displays

| Type | Usage | URL |
|------|-------|-----|
| **Page** | Page complète accessible via URL | `/shop`, `/blog` |
| **Block** | Bloc plaçable dans les régions | Sidebar, Footer |
| **Attachment** | Attaché à un autre display | Header de page |
| **Feed** | Flux RSS/Atom | `/rss.xml` |
| **REST Export** | API JSON | `/api/products` |

## ⚡ Bonnes pratiques

1. **Nommez clairement vos vues** : `products_catalog`, `blog_articles`
2. **Utilisez les View Modes** plutôt que les champs quand possible
3. **Cachez les vues** appropriément (Configuration → Performance)
4. **Exportez régulièrement** la configuration
5. **Testez la performance** avec beaucoup de contenu

## 🚀 C'est parti !

Commencez par comprendre l'[Introduction à Views](/etape-4-vues/introduction/).
