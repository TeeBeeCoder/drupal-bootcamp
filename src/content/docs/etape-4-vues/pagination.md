---
title: Pagination & Tri
description: Gérer l'affichage paginé et le tri des résultats dans Views
sidebar:
  order: 5
---

import { Tabs, TabItem, Aside, Steps } from '@astrojs/starlight/components';

## 📄 Types de pagination

Views offre plusieurs options de pagination :

| Type | Description | Usage |
|------|-------------|-------|
| Full pager | Numéros de page complets | Catalogues, listes |
| Mini pager | Juste Précédent/Suivant | Widgets, blocs |
| Load more | Bouton "Charger plus" | Infinite scroll |
| Specified number | Nombre fixe, sans pagination | Blocs, highlights |
| None | Tous les résultats | Petites listes |

## ⚙️ Configuration du pager

### Accéder aux paramètres

1. Éditez votre vue
2. Dans la section **Pager**, cliquez sur le lien actuel (ex: "Mini")
3. Sélectionnez le type souhaité

### Full Pager (Pagination complète)

<Steps>

1. Sélectionnez **Paged output, full pager**

2. **Apply and continue**

3. Configurez les options :

</Steps>

| Paramètre | Valeur | Description |
|-----------|--------|-------------|
| Items per page | `12` | Nombre d'éléments par page |
| Offset | `0` | Sauter les X premiers résultats |
| Link to more | `No` | Lien "More" en bas |

4. Cliquez sur **Pager options** :

| Paramètre | Valeur |
|-----------|--------|
| Pager ID | `0` |
| Tags → First | `« Premier` |
| Tags → Previous | `‹ Précédent` |
| Tags → Next | `Suivant ›` |
| Tags → Last | `Dernier »` |
| Expose items per page | `☐ Non` |
| Items per page options | `12, 24, 48` (si exposé) |

5. **Apply**

### Mini Pager

Idéal pour les blocs et widgets :

| Paramètre | Valeur |
|-----------|--------|
| Items per page | `4` |
| Tags → Previous | `‹` |
| Tags → Next | `›` |

### Load More (Ajax)

Pour un effet "infinite scroll" ou bouton "Charger plus" :

```bash
# Installer le module Views Infinite Scroll
composer require drupal/views_infinite_scroll
drush en views_infinite_scroll -y
```

Configuration :

1. Dans **Pager**, sélectionnez **Infinite Scroll**
2. Options :
   - Button text : `Charger plus de produits`
   - Automatically load content : `☐` (optionnel)

## 🔄 Tri des résultats

### Tri standard (non exposé)

1. Dans **Sort Criteria**, cliquez sur **Add**
2. Choisissez le champ de tri
3. Configurez :

| Paramètre | Options |
|-----------|---------|
| Order | Ascending (A-Z, 0-9) / Descending (Z-A, 9-0) |
| Granularity (dates) | Second, Minute, Hour, Day, Month, Year |
| Expose | ☐ Non |

### Tri exposé (utilisateur)

Permet à l'utilisateur de choisir le tri :

1. Éditez un critère de tri existant
2. Cochez **Expose this sort to visitors**
3. Configurez le label

Pour plusieurs options de tri :

<Steps>

1. Ajoutez plusieurs critères de tri (tous exposés)

2. Dans **Exposed Form Settings** (Advanced) :

</Steps>

| Paramètre | Valeur |
|-----------|--------|
| Exposed sorts label | `Trier par` |
| Allow people to choose the sort order | `☐` ou `☑` |
| Sort asc label | `Croissant` |
| Sort desc label | `Décroissant` |

### Exemple de tris pour le catalogue

| Critère | Label | Ordre par défaut |
|---------|-------|------------------|
| Content: Authored on | Plus récent | DESC |
| Content: Title | Nom (A-Z) | ASC |
| Content: Price | Prix (bas → haut) | ASC |
| Content: Price | Prix (haut → bas) | DESC |

<Aside type="tip" title="Tri par défaut">
Le premier critère de tri non exposé sera le tri par défaut.
</Aside>

## 🎲 Tri aléatoire

Pour afficher les produits dans un ordre aléatoire (rotation) :

### Option 1 : Global Random

1. **Add** sort criteria
2. Recherchez "random"
3. Sélectionnez **Global: Random**

<Aside type="caution" title="Performance">
Le tri aléatoire peut impacter les performances et le cache. Utilisez avec modération.
</Aside>

### Option 2 : Views Random Seed (recommandé)

```bash
composer require drupal/views_random_seed
drush en views_random_seed -y
```

Ce module permet un tri "pseudo-aléatoire" qui reste cohérent pendant la session.

## 🔗 Ajax et pagination

### Activer Ajax

1. Dans **Advanced** → **Use Ajax** : `☑ Yes`

Avantages :
- Pas de rechargement de page
- Expérience fluide
- Conservation du scroll

Configuration :

```yaml
# Dans la vue
advanced:
  use_ajax: true
```

### Personnaliser l'Ajax

```javascript
// themes/custom/tailstore/js/views-ajax.js
(function ($, Drupal) {
  Drupal.behaviors.viewsAjax = {
    attach: function (context, settings) {
      // Avant le chargement Ajax
      $(document).on('views_ajax:beforeSend', function (event, xhr, settings) {
        $('.view-products-catalog').addClass('loading');
      });
      
      // Après le chargement Ajax
      $(document).on('views_ajax:response', function (event, response, settings) {
        $('.view-products-catalog').removeClass('loading');
        // Scroll vers le haut de la vue
        $('html, body').animate({
          scrollTop: $('.view-products-catalog').offset().top - 100
        }, 300);
      });
    }
  };
})(jQuery, Drupal);
```

