---
title: Menus de navigation
description: Créer et gérer les menus dans Drupal
sidebar:
  order: 1
---

import { Tabs, TabItem, Aside, Steps } from '@astrojs/starlight/components';

## 📋 Les menus dans Drupal

Un **menu** est une collection de liens organisés hiérarchiquement. Drupal fournit plusieurs menus par défaut :

| Menu | Machine name | Usage |
|------|--------------|-------|
| Main navigation | `main` | Navigation principale |
| Footer | `footer` | Liens de pied de page |
| Administration | `admin` | Menu admin (toolbar) |
| User account menu | `account` | Connexion, Mon compte |
| Tools | `tools` | Outils divers |

## 🎯 Créer le menu principal

### Accéder à la gestion des menus

1. **Structure** → **Menus**
2. Ou directement : `/admin/structure/menu`

### Configurer le menu Main

<Steps>

1. Cliquez sur **Edit menu** à côté de "Main navigation"

2. Vous pouvez modifier :
   - **Title** : `Navigation principale`
   - **Description** : `Menu principal du site`

3. Cliquez sur **Save**

</Steps>

### Ajouter les liens

Cliquez sur **Add link** pour chaque élément :

#### Lien "Accueil"

| Champ | Valeur |
|-------|--------|
| Menu link title | `Accueil` |
| Link | `<front>` |
| Enabled | `☑` |
| Description | `Page d'accueil` |
| Show as expanded | `☐` |
| Weight | `0` |

<Aside type="tip" title="Tokens spéciaux">
- `<front>` : Page d'accueil
- `<nolink>` : Élément sans lien (parent)
- `/path` : Chemin interne
- `https://...` : Lien externe
</Aside>

#### Lien "Boutique"

| Champ | Valeur |
|-------|--------|
| Menu link title | `Boutique` |
| Link | `/shop` |
| Weight | `1` |

#### Lien "Blog"

| Champ | Valeur |
|-------|--------|
| Menu link title | `Blog` |
| Link | `/blog` |
| Weight | `2` |

#### Lien "Contact"

| Champ | Valeur |
|-------|--------|
| Menu link title | `Contact` |
| Link | `/contact` |
| Weight | `3` |

### Résultat

```
Main navigation
├── Accueil        → /
├── Boutique       → /shop
├── Blog           → /blog
└── Contact        → /contact
```

## 📁 Menu avec sous-menus

### Créer une hiérarchie

Pour le menu "Boutique" avec des catégories :

1. Éditez le lien "Boutique"
2. Cochez **Show as expanded**
3. Ajoutez des liens enfants :

| Titre | Lien | Parent |
|-------|------|--------|
| Tous les produits | `/shop` | Boutique |
| Hommes | `/category/hommes` | Boutique |
| Femmes | `/category/femmes` | Boutique |
| Accessoires | `/category/accessoires` | Boutique |
| Promotions | `/promotions` | Boutique |

### Réorganiser par glisser-déposer

1. Dans la liste des liens du menu
2. Utilisez les croix (✥) pour déplacer
3. Indentez pour créer la hiérarchie
4. **Save**

```
Main navigation
├── Accueil
├── Boutique ▼
│   ├── Tous les produits
│   ├── Hommes
│   ├── Femmes
│   ├── Accessoires
│   └── Promotions
├── Blog
└── Contact
```

## 🦶 Menu Footer

### Créer les liens

1. **Structure** → **Menus** → **Footer** → **Add link**

| Titre | Lien |
|-------|------|
| Mentions légales | `/mentions-legales` |
| CGV | `/cgv` |
| Politique de confidentialité | `/politique-confidentialite` |
| Livraison | `/livraison` |
| Retours | `/retours` |
| FAQ | `/faq` |

<Aside type="note" title="Pages à créer">
Ces pages doivent être créées comme contenu de type "Page" (ou un type personnalisé).
</Aside>

## 👤 Menu Account (Utilisateur)

Le menu "User account menu" contient les liens liés à l'authentification.

### Liens par défaut

