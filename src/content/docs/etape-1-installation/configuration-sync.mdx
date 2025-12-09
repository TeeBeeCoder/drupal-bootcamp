---
title: Configuration Sync
description: Maîtriser le système de gestion de configuration de Drupal 11
sidebar:
  order: 5
---

import { Steps, Tabs, TabItem } from '@astrojs/starlight/components';

Le système de **Configuration Management** (CMI) de Drupal permet d'exporter, versionner et synchroniser la configuration de votre site entre différents environnements.

## 🤔 Pourquoi le Configuration Sync ?

### Le problème

Sans CMI, la configuration (types de contenu, vues, permissions...) est stockée uniquement en base de données. Cela rend difficile :

- Le déploiement de changements
- Le travail en équipe
- Le retour à une version précédente
- La reproduction d'un environnement

### La solution CMI

Drupal exporte la configuration en fichiers YAML stockés dans `config/sync/`. Ces fichiers peuvent être :

- ✅ Versionnés avec Git
- ✅ Partagés entre développeurs
- ✅ Déployés automatiquement
- ✅ Comparés (diff) facilement

## 📁 Le dossier config/sync

```
config/
└── sync/
    ├── core.extension.yml           # Modules et thèmes actifs
    ├── system.site.yml              # Infos du site
    ├── node.type.product.yml        # Type de contenu "product"
    ├── field.storage.node.field_price.yml
    ├── field.field.node.product.field_price.yml
    ├── views.view.products.yml      # Vue "products"
    ├── user.role.editor.yml         # Rôle "editor"
    └── ...
```

### Structure des fichiers YAML

Exemple `system.site.yml` :

```yaml
uuid: 12345678-1234-1234-1234-123456789012
name: TailStore
mail: contact@tailstore.local
slogan: 'Votre boutique en ligne'
page:
  403: ''
  404: ''
  front: /node
admin_compact_mode: false
weight_select_max: 100
default_langcode: fr
```

## ⌨️ Commandes Drush essentielles

### Exporter la configuration

```bash
drush cex -y
# ou
drush config:export -y
```

Cette commande :
1. Lit la configuration de la base de données
2. La convertit en fichiers YAML
3. L'enregistre dans `config/sync/`

### Importer la configuration

```bash
drush cim -y
# ou
drush config:import -y
```

Cette commande :
1. Lit les fichiers YAML de `config/sync/`
2. Compare avec la configuration en base
3. Applique les différences

### Voir les différences

```bash
# Différences entre fichiers et base de données
drush cst
# ou
drush config:status
```

Exemple de sortie :

```
 Name                        State
 node.type.product          Only in DB
 views.view.products        Different
 system.site                Same
```

| État | Signification |
|------|---------------|
| `Only in DB` | Configuration non exportée |
| `Only in sync` | Configuration en attente d'import |
| `Different` | Modifications non synchronisées |
| `Same` | Synchronisé |

## 🔄 Workflow de développement

<Steps>

1. **Développer localement**
   
   Faites vos modifications via l'interface Drupal (créer un type de contenu, configurer une vue, etc.)

2. **Exporter**
   
   ```bash
   drush cex -y
   ```

3. **Vérifier les changements**
   
   ```bash
   git status
   git diff config/sync/
   ```

4. **Commiter**
   
   ```bash
   git add config/sync/
   git commit -m "feat: add product content type"
   ```

5. **Pousser**
   
   ```bash
   git push
   ```

6. **Sur un autre environnement**
   
   ```bash
   git pull
   drush cim -y
   drush cr
   ```

</Steps>

## 🎯 Exemple pratique

### Créer et exporter un type de contenu

<Steps>

