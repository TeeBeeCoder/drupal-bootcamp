---
title: Types de contenu
description: Comprendre et créer des types de contenu dans Drupal 11
sidebar:
  order: 1
---

import { Steps, Tabs, TabItem } from '@astrojs/starlight/components';

Les **types de contenu** (content types ou node types) sont la base de la modélisation dans Drupal. Chaque type définit une structure de données réutilisable.

## 🤔 Qu'est-ce qu'un type de contenu ?

Un type de contenu est un **modèle** pour créer du contenu. Il définit :

- Les **champs** disponibles (titre, image, prix...)
- Les **paramètres** de publication
- Les **modes d'affichage**
- Les **permissions** associées

### Exemples concrets

| Type de contenu | Utilisation |
|-----------------|-------------|
| Article | Actualités, blog |
| Page | Pages statiques |
| Produit | Articles à vendre |
| Événement | Calendrier |
| Témoignage | Avis clients |

### Types par défaut dans Drupal

Drupal installe deux types par défaut :

- **Article** : Pour les contenus chronologiques (blog, actualités)
- **Page de base** : Pour les pages statiques (À propos, Contact)

## 🏗️ Créer un type de contenu

### Via l'interface

<Steps>

1. Aller à **Structure** > **Types de contenu** (`/admin/structure/types`)

2. Cliquer sur **Ajouter un type de contenu**

3. Remplir les informations de base :
   - **Nom** : Produit
   - **Identifiant machine** : `product` (généré automatiquement)
   - **Description** : Articles de la boutique TailStore

4. Configurer les **paramètres de soumission** :
   - Instructions de soumission (optionnel)
   - Aperçu avant envoi : Optionnel

5. Configurer les **paramètres de publication** :
   - [x] Publié (par défaut)
   - [ ] Promu en page d'accueil
   - [ ] Épinglé en haut des listes

6. Configurer les **paramètres d'affichage** :
   - [ ] Afficher les informations de l'auteur
   - [ ] Afficher la date de publication

7. Configurer les **options de menu** :
   - Menus disponibles : (selon besoin)

8. Cliquer sur **Enregistrer et gérer les champs**

</Steps>

### Configuration YAML

Après création, le fichier `config/sync/node.type.product.yml` ressemble à :

```yaml
langcode: fr
status: true
dependencies: {  }
name: Produit
type: product
description: 'Articles de la boutique TailStore'
help: ''
new_revision: true
preview_mode: 1
display_submitted: false
```

## 🛍️ Créer le type "Produit"

Créons le type de contenu principal de TailStore :

<Steps>

1. **Accéder à la création**
   
   `/admin/structure/types/add`

2. **Informations de base**
   
   | Champ | Valeur |
   |-------|--------|
   | Nom | Produit |
   | Identifiant machine | product |
   | Description | Articles de la boutique TailStore |

3. **Paramètres de publication**
   
   - ✅ Publié
   - ❌ Promu en page d'accueil
   - ✅ Créer une nouvelle révision

4. **Paramètres d'affichage**
   
   - ❌ Afficher les informations de l'auteur
   - ❌ Afficher la date de publication

5. **Enregistrer**

</Steps>

## 📝 Créer le type "Article de Blog"

<Steps>

1. **Accéder à la création**
   
   `/admin/structure/types/add`

2. **Informations de base**
   
   | Champ | Valeur |
   |-------|--------|
   | Nom | Article de Blog |
   | Identifiant machine | blog_article |
   | Description | Articles du blog TailStore |

3. **Paramètres de publication**
   
   - ✅ Publié
   - ✅ Promu en page d'accueil (pour le bloc blog)
   - ✅ Créer une nouvelle révision

4. **Paramètres d'affichage**
   
   - ✅ Afficher les informations de l'auteur
   - ✅ Afficher la date de publication

5. **Enregistrer**

</Steps>

## 🎠 Créer le type "Slide"

<Steps>

1. **Accéder à la création**
   
   `/admin/structure/types/add`

2. **Informations de base**
   
   | Champ | Valeur |
   |-------|--------|
   | Nom | Slide |
   | Identifiant machine | slide |
   | Description | Slides du carrousel de la page d'accueil |

3. **Paramètres de publication**
   
   - ✅ Publié
   - ❌ Promu en page d'accueil
   - ❌ Créer une nouvelle révision

4. **Paramètres d'affichage**
   
   - ❌ Afficher les informations de l'auteur
   - ❌ Afficher la date de publication

5. **Enregistrer**

</Steps>

## 🔧 Modifier un type existant

Pour modifier un type de contenu :

1. Aller à `/admin/structure/types`
2. Cliquer sur **Modifier** à côté du type
3. Effectuer les changements
4. Enregistrer

### Via Drush

```bash
# Voir les informations d'un type
drush config:get node.type.product

# Modifier une propriété
drush config:set node.type.product description "Nouvelle description"
```

## 🗑️ Supprimer un type de contenu

:::caution[Attention]
Supprimer un type de contenu supprime aussi **tous les contenus** de ce type !
:::

Pour supprimer un type :

1. Assurez-vous qu'aucun contenu n'utilise ce type (ou sauvegardez-les)
2. Aller à `/admin/structure/types`
3. Cliquer sur **Supprimer** dans le menu déroulant

## 📋 Propriétés communes

Tous les types de contenu partagent des propriétés de base :

| Propriété | Description |
|-----------|-------------|
| `title` | Titre du contenu (obligatoire) |
| `body` | Corps du texte (optionnel, peut être supprimé) |
| `nid` | ID du nœud (auto) |
| `uuid` | Identifiant universel unique (auto) |
| `created` | Date de création (auto) |
| `changed` | Date de modification (auto) |
| `uid` | Auteur (référence utilisateur) |
| `status` | Publié/non publié |
| `promote` | Promu en page d'accueil |
| `sticky` | Épinglé |

## 📊 Architecture de notre projet

Après cette section, vous aurez créé :

```
Types de contenu
├── product          # Produits de la boutique
│   └── (champs à ajouter)
├── blog_article     # Articles du blog
│   └── (champs à ajouter)
└── slide           # Carrousel page d'accueil
    └── (champs à ajouter)
```

## 💾 Exporter la configuration

N'oubliez pas d'exporter après chaque création :

```bash
drush cex -y
git add config/sync/node.type.*.yml
git commit -m "feat: add product, blog_article and slide content types"
```

## ✅ Vérification

Vérifiez que vos types sont créés :

```bash
drush entity:type:list --group=content | grep -E "product|blog|slide"
```

Ou dans l'interface : `/admin/structure/types`

## 🚀 Étape suivante

Passez aux [Champs](/etape-2-contenus/champs/) pour ajouter les champs personnalisés à nos types de contenu.
