---
title: Exercices - Installation
description: Exercices pratiques pour valider les acquis de l'Étape 1
sidebar:
  order: 7
---

import { Steps, Tabs, TabItem } from '@astrojs/starlight/components';

## 🎯 Objectifs des exercices

Ces exercices vous permettent de valider vos acquis sur :
- L'installation d'un environnement Drupal
- L'utilisation de Composer
- Le système de configuration sync
- La navigation dans l'interface d'administration

## 📝 Exercice 1 : Installation complète

**Objectif** : Créer un nouveau projet Drupal 11 nommé "boutique"

<Steps>

1. Créez un nouveau dossier et initialisez DDEV (ou configurez XAMPP)
2. Installez Drupal 11 avec Composer
3. Lancez l'installation avec Drush en français
4. Configurez le nom du site comme "Ma Boutique"
5. Vérifiez que vous pouvez accéder à l'administration

</Steps>

<details>
<summary>💡 Indices</summary>

```bash
# Les commandes clés
mkdir boutique && cd boutique
ddev config --project-type=drupal --php-version=8.3 --docroot=web
ddev start
ddev composer create drupal/recommended-project:^11.0 --no-install
ddev composer install
ddev drush site:install standard --site-name="Ma Boutique" --locale=fr -y
```

</details>

---

## 📝 Exercice 2 : Gestion des modules

**Objectif** : Installer et configurer les modules essentiels

Installez avec Composer et activez :
1. Admin Toolbar (navigation améliorée)
2. Pathauto (URLs automatiques)
3. Token (jetons)
4. Devel (uniquement en dev)

Vérifiez que les modules apparaissent dans l'interface.

<details>
<summary>💡 Solution</summary>

```bash
# Installation
composer require drupal/admin_toolbar drupal/pathauto drupal/token
composer require --dev drupal/devel

# Activation
drush en admin_toolbar admin_toolbar_tools pathauto token devel -y
drush cr
```

Vérification :
- Aller à `/admin/modules`
- Les modules doivent être cochés et dans la section appropriée

</details>

---

## 📝 Exercice 3 : Configuration Sync

**Objectif** : Maîtriser l'export et l'import de configuration

<Steps>

1. Modifiez le slogan du site via l'interface (`/admin/config/system/site-information`)
2. Vérifiez les différences avec `drush cst`
3. Exportez la configuration
4. Vérifiez le fichier YAML modifié
5. Commitez les changements

</Steps>

<details>
<summary>💡 Solution</summary>

```bash
# Après avoir modifié le slogan dans l'interface

# Voir les différences
drush cst
# Devrait afficher : system.site - Different

# Exporter
drush cex -y

# Vérifier le fichier
cat config/sync/system.site.yml | grep slogan

# Commiter
git add config/sync/system.site.yml
git commit -m "chore: update site slogan"
```

</details>

---

## 📝 Exercice 4 : Créer un rôle utilisateur

**Objectif** : Créer un rôle "Éditeur" avec des permissions basiques

<Steps>

1. Créez un rôle "Éditeur" (`/admin/people/roles/add`)
2. Attribuez les permissions suivantes :
   - Accéder à la page d'administration
   - Voir le contenu publié
   - Créer des articles
   - Modifier ses propres articles
3. Exportez la configuration
4. Vérifiez les fichiers créés

</Steps>

<details>
<summary>💡 Solution</summary>

1. Aller à `/admin/people/roles/add`
   - Label : Éditeur
   - Machine name : editor

2. Aller à `/admin/people/permissions`
   - Cocher les permissions pour le rôle "Éditeur"

3. Exporter :
   ```bash
   drush cex -y
   ```

4. Vérifier :
   ```bash
   ls config/sync/ | grep editor
   # user.role.editor.yml
   
   cat config/sync/user.role.editor.yml
   ```

</details>

---

## 📝 Exercice 5 : Résolution de problèmes

**Objectif** : Diagnostiquer et résoudre un problème courant

Scénario : Le rapport de statut (`/admin/reports/status`) affiche un avertissement sur les "Trusted host patterns".

