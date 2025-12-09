---
title: Exercices Étape 8
description: Mise en pratique du développement de modules Drupal custom
sidebar:
  order: 7
---

import { Tabs, TabItem, Aside, Card, CardGrid, Steps } from '@astrojs/starlight/components';

## 🎯 Objectifs

À la fin de ces exercices, vous aurez :
- Créé le module `tailstore_cart` complet
- Implémenté le service de panier
- Intégré htmx pour les interactions
- Configuré Stripe Checkout

---

## Exercice 1 : Créer le module

<Card title="Durée estimée : 20 minutes" icon="clock">
  Créer la structure de base du module tailstore_cart.
</Card>

### Objectif

Initialiser le module avec tous les fichiers de base.

### Instructions

<Steps>

1. **Créer la structure de dossiers**

   ```bash
   mkdir -p web/modules/custom/tailstore_cart/{src/{Controller,Service,Form,Plugin/Block},templates,config/{install,schema},js,css}
   ```

2. **Créer tailstore_cart.info.yml**

   ```yaml
   name: TailStore Cart
   type: module
   description: 'Shopping cart and Stripe checkout for TailStore'
   core_version_requirement: ^10 || ^11
   package: TailStore
   version: 1.0.0
   dependencies:
     - drupal:node
     - drupal:user
   configure: tailstore_cart.settings
   ```

3. **Créer tailstore_cart.module**

   ```php
   <?php

   declare(strict_types=1);

   /**
    * @file
    * Primary module hooks for TailStore Cart.
    */

   /**
    * Implements hook_theme().
    */
   function tailstore_cart_theme(): array {
     return [
       'cart_page' => [
         'variables' => ['items' => [], 'total' => 0],
       ],
       'mini_cart' => [
         'variables' => ['count' => 0, 'total' => 0, 'items' => []],
       ],
       'checkout_success' => [
         'variables' => ['session' => NULL, 'order_email' => '', 'amount' => 0, 'currency' => ''],
       ],
       'checkout_cancel' => [
         'variables' => ['cart_url' => ''],
       ],
     ];
   }

   /**
    * Implements hook_page_attachments().
    */
   function tailstore_cart_page_attachments(array &$attachments): void {
     $attachments['#attached']['library'][] = 'tailstore_cart/htmx';
   }
   ```

4. **Créer tailstore_cart.libraries.yml**

   ```yaml
   htmx:
     version: 2.0
     js:
       https://unpkg.com/htmx.org@2.0.4/dist/htmx.min.js:
         type: external
         minified: true
         attributes:
           defer: true

   cart:
     version: 1.0
     css:
       component:
         css/cart.css: {}
     dependencies:
       - tailstore_cart/htmx
   ```

5. **Créer tailstore_cart.permissions.yml**

   ```yaml
   access cart:
     title: 'Access shopping cart'
     description: 'View and manage shopping cart'

   access checkout:
     title: 'Access checkout'
     description: 'Proceed to payment'

   administer tailstore cart:
     title: 'Administer TailStore Cart'
     restrict access: true
   ```

6. **Activer le module**

   ```bash
   ddev drush en tailstore_cart -y
   ```

</Steps>

### Validation ✓

- [ ] Module activé sans erreur
- [ ] Visible dans la liste des modules
- [ ] Permissions apparaissent

---

## Exercice 2 : Service CartService

<Card title="Durée estimée : 40 minutes" icon="clock">
  Implémenter le service de gestion du panier.
</Card>

### Objectif

Créer un service complet pour gérer le panier en session.

### Instructions

<Steps>

1. **Créer l'interface**

   `src/Service/CartServiceInterface.php` avec les méthodes :
   - `add(int $productId, int $quantity): void`
   - `remove(int $productId): void`
   - `updateQuantity(int $productId, int $quantity): void`
   - `getItems(): array`
   - `getItem(int $productId): ?array`
   - `getCount(): int`
   - `getTotal(): float`
   - `clear(): void`