1. **Créer le type de contenu** (via l'interface)
   
   - Aller à `/admin/structure/types/add`
   - Nom : `Article Blog`
   - Identifiant machine : `blog_article`
   - Enregistrer

2. **Ajouter un champ**
   
   - Aller à `/admin/structure/types/manage/blog_article/fields`
   - Ajouter un champ Image

3. **Exporter**
   
   ```bash
   drush cex -y
   ```

4. **Vérifier les fichiers créés**
   
   ```bash
   ls config/sync/ | grep blog
   ```
   
   Résultat :
   ```
   node.type.blog_article.yml
   field.storage.node.field_image.yml
   field.field.node.blog_article.field_image.yml
   core.entity_form_display.node.blog_article.default.yml
   core.entity_view_display.node.blog_article.default.yml
   core.entity_view_display.node.blog_article.teaser.yml
   ```

5. **Commiter**
   
   ```bash
   git add config/sync/
   git commit -m "feat: add blog_article content type with image field"
   ```

</Steps>

## 📋 Configuration vs Contenu

### Ce qui est de la configuration ✅

- Types de contenu
- Définitions de champs
- Vues
- Taxonomies (vocabulaires)
- Rôles et permissions
- Menus (structure)
- Blocs (placement)
- Paramètres du site

### Ce qui n'est PAS de la configuration ❌

- Nœuds (articles, produits...)
- Termes de taxonomie
- Utilisateurs
- Fichiers uploadés
- Liens de menu (contenu)

:::tip[Astuce]
Pour migrer du contenu entre environnements, utilisez le module **Default Content** ou des migrations.
:::

## 🔧 Configuration avancée

### Exporter une configuration spécifique

```bash
# Exporter une seule configuration
drush cex --destination=/tmp/export system.site

# Lister les configurations disponibles
drush config:list | grep views
```

### Importer partiellement

```bash
# Importer une seule configuration
drush config:import --partial --source=/tmp/config
```

### Ignorer certaines configurations

Dans `settings.php` :

```php
// Configurations à ignorer lors de l'import
$settings['config_exclude_modules'] = ['devel', 'kint'];
```

### UUID du site

Chaque site Drupal a un UUID unique dans `system.site.yml`. Si vous clonez un site, vous devrez peut-être synchroniser les UUIDs :

```bash
# Voir l'UUID actuel
drush config:get system.site uuid

# Modifier l'UUID (si nécessaire)
drush config:set system.site uuid "12345678-1234-1234-1234-123456789012"
```

## 🐛 Résolution de problèmes

### "Configuration sync directory not defined"

Dans `settings.php`, vérifiez :

```php
$settings['config_sync_directory'] = '../config/sync';
```

### "Site UUID mismatch"

```bash
# Récupérer l'UUID des fichiers
grep uuid config/sync/system.site.yml

# L'appliquer au site
drush config:set system.site uuid "UUID-ICI" -y
drush cim -y
```

### Conflits de configuration

```bash
# Forcer l'import (écrase les changements locaux)
drush cim -y --diff

# Ou exporter d'abord pour voir les différences
drush cex -y
git diff config/sync/
```

### Erreur d'import

```bash
# Voir les erreurs détaillées
drush cim -y --debug

# Vérifier la syntaxe YAML
cat config/sync/fichier.yml | python -c "import yaml,sys; yaml.safe_load(sys.stdin)"
```

## 📊 Tableau récapitulatif des commandes

| Commande | Alias | Description |
|----------|-------|-------------|
| `drush config:export` | `drush cex` | Exporter la configuration |
| `drush config:import` | `drush cim` | Importer la configuration |
| `drush config:status` | `drush cst` | Voir les différences |
| `drush config:get` | `drush cget` | Lire une configuration |
| `drush config:set` | `drush cset` | Modifier une configuration |
| `drush config:list` | | Lister les configurations |

## ✅ Exercice pratique

1. Exportez la configuration actuelle :
   ```bash
   drush cex -y
   ```

2. Modifiez le nom du site via l'interface :
   - Aller à `/admin/config/system/site-information`
   - Changer le nom en "TailStore - E-Commerce"

3. Vérifiez les différences :
   ```bash
   drush cst
   ```

4. Exportez à nouveau :
   ```bash
   drush cex -y
   ```

5. Vérifiez le fichier modifié :
   ```bash
   cat config/sync/system.site.yml | grep name
   ```

6. Commitez :
   ```bash
   git add config/sync/system.site.yml
   git commit -m "chore: update site name"
   ```

## 🚀 Étape suivante

Passez à l'[Interface d'administration](/etape-1-installation/interface-admin/) pour découvrir les principales sections de l'admin Drupal.
