---
title: Étape 7 - Modules Contributifs
description: Installer et configurer les modules essentiels de la communauté Drupal
sidebar:
  order: 0
---

import { Card, CardGrid, Aside } from '@astrojs/starlight/components';

<div class="duration-badge">⏱️ Durée estimée : 4h</div>

## 🎯 Objectifs de cette étape

À la fin de cette étape, vous serez capable de :

- ✅ Installer des modules avec Composer
- ✅ Configurer les URL automatiques (Pathauto)
- ✅ Améliorer le SEO (Metatag)
- ✅ Créer des formulaires (Webform)
- ✅ Optimiser l'administration (Admin Toolbar)

## 📋 Prérequis

- [x] Étape 6 terminée
- [x] Site fonctionnel avec thème TailStore
- [x] Accès Composer disponible

## 📚 Sommaire

<CardGrid>
  <Card title="1. Gestion des modules" icon="setting">
    Installer et gérer les modules contributifs.
    [Voir →](/etape-7-modules/gestion-modules/)
  </Card>
  <Card title="2. Pathauto" icon="document">
    URLs automatiques et alias de chemin.
    [Voir →](/etape-7-modules/pathauto/)
  </Card>
  <Card title="3. Metatag" icon="magnifier">
    SEO et métadonnées.
    [Voir →](/etape-7-modules/metatag/)
  </Card>
  <Card title="4. Webform" icon="pencil">
    Création de formulaires.
    [Voir →](/etape-7-modules/webform/)
  </Card>
  <Card title="5. Autres modules" icon="puzzle">
    Admin Toolbar, Token, etc.
    [Voir →](/etape-7-modules/autres-modules/)
  </Card>
</CardGrid>

## 🧩 Écosystème Drupal

### Types de modules

| Type | Description | Exemple |
|------|-------------|---------|
| **Core** | Inclus dans Drupal | Node, Views, User |
| **Contrib** | Communauté | Pathauto, Metatag |
| **Custom** | Développés par vous | TailStore Cart |

### Où trouver les modules ?

- **[Drupal.org/project](https://www.drupal.org/project/project_module)** : Dépôt officiel
- **[Drupal.org/docs](https://www.drupal.org/docs/extending-drupal)** : Documentation
- **[GitHub](https://github.com)** : Certains modules (rare)

<Aside type="caution" title="Sécurité">
Installez uniquement des modules depuis **drupal.org**. Vérifiez :
- Le statut de maintenance
- La compatibilité Drupal 11
- Les advisory de sécurité
</Aside>

## 📦 Modules à installer

### Modules essentiels TailStore

| Module | Usage | Drupal.org |
|--------|-------|------------|
| **pathauto** | URLs automatiques | [lien](https://drupal.org/project/pathauto) |
| **metatag** | SEO métadonnées | [lien](https://drupal.org/project/metatag) |
| **webform** | Formulaires | [lien](https://drupal.org/project/webform) |
| **admin_toolbar** | Admin amélioré | [lien](https://drupal.org/project/admin_toolbar) |
| **token** | Jetons dynamiques | [lien](https://drupal.org/project/token) |
| **redirect** | Redirections 301 | [lien](https://drupal.org/project/redirect) |
| **simple_sitemap** | Sitemap XML | [lien](https://drupal.org/project/simple_sitemap) |

### Modules de développement

| Module | Usage | Drupal.org |
|--------|-------|------------|
| **devel** | Debug et génération | [lien](https://drupal.org/project/devel) |
| **webprofiler** | Performance | [lien](https://drupal.org/project/webprofiler) |
| **stage_file_proxy** | Fichiers distants | [lien](https://drupal.org/project/stage_file_proxy) |

## 🔧 Workflow d'installation

### Avec Composer (recommandé)

```bash
# Installer le module
ddev composer require drupal/pathauto

# Activer le module
ddev drush en pathauto -y

# Vérifier
ddev drush pm:list --filter=pathauto
```

### Interface admin

1. Télécharger depuis drupal.org
2. **Étendre** → **Installer un nouveau module**
3. Uploader le fichier .tar.gz
4. Activer dans la liste

<Aside type="tip" title="Conseil">
Préférez **toujours** Composer pour les installations. Cela gère automatiquement les dépendances.
</Aside>

## 📊 Statuts des modules

| Statut | Signification |
|--------|---------------|
| 🟢 **Stable** | Prêt pour production |
| 🟡 **Beta** | Quasi-stable, quelques bugs |
| 🟠 **Alpha** | En développement actif |
| 🔴 **Dev** | Instable, tests uniquement |

### Vérifier la compatibilité

```bash
# Voir les versions disponibles
ddev composer show drupal/pathauto --all

# Installer une version spécifique
ddev composer require drupal/pathauto:^1.12
```

## ⚠️ Gestion des dépendances

Les modules ont souvent des dépendances :

```
pathauto
├── token (requis)
└── ctools (optionnel)
```

Composer les installe automatiquement :

```bash
ddev composer require drupal/pathauto
# Installe aussi: drupal/token, drupal/ctools
```

## 🔄 Mises à jour

### Vérifier les mises à jour

```bash
# Voir les updates disponibles
ddev composer outdated drupal/*

# Interface admin
# Rapports → Mises à jour disponibles
```

### Appliquer les mises à jour

```bash
# Mettre à jour un module
ddev composer update drupal/pathauto

# Mettre à jour tous les modules Drupal
ddev composer update drupal/* --with-dependencies

# Exécuter les mises à jour de base de données
ddev drush updatedb -y
ddev drush cr
```

## 🔒 Sécurité

### Recevoir les alertes

1. S'abonner aux [Security advisories](https://www.drupal.org/security)
2. Configurer les notifications email
3. Vérifier régulièrement

### Modules à éviter

- ❌ Modules abandonnés (pas de commit > 1 an)
- ❌ Modules non compatibles Drupal 10/11
- ❌ Modules avec issues de sécurité non résolues

## 📁 Structure après installation

```
web/
├── modules/
│   ├── contrib/           # Modules installés par Composer
│   │   ├── pathauto/
│   │   ├── metatag/
│   │   ├── webform/
│   │   ├── admin_toolbar/
│   │   └── token/
│   └── custom/            # Vos modules
│       └── tailstore_cart/
└── sites/default/
    └── config/sync/       # Config exportée des modules
```

## 🚀 C'est parti !

Commencez par [Gestion des modules](/etape-7-modules/gestion-modules/).
