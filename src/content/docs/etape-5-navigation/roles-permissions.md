---
title: Rôles & Permissions
description: Gérer les rôles utilisateurs et les permissions d'accès
sidebar:
  order: 4
---

import { Tabs, TabItem, Aside, Steps } from '@astrojs/starlight/components';

## 👥 Système de permissions Drupal

Drupal utilise un système de **rôles** et **permissions** très granulaire :

- **Utilisateur** : Un compte sur le site
- **Rôle** : Un ensemble de permissions
- **Permission** : Un droit d'effectuer une action

```
Utilisateur "Marie"
├── Rôle: Authenticated user
│   ├── Permission: View published content
│   ├── Permission: Post comments
│   └── Permission: Use search
└── Rôle: Editor
    ├── Permission: Create Product content
    ├── Permission: Edit own Product content
    └── Permission: Delete own Product content
```

## 🎭 Rôles par défaut

| Rôle | Description | Assignation |
|------|-------------|-------------|
| Anonymous user | Visiteur non connecté | Automatique |
| Authenticated user | Utilisateur connecté | Automatique |
| Administrator | Accès complet | Manuel |

## 🔧 Créer des rôles personnalisés

### Rôle "Éditeur" (Editor)

<Steps>

1. Allez dans **People** → **Roles**
2. Ou `/admin/people/roles`

3. Cliquez sur **Add role**

4. Configurez :

</Steps>

| Champ | Valeur |
|-------|--------|
| Role name | `Éditeur` |
| Machine name | `editor` |

5. **Save**

### Rôle "Gestionnaire boutique" (Shop Manager)

| Champ | Valeur |
|-------|--------|
| Role name | `Gestionnaire boutique` |
| Machine name | `shop_manager` |

### Rôle "Modérateur" (Moderator)

| Champ | Valeur |
|-------|--------|
| Role name | `Modérateur` |
| Machine name | `moderator` |

## 🔐 Configurer les permissions

### Accéder aux permissions

1. **People** → **Permissions**
2. Ou `/admin/people/permissions`

L'interface affiche une matrice :
- Colonnes : Rôles
- Lignes : Permissions

### Permissions par rôle pour TailStore

<Tabs>
<TabItem label="Anonymous">

| Permission | Accordée |
|------------|----------|
| View published content | ☑ |
| Search content | ☑ |
| View media | ☑ |
| Access site-wide contact form | ☑ |

</TabItem>
<TabItem label="Authenticated">

Hérite de Anonymous, plus :

| Permission | Accordée |
|------------|----------|
| View user profiles | ☑ |
| Use the toolbar | ☐ |
| Post comments | ☑ |
| Edit own comments | ☑ |

</TabItem>
<TabItem label="Editor">

Hérite de Authenticated, plus :

| Permission | Accordée |
|------------|----------|
| **Content** | |
| Create Blog Article content | ☑ |
| Edit own Blog Article content | ☑ |
| Delete own Blog Article content | ☑ |
| Create Page content | ☑ |
| Edit any Page content | ☑ |
| **Media** | |
| Create media | ☑ |
| Edit own media | ☑ |
| Delete own media | ☑ |
| **Toolbar** | |
| Use the toolbar | ☑ |

</TabItem>
<TabItem label="Shop Manager">

Hérite de Authenticated, plus :

| Permission | Accordée |
|------------|----------|
| **Products** | |
| Create Product content | ☑ |
| Edit any Product content | ☑ |
| Delete any Product content | ☑ |
| **Taxonomy** | |
| Create terms in Catégorie Produit | ☑ |
| Edit terms in Catégorie Produit | ☑ |
| Create terms in Marque | ☑ |
| **Media** | |
| Create media | ☑ |
| Edit any media | ☑ |
| **Toolbar** | |
| Use the toolbar | ☑ |

</TabItem>
<TabItem label="Administrator">

| Permission | Accordée |
|------------|----------|
| Administer site configuration | ☑ |
| Administer content types | ☑ |
| Administer users | ☑ |
| Administer permissions | ☑ |
| *Toutes les permissions* | ☑ |

</TabItem>
</Tabs>

## 👤 Assigner des rôles aux utilisateurs

### Via l'interface

<Steps>

1. **People** → Cliquez sur un utilisateur

2. **Roles** : Cochez les rôles souhaités

3. **Save**

</Steps>

### Lors de la création d'un utilisateur

1. **People** → **Add user**
2. Remplissez les informations
3. **Status** : Active
4. **Roles** : Cochez les rôles appropriés
5. **Create new account**

### Via Drush

```bash
# Ajouter un rôle
drush user:role:add editor marie

# Supprimer un rôle
drush user:role:remove editor marie

# Lister les rôles d'un utilisateur
drush user:information marie
```

## 🛡️ Permissions granulaires par type de contenu

### Content permissions

Chaque type de contenu génère des permissions spécifiques :

| Permission | Description |
|------------|-------------|
| Create [type] content | Créer du contenu de ce type |
| Edit own [type] content | Modifier son propre contenu |
| Edit any [type] content | Modifier tout contenu de ce type |
| Delete own [type] content | Supprimer son propre contenu |
| Delete any [type] content | Supprimer tout contenu |
| Revert [type] revisions | Restaurer une révision |
| View [type] revisions | Voir l'historique |