2. **Créer l'implémentation**

   `src/Service/CartService.php` :
   - Utiliser la session pour stocker les données
   - Charger les produits via EntityTypeManager
   - Calculer les totaux

3. **Déclarer le service**

   `tailstore_cart.services.yml` :
   ```yaml
   services:
     tailstore_cart.cart:
       class: Drupal\tailstore_cart\Service\CartService
       arguments:
         - '@request_stack'
         - '@entity_type.manager'
   ```

4. **Tester**

   ```bash
   ddev drush php:eval "
     \$cart = \Drupal::service('tailstore_cart.cart');
     \$cart->add(1, 2);
     print_r(\$cart->getItems());
   "
   ```

</Steps>

### Validation ✓

- [ ] Interface créée avec toutes les méthodes
- [ ] CartService implémenté
- [ ] Service déclaré dans services.yml
- [ ] Test via drush fonctionnel

---

## Exercice 3 : Routes et Controllers

<Card title="Durée estimée : 45 minutes" icon="clock">
  Créer les routes et controllers pour le panier.
</Card>

### Objectif

Implémenter toutes les routes pour les opérations du panier.

### Instructions

<Steps>

1. **Créer tailstore_cart.routing.yml**

   Routes à créer :
   - `GET /cart` → page panier
   - `POST /cart/add/{product_id}` → ajouter
   - `PATCH /cart/update/{product_id}` → modifier quantité
   - `DELETE /cart/remove/{product_id}` → supprimer
   - `GET /cart/mini` → mini-cart (htmx)

2. **Créer CartController**

   `src/Controller/CartController.php` :
   - Injection de CartService
   - Méthodes pour chaque route
   - Détection des requêtes htmx
   - Réponses HTML fragments ou JSON

3. **Créer les templates**

   - `templates/cart-page.html.twig`
   - `templates/mini-cart.html.twig`

4. **Tester les routes**

   ```bash
   ddev drush router:list --module=tailstore_cart
   ```

</Steps>

### Validation ✓

- [ ] Toutes les routes définies
- [ ] CartController fonctionnel
- [ ] Page /cart accessible
- [ ] Templates créés

---

## Exercice 4 : Intégration htmx

<Card title="Durée estimée : 35 minutes" icon="clock">
  Ajouter les interactions htmx dans les templates.
</Card>

### Objectif

Rendre le panier interactif sans recharger la page.

### Instructions

<Steps>

1. **Modifier le template produit**

   Ajouter le bouton htmx :
   ```twig
   <button 
     hx-post="/cart/add/{{ node.id }}"
     hx-target="#mini-cart"
     hx-swap="innerHTML"
   >
     Ajouter au panier
   </button>
   ```

2. **Créer le mini-cart dans le header**

   - Bloc ou template personnalisé
   - Affiche le compteur et le total
   - Dropdown avec liste des articles

3. **Mise à jour des quantités**

   Dans la page panier :
   - Boutons +/- avec htmx
   - Input avec hx-trigger="change"

4. **Suppression avec confirmation**

   ```twig
   <button
     hx-delete="/cart/remove/{{ item.product.id }}"
     hx-target="closest tr"
     hx-swap="outerHTML"
     hx-confirm="Supprimer cet article ?"
   >
     Supprimer
   </button>
   ```

5. **Tester les interactions**

   - Ajouter un produit
   - Modifier la quantité
   - Supprimer un article
   - Vérifier le mini-cart

</Steps>

### Validation ✓

- [ ] Bouton ajout panier fonctionnel
- [ ] Mini-cart mis à jour dynamiquement
- [ ] Quantités modifiables
- [ ] Suppression avec animation
- [ ] Pas de rechargement de page

---

## Exercice 5 : Formulaire de configuration

<Card title="Durée estimée : 25 minutes" icon="clock">
  Créer le formulaire d'administration.
</Card>

### Objectif