1. Identifiez le problème
2. Corrigez-le dans `settings.php`
3. Vérifiez que l'avertissement disparaît

<details>
<summary>💡 Solution</summary>

1. L'avertissement indique que les patterns de trusted hosts ne sont pas configurés

2. Dans `web/sites/default/settings.php`, ajoutez :
   ```php
   $settings['trusted_host_patterns'] = [
     '^tailstore\.ddev\.site$',
     '^localhost$',
     '^127\.0\.0\.1$',
   ];
   ```

3. Videz le cache et vérifiez :
   ```bash
   drush cr
   # Rafraîchir /admin/reports/status
   ```

</details>

---

## 📝 Exercice 6 : Workflow Git complet

**Objectif** : Pratiquer le workflow de développement avec Git

<Steps>

1. Vérifiez que vous êtes sur la branche `main`
2. Créez une branche `feature/site-config`
3. Modifiez les informations du site (nom, slogan, email)
4. Exportez la configuration
5. Commitez les changements
6. Revenez sur `main`
7. Fusionnez la branche

</Steps>

<details>
<summary>💡 Solution</summary>

```bash
# 1. Vérifier la branche
git branch

# 2. Créer une branche
git checkout -b feature/site-config

# 3. Modifier dans l'interface : /admin/config/system/site-information

# 4. Exporter
drush cex -y

# 5. Commiter
git add config/sync/system.site.yml
git commit -m "feat: update site configuration"

# 6. Revenir sur main
git checkout main

# 7. Fusionner
git merge feature/site-config

# Optionnel : supprimer la branche
git branch -d feature/site-config
```

</details>

---

## 🏆 Exercice bonus : Créer un script d'installation

**Objectif** : Automatiser l'installation d'un nouveau projet

Créez un script bash `install-drupal.sh` qui :

1. Prend le nom du projet en paramètre
2. Crée le projet avec DDEV
3. Installe Drupal
4. Installe les modules de base
5. Exporte la configuration initiale

<details>
<summary>💡 Solution</summary>

```bash
#!/bin/bash

# Usage: ./install-drupal.sh nom-du-projet

PROJECT_NAME=$1

if [ -z "$PROJECT_NAME" ]; then
    echo "Usage: ./install-drupal.sh nom-du-projet"
    exit 1
fi

# Créer le projet
mkdir $PROJECT_NAME && cd $PROJECT_NAME

# Configurer DDEV
ddev config --project-type=drupal --php-version=8.3 --docroot=web
ddev start

# Installer Drupal
ddev composer create drupal/recommended-project:^11.0 --no-install
ddev composer install

# Installer le site
ddev drush site:install standard \
    --site-name="$PROJECT_NAME" \
    --account-name=admin \
    --account-pass=admin \
    --locale=fr \
    -y

# Installer les modules de base
ddev composer require drupal/admin_toolbar drupal/pathauto drupal/token drupal/webform drupal/metatag
ddev drush en admin_toolbar admin_toolbar_tools pathauto token webform metatag -y

# Vider le cache
ddev drush cr

# Exporter la configuration
ddev drush cex -y

# Initialiser Git
git init
git add -A
git commit -m "feat: initial Drupal 11 installation"

echo "✅ Installation terminée !"
echo "🌐 Accédez au site : $(ddev describe -j | jq -r '.raw.primary_url')"
echo "👤 Admin : admin / admin"
```

</details>

---

## ✅ Checklist de validation

Avant de passer à l'Étape 2, assurez-vous de pouvoir :

- [ ] Créer un projet Drupal 11 avec DDEV ou XAMPP
- [ ] Utiliser Composer pour installer des modules
- [ ] Exporter et importer la configuration avec Drush
- [ ] Naviguer dans l'interface d'administration
- [ ] Vérifier le rapport de statut
- [ ] Créer des commits Git avec la configuration

## 🚀 Prêt pour la suite ?

Passez à l'[Étape 2 - Types de Contenu](/etape-2-contenus/) pour apprendre à modéliser le contenu de votre site TailStore.
