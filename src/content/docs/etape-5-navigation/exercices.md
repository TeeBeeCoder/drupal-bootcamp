---
title: Exercices - Navigation
description: Exercices pratiques sur les menus, blocs et permissions
sidebar:
  order: 5
---

import { Aside, Card, CardGrid } from '@astrojs/starlight/components';

## 🎯 Exercice 1 : Menu Méga-menu

### Objectif
Créer un menu dropdown avec des colonnes multiples pour les catégories.

### Instructions

1. Créez un menu `mega_menu` avec la structure suivante :

```
Boutique
├── Par catégorie
│   ├── Hommes
│   ├── Femmes
│   ├── Accessoires
│   └── Chaussures
├── Par marque
│   ├── Nike
│   ├── Adidas
│   └── Puma
└── Offres
    ├── Promotions
    ├── Nouveautés
    └── Meilleures ventes
```

2. Créez un template Twig personnalisé pour l'affichage en colonnes
3. Ajoutez le CSS pour le dropdown

<details>
<summary>💡 Solution</summary>

**Structure du menu :**

1. Créez le menu via **Structure** → **Menus** → **Add menu**
2. Ajoutez les liens avec la hiérarchie appropriée
3. Utilisez `<nolink>` pour les éléments parents non cliquables

**Template `menu--mega-menu.html.twig` :**

```twig
{% import _self as menus %}
{{ menus.menu_links(items, attributes, 0) }}

{% macro menu_links(items, attributes, menu_level) %}
  {% import _self as menus %}
  {% if items %}
    {% if menu_level == 0 %}
      <ul{{ attributes.addClass('mega-menu') }}>
    {% else %}
      <ul class="mega-menu__dropdown">
    {% endif %}
    {% for item in items %}
      <li{{ item.attributes.addClass([
        'mega-menu__item',
        item.below ? 'mega-menu__item--expanded',
        item.in_active_trail ? 'mega-menu__item--active-trail',
      ]) }}>
        {{ link(item.title, item.url, {'class': ['mega-menu__link']}) }}
        
        {% if item.below and menu_level == 0 %}
          <div class="mega-menu__panel">
            {{ menus.menu_links(item.below, attributes, menu_level + 1) }}
          </div>
        {% elseif item.below %}
          {{ menus.menu_links(item.below, attributes, menu_level + 1) }}
        {% endif %}
      </li>
    {% endfor %}
    </ul>
  {% endif %}
{% endmacro %}
```

**CSS :**

```css
.mega-menu {
  display: flex;
  gap: 2rem;
}

.mega-menu__item--expanded {
  position: relative;
}

.mega-menu__panel {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  padding: 1.5rem;
  min-width: 600px;
}

.mega-menu__item--expanded:hover .mega-menu__panel {
  display: flex;
  gap: 2rem;
}

.mega-menu__dropdown {
  list-style: none;
  padding: 0;
  min-width: 150px;
}
```

</details>

---

## 🎯 Exercice 2 : Bloc promotionnel conditionnel

### Objectif
Créer un bloc promo qui s'affiche différemment selon le contexte.

### Instructions

1. Créez un type de bloc "Promo Banner" avec :
   - Titre
   - Texte
   - Lien CTA
   - Couleur de fond (champ Color ou Select)
   - Date de fin (Date)

2. Créez 3 instances :
   - "Livraison gratuite" → Affiché sur `/shop*`
   - "-20% sur votre commande" → Affiché uniquement aux utilisateurs non connectés
   - "Bienvenue !" → Affiché sur la page d'accueil

3. Masquez automatiquement le bloc après la date de fin

<details>
<summary>💡 Solution</summary>

**Type de bloc :**

```yaml
# Champs
field_promo_text: Text (formatted)
field_promo_cta: Link
field_promo_color: List (text) - Options: primary|Bleu, success|Vert, warning|Orange, danger|Rouge
field_promo_end_date: Date
```

**Placement avec visibilité :**

1. "Livraison gratuite"
   - Région : Highlighted
   - Pages : `/shop\n/shop/*`

2. "-20% sur votre commande"
   - Région : Highlighted
   - Rôles : ☑ Anonymous user

3. "Bienvenue"
   - Région : Highlighted
   - Pages : `<front>`

**Masquage automatique (preprocess) :**

```php
// Dans tailstore.theme
function tailstore_preprocess_block(&$variables) {
  if ($variables['plugin_id'] === 'block_content:YOUR_UUID') {
    $block = $variables['content']['#block_content'];
    $end_date = $block->get('field_promo_end_date')->value;
    
    if ($end_date && strtotime($end_date) < time()) {
      $variables['content'] = [];
    }
  }
}
```

</details>

---

## 🎯 Exercice 3 : Système de favoris

### Objectif
Permettre aux utilisateurs connectés de mettre des produits en favoris.

### Instructions

1. Installez le module **Flag**
2. Créez un flag "Favoris" pour les produits
3. Créez une vue "Mes favoris" (`/user/favorites`)
4. Ajoutez le lien de flagging sur les cartes produit
5. Configurez les permissions

<details>
<summary>💡 Solution</summary>

**Installation :**

```bash
composer require drupal/flag
drush en flag -y
```

