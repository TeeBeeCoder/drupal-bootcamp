---
title: Exercices Étape 6
description: Mise en pratique du theming Drupal avec Tailwind CSS et Alpine.js
sidebar:
  order: 6
---

import { Tabs, TabItem, Aside, Card, CardGrid, Steps } from '@astrojs/starlight/components';

## 🎯 Objectifs

À la fin de ces exercices, vous aurez :
- Créé le thème TailStore avec Tailwind CSS v4
- Implémenté les templates Twig pour les produits
- Ajouté les interactions Alpine.js
- Configuré le build CSS/JS

---

## Exercice 1 : Création du thème TailStore

<Card title="Durée estimée : 30 minutes" icon="clock">
  Créer la structure complète du thème personnalisé.
</Card>

### Objectif

Créer le thème `tailstore` avec toutes les configurations nécessaires.

### Instructions

<Steps>

1. **Créer la structure du thème**

   ```bash
   mkdir -p themes/custom/tailstore/{css/{src,dist},js/{src,dist},templates,images}
   ```

2. **Créer le fichier tailstore.info.yml**

   ```yaml
   name: TailStore
   type: theme
   description: 'Thème e-commerce moderne avec Tailwind CSS et Alpine.js'
   core_version_requirement: ^10 || ^11
   base theme: false

   regions:
     header: 'En-tête'
     primary_menu: 'Menu principal'
     secondary_menu: 'Menu secondaire'
     highlighted: 'Mise en avant'
     breadcrumb: 'Fil d'Ariane'
     help: 'Aide'
     content: 'Contenu principal'
     sidebar: 'Barre latérale'
     content_below: 'Sous le contenu'
     footer_top: 'Pied de page (haut)'
     footer_bottom: 'Pied de page (bas)'

   libraries:
     - tailstore/global
   ```

3. **Créer tailstore.libraries.yml**

   ```yaml
   global:
     version: 1.0
     css:
       theme:
         css/dist/tailwind.css: { minified: true }
     js:
       js/dist/app.js: { defer: true }
     dependencies:
       - core/drupal
   ```

4. **Initialiser npm et Tailwind**

   ```bash
   cd themes/custom/tailstore
   npm init -y
   npm install -D tailwindcss @tailwindcss/cli alpinejs esbuild
   ```

5. **Créer package.json avec scripts**

   ```json
   {
     "name": "tailstore-theme",
     "version": "1.0.0",
     "scripts": {
       "build:css": "tailwindcss -i css/src/tailwind.css -o css/dist/tailwind.css --minify",
       "build:js": "esbuild js/src/app.js --bundle --minify --outfile=js/dist/app.js",
       "build": "npm run build:css && npm run build:js",
       "watch:css": "tailwindcss -i css/src/tailwind.css -o css/dist/tailwind.css --watch",
       "watch:js": "esbuild js/src/app.js --bundle --outfile=js/dist/app.js --watch",
       "dev": "npm run watch:css & npm run watch:js"
     }
   }
   ```

6. **Activer le thème**

   ```bash
   ddev drush theme:enable tailstore
   ddev drush config-set system.theme default tailstore -y
   ddev drush cr
   ```

</Steps>

### Validation ✓

- [ ] Structure du thème créée
- [ ] Fichier .info.yml valide
- [ ] Librairies déclarées
- [ ] npm configuré
- [ ] Thème activé et visible

---

## Exercice 2 : Configuration Tailwind CSS

<Card title="Durée estimée : 25 minutes" icon="clock">
  Configurer Tailwind avec les couleurs et composants TailStore.
</Card>

### Objectif

Créer un système de design cohérent avec Tailwind CSS v4.

### Instructions

<Steps>