CSS pour le loading :

```css
.view-products-catalog.loading {
  opacity: 0.5;
  pointer-events: none;
}

.view-products-catalog.loading::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40px;
  height: 40px;
  border: 3px solid #ddd;
  border-top-color: #0073e6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

## 📊 Paramètres URL

La pagination utilise des paramètres GET :

```
/shop?page=2                    # Page 3 (0-indexed)
/shop?sort_by=field_price       # Tri par prix
/shop?sort_order=DESC           # Ordre décroissant
/shop?items_per_page=24         # 24 items par page
```

### Personnaliser les paramètres

Dans **Pager options** :

| Paramètre | Valeur par défaut | Personnalisé |
|-----------|-------------------|--------------|
| Pager ID | `page` | `p` |
| Items per page parameter | `items_per_page` | `limit` |

## 🎨 Thème de la pagination

### Template : views-mini-pager.html.twig

```twig
{#
/**
 * Mini pager personnalisé
 */
#}
{% if items.previous or items.next %}
<nav class="pager pager--mini" role="navigation" aria-label="Pagination">
  <ul class="pager__items">
    {% if items.previous %}
      <li class="pager__item pager__item--previous">
        <a href="{{ items.previous.href }}" title="Page précédente" rel="prev">
          <span aria-hidden="true">‹</span>
          <span class="visually-hidden">Page précédente</span>
        </a>
      </li>
    {% endif %}
    
    {% if items.current %}
      <li class="pager__item pager__item--current">
        Page {{ items.current }}
      </li>
    {% endif %}
    
    {% if items.next %}
      <li class="pager__item pager__item--next">
        <a href="{{ items.next.href }}" title="Page suivante" rel="next">
          <span class="visually-hidden">Page suivante</span>
          <span aria-hidden="true">›</span>
        </a>
      </li>
    {% endif %}
  </ul>
</nav>
{% endif %}
```

### Template : pager.html.twig (Full)

```twig
{#
/**
 * Pager complet personnalisé
 */
#}
{% if items %}
<nav class="pager" role="navigation" aria-label="Pagination">
  <ul class="pager__items">
    {# Premier #}
    {% if items.first %}
      <li class="pager__item pager__item--first">
        <a href="{{ items.first.href }}" title="Première page">
          {{ items.first.text|default('« Premier') }}
        </a>
      </li>
    {% endif %}
    
    {# Précédent #}
    {% if items.previous %}
      <li class="pager__item pager__item--previous">
        <a href="{{ items.previous.href }}" rel="prev">
          {{ items.previous.text|default('‹ Précédent') }}
        </a>
      </li>
    {% endif %}
    
    {# Pages numérotées #}
    {% for key, item in items.pages %}
      <li class="pager__item{{ current == key ? ' pager__item--active' : '' }}">
        {% if current == key %}
          <span class="pager__current">{{ key }}</span>
        {% else %}
          <a href="{{ item.href }}">{{ key }}</a>
        {% endif %}
      </li>
    {% endfor %}
    
    {# Suivant #}
    {% if items.next %}
      <li class="pager__item pager__item--next">
        <a href="{{ items.next.href }}" rel="next">
          {{ items.next.text|default('Suivant ›') }}
        </a>
      </li>
    {% endif %}
    
    {# Dernier #}
    {% if items.last %}
      <li class="pager__item pager__item--last">
        <a href="{{ items.last.href }}" title="Dernière page">
          {{ items.last.text|default('Dernier »') }}
        </a>
      </li>
    {% endif %}
  </ul>
</nav>
{% endif %}
```

### CSS Pagination

```css
.pager {
  margin: 2rem 0;
  text-align: center;
}

.pager__items {
  display: inline-flex;
  gap: 0.25rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.pager__item a,
.pager__current {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 2.5rem;
  height: 2.5rem;
  padding: 0 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-decoration: none;
  color: #333;
  transition: all 0.2s;
}

.pager__item a:hover {
  background: #0073e6;
  border-color: #0073e6;
  color: white;
}

.pager__item--active .pager__current {
  background: #0073e6;
  border-color: #0073e6;
  color: white;
  font-weight: bold;
}

.pager__item--first a,
.pager__item--last a {
  font-size: 0.875rem;
}
```

## ✅ Checklist

- [ ] Pagination complète configurée avec labels français
- [ ] Tri par date, prix, nom configuré
- [ ] Tri exposé aux utilisateurs
- [ ] Ajax activé pour une navigation fluide
- [ ] Message "Aucun résultat" personnalisé
- [ ] Templates de pagination personnalisés (optionnel)
- [ ] Configuration exportée

## 🎯 Exercice final

Créez une vue **Blog** avec :
- URL : `/blog`
- Pagination : 6 articles par page, full pager
- Tri : Plus récent d'abord
- Filtre exposé : Catégorie blog
- Format : Unformatted list, Teaser
- Header : Compteur de résultats
- Bloc sidebar : 3 derniers articles

## 🔜 Prochaine étape

L'Étape 4 est terminée ! 🎉 Passez aux [Exercices Views](/etape-4-vues/exercices/) pour consolider vos acquis, puis à l'[Étape 5 - Navigation & Blocs](/etape-5-navigation/).
