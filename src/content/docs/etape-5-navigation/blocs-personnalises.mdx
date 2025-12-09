---
title: Blocs personnalisés
description: Créer des blocs de contenu personnalisés réutilisables
sidebar:
  order: 3
---

import { Tabs, TabItem, Aside, Steps } from '@astrojs/starlight/components';

## 🎨 Les Custom Blocks

Les **blocs personnalisés** (Custom Blocks) sont des entités de contenu réutilisables. Contrairement aux blocs de configuration, ils permettent de créer du contenu riche avec des champs.

### Avantages

- Contenu éditable par les rédacteurs
- Champs personnalisés (texte, image, liens)
- Réutilisables dans plusieurs régions
- Traductibles (sites multilingues)
- Versionnables

## 📝 Types de blocs personnalisés

Comme les types de contenu, vous pouvez créer des **types de blocs**.

### Accéder à la gestion

1. **Structure** → **Block layout** → **Custom block library**
2. Ou `/admin/structure/block/block-content`

### Créer un type de bloc

<Steps>

1. Allez dans **Block types** → **Add custom block type**

2. Configurez :

</Steps>

| Champ | Valeur |
|-------|--------|
| Label | `Hero Banner` |
| Machine name | `hero_banner` |
| Description | `Bannière héro pour la page d'accueil` |

3. **Save**

4. Ajoutez des champs via **Manage fields**

## 🖼️ Type : Hero Banner

### Champs du bloc Hero

| Champ | Type | Description |
|-------|------|-------------|
| Titre | (par défaut) | Titre du bloc |
| `field_hero_image` | Image | Image de fond |
| `field_hero_subtitle` | Text (plain) | Sous-titre |
| `field_hero_cta_text` | Text (plain) | Texte du bouton |
| `field_hero_cta_link` | Link | Lien du bouton |
| `field_hero_overlay` | Boolean | Overlay sombre |

### Créer le champ Image

1. **Manage fields** → **Add field**
2. Type : **Image**

| Paramètre | Valeur |
|-----------|--------|
| Label | `Image de fond` |
| Machine name | `field_hero_image` |
| Required | `Yes` |
| Allowed extensions | `png gif jpg jpeg webp` |
| File directory | `heroes` |
| Alt text | `Required` |
| Maximum dimensions | `1920x1080` |

### Créer le champ CTA

1. **Add field** → **Link**

| Paramètre | Valeur |
|-----------|--------|
| Label | `Call to Action` |
| Machine name | `field_hero_cta_link` |
| Allowed link type | `Internal and external` |
| Link text | `Required` |

### Manage Display

Configurez l'affichage dans **Manage display** :

| Champ | Label | Formatter |
|-------|-------|-----------|
| Image de fond | Hidden | Image (Hero 1920x600) |
| Sous-titre | Hidden | Default |
| CTA | Hidden | Link |

## 📧 Type : Newsletter

### Créer le type

| Champ | Valeur |
|-------|--------|
| Label | `Newsletter` |
| Machine name | `newsletter` |
| Description | `Bloc d'inscription à la newsletter` |

### Champs

| Champ | Type | Description |
|-------|------|-------------|
| Titre | (défaut) | `Inscrivez-vous !` |
| `field_newsletter_text` | Text (formatted, long) | Texte explicatif |
| `field_newsletter_placeholder` | Text (plain) | Placeholder de l'email |
| `field_newsletter_button` | Text (plain) | Texte du bouton |

<Aside type="tip" title="Formulaire fonctionnel">
Pour un vrai formulaire de newsletter, vous aurez besoin d'intégrer un module comme **Simplenews** ou **Mailchimp**.
</Aside>

## 🔗 Type : Réseaux sociaux

### Créer le type

| Champ | Valeur |
|-------|--------|
| Label | `Social Links` |
| Machine name | `social_links` |

### Champs

Utilisez un champ **Link** avec valeurs multiples :

| Paramètre | Valeur |
|-----------|--------|
| Label | `Liens sociaux` |
| Machine name | `field_social_links` |
| Number of values | `Unlimited` |
| Link text | `Required` |

Ou créez des champs séparés :

| Champ | Type |
|-------|------|
| `field_facebook` | Link |
| `field_instagram` | Link |
| `field_twitter` | Link |
| `field_linkedin` | Link |
| `field_youtube` | Link |

## 📦 Créer les instances de blocs

### Instance Hero Homepage

<Steps>

1. **Structure** → **Block layout** → **Custom block library** → **Add custom block**

2. Sélectionnez **Hero Banner**

3. Remplissez :

</Steps>

| Champ | Valeur |
|-------|--------|
| Block description | `Hero Homepage` |
| Image de fond | *(upload)* |
| Sous-titre | `Les dernières tendances mode` |
| CTA Text | `Découvrir la collection` |
| CTA Link | `/shop` |

4. **Save**

### Instance Newsletter Footer

