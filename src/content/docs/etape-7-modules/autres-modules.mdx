---
title: Autres Modules Utiles
description: Admin Toolbar, Simple Sitemap, et autres modules pour améliorer TailStore
sidebar:
  order: 5
---

import { Tabs, TabItem, Aside, Card, CardGrid } from '@astrojs/starlight/components';

## 🧰 Modules d'administration

### Admin Toolbar

Améliore la barre d'outils avec des menus déroulants.

```bash
ddev composer require drupal/admin_toolbar
ddev drush en admin_toolbar admin_toolbar_tools -y
```

**Sous-modules :**

| Module | Fonctionnalité |
|--------|----------------|
| `admin_toolbar` | Menus déroulants |
| `admin_toolbar_tools` | Raccourcis (flush cache, cron) |
| `admin_toolbar_search` | Recherche dans le menu |

### Gin Admin Theme

Thème d'administration moderne et accessible.

```bash
ddev composer require drupal/gin
ddev drush theme:enable gin -y
ddev drush config-set system.theme admin gin -y
```

<Aside type="tip" title="Recommandé">
Gin offre une expérience admin bien meilleure que Seven/Claro.
</Aside>

### Coffee

Navigation rapide avec raccourci clavier (Alt+D).

```bash
ddev composer require drupal/coffee
ddev drush en coffee -y
```

Tapez le nom d'une page admin pour y accéder instantanément.

## 🔍 SEO & Performance

### Simple Sitemap

Génère un sitemap XML pour les moteurs de recherche.

```bash
ddev composer require drupal/simple_sitemap
ddev drush en simple_sitemap -y
```

**Configuration :**

1. **Configuration** → **Recherche et métadonnées** → **Simple XML Sitemap**

2. Activer par type de contenu :
   ```yaml
   Produit: Inclure (priorité 0.8)
   Article: Inclure (priorité 0.6)
   Page: Inclure (priorité 0.5)
   ```

3. Générer : `ddev drush simple-sitemap:generate`

4. Accès : `/sitemap.xml`

### Redirect

Gère les redirections 301/302.

```bash
ddev composer require drupal/redirect
ddev drush en redirect -y
```

**Fonctionnalités :**
- Redirections automatiques quand URL change
- Import/export de redirections
- Statistiques d'utilisation

### Google Tag

Intégration Google Analytics / Tag Manager.

```bash
ddev composer require drupal/google_tag
ddev drush en google_tag -y
```

Configuration :
1. **Configuration** → **Système** → **Google Tag**
2. Ajouter le container ID : `GTM-XXXXXX`

## 📁 Gestion des médias

### Media Library Form Element

Améliore le sélecteur de médias.

```bash
ddev composer require drupal/media_library_form_element
ddev drush en media_library_form_element -y
```

### Focal Point

Définit le point focal des images pour le recadrage.

```bash
ddev composer require drupal/focal_point
ddev drush en focal_point -y
```

Permet de s'assurer que le sujet principal est toujours visible.

### Image Optimize

Optimise automatiquement les images uploadées.

```bash
ddev composer require drupal/imageapi_optimize drupal/imageapi_optimize_webp
ddev drush en imageapi_optimize imageapi_optimize_webp -y
```

Configuration :
1. Créer un pipeline d'optimisation
2. Appliquer aux styles d'images

## 🔐 Sécurité

### Security Kit

Protection contre les attaques courantes.

```bash
ddev composer require drupal/seckit
ddev drush en seckit -y
```

**Protections :**
- XSS (Content Security Policy)
- Clickjacking (X-Frame-Options)
- CSRF

### Password Policy

Renforce les règles de mots de passe.

```bash
ddev composer require drupal/password_policy
ddev drush en password_policy -y
```

**Règles :**
- Longueur minimale
- Caractères spéciaux obligatoires
- Historique des mots de passe

### Username Enumeration Prevention

Empêche la détection des noms d'utilisateurs.

```bash
ddev composer require drupal/username_enumeration_prevention
ddev drush en username_enumeration_prevention -y
```

## 🛠️ Développement

### Devel

Outils de développement essentiels.