### Exemple pour Product

| Rôle | Create | Edit own | Edit any | Delete own | Delete any |
|------|--------|----------|----------|------------|------------|
| Editor | ☐ | ☐ | ☐ | ☐ | ☐ |
| Shop Manager | ☑ | ☑ | ☑ | ☑ | ☑ |
| Administrator | ☑ | ☑ | ☑ | ☑ | ☑ |

## 🔒 Accès aux contenus non publiés

Par défaut, seuls les auteurs et admins voient les contenus non publiés.

### Permission spécifique

Installez le module **View Unpublished** :

```bash
composer require drupal/view_unpublished
drush en view_unpublished -y
```

Nouvelle permission : `View unpublished [type] content`

## 🧩 Permissions des modules

Chaque module peut ajouter ses propres permissions.

### Views

| Permission | Description |
|------------|-------------|
| Administer views | Créer/modifier les vues |
| Access the views administration pages | Voir la liste des vues |
| Bypass views access | Ignorer les restrictions d'accès |

### Taxonomy

| Permission | Description |
|------------|-------------|
| Administer vocabularies | Gérer les vocabulaires |
| Create terms in [vocabulary] | Créer des termes |
| Edit terms in [vocabulary] | Modifier des termes |
| Delete terms in [vocabulary] | Supprimer des termes |

### Block

| Permission | Description |
|------------|-------------|
| Administer blocks | Gérer le placement des blocs |
| Administer block content | Gérer les blocs personnalisés |
| Administer block types | Gérer les types de blocs |

## 📊 Matrice récapitulative TailStore

| Action | Anon | Auth | Editor | Shop Mgr | Admin |
|--------|------|------|--------|----------|-------|
| Voir produits | ☑ | ☑ | ☑ | ☑ | ☑ |
| Créer produit | ☐ | ☐ | ☐ | ☑ | ☑ |
| Modifier produit | ☐ | ☐ | ☐ | ☑ | ☑ |
| Voir blog | ☑ | ☑ | ☑ | ☑ | ☑ |
| Créer article | ☐ | ☐ | ☑ | ☐ | ☑ |
| Modifier article | ☐ | ☐ | ☑ | ☐ | ☑ |
| Créer média | ☐ | ☐ | ☑ | ☑ | ☑ |
| Gérer taxonomies | ☐ | ☐ | ☐ | ☑ | ☑ |
| Gérer blocs | ☐ | ☐ | ☐ | ☐ | ☑ |
| Toolbar | ☐ | ☐ | ☑ | ☑ | ☑ |
| Admin config | ☐ | ☐ | ☐ | ☐ | ☑ |

## 🔧 Permissions programmatiques

### Vérifier une permission en PHP

```php
// Dans un contrôleur
if ($this->currentUser()->hasPermission('create product content')) {
  // L'utilisateur peut créer des produits
}

// Service injection
$current_user = \Drupal::currentUser();
$can_edit = $current_user->hasPermission('edit any product content');
```

### Vérifier un rôle

```php
$user = \Drupal::currentUser();
if (in_array('shop_manager', $user->getRoles())) {
  // L'utilisateur est gestionnaire boutique
}
```

### Dans Twig

```twig
{% if logged_in %}
  <p>Bienvenue !</p>
{% endif %}

{% if is_admin %}
  <a href="/admin">Administration</a>
{% endif %}
```

<Aside type="note" title="Éviter les vérifications de rôle">
Préférez toujours vérifier les **permissions** plutôt que les **rôles** pour plus de flexibilité.
</Aside>

## 💾 Export

```bash
# Exporter les rôles et permissions
drush cex -y

# Fichiers générés
ls config/sync/user.role.*.yml
```

Exemple `user.role.editor.yml` :

```yaml
langcode: fr
status: true
dependencies: {  }
id: editor
label: Éditeur
weight: 3
is_admin: false
permissions:
  - 'create blog_article content'
  - 'create media'
  - 'create page content'
  - 'delete own blog_article content'
  - 'delete own media'
  - 'edit any page content'
  - 'edit own blog_article content'
  - 'edit own media'
  - 'use the toolbar'
```

## ✅ Checklist

- [ ] Rôle "Éditeur" créé
- [ ] Rôle "Gestionnaire boutique" créé
- [ ] Permissions configurées pour chaque rôle
- [ ] Utilisateurs de test créés avec rôles
- [ ] Accès au toolbar vérifié
- [ ] Configuration exportée

## 🎯 Exercices

### Exercice 1 : Tester les accès

1. Créez 3 utilisateurs : `editeur@test.com`, `boutique@test.com`, `client@test.com`
2. Assignez les rôles appropriés
3. Connectez-vous avec chaque compte et vérifiez les accès

### Exercice 2 : Workflow de publication

1. Installez le module **Content Moderation**
2. Créez un workflow : Draft → Review → Published
3. Configurez les permissions : qui peut publier ?

## 🔜 Prochaine étape

L'Étape 5 est terminée ! 🎉 Passez à l'[Étape 6 - Theming](/etape-6-theming/) pour créer le thème personnalisé TailStore.
