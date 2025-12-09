---
title: Templates Twig
description: Personnaliser l'affichage avec le moteur de templates Twig
sidebar:
  order: 2
---

import { Tabs, TabItem, Aside, Steps } from '@astrojs/starlight/components';

## 🌿 Qu'est-ce que Twig ?

**Twig** est le moteur de templates utilisé par Drupal depuis la version 8. Il offre :

- Syntaxe claire et sécurisée
- Héritage de templates
- Filtres et fonctions
- Séparation logique/présentation

### Syntaxe de base

```twig
{# Commentaire - ignoré dans le rendu #}

{{ variable }}                    {# Affiche une variable #}
{{ variable|filter }}             {# Applique un filtre #}

{% if condition %}                {# Structure de contrôle #}
{% endif %}

{% for item in items %}           {# Boucle #}
{% endfor %}
```

## 🔍 Activer le débogage Twig

<Steps>

1. Copiez le fichier de services par défaut

```bash
cp sites/default/default.services.yml sites/default/services.yml
```

2. Éditez `sites/default/services.yml`

</Steps>

```yaml
parameters:
  twig.config:
    debug: true
    auto_reload: true
    cache: false
```

3. Videz le cache

```bash
drush cr
```

### Résultat dans le HTML source

```html
<!-- THEME DEBUG -->
<!-- THEME HOOK: 'node' -->
<!-- FILE NAME SUGGESTIONS:
   * node--product--full.html.twig
   * node--product.html.twig
   * node--1.html.twig
   * node.html.twig
-->
<!-- BEGIN OUTPUT from 'core/themes/olivero/templates/content/node.html.twig' -->
```

<Aside type="caution" title="Production">
Désactivez le débogage Twig en production pour les performances !
</Aside>

## 📐 Hiérarchie des templates

### Template de base → Plus spécifique

```
node.html.twig                    # Template générique
  └── node--article.html.twig     # Type de contenu spécifique
      └── node--article--teaser.html.twig  # + View mode
          └── node--123.html.twig  # Nœud spécifique
```

### Priorité (du plus au moins spécifique)

1. `node--{id}.html.twig` → `node--123.html.twig`
2. `node--{type}--{view-mode}.html.twig` → `node--product--card.html.twig`
3. `node--{type}.html.twig` → `node--product.html.twig`
4. `node--{view-mode}.html.twig` → `node--teaser.html.twig`
5. `node.html.twig` → Template de base

## 📄 Templates principaux

### page.html.twig

Structure globale de la page :

```twig
{#
/**
 * @file
 * Theme override for the page template.
 */
#}
<!DOCTYPE html>
<html{{ html_attributes }}>
<head>
  <head-placeholder token="{{ placeholder_token }}">
  <title>{{ head_title|safe_join(' | ') }}</title>
  <css-placeholder token="{{ placeholder_token }}">
  <js-placeholder token="{{ placeholder_token }}">
</head>
<body{{ attributes }}>
  <a href="#main-content" class="visually-hidden focusable skip-link">
    {{ 'Skip to main content'|t }}
  </a>
  
  {{ page_top }}
  {{ page }}
  {{ page_bottom }}
  
  <js-bottom-placeholder token="{{ placeholder_token }}">
</body>
</html>
```

### Fichier page.html.twig personnalisé

```twig
{#
/**
 * @file
 * TailStore theme override for the page template.
 */
#}
<div class="layout-container">
  
  <header class="site-header" role="banner">
    <div class="header-inner container">
      {{ page.header }}
      
      <nav class="main-nav" role="navigation">
        {{ page.primary_menu }}
      </nav>
      
      <div class="header-actions">
        {{ page.secondary_menu }}
      </div>
    </div>
  </header>

  {% if page.highlighted %}
    <div class="highlighted">
      {{ page.highlighted }}
    </div>
  {% endif %}

  {% if page.breadcrumb %}
    <nav class="breadcrumb-nav" aria-label="Breadcrumb">
      <div class="container">
        {{ page.breadcrumb }}
      </div>
    </nav>
  {% endif %}

  <main role="main" id="main-content" class="site-main">
    <div class="container">
      
      {{ page.help }}

      <div class="main-content-wrapper{% if page.sidebar %} has-sidebar{% endif %}">
        <div class="content-area">
          {{ page.content }}
        </div>

        {% if page.sidebar %}
          <aside class="sidebar" role="complementary">
            {{ page.sidebar }}
          </aside>
        {% endif %}
      </div>

      {% if page.content_below %}
        <div class="content-below">
          {{ page.content_below }}
        </div>
      {% endif %}
      
    </div>
  </main>

  <footer class="site-footer" role="contentinfo">
    <div class="container">
      {% if page.footer_top %}
        <div class="footer-top">
          {{ page.footer_top }}
        </div>
      {% endif %}
      
      {% if page.footer_bottom %}
        <div class="footer-bottom">
          {{ page.footer_bottom }}
        </div>
      {% endif %}
    </div>
  </footer>

</div>
```

## 🛍️ Template node--product.html.twig