```bash
ddev composer require --dev drupal/devel
ddev drush en devel devel_generate -y
```

**Fonctionnalités :**
- Génération de contenu test
- Affichage des variables (dpm, kint)
- Inspection des routes

### Webprofiler

Barre de debug façon Symfony.

```bash
ddev composer require --dev drupal/webprofiler
ddev drush en webprofiler -y
```

**Informations affichées :**
- Temps de chargement
- Requêtes SQL
- Cache hits/misses
- Mémoire utilisée

### Stage File Proxy

Télécharge les fichiers depuis la production.

```bash
ddev composer require --dev drupal/stage_file_proxy
ddev drush en stage_file_proxy -y
```

Configuration dans `settings.local.php` :

```php
$config['stage_file_proxy.settings']['origin'] = 'https://www.production-site.com';
$config['stage_file_proxy.settings']['hotlink'] = FALSE;
```

<Aside type="caution" title="Dev only">
N'activez **jamais** ces modules en production !
</Aside>

## 📧 Communication

### SMTP / Symfony Mailer

Configuration avancée des emails.

```bash
ddev composer require drupal/symfony_mailer
ddev drush en symfony_mailer -y
```

Configuration pour Gmail/SMTP :

```yaml
Hôte: smtp.gmail.com
Port: 587
Chiffrement: TLS
Authentification: Oui
```

### Mailsystem

Permet de configurer différents expéditeurs par module.

```bash
ddev composer require drupal/mailsystem
ddev drush en mailsystem -y
```

## 📊 Analytics & Stats

### Statistics

Module core pour les statistiques de visites.

```bash
ddev drush en statistics -y
```

### Matomo Analytics

Alternative à Google Analytics, respectueuse de la vie privée.

```bash
ddev composer require drupal/matomo
ddev drush en matomo -y
```

## 🌐 Multilingue

Les modules multilingues sont inclus dans le core :

```bash
ddev drush en language content_translation locale -y
```

**Configuration :**
1. **Configuration** → **Langues régionales** → **Langues**
2. Ajouter les langues (FR, EN)
3. Configurer la traduction par type de contenu

## 📦 Récapitulatif TailStore

### Modules recommandés

<CardGrid>
  <Card title="Essentiels" icon="check">
    - pathauto
    - metatag
    - webform
    - redirect
    - simple_sitemap
  </Card>
  <Card title="Admin" icon="setting">
    - admin_toolbar
    - gin
    - coffee
  </Card>
  <Card title="SEO" icon="magnifier">
    - metatag_open_graph
    - metatag_twitter_cards
    - google_tag
  </Card>
  <Card title="Dev" icon="puzzle">
    - devel
    - webprofiler
    - stage_file_proxy
  </Card>
</CardGrid>

### Installation complète

```bash
# Modules production
ddev composer require \
  drupal/pathauto \
  drupal/metatag \
  drupal/webform \
  drupal/redirect \
  drupal/simple_sitemap \
  drupal/admin_toolbar \
  drupal/gin \
  drupal/token \
  drupal/focal_point \
  drupal/honeypot

# Modules dev
ddev composer require --dev \
  drupal/devel \
  drupal/webprofiler \
  drupal/stage_file_proxy

# Activer tout
ddev drush en pathauto metatag metatag_open_graph metatag_twitter_cards \
  webform webform_ui redirect simple_sitemap admin_toolbar admin_toolbar_tools \
  token focal_point honeypot -y

ddev drush theme:enable gin -y
ddev drush config-set system.theme admin gin -y
```

## ✅ Checklist finale

### Production

- [ ] Pathauto configuré
- [ ] Metatag configuré
- [ ] Webform avec formulaire contact
- [ ] Simple Sitemap généré
- [ ] Redirect activé
- [ ] Honeypot anti-spam
- [ ] Admin Toolbar installé
- [ ] Gin theme admin

### Développement

- [ ] Devel activé (local uniquement)
- [ ] Webprofiler activé (local uniquement)
- [ ] Stage File Proxy configuré

## 🔜 Prochaine étape

Les modules essentiels sont en place ! Passons aux [exercices](/etape-7-modules/exercices/) pour mettre tout en pratique.