1. **Créer css/src/tailwind.css**

   ```css
   @import "tailwindcss";

   @theme {
     /* Palette TailStore */
     --color-primary: #0073e6;
     --color-primary-dark: #005bb5;
     --color-secondary: #6c757d;
     --color-accent: #ff6b35;
     --color-success: #28a745;
     --color-warning: #ffc107;
     --color-danger: #dc3545;
     --color-dark: #1a1a2e;
     --color-light: #f8f9fa;
     
     /* Fonts */
     --font-sans: 'Inter', ui-sans-serif, system-ui, sans-serif;
     --font-heading: 'Poppins', var(--font-sans);
     
     /* Radius */
     --radius-btn: 0.375rem;
     --radius-card: 0.5rem;
     --radius-badge: 9999px;
   }

   @layer components {
     /* Boutons */
     .btn {
       @apply inline-flex items-center justify-center gap-2 px-4 py-2.5 font-medium rounded-btn transition-all duration-200 cursor-pointer;
     }
     
     .btn-primary {
       @apply bg-primary text-white hover:bg-primary-dark active:scale-95;
     }
     
     .btn-secondary {
       @apply bg-gray-200 text-gray-800 hover:bg-gray-300;
     }
     
     .btn-outline {
       @apply border-2 border-primary text-primary hover:bg-primary hover:text-white;
     }
     
     .btn-ghost {
       @apply text-gray-600 hover:bg-gray-100;
     }
     
     .btn-icon {
       @apply p-2 rounded-full;
     }

     /* Cards */
     .card {
       @apply bg-white rounded-card shadow-md hover:shadow-lg transition-shadow;
     }
     
     .card-body {
       @apply p-4;
     }

     /* Badges */
     .badge {
       @apply inline-flex items-center px-2.5 py-0.5 text-xs font-semibold rounded-badge;
     }
     
     .badge-sale {
       @apply bg-danger text-white;
     }
     
     .badge-new {
       @apply bg-primary text-white;
     }

     /* Form */
     .form-input {
       @apply w-full px-4 py-2.5 border border-gray-300 rounded-btn focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all;
     }
     
     .form-label {
       @apply block text-sm font-medium text-gray-700 mb-1.5;
     }
     
     .form-select {
       @apply form-input appearance-none bg-no-repeat bg-right pr-10;
       background-image: url("data:image/svg+xml,...");
     }

     /* Sections */
     .section {
       @apply py-12 md:py-16;
     }
     
     .section-title {
       @apply text-2xl md:text-3xl font-heading font-bold text-dark mb-8;
     }
   }
   ```

2. **Créer tailwind.config.js**

   ```javascript
   export default {
     content: [
       './templates/**/*.twig',
       './js/**/*.js',
       '../../../modules/custom/**/*.twig',
     ],
   };
   ```

3. **Builder et vérifier**

   ```bash
   npm run build:css
   ls -lh css/dist/tailwind.css
   ```

</Steps>

### Validation ✓

- [ ] Couleurs personnalisées définies
- [ ] Composants btn, card, badge créés
- [ ] CSS compilé sans erreur
- [ ] Taille fichier < 50kb (minifié)

---

## Exercice 3 : Template de la page principale

<Card title="Durée estimée : 40 minutes" icon="clock">
  Créer le template page.html.twig avec toutes les régions.
</Card>

### Objectif

Implémenter la structure HTML/Tailwind de la page principale.

### Instructions

<Steps>

1. **Créer templates/page.html.twig**

   Implémentez la structure complète avec :
   - Header sticky avec logo, navigation, actions
   - Zone highlighted pour sliders/hero
   - Contenu avec sidebar optionnelle
   - Footer multi-colonnes

2. **Ajouter le support du menu mobile**

   Ajoutez un bouton hamburger visible sur mobile qui dispatche un événement Alpine.

3. **Créer le template html.html.twig**

   Ajoutez les classes de base :
   ```twig
   <body class="antialiased text-gray-900 bg-light">
   ```

4. **Tester la mise en page**

   Vérifiez le responsive à différentes tailles.

</Steps>

### Code de départ

```twig
{# templates/page.html.twig #}
<div class="min-h-screen flex flex-col">
  
  <header class="bg-white shadow-sm sticky top-0 z-50">
    {# TODO: Implémenter le header #}
  </header>
  
  {% if page.highlighted %}
    <section class="relative">
      {{ page.highlighted }}
    </section>
  {% endif %}
  
  <main class="grow py-8">
    <div class="container mx-auto px-4 max-w-7xl">
      {# TODO: Implémenter content + sidebar #}
    </div>
  </main>
  
  <footer class="bg-dark text-white mt-auto">
    {# TODO: Implémenter le footer #}
  </footer>
  
</div>
```

### Validation ✓

- [ ] Header avec toutes les régions
- [ ] Contenu responsive avec sidebar
- [ ] Footer multi-colonnes
- [ ] Menu mobile fonctionnel