1. **Add custom block** → **Newsletter**

| Champ | Valeur |
|-------|--------|
| Block description | `Newsletter Footer` |
| Titre | `Restez informé !` |
| Texte | `Inscrivez-vous pour recevoir nos offres exclusives.` |
| Placeholder | `Votre email` |
| Button | `S'inscrire` |

### Instance Social Links

1. **Add custom block** → **Social Links**

| Champ | Valeur |
|-------|--------|
| Block description | `Réseaux sociaux` |
| Facebook | `https://facebook.com/tailstore` |
| Instagram | `https://instagram.com/tailstore` |
| Twitter | `https://twitter.com/tailstore` |

## 📍 Placer les blocs personnalisés

### Placer le Hero

1. **Structure** → **Block layout**
2. **Highlighted** → **Place block**
3. Recherchez "Hero Homepage"
4. Configurez la visibilité :
   - Pages : `<front>`
5. **Save block**

### Placer la Newsletter

1. **Footer Top** → **Place block**
2. Recherchez "Newsletter Footer"
3. Visibilité : Toutes les pages
4. **Save block**

### Placer les réseaux sociaux

1. **Footer Bottom** → **Place block**
2. Recherchez "Réseaux sociaux"
3. Display title : `☐` (masquer)
4. **Save block**

## 🎨 Templates Twig

### block--hero-banner.html.twig

```twig
{#
/**
 * @file
 * Theme override for Hero Banner block.
 */
#}
{% set image_url = content.field_hero_image.0['#item'].entity.fileuri|file_url %}

<section{{ attributes.addClass('hero-banner') }} 
  style="background-image: url('{{ image_url }}')">
  
  {% if content.field_hero_overlay.0['#markup'] == '1' %}
    <div class="hero-overlay"></div>
  {% endif %}
  
  <div class="hero-content">
    {% if label %}
      <h1 class="hero-title">{{ label }}</h1>
    {% endif %}
    
    {% if content.field_hero_subtitle.0 %}
      <p class="hero-subtitle">{{ content.field_hero_subtitle.0 }}</p>
    {% endif %}
    
    {% if content.field_hero_cta_link.0 %}
      <a href="{{ content.field_hero_cta_link.0['#url'] }}" class="hero-cta btn btn-primary">
        {{ content.field_hero_cta_link.0['#title'] }}
      </a>
    {% endif %}
  </div>
</section>
```

### CSS Hero

```css
.hero-banner {
  position: relative;
  min-height: 60vh;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 2rem;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-cta {
  display: inline-block;
  padding: 1rem 2rem;
  background: #0073e6;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  transition: background 0.3s;
}

.hero-cta:hover {
  background: #005bb5;
}
```

### block--newsletter.html.twig

```twig
{#
/**
 * @file
 * Theme override for Newsletter block.
 */
#}
<section{{ attributes.addClass('newsletter-block') }}>
  <div class="newsletter-content">
    {% if label %}
      <h3 class="newsletter-title">{{ label }}</h3>
    {% endif %}
    
    {% if content.field_newsletter_text.0 %}
      <div class="newsletter-text">
        {{ content.field_newsletter_text.0 }}
      </div>
    {% endif %}
    
    <form class="newsletter-form" action="/newsletter/subscribe" method="post">
      <input 
        type="email" 
        name="email" 
        placeholder="{{ content.field_newsletter_placeholder.0['#context']['value']|default('Votre email') }}"
        required
        class="newsletter-input"
      >
      <button type="submit" class="newsletter-button btn">
        {{ content.field_newsletter_button.0['#context']['value']|default("S'inscrire") }}
      </button>
    </form>
  </div>
</section>
```

## 🔄 Réutilisation des blocs

Un même bloc personnalisé peut être placé dans plusieurs régions :

1. Créez l'instance une seule fois dans la **Custom block library**
2. Placez-la dans autant de régions que nécessaire
3. La modification du contenu se répercute partout

## 💾 Export

Les blocs personnalisés sont du **contenu**, pas de la configuration.

### Exporter la structure (types de blocs)

```bash
drush cex -y
# Génère block_content.type.*.yml et field.*.yml
```

### Exporter le contenu (instances)

```bash
# Avec Default Content
composer require drupal/default_content
drush en default_content -y

# Exporter les blocs
drush dce block_content
```

## ✅ Checklist

- [ ] Type "Hero Banner" créé avec champs
- [ ] Type "Newsletter" créé
- [ ] Type "Social Links" créé
- [ ] Instance "Hero Homepage" créée et placée
- [ ] Instance "Newsletter Footer" créée et placée
- [ ] Instance "Réseaux sociaux" créée et placée
- [ ] Templates Twig personnalisés (optionnel)
- [ ] Configuration exportée

## 🔜 Prochaine étape

Les blocs sont en place ! Terminons avec les [Rôles & Permissions](/etape-5-navigation/roles-permissions/).