**Création du flag :**

1. **Structure** → **Flags** → **Add flag**

| Paramètre | Valeur |
|-----------|--------|
| Flag type | Content |
| Label | `Favoris` |
| Machine name | `favorites` |
| Flag/Unflag | `♡ Ajouter aux favoris` / `♥ Retirer des favoris` |
| Bundles | ☑ Product |
| Link type | AJAX link |
| Global | ☐ (personnel à chaque utilisateur) |

**Vue "Mes favoris" :**

1. **Add view** :
   - Show : Content flagged `Favorites`
   - Path : `/user/favorites`
   - Access : Permission "Flag Favorites"

2. **Relationship** → Add → "Flags: User's flaggings"

**Template produit :**

```twig
<div class="product-actions">
  {{ content.flag_favorites }}
</div>
```

**Permissions :**
- "Flag Favorites" → Authenticated users
- "Unflag Favorites" → Authenticated users

</details>

---

## 🎯 Exercice 4 : Rôle Éditeur limité

### Objectif
Créer un rôle qui ne peut modifier que les produits d'une certaine catégorie.

### Instructions

1. Installez le module **Permissions by Term**
2. Créez un vocabulaire "Départements" (Mode Homme, Mode Femme, Accessoires)
3. Assignez des départements aux produits
4. Créez le rôle "Éditeur Homme" qui ne peut modifier que les produits "Mode Homme"
5. Testez les accès

<details>
<summary>💡 Solution</summary>

**Installation :**

```bash
composer require drupal/permissions_by_term
drush en permissions_by_term -y
```

**Configuration :**

1. Créez le vocabulaire "Département"
2. Ajoutez les termes : Mode Homme, Mode Femme, Accessoires
3. Dans chaque terme, ajoutez l'onglet "Permissions by Term"

**Assignation :**

1. Terme "Mode Homme" → Permissions → Add role : "Éditeur Homme"
2. Cochez les permissions appropriées

**Rôle :**

1. Créez le rôle "Éditeur Homme"
2. Permissions :
   - Edit own/any Product content (sera filtré par PbT)
   - Use the toolbar

</details>

---

## 🎯 Exercice 5 : Bloc panier dynamique

### Objectif
Créer un bloc qui affiche le résumé du panier (sans Commerce).

### Instructions

1. Créez un type de bloc "Cart Summary" avec champs :
   - Nombre d'articles (Text)
   - Total (Decimal)
2. Créez un module personnalisé qui met à jour ce bloc
3. Utilisez htmx pour le rafraîchissement dynamique

<details>
<summary>💡 Solution (structure)</summary>

Cette solution sera détaillée dans l'Étape 8 (Développement), mais voici la structure :

```php
// modules/custom/tailstore_cart/tailstore_cart.module

/**
 * Implements hook_preprocess_block().
 */
function tailstore_cart_preprocess_block(&$variables) {
  if ($variables['plugin_id'] === 'cart_summary') {
    $cart = \Drupal::service('tailstore_cart.cart_manager');
    $variables['content']['#items_count'] = $cart->getItemsCount();
    $variables['content']['#total'] = $cart->getTotal();
  }
}
```

```twig
{# block--cart-summary.html.twig #}
<div class="cart-summary" 
     hx-get="/api/cart/summary" 
     hx-trigger="cart-updated from:body">
  <span class="cart-icon">🛒</span>
  <span class="cart-count">{{ items_count }}</span>
  <span class="cart-total">{{ total|number_format(2, ',', ' ') }} €</span>
</div>
```

</details>

---

## ✅ Checklist de validation

<CardGrid>
  <Card title="Menus" icon="list-format">
    - [ ] Menu principal complet
    - [ ] Menu footer avec liens
    - [ ] (Bonus) Méga-menu
  </Card>
  <Card title="Blocs" icon="puzzle">
    - [ ] Hero homepage
    - [ ] Newsletter
    - [ ] Réseaux sociaux
    - [ ] Promo banner conditionnel
  </Card>
  <Card title="Permissions" icon="setting">
    - [ ] Rôle Éditeur
    - [ ] Rôle Shop Manager
    - [ ] Permissions testées
    - [ ] Utilisateurs de test
  </Card>
  <Card title="Export" icon="document">
    - [ ] Menus exportés
    - [ ] Blocs (types) exportés
    - [ ] Rôles et permissions exportés
  </Card>
</CardGrid>

## 📤 Export final

```bash
# Exporter toute la configuration
drush cex -y

# Commiter
git add config/sync/
git commit -m "feat: add navigation, blocks, and permissions"
```

## 🎓 Compétences acquises

À la fin de cette étape, vous savez :

- ✅ Créer et organiser des menus
- ✅ Comprendre les régions du thème
- ✅ Placer et configurer des blocs
- ✅ Créer des types de blocs personnalisés
- ✅ Créer des instances de blocs réutilisables
- ✅ Gérer les rôles et permissions
- ✅ Configurer la visibilité conditionnelle

## 🔜 Prochaine étape

Passez à l'[Étape 6 - Theming](/etape-6-theming/) pour créer le thème personnalisé TailStore avec Tailwind CSS !