```twig
{#
/**
 * @file
 * Theme override for Product full display.
 *
 * Available variables:
 * - node: The node entity.
 * - label: The node title.
 * - content: All node items.
 * - formatted_price: Prix formaté (depuis preprocess).
 * - in_stock: Booléen de disponibilité.
 * - is_on_sale: Produit en promotion.
 * - old_price: Ancien prix si promo.
 */
#}

{% set classes = [
  'node',
  'node--type-' ~ node.bundle|clean_class,
  node.isPromoted() ? 'node--promoted',
  node.isSticky() ? 'node--sticky',
  not node.isPublished() ? 'node--unpublished',
  view_mode ? 'node--view-mode-' ~ view_mode|clean_class,
  'product',
  'product--full',
] %}

<article{{ attributes.addClass(classes) }}>
  
  <div class="product__gallery">
    {% if content.field_images|render %}
      <div class="product__main-image">
        {{ content.field_images.0 }}
      </div>
      
      {% if content.field_images|length > 1 %}
        <div class="product__thumbnails">
          {% for key, image in content.field_images if key matches '/^\\d+$/' %}
            <button class="product__thumbnail" data-index="{{ key }}">
              {{ image }}
            </button>
          {% endfor %}
        </div>
      {% endif %}
    {% endif %}
  </div>

  <div class="product__details">
    
    {# Marque #}
    {% if content.field_brand|render %}
      <div class="product__brand">
        {{ content.field_brand }}
      </div>
    {% endif %}
    
    {# Titre #}
    {{ title_prefix }}
    <h1 class="product__title">{{ label }}</h1>
    {{ title_suffix }}
    
    {# Prix #}
    <div class="product__pricing">
      {% if is_on_sale and old_price %}
        <span class="product__old-price">{{ old_price }}</span>
        <span class="product__price product__price--sale">{{ formatted_price }}</span>
        <span class="product__discount-badge">Promo</span>
      {% else %}
        <span class="product__price">{{ formatted_price }}</span>
      {% endif %}
    </div>
    
    {# Disponibilité #}
    <div class="product__availability">
      {% if in_stock %}
        <span class="badge badge--success">En stock</span>
      {% else %}
        <span class="badge badge--danger">Rupture de stock</span>
      {% endif %}
    </div>
    
    {# Description courte #}
    {% if content.field_short_description|render %}
      <div class="product__short-description">
        {{ content.field_short_description }}
      </div>
    {% endif %}
    
    {# Tailles #}
    {% if content.field_sizes|render %}
      <div class="product__sizes">
        <label class="product__option-label">Taille :</label>
        <div class="product__size-options">
          {% for size in node.field_sizes %}
            <button class="size-btn" type="button" data-size="{{ size.entity.id }}">
              {{ size.entity.label }}
            </button>
          {% endfor %}
        </div>
      </div>
    {% endif %}
    
    {# Couleurs #}
    {% if content.field_colors|render %}
      <div class="product__colors">
        <label class="product__option-label">Couleur :</label>
        <div class="product__color-options">
          {% for color in node.field_colors %}
            <button 
              class="color-btn" 
              type="button"
              data-color="{{ color.entity.id }}"
              style="background-color: {{ color.entity.field_color_code.value }}"
              title="{{ color.entity.label }}"
            ></button>
          {% endfor %}
        </div>
      </div>
    {% endif %}
    
    {# Actions #}
    <div class="product__actions">
      <div class="product__quantity">
        <label for="quantity">Quantité :</label>
        <input type="number" id="quantity" name="quantity" value="1" min="1" max="10">
      </div>
      
      <button 
        type="button" 
        class="btn btn--primary btn--lg product__add-to-cart"
        data-product-id="{{ node.id }}"
        {% if not in_stock %}disabled{% endif %}
      >
        <span class="btn__icon">🛒</span>
        <span class="btn__text">Ajouter au panier</span>
      </button>
      
      <button type="button" class="btn btn--outline product__wishlist">
        ♡ Favoris
      </button>
    </div>
    
    {# SKU #}
    {% if content.field_sku|render %}
      <div class="product__sku">
        <strong>Référence :</strong> {{ content.field_sku }}
      </div>
    {% endif %}
    
    {# Catégorie #}
    {% if content.field_category|render %}
      <div class="product__category">
        <strong>Catégorie :</strong> {{ content.field_category }}
      </div>
    {% endif %}
    
  </div>
  
  {# Description complète #}
  {% if content.field_description|render %}
    <div class="product__full-description">
      <h2>Description</h2>
      {{ content.field_description }}
    </div>
  {% endif %}

</article>
```

## 🃏 Template node--product--card.html.twig

