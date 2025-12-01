---
title: Prérequis techniques
description: Configuration requise et outils à installer avant de commencer la formation
sidebar:
  order: 2
---

import { Tabs, TabItem } from '@astrojs/starlight/components';

## 💻 Configuration système

### Matériel minimum

| Composant | Minimum | Recommandé |
|-----------|---------|------------|
| **RAM** | 4 Go | 8 Go+ |
| **Disque** | 10 Go libres | 20 Go+ SSD |
| **Processeur** | Dual-core | Quad-core+ |

### Systèmes d'exploitation supportés

- ✅ **macOS** 12+ (Monterey ou supérieur)
- ✅ **Windows** 10/11 (avec WSL2 pour DDEV)
- ✅ **Linux** Ubuntu 20.04+, Debian 11+, Fedora 36+

## 🔧 Logiciels requis

### 1. PHP 8.3+

Drupal 11 nécessite PHP 8.3 ou supérieur.

<Tabs>
  <TabItem label="macOS">
    ```bash
    # Avec Homebrew
    brew install php@8.3
    
    # Vérifier la version
    php -v
    ```
  </TabItem>
  <TabItem label="Windows">
    ```powershell
    # Télécharger depuis https://windows.php.net/download
    # Ou utiliser XAMPP qui inclut PHP
    
    # Vérifier la version
    php -v
    ```
  </TabItem>
  <TabItem label="Linux">
    ```bash
    # Ubuntu/Debian
    sudo apt update
    sudo apt install php8.3 php8.3-cli php8.3-common php8.3-mysql php8.3-xml php8.3-curl php8.3-gd php8.3-mbstring php8.3-zip
    
    # Vérifier la version
    php -v
    ```
  </TabItem>
</Tabs>

### 2. Composer 2.x

Gestionnaire de dépendances PHP indispensable.

<Tabs>
  <TabItem label="macOS">
    ```bash
    brew install composer
    
    # Vérifier
    composer --version
    ```
  </TabItem>
  <TabItem label="Windows">
    ```powershell
    # Télécharger l'installateur depuis https://getcomposer.org/download/
    # Exécuter Composer-Setup.exe
    
    composer --version
    ```
  </TabItem>
  <TabItem label="Linux">
    ```bash
    curl -sS https://getcomposer.org/installer | php
    sudo mv composer.phar /usr/local/bin/composer
    
    composer --version
    ```
  </TabItem>
</Tabs>

### 3. Git

Pour le versionnement et la récupération du code.

<Tabs>
  <TabItem label="macOS">
    ```bash
    # Généralement pré-installé, sinon :
    brew install git
    
    git --version
    ```
  </TabItem>
  <TabItem label="Windows">
    ```powershell
    # Télécharger depuis https://git-scm.com/download/win
    # Installer avec les options par défaut
    
    git --version
    ```
  </TabItem>
  <TabItem label="Linux">
    ```bash
    sudo apt install git
    
    git --version
    ```
  </TabItem>
</Tabs>

### 4. Environnement de développement local

Choisissez **DDEV** (recommandé) ou **XAMPP** :

<Tabs>
  <TabItem label="DDEV (Recommandé)">
    DDEV utilise Docker pour créer des environnements isolés.

    **Prérequis DDEV :**
    - Docker Desktop (macOS/Windows) ou Docker Engine (Linux)
    - 4 Go RAM minimum pour Docker

    ```bash
    # macOS avec Homebrew
    brew install ddev/ddev/ddev
    
    # Windows avec Chocolatey
    choco install ddev
    
    # Linux
    curl -fsSL https://raw.githubusercontent.com/ddev/ddev/master/scripts/install_ddev.sh | bash
    
    # Vérifier
    ddev version
    ```

    :::tip[Pourquoi DDEV ?]
    - Environnement isolé et reproductible
    - Configuration automatique (PHP, MySQL, Apache/Nginx)
    - Commandes Drush intégrées
    - Facile à partager entre développeurs
    :::
  </TabItem>
  <TabItem label="XAMPP">
    XAMPP est une solution tout-en-un plus simple.

    1. Télécharger depuis [apachefriends.org](https://www.apachefriends.org/)
    2. Choisir la version avec **PHP 8.3**
    3. Installer avec les composants : Apache, MySQL, PHP
    4. Démarrer les services Apache et MySQL

    :::caution[Attention]
    Assurez-vous que XAMPP utilise PHP 8.3+. Les versions plus anciennes peuvent inclure PHP 8.1 ou 8.2.
    :::
  </TabItem>
</Tabs>

### 5. Éditeur de code

Nous recommandons **Visual Studio Code** avec les extensions suivantes :

```bash
# Extensions recommandées
code --install-extension bmewburn.vscode-intelephense-client  # PHP IntelliSense
code --install-extension whatwedo.twig                         # Twig syntax
code --install-extension bradlc.vscode-tailwindcss            # Tailwind CSS
code --install-extension esbenp.prettier-vscode               # Formatage
```

Autres éditeurs compatibles :
- PHPStorm (payant, excellent support Drupal)
- Sublime Text
- Atom

### 6. Navigateur web

Navigateur moderne avec outils de développement :
- ✅ Chrome / Chromium
- ✅ Firefox
- ✅ Edge
- ✅ Safari

## 📦 Vérification de l'installation

Exécutez ces commandes pour vérifier que tout est prêt :

```bash
# PHP
php -v
# Devrait afficher : PHP 8.3.x

# Composer
composer --version
# Devrait afficher : Composer version 2.x.x

# Git
git --version
# Devrait afficher : git version 2.x.x

# DDEV (si utilisé)
ddev version
# Devrait afficher la version de DDEV et Docker
```

## 🌐 Accès réseau

Assurez-vous d'avoir accès à :
- **packagist.org** - Dépôt Composer
- **drupal.org** - Modules et thèmes Drupal
- **github.com** - Code source et templates

## ✅ Checklist finale

Avant de commencer l'Étape 1, vérifiez :

- [ ] PHP 8.3+ installé et fonctionnel
- [ ] Composer 2.x installé
- [ ] Git installé
- [ ] DDEV ou XAMPP prêt
- [ ] Éditeur de code configuré
- [ ] Navigateur moderne disponible
- [ ] Connexion internet stable

## 🚀 Tout est prêt ?

Passez à l'[Étape 1 - Installation](/etape-1-installation/) pour installer Drupal 11 !