---

## Exercice 4 : Product Card Template

<Card title="Durée estimée : 45 minutes" icon="clock">
  Créer le template de carte produit avec interactions.
</Card>

### Objectif

Implémenter le template de teaser produit avec tous les éléments visuels.

### Instructions

<Steps>

1. **Créer node--product--teaser.html.twig**

   Éléments requis :
   - Badge promo si prix soldé
   - Image avec hover zoom
   - Actions rapides (wishlist, quick view)
   - Marque, nom, prix
   - Couleurs disponibles
   - Bouton ajouter au panier

2. **Ajouter les données Alpine.js**

   ```twig
   <article x-data="{ 
     product: {
       id: {{ node.id }},
       name: '{{ label|escape('js') }}',
       price: {{ node.field_price.value }},
       image: '{{ file_url(node.field_images.0.entity.fileuri) }}'
     }
   }">
   ```

3. **Gérer le calcul de remise**

   Si `field_old_price` existe et est supérieur à `field_price`, afficher le badge.

4. **Limiter les couleurs affichées**

   Afficher max 5 couleurs avec "+X" si plus.

</Steps>

### Astuces Twig

```twig
{# Calcul du pourcentage de remise #}
{% set discount = ((old_price - price) / old_price * 100)|round %}

{# Limiter un tableau #}
{% for color in colors|slice(0, 5) %}

{# Compter le reste #}
{% if colors|length > 5 %}
  +{{ colors|length - 5 }}
{% endif %}
```

### Validation ✓

- [ ] Badge de remise calculé dynamiquement
- [ ] Image avec effet hover
- [ ] Actions quick view/wishlist
- [ ] Couleurs avec limitation
- [ ] Bouton panier fonctionnel

---

## Exercice 5 : Alpine.js Store & Mini-Cart

<Card title="Durée estimée : 50 minutes" icon="clock">
  Implémenter le panier côté client avec Alpine.js.
</Card>

### Objectif

Créer un système de panier complet avec persistance localStorage.

### Instructions

<Steps>

1. **Créer js/src/stores/cart.js**

   Implémentez le store Alpine avec :
   - `items` : tableau des produits
   - `count` : getter nombre total
   - `total` : getter montant total
   - `add()` : ajouter/incrémenter
   - `remove()` : supprimer
   - `updateQuantity()` : modifier quantité
   - `save()` : persister localStorage

2. **Créer js/src/app.js**

   ```javascript
   import Alpine from 'alpinejs';
   import './stores/cart.js';
   
   window.Alpine = Alpine;
   Alpine.start();
   ```

3. **Créer le template mini-cart**

   Dans le header, dropdown avec :
   - Icône panier + badge count
   - Liste des articles
   - Bouton supprimer par article
   - Total et lien checkout

4. **Builder et tester**

   ```bash
   npm run build:js
   ```

</Steps>

### Test fonctionnel

1. Ajouter un produit au panier
2. Rafraîchir la page → panier conservé
3. Modifier quantité
4. Supprimer un article
5. Vérifier le total

### Validation ✓

- [ ] Store cart fonctionnel
- [ ] Persistance localStorage
- [ ] Mini-cart dropdown
- [ ] Animations transitions
- [ ] Total calculé correctement

---

## Exercice 6 : Page Produit Complète

<Card title="Durée estimée : 45 minutes" icon="clock">
  Créer le template full du produit avec galerie.
</Card>

### Objectif

Implémenter la page détail produit avec galerie interactive.

### Instructions

<Steps>

1. **Créer node--product--full.html.twig**

   Layout 2 colonnes :
   - Gauche : galerie images
   - Droite : infos produit

2. **Implémenter la galerie Alpine.js**

   ```twig
   <div x-data="{ activeImage: 0 }">
     {# Image principale #}
     {# Miniatures cliquables #}
   </div>
   ```

3. **Ajouter le sélecteur de taille/couleur**

   ```twig
   <div x-data="{ selectedSize: null, selectedColor: null }">
   ```

4. **Sélecteur de quantité**

   ```twig
   <div x-data="{ qty: 1 }">
     <button @click="qty = Math.max(1, qty - 1)">−</button>
     <input x-model="qty" type="number">
     <button @click="qty++">+</button>
   </div>
   ```