Permettre la configuration des clés Stripe via l'interface.

### Instructions

<Steps>

1. **Créer SettingsForm**

   `src/Form/SettingsForm.php` :
   - Étendre `ConfigFormBase`
   - Champs pour les clés Stripe
   - Sélection de la devise
   - Validation des clés

2. **Créer la configuration par défaut**

   `config/install/tailstore_cart.settings.yml`

3. **Créer le schéma**

   `config/schema/tailstore_cart.schema.yml`

4. **Ajouter le lien de menu admin**

   `tailstore_cart.links.menu.yml` :
   ```yaml
   tailstore_cart.settings:
     title: 'TailStore Cart'
     route_name: tailstore_cart.settings
     parent: system.admin_config_system
     description: 'Configure TailStore Cart settings'
   ```

5. **Tester**

   - Accéder à `/admin/config/system/tailstore-cart`
   - Saisir des clés test
   - Vérifier la sauvegarde

</Steps>

### Validation ✓

- [ ] Formulaire accessible dans l'admin
- [ ] Clés Stripe configurables
- [ ] Validation fonctionnelle
- [ ] Configuration sauvegardée

---

## Exercice 6 : Intégration Stripe

<Card title="Durée estimée : 50 minutes" icon="clock">
  Implémenter le paiement Stripe Checkout.
</Card>

### Objectif

Permettre le paiement via Stripe Checkout en mode redirect.

### Instructions

<Steps>

1. **Installer la SDK Stripe**

   ```bash
   ddev composer require stripe/stripe-php
   ```

2. **Créer StripeService**

   `src/Service/StripeService.php` :
   - Initialisation avec la clé secrète
   - `createCheckoutSession()`
   - `getSession()`
   - `handleWebhook()`

3. **Créer CheckoutController**

   `src/Controller/CheckoutController.php` :
   - `index()` : page récapitulative
   - `create()` : création session Stripe
   - `success()` : page de confirmation
   - `cancel()` : page d'annulation

4. **Ajouter les routes checkout**

   ```yaml
   tailstore_cart.checkout:
     path: '/checkout'
     defaults:
       _controller: '\Drupal\tailstore_cart\Controller\CheckoutController::index'
     requirements:
       _permission: 'access checkout'
   
   tailstore_cart.checkout_create:
     path: '/checkout/create'
     methods: [POST]
     ...
   ```

5. **Créer les templates**

   - `checkout-success.html.twig`
   - `checkout-cancel.html.twig`

6. **Tester avec les cartes test**

   - `4242 4242 4242 4242` pour succès
   - Vérifier la redirection
   - Vérifier le vidage du panier

</Steps>

### Validation ✓

- [ ] SDK Stripe installée
- [ ] Session Stripe créée
- [ ] Redirection vers Stripe OK
- [ ] Page succès affichée
- [ ] Panier vidé après paiement

---

## Exercice 7 : Webhook Stripe

<Card title="Durée estimée : 30 minutes" icon="clock">
  Implémenter le webhook pour confirmer les paiements.
</Card>

### Objectif

Recevoir et traiter les notifications Stripe.

### Instructions

<Steps>

1. **Créer WebhookController**

   `src/Controller/WebhookController.php` :
   - Validation de la signature
   - Dispatch selon le type d'event
   - Logging des événements

2. **Ajouter la route webhook**

   ```yaml
   tailstore_cart.webhook_stripe:
     path: '/webhook/stripe'
     defaults:
       _controller: '\Drupal\tailstore_cart\Controller\WebhookController::stripe'
     requirements:
       _access: 'TRUE'
     methods: [POST]
   ```

3. **Configurer Stripe CLI**

   ```bash
   stripe listen --forward-to https://tailstore.ddev.site/webhook/stripe
   ```

4. **Tester les événements**

   ```bash
   stripe trigger checkout.session.completed
   ```

5. **Vérifier les logs**

   ```bash
   ddev drush watchdog:show --type=tailstore_cart
   ```