- `My account` → `/user`
- `Log out` → `/user/logout`

### Ajouter des liens personnalisés

| Titre | Lien | Condition |
|-------|------|-----------|
| Mon compte | `/user` | Authenticated |
| Mes commandes | `/user/orders` | Authenticated |
| Mon panier | `/cart` | All |
| Connexion | `/user/login` | Anonymous |
| Inscription | `/user/register` | Anonymous |

<Aside type="caution" title="Visibilité conditionnelle">
La visibilité par rôle se gère via les permissions ou un module comme Menu Item Visibility.
</Aside>

## 🏷️ Menu Catégories (dynamique)

Créez un menu qui liste automatiquement les catégories de produits.

### Option 1 : Liens manuels

Ajoutez chaque catégorie manuellement au menu "Main navigation" ou créez un menu dédié.

### Option 2 : Vue comme menu (recommandé)

Créez une vue qui génère un menu dynamique :

1. **Structure** → **Views** → **Add view**

| Paramètre | Valeur |
|-----------|--------|
| View name | `Categories Menu` |
| Show | `Taxonomy terms` of `Catégorie Produit` |
| Create a block | `☑` |
| Block title | `Catégories` |
| Display format | `HTML List` of `fields` |

2. **Fields** :
   - `Taxonomy term: Name` (lié vers le terme)

3. Placez le bloc dans la sidebar

### Option 3 : Taxonomy Menu (module)

```bash
composer require drupal/taxonomy_menu
drush en taxonomy_menu -y
```

Ce module synchronise automatiquement un vocabulaire avec un menu.

## 🔧 Configuration avancée

### Ajouter un menu depuis un contenu

Lors de la création/édition d'un contenu :

1. Section **Menu settings**
2. Cochez **Provide a menu link**
3. Sélectionnez le menu parent
4. Remplissez le titre et la description

### Via Drush

```bash
# Lister les menus
drush menu:list

# Ajouter un lien
drush menu:link-add "main" "Nouveau lien" "internal:/page"

# Supprimer un lien par UUID
drush menu:link-delete UUID
```

### Via configuration YAML

```yaml
# system.menu.main.yml
langcode: fr
status: true
dependencies: {  }
id: main
label: 'Navigation principale'
description: 'Menu principal du site TailStore'
locked: false
```

```yaml
# menu_link_content.<uuid>.yml
uuid: 12345678-1234-1234-1234-123456789012
langcode: fr
status: true
title: Boutique
link:
  uri: 'internal:/shop'
  title: ''
  options: {  }
menu_name: main
weight: 1
expanded: true
enabled: true
parent: ''
```

## 🎨 Style des menus

### Classes CSS

Par défaut, Drupal génère :

```html
<nav role="navigation" aria-labelledby="block-main-menu">
  <ul class="menu">
    <li class="menu-item">
      <a href="/">Accueil</a>
    </li>
    <li class="menu-item menu-item--expanded">
      <a href="/shop">Boutique</a>
      <ul class="menu">
        <li class="menu-item">
          <a href="/shop">Tous les produits</a>
        </li>
        <!-- ... -->
      </ul>
    </li>
  </ul>
</nav>
```

### Classes utiles

| Classe | Description |
|--------|-------------|
| `.menu-item` | Chaque élément |
| `.menu-item--expanded` | Élément avec enfants |
| `.menu-item--active-trail` | Chemin actif |
| `.is-active` | Lien de la page courante |

## 💾 Export

```bash
# Exporter les menus
drush cex -y

# Fichiers générés
ls config/sync/system.menu.*.yml
ls config/sync/menu_link_content.*.yml
```

## ✅ Checklist

- [ ] Menu Main navigation configuré
- [ ] Liens Accueil, Boutique, Blog, Contact créés
- [ ] Sous-menu catégories (optionnel)
- [ ] Menu Footer créé
- [ ] Menu Account vérifié
- [ ] Configuration exportée

## 🔜 Prochaine étape

Les menus sont prêts ! Passons aux [Régions & Blocs](/etape-5-navigation/regions-blocs/).