5. **Onglets description/avis**

   ```twig
   <div x-data="{ tab: 'description' }">
   ```

</Steps>

### Validation ✓

- [ ] Galerie avec miniatures
- [ ] Sélecteurs taille/couleur
- [ ] Sélecteur quantité
- [ ] Onglets fonctionnels
- [ ] Bouton ajouter au panier

---

## Exercice 7 : Notifications Toast

<Card title="Durée estimée : 20 minutes" icon="clock">
  Système de notifications toast.
</Card>

### Objectif

Afficher des messages de confirmation animés.

### Instructions

<Steps>

1. **Créer le composant toast dans app.js**

   ```javascript
   document.addEventListener('alpine:init', () => {
     Alpine.data('toasts', () => ({
       items: [],
       add(message, type = 'success') {
         const id = Date.now();
         this.items.push({ id, message, type });
         setTimeout(() => this.remove(id), 4000);
       },
       remove(id) {
         this.items = this.items.filter(t => t.id !== id);
       }
     }));
   });
   ```

2. **Créer le template block--toasts.html.twig**

   Position fixed, animations de slide.

3. **Déclencher depuis le panier**

   ```javascript
   add(product) {
     // ...
     window.dispatchEvent(new CustomEvent('toast', {
       detail: { message: `${product.name} ajouté`, type: 'success' }
     }));
   }
   ```

</Steps>

### Validation ✓

- [ ] Toast apparaît à l'ajout panier
- [ ] Animation entrée/sortie
- [ ] Auto-disparition après 4s
- [ ] Bouton fermer manuel

---

## Exercice 8 : Build Production

<Card title="Durée estimée : 15 minutes" icon="clock">
  Optimiser pour la production.
</Card>

### Objectif

Préparer les assets pour le déploiement.

### Instructions

<Steps>

1. **Vérifier le contenu Tailwind**

   ```javascript
   // tailwind.config.js
   export default {
     content: [
       './templates/**/*.twig',
       './js/**/*.js',
       '../../../modules/custom/**/*.twig',
     ],
   };
   ```

2. **Build minifié**

   ```bash
   npm run build
   ```

3. **Vérifier les tailles**

   ```bash
   ls -lh css/dist/tailwind.css
   ls -lh js/dist/app.js
   ```

4. **Tester sans erreurs console**

   Ouvrir DevTools, vérifier aucune erreur.

5. **Commit final**

   ```bash
   git add themes/custom/tailstore
   git commit -m "feat: complete TailStore theme with Tailwind and Alpine"
   ```

</Steps>

### Objectifs de taille

| Fichier | Taille max |
|---------|-----------|
| tailwind.css | < 50kb |
| app.js | < 30kb |

### Validation ✓

- [ ] CSS purgé et minifié
- [ ] JS bundlé et minifié
- [ ] Aucune erreur console
- [ ] Site rapide au chargement

---

## 🏆 Récapitulatif Étape 6

<CardGrid>
  <Card title="Thème créé" icon="puzzle">
    Structure complète avec regions
  </Card>
  <Card title="Tailwind configuré" icon="seti:css">
    Design system cohérent
  </Card>
  <Card title="Templates Twig" icon="document">
    Product card et page complète
  </Card>
  <Card title="Alpine.js intégré" icon="rocket">
    Panier et interactions
  </Card>
</CardGrid>

## 📁 Structure finale du thème

```
themes/custom/tailstore/
├── css/
│   ├── src/
│   │   └── tailwind.css
│   └── dist/
│       └── tailwind.css
├── js/
│   ├── src/
│   │   ├── app.js
│   │   └── stores/
│   │       └── cart.js
│   └── dist/
│       └── app.js
├── templates/
│   ├── html.html.twig
│   ├── page.html.twig
│   ├── node--product--teaser.html.twig
│   ├── node--product--full.html.twig
│   └── block--mini-cart.html.twig
├── images/
├── tailstore.info.yml
├── tailstore.libraries.yml
├── tailstore.theme
├── package.json
└── tailwind.config.js
```

## 🔜 Prochaine étape

Le thème est prêt ! Dans l'[Étape 7](/etape-7-modules/), nous ajouterons les modules contributifs essentiels (Pathauto, Metatag, Webform...).
