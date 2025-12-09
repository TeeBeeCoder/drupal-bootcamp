---
title: Gestion des Modules
description: Installer, activer et gérer les modules contributifs Drupal
sidebar:
  order: 1
---

import { Tabs, TabItem, Aside, Steps } from '@astrojs/starlight/components';

## 📦 Installation avec Composer

### Pourquoi Composer ?

**Composer** est le gestionnaire de dépendances PHP standard. Il :

- Gère les dépendances automatiquement
- Permet les mises à jour faciles
- Assure la cohérence des versions
- Génère l'autoloading

<Aside type="caution" title="Important">
N'installez **jamais** de modules manuellement en téléchargeant depuis drupal.org. Utilisez toujours Composer.
</Aside>

### Commandes essentielles

```bash
# Rechercher un module
ddev composer search drupal/pathauto

# Voir les infos d'un module
ddev composer show drupal/pathauto --all

# Installer un module
ddev composer require drupal/pathauto

# Installer une version spécifique
ddev composer require drupal/pathauto:^1.12

# Désinstaller un module
ddev composer remove drupal/pathauto
```

## 🔌 Activation avec Drush

### Activer un module

```bash
# Activer un module
ddev drush en pathauto -y

# Activer plusieurs modules
ddev drush en pathauto metatag webform -y

# Vérifier le statut
ddev drush pm:list --filter=pathauto
```

### Désactiver un module

```bash
# Désinstaller (désactive + supprime config)
ddev drush pm:uninstall pathauto -y

# Puis supprimer les fichiers
ddev composer remove drupal/pathauto
```

<Aside type="note" title="Ordre important">
Pour désinstaller : d'abord `drush pm:uninstall`, puis `composer remove`.
</Aside>

## 📋 Liste des modules

### Voir tous les modules

```bash
# Tous les modules
ddev drush pm:list

# Modules activés
ddev drush pm:list --status=enabled

# Modules désactivés
ddev drush pm:list --status=disabled

# Filtrer par nom
ddev drush pm:list --filter=token
```

### Format tableau

```bash
ddev drush pm:list --format=table
```

Exemple de sortie :

```
+-------------------+-------------------+--------+---------+
| Package           | Name              | Status | Version |
+-------------------+-------------------+--------+---------+
| Core              | node              | Enabled| 11.1.0  |
| Core              | views             | Enabled| 11.1.0  |
| Token             | token             | Enabled| 1.15.0  |
| Pathauto          | pathauto          | Enabled| 1.13.0  |
+-------------------+-------------------+--------+---------+
```

## 🔄 Mises à jour

### Vérifier les mises à jour disponibles

```bash
# Voir les modules outdated
ddev composer outdated drupal/*

# Version détaillée
ddev composer outdated drupal/* --direct
```

### Appliquer une mise à jour

<Steps>

1. **Mettre à jour avec Composer**

   ```bash
   ddev composer update drupal/pathauto --with-dependencies
   ```

2. **Exécuter les mises à jour de base de données**

   ```bash
   ddev drush updatedb -y
   ```

3. **Vider le cache**

   ```bash
   ddev drush cr
   ```

4. **Exporter la configuration**

   ```bash
   ddev drush cex -y
   ```

</Steps>

### Mise à jour globale

```bash
# Mettre à jour tous les modules Drupal
ddev composer update drupal/* --with-dependencies
ddev drush updatedb -y
ddev drush cr
ddev drush cex -y
```

## 🔒 Vérification de sécurité

### Audit des vulnérabilités

```bash
# Vérifier les failles connues
ddev composer audit

# Format JSON pour CI/CD
ddev composer audit --format=json
```

### Alertes de sécurité Drupal

```bash
# Dans l'interface admin
# Rapports → Mises à jour disponibles → Onglet Sécurité
```

## 📁 Structure des fichiers

### Après installation

```
web/modules/
├── contrib/                    # Modules contributifs
│   ├── pathauto/
│   │   ├── pathauto.info.yml
│   │   ├── pathauto.module
│   │   └── ...
│   └── metatag/
│       └── ...
└── custom/                     # Vos modules
    └── tailstore_cart/
```

### Fichier composer.json

```json
{
    "require": {
        "drupal/core-recommended": "^11.1",
        "drupal/pathauto": "^1.13",
        "drupal/metatag": "^2.0",
        "drupal/webform": "^6.2",
        "drupal/admin_toolbar": "^3.5",
        "drupal/token": "^1.15"
    }
}
```

### Fichier composer.lock

Le `composer.lock` verrouille les versions exactes. **Commitez-le toujours** !

```bash
git add composer.lock
git commit -m "chore: update dependencies"
```

## ⚙️ Configuration des modules

### Exporter après configuration

```bash
# Exporter toute la config
ddev drush cex -y

# Voir les fichiers créés
ls -la config/sync/
```

### Importer la configuration

```bash
# Sur un autre environnement
ddev drush cim -y
```

## 🧪 Environnement de développement

### Modules de dev

```bash
# Installer les modules de dev
ddev composer require --dev drupal/devel drupal/webprofiler

# Activer
ddev drush en devel webprofiler -y
```

<Aside type="tip" title="--dev">
Utilisez `--dev` pour les modules de développement. Ils ne seront pas déployés en production.
</Aside>

### Activer uniquement en local

Dans `settings.local.php` :

```php
// Activer les modules de dev
$config['devel']['disable'] = FALSE;

// OU avec drush seulement en local
// ddev drush en devel -y
```

## 📊 Dépendances

### Voir l'arbre de dépendances

```bash
# Dépendances d'un module
ddev composer depends drupal/token

# Pourquoi un package est installé
ddev composer why drupal/ctools
```

### Conflits de versions

```bash
# Voir les conflits
ddev composer why-not drupal/pathauto:^2.0
```

## ✅ Checklist

- [ ] Composer configuré et fonctionnel
- [ ] Modules installés via Composer
- [ ] Drush disponible pour activation
- [ ] Mises à jour vérifiées
- [ ] Configuration exportée
- [ ] composer.lock commité

## 🔜 Prochaine étape

Les bases sont en place ! Configurons [Pathauto](/etape-7-modules/pathauto/) pour des URLs automatiques.
