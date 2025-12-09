---
title: Structure des fichiers
description: Comprendre l'organisation d'un projet Drupal 11
sidebar:
  order: 4
---

import { FileTree } from '@astrojs/starlight/components';

Comprendre la structure des fichiers Drupal est essentiel pour naviguer efficacement dans un projet et savoir où placer vos personnalisations.

## 🗂️ Vue d'ensemble

<FileTree>

- tailstore/ (Racine du projet)
  - composer.json
  - composer.lock
  - **config/** (Configuration exportée)
    - sync/
  - **vendor/** (Dépendances - NE PAS MODIFIER)
  - **web/** (Racine web / Docroot)
    - **core/** (Cœur Drupal - NE PAS MODIFIER)
    - **modules/**
      - **contrib/** (Modules téléchargés)
      - **custom/** (Vos modules)
    - **themes/**
      - **contrib/** (Thèmes téléchargés)
      - **custom/** (Vos thèmes)
    - **sites/**
      - **default/**
        - files/ (Fichiers uploadés)
        - settings.php (Configuration)
    - index.php (Point d'entrée)
    - .htaccess (Config Apache)

</FileTree>

## 📁 Détail des dossiers

### 📦 Racine du projet

| Dossier/Fichier | Description |
|-----------------|-------------|
| `composer.json` | Configuration des dépendances |
| `composer.lock` | Versions verrouillées |
| `vendor/` | Bibliothèques PHP (généré par Composer) |
| `config/sync/` | Configuration exportée (YAML) |
| `web/` | Racine web (docroot) |

:::caution[Ne jamais modifier]
- Le dossier `vendor/` est géré par Composer
- Vos modifications seraient écrasées à chaque `composer install`
:::

### 🌐 Dossier web/

C'est le **docroot** - le seul dossier accessible depuis le navigateur.

#### web/core/

Le cœur de Drupal. Contient :

```
core/
├── includes/           # Fichiers d'inclusion PHP
├── lib/               # Classes Drupal (Drupal\Core\...)
├── modules/           # Modules du core (node, user, views, etc.)
├── themes/            # Thèmes du core (Olivero, Stark, Claro)
├── profiles/          # Profils d'installation
├── assets/            # CSS, JS, images du core
└── core.services.yml  # Définition des services
```

:::danger[Ne jamais modifier core/]
Toutes vos personnalisations doivent être faites via des modules ou thèmes custom.
:::

#### web/modules/

```
modules/
├── contrib/           # Modules téléchargés via Composer
│   ├── admin_toolbar/
│   ├── pathauto/
│   └── webform/
└── custom/            # VOS modules personnalisés
    └── tailstore_custom/
```

:::tip[Convention]
- `contrib/` pour les modules de drupal.org
- `custom/` pour vos propres modules
:::

#### web/themes/

```
themes/
├── contrib/           # Thèmes téléchargés
│   └── bootstrap/
└── custom/            # VOS thèmes personnalisés
    └── tailstore/
```

#### web/sites/

```
sites/
├── default/
│   ├── settings.php      # Configuration principale
│   ├── settings.local.php # Config locale (optionnel)
│   ├── services.yml      # Services personnalisés
│   └── files/            # Fichiers uploadés
│       ├── css/          # CSS agrégé
│       ├── js/           # JS agrégé
│       └── styles/       # Images dérivées
└── sites.php             # Multi-site (optionnel)
```

### 📋 Dossier config/

```
config/
└── sync/              # Configuration exportée
    ├── system.site.yml
    ├── node.type.product.yml
    ├── field.field.node.product.*.yml
    └── views.view.products.yml
```

Ce dossier contient les fichiers YAML exportés par `drush cex`. C'est le cœur du système de configuration sync.

## 📄 Fichiers importants

### composer.json

```json
{
    "name": "drupal/recommended-project",
    "require": {
        "drupal/core-recommended": "^11.0",
        "drupal/admin_toolbar": "^3.4",
        "drush/drush": "^13.0"
    },
    "extra": {
        "installer-paths": {
            "web/modules/contrib/{$name}": ["type:drupal-module"],
            "web/themes/contrib/{$name}": ["type:drupal-theme"]
        }
    }
}
```

### web/sites/default/settings.php

Fichier de configuration principal :

```php
<?php

// Configuration de la base de données
$databases['default']['default'] = [
  'database' => 'tailstore',
  'username' => 'db',
  'password' => 'db',
  'host' => 'db',
  'driver' => 'mysql',
];

// Chemin vers la configuration sync
$settings['config_sync_directory'] = '../config/sync';

// Salt pour les hashs
$settings['hash_salt'] = 'VOTRE_HASH_UNIQUE';

// Trusted hosts
$settings['trusted_host_patterns'] = [
  '^tailstore\.ddev\.site$',
  '^localhost$',
];
```

### web/sites/default/settings.local.php

Configuration locale (non commitée) :

```php
<?php

// Activer le mode développement
$config['system.performance']['css']['preprocess'] = FALSE;
$config['system.performance']['js']['preprocess'] = FALSE;

// Afficher les erreurs
$config['system.logging']['error_level'] = 'verbose';

// Désactiver le cache de rendu
$settings['cache']['bins']['render'] = 'cache.backend.null';

// Clés Stripe (dev)
$settings['stripe_public_key'] = 'pk_test_xxxx';
$settings['stripe_secret_key'] = 'sk_test_xxxx';
```

:::tip[Créer settings.local.php]
1. Copiez `sites/example.settings.local.php` vers `sites/default/settings.local.php`
2. Décommentez l'inclusion dans `settings.php`
3. Ajoutez ce fichier à `.gitignore`
:::

### .gitignore recommandé

```gitignore
# Dépendances
/vendor/
/web/core/
/web/modules/contrib/
/web/themes/contrib/
/web/profiles/contrib/

# Fichiers générés
/web/sites/default/files/
/web/sites/default/settings.local.php

# IDE
.idea/
.vscode/

# OS
.DS_Store
Thumbs.db

# DDEV
.ddev/.gitignore
```

## 🏗️ Structure d'un module custom

```
web/modules/custom/tailstore_custom/
├── tailstore_custom.info.yml      # Métadonnées
├── tailstore_custom.module        # Hooks
├── tailstore_custom.routing.yml   # Routes
├── tailstore_custom.services.yml  # Services
├── src/
│   ├── Controller/
│   │   └── CartController.php
│   ├── Form/
│   │   └── SearchForm.php
│   └── Service/
│       └── CartService.php
├── templates/
│   └── cart-dropdown.html.twig
└── css/
    └── styles.css
```

## 🎨 Structure d'un thème custom

```
web/themes/custom/tailstore/
├── tailstore.info.yml           # Métadonnées
├── tailstore.libraries.yml      # CSS/JS
├── tailstore.theme              # Hooks de thème
├── logo.svg                     # Logo
├── screenshot.png               # Capture d'écran
├── templates/
│   ├── layout/
│   │   └── page.html.twig
│   ├── node/
│   │   └── node--product.html.twig
│   └── views/
│       └── views-view--products.html.twig
├── css/
│   ├── styles.css
│   └── custom.css
└── js/
    └── script.js
```

## 🔍 Où trouver quoi ?

| Je cherche... | Emplacement |
|---------------|-------------|
| La config de mon site | `config/sync/system.site.yml` |
| Un type de contenu | `config/sync/node.type.*.yml` |
| Les champs d'un contenu | `config/sync/field.field.node.*.yml` |
| Une vue | `config/sync/views.view.*.yml` |
| Les modules installés | `web/modules/contrib/` |
| Mon module custom | `web/modules/custom/` |
| Mon thème | `web/themes/custom/` |
| Les fichiers uploadés | `web/sites/default/files/` |
| La configuration PHP | `web/sites/default/settings.php` |

## ✅ Exercice pratique

1. Explorez la structure de votre projet :
   ```bash
   # Lister les dossiers principaux
   ls -la
   ls -la web/
   ls -la web/modules/
   ```

2. Créez les dossiers pour vos futurs modules et thèmes :
   ```bash
   mkdir -p web/modules/custom
   mkdir -p web/themes/custom
   ```

3. Vérifiez que le dossier de configuration existe :
   ```bash
   ls -la config/sync/
   ```

## 🚀 Étape suivante

Passez à la [Configuration Sync](/etape-1-installation/configuration-sync/) pour maîtriser l'import/export de configuration.