```twig
{#
/**
 * @file
 * Theme override for Product card display.
 */
#}

{% set classes = [
  'product-card',
  is_on_sale ? 'product-card--sale',
  not in_stock ? 'product-card--out-of-stock',
] %}

<article{{ attributes.addClass(classes) }}>
  
  {# Badges #}
  <div class="product-card__badges">
    {% if is_on_sale %}
      <span class="badge badge--danger">-{{ discount_percent }}%</span>
    {% endif %}
    {% if node.isPromoted() %}
      <span class="badge badge--primary">Nouveau</span>
    {% endif %}
  </div>
  
  {# Image #}
  <a href="{{ url }}" class="product-card__image-link">
    {% if content.field_images.0 %}
      {{ content.field_images.0 }}
    {% else %}
      <img src="/themes/custom/tailstore/images/placeholder.jpg" alt="Image non disponible">
    {% endif %}
  </a>
  
  {# Actions rapides #}
  <div class="product-card__quick-actions">
    <button class="quick-action quick-action--wishlist" title="Ajouter aux favoris">
      ♡
    </button>
    <button class="quick-action quick-action--view" title="Aperçu rapide">
      👁
    </button>
  </div>
  
  <div class="product-card__info">
    
    {# Marque #}
    {% if node.field_brand.entity %}
      <span class="product-card__brand">
        {{ node.field_brand.entity.label }}
      </span>
    {% endif %}
    
    {# Titre #}
    <h3 class="product-card__title">
      <a href="{{ url }}">{{ label }}</a>
    </h3>
    
    {# Prix #}
    <div class="product-card__price">
      {% if is_on_sale and old_price %}
        <span class="price--old">{{ old_price }}</span>
        <span class="price--current price--sale">{{ formatted_price }}</span>
      {% else %}
        <span class="price--current">{{ formatted_price }}</span>
      {% endif %}
    </div>
    
    {# Couleurs disponibles #}
    {% if node.field_colors|length > 0 %}
      <div class="product-card__colors">
        {% for color in node.field_colors|slice(0, 4) %}
          <span 
            class="color-dot" 
            style="background-color: {{ color.entity.field_color_code.value }}"
            title="{{ color.entity.label }}"
          ></span>
        {% endfor %}
        {% if node.field_colors|length > 4 %}
          <span class="color-more">+{{ node.field_colors|length - 4 }}</span>
        {% endif %}
      </div>
    {% endif %}
    
  </div>
  
  {# Bouton ajout panier #}
  <button 
    class="product-card__add-to-cart btn btn--primary btn--full"
    data-product-id="{{ node.id }}"
    {% if not in_stock %}disabled{% endif %}
  >
    {% if in_stock %}
      Ajouter au panier
    {% else %}
      Indisponible
    {% endif %}
  </button>

</article>
```

## 🔧 Filtres Twig utiles

| Filtre | Description | Exemple |
|--------|-------------|---------|
| `|t` | Traduction | `{{ 'Hello'|t }}` |
| `|raw` | HTML non échappé | `{{ html_content|raw }}` |
| `|escape` | Échapper le HTML | `{{ user_input|escape }}` |
| `|length` | Longueur | `{{ items|length }}` |
| `|first` / `|last` | Premier/dernier | `{{ items|first }}` |
| `|slice(0, 5)` | Sous-ensemble | `{{ items|slice(0, 5) }}` |
| `|join(', ')` | Concaténer | `{{ tags|join(', ') }}` |
| `|default('N/A')` | Valeur par défaut | `{{ value|default('N/A') }}` |
| `|clean_class` | Classe CSS valide | `{{ type|clean_class }}` |
| `|without('field_x')` | Exclure un champ | `{{ content|without('field_images') }}` |
| `|render` | Rendre un élément | `{% if content.field_x|render %}` |
| `|number_format` | Formater un nombre | `{{ price|number_format(2, ',', ' ') }}` |

## 🔄 Fonctions Twig Drupal

| Fonction | Description | Exemple |
|----------|-------------|---------|
| `url(route)` | Générer une URL | `{{ url('entity.node.canonical', {'node': node.id}) }}` |
| `path(route)` | Chemin sans domaine | `{{ path('user.page') }}` |
| `link(text, url)` | Créer un lien | `{{ link('Cliquez', url) }}` |
| `file_url(uri)` | URL d'un fichier | `{{ file_url(node.field_image.entity.fileuri) }}` |
| `attach_library()` | Charger une librairie | `{{ attach_library('tailstore/slider') }}` |
| `create_attribute()` | Créer des attributs | `{% set attr = create_attribute() %}` |

## 💾 Bonnes pratiques

1. **Ne jamais modifier les templates du core** - Copiez dans votre thème
2. **Utiliser les suggestions** - Créez des templates spécifiques
3. **Préprocessing en PHP** - Préparez les données dans `.theme`
4. **Vérifier avant d'afficher** - `{% if content.field|render %}`
5. **Classes propres** - Utilisez `|clean_class` pour les classes dynamiques

## ✅ Checklist

- [ ] Débogage Twig activé
- [ ] Template page.html.twig personnalisé
- [ ] Template node--product.html.twig créé
- [ ] Template node--product--card.html.twig créé
- [ ] Variables préprocessées dans .theme
- [ ] Cache vidé et templates testés

## 🔜 Prochaine étape

Les templates sont en place ! Passons aux [Assets (CSS/JS)](/etape-6-theming/assets/).