</Steps>

### Validation ✓

- [ ] Webhook route créée
- [ ] Signature validée
- [ ] Events loggés
- [ ] Tests CLI fonctionnels

---

## Exercice 8 : Bloc Mini-Cart

<Card title="Durée estimée : 25 minutes" icon="clock">
  Créer un bloc Drupal pour le mini-cart.
</Card>

### Objectif

Afficher le mini-cart comme bloc configurable.

### Instructions

<Steps>

1. **Créer le Plugin Block**

   `src/Plugin/Block/MiniCartBlock.php` :
   ```php
   /**
    * @Block(
    *   id = "tailstore_mini_cart",
    *   admin_label = @Translation("TailStore Mini Cart"),
    *   category = @Translation("TailStore")
    * )
    */
   class MiniCartBlock extends BlockBase implements ContainerFactoryPluginInterface {
     // ...
   }
   ```

2. **Injecter CartService**

   Via `ContainerFactoryPluginInterface`

3. **Implémenter build()**

   Retourner le render array avec le template mini-cart

4. **Placer le bloc**

   - Structure → Mise en page des blocs
   - Région Header

5. **Tester**

   - Ajouter des produits
   - Vérifier l'affichage dans le header

</Steps>

### Validation ✓

- [ ] Plugin Block créé
- [ ] Bloc visible dans l'admin
- [ ] Bloc placé dans le header
- [ ] Mise à jour dynamique

---

## 🏆 Récapitulatif Étape 8

<CardGrid>
  <Card title="Module créé" icon="puzzle">
    Structure complète PSR-4
  </Card>
  <Card title="Services" icon="setting">
    Cart + Stripe services
  </Card>
  <Card title="htmx intégré" icon="rocket">
    Interactions dynamiques
  </Card>
  <Card title="Paiement" icon="seti:salesforce">
    Stripe Checkout fonctionnel
  </Card>
</CardGrid>

## 📁 Structure finale du module

```
modules/custom/tailstore_cart/
├── tailstore_cart.info.yml
├── tailstore_cart.module
├── tailstore_cart.routing.yml
├── tailstore_cart.services.yml
├── tailstore_cart.permissions.yml
├── tailstore_cart.libraries.yml
├── tailstore_cart.links.menu.yml
├── config/
│   ├── install/
│   │   └── tailstore_cart.settings.yml
│   └── schema/
│       └── tailstore_cart.schema.yml
├── src/
│   ├── Controller/
│   │   ├── CartController.php
│   │   ├── CheckoutController.php
│   │   └── WebhookController.php
│   ├── Service/
│   │   ├── CartServiceInterface.php
│   │   ├── CartService.php
│   │   ├── StripeServiceInterface.php
│   │   └── StripeService.php
│   ├── Form/
│   │   └── SettingsForm.php
│   └── Plugin/
│       └── Block/
│           └── MiniCartBlock.php
├── templates/
│   ├── cart-page.html.twig
│   ├── mini-cart.html.twig
│   ├── checkout-success.html.twig
│   └── checkout-cancel.html.twig
└── css/
    └── cart.css
```

## 📋 Export et commit

```bash
# Exporter la configuration
ddev drush cex -y

# Commit
git add .
git commit -m "feat: complete tailstore_cart module with htmx and Stripe"
```

## 🎓 Félicitations !

Vous avez terminé le Drupal Bootcamp ! Vous maîtrisez maintenant :

- ✅ L'installation et configuration de Drupal
- ✅ La création de contenus et taxonomies
- ✅ Les vues et la navigation
- ✅ Le theming avec Tailwind CSS
- ✅ Les modules contributifs essentiels
- ✅ Le développement de modules custom
- ✅ L'intégration htmx et Stripe

## 🔜 Pour aller plus loin

- [Projet Intégrateur](/projet/) : Appliquez toutes vos connaissances
- [Ressources](/ressources/) : Documentation et liens utiles
