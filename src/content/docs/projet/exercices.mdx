---
title: Exercices - Projet Intégrateur
description: Guide détaillé pour réaliser le projet TailStore étape par étape
sidebar:
  order: 1
---

import { Card, CardGrid, Steps, Aside, Tabs, TabItem } from '@astrojs/starlight/components';

## 🎯 Objectifs

Ces exercices vous guident dans la réalisation complète du projet TailStore. Suivez-les dans l'ordre pour construire votre site e-commerce.

<Aside type="tip" title="Rappel">
Commitez régulièrement votre travail ! Un commit par exercice est une bonne pratique.
</Aside>

---

## Exercice 1 : Initialisation du projet

<Card title="Durée estimée : 30 minutes" icon="setting">
  Préparer l'environnement et importer la configuration de base.
</Card>

### Objectif

Avoir un site Drupal fonctionnel avec la configuration des étapes précédentes.

### Instructions

<Steps>

1. **Cloner ou créer le projet**

   ```bash
   # Option A : Nouveau projet
   composer create-project drupal/recommended-project tailstore
   cd tailstore
   ddev config --project-type=drupal --docroot=web
   ddev start

   # Option B : Cloner votre travail existant
   git clone <votre-repo> tailstore
   cd tailstore
   ddev start
   ddev composer install
   ```

2. **Installer Drupal avec la configuration**

   ```bash
   # Si vous avez un config/sync existant
   ddev drush site:install --existing-config -y

   # Sinon, installation standard
   ddev drush site:install standard -y
   ```

3. **Vérifier l'installation**

   ```bash
   ddev drush status
   ddev launch
   ```

4. **Créer la branche projet**

   ```bash
   git checkout -b projet/votre-nom
   git push -u origin projet/votre-nom
   ```

</Steps>

### Validation ✓

- [ ] DDEV démarre sans erreur
- [ ] Site accessible via `ddev launch`
- [ ] Connexion admin fonctionnelle
- [ ] Branche Git créée

---

## Exercice 2 : Types de contenu et taxonomies

<Card title="Durée estimée : 1 heure" icon="document">
  Créer ou vérifier la modélisation du contenu.
</Card>

### Objectif

Avoir le type de contenu Produit et les taxonomies nécessaires.

### Instructions

<Steps>

1. **Vérifier/créer le type de contenu Produit**

   Champs requis :
   | Champ | Type | Requis |
   |-------|------|--------|
   | Titre | Text | ✓ |
   | Prix | Number (decimal) | ✓ |
   | Description | Text (formatted, long) | ✓ |
   | Image | Media (Image) | ✓ |
   | Catégorie | Entity reference (taxonomy) | ✓ |
   | En stock | Boolean | |
   | SKU | Text | |

2. **Créer les taxonomies**

   - **Catégories** : Vêtements, Chaussures, Accessoires, etc.
   - **Marques** : Nike, Adidas, etc. (optionnel)

3. **Configurer les modes d'affichage**

   - **Teaser** : Image, titre, prix
   - **Full** : Tous les champs
   - **Cart** : Image miniature, titre, prix (pour le panier)

4. **Exporter la configuration**

   ```bash
   ddev drush cex -y
   git add config/
   git commit -m "feat: add Product content type and taxonomies"
   ```

</Steps>

### Validation ✓

- [ ] Type Produit créé avec tous les champs
- [ ] Taxonomie Catégories avec termes
- [ ] Modes d'affichage configurés
- [ ] Configuration exportée

---

## Exercice 3 : Créer du contenu

<Card title="Durée estimée : 45 minutes" icon="pencil">
  Importer ou créer les produits d'exemple.
</Card>

### Objectif

Avoir au moins 10 produits pour tester le site.

### Instructions

<Steps>

1. **Option A : Import CSV avec Feeds**

   ```bash
   ddev composer require drupal/feeds
   ddev drush en feeds -y
   ```

   Créez un feed pour importer un CSV de produits.

2. **Option B : Création manuelle**

   Créez 10-15 produits variés avec :
   - Différentes catégories
   - Prix variés
   - Images de qualité

3. **Option C : Script Drush**

   ```php
   // Dans un fichier create-products.php
   <?php
   $products = [
     ['title' => 'T-shirt Classique', 'price' => 29.99, 'category' => 'vetements'],
     ['title' => 'Jean Slim', 'price' => 59.99, 'category' => 'vetements'],
     // ...
   ];
   
   foreach ($products as $data) {
     $node = \Drupal\node\Entity\Node::create([
       'type' => 'product',
       'title' => $data['title'],
       'field_price' => $data['price'],
       // ...
     ]);
     $node->save();
   }
   ```

4. **Vérifier le contenu**

   - Naviguer vers `/admin/content`
   - Vérifier les affichages

</Steps>

### Validation ✓

- [ ] 10+ produits créés
- [ ] Images uploadées
- [ ] Catégories assignées
- [ ] Affichage correct

---

## Exercice 4 : Vues et catalogue

<Card title="Durée estimée : 45 minutes" icon="list-format">
  Créer les vues pour le catalogue et les listings.
</Card>

### Objectif

Avoir un catalogue fonctionnel avec filtres.

### Instructions

<Steps>

1. **Créer la vue Catalogue**

   - Path : `/shop`
   - Format : Grid ou Unformatted list
   - Mode d'affichage : Teaser
   - Pagination : 12 items par page

2. **Ajouter les filtres exposés**

   - Catégorie (select)
   - Prix (min/max) avec Better Exposed Filters
   - Tri : Prix, Nouveauté, Titre

3. **Créer les blocs de vue**

   - Produits populaires (sidebar)
   - Derniers produits (page d'accueil)

4. **Exporter**

   ```bash
   ddev drush cex -y
   git add config/
   git commit -m "feat: add catalog view with filters"
   ```

</Steps>

### Validation ✓

- [ ] Vue catalogue accessible sur `/shop`
- [ ] Filtres fonctionnels
- [ ] Pagination correcte
- [ ] Blocs créés

---

## Exercice 5 : Structure du module panier

<Card title="Durée estimée : 45 minutes" icon="puzzle">
  Créer la structure de base du module tailstore_cart.
</Card>

### Objectif

Avoir un module activable avec la structure PSR-4.

### Instructions

<Steps>

1. **Créer l'arborescence**

   ```bash
   mkdir -p web/modules/custom/tailstore_cart/{src/{Controller,Service,Form,Plugin/Block},templates,config/install}
   ```

2. **Créer tailstore_cart.info.yml**

   ```yaml
   name: TailStore Cart
   type: module
   description: 'Shopping cart with htmx and Stripe checkout'
   core_version_requirement: ^10 || ^11
   package: TailStore
   
   dependencies:
     - drupal:node
     - drupal:user
   ```

3. **Créer tailstore_cart.module**

   ```php
   <?php
   
   declare(strict_types=1);
   
   /**
    * @file
    * TailStore Cart module.
    */
   
   use Drupal\Core\Routing\RouteMatchInterface;
   
   /**
    * Implements hook_help().
    */
   function tailstore_cart_help(string $route_name, RouteMatchInterface $route_match): string {
     if ($route_name === 'help.page.tailstore_cart') {
       return '<p>' . t('Provides shopping cart functionality for TailStore.') . '</p>';
     }
     return '';
   }
   
   /**
    * Implements hook_theme().
    */
   function tailstore_cart_theme(): array {
     return [
       'cart_page' => [
         'variables' => [
           'items' => [],
           'total' => 0,
           'count' => 0,
         ],
       ],
       'mini_cart' => [
         'variables' => [
           'items' => [],
           'total' => 0,
           'count' => 0,
         ],
       ],
       'cart_item' => [
         'variables' => [
           'product' => NULL,
           'quantity' => 1,
           'subtotal' => 0,
         ],
       ],
     ];
   }
   ```

4. **Créer les permissions**

   `tailstore_cart.permissions.yml` :
   ```yaml
   access cart:
     title: 'Access shopping cart'
     description: 'View and modify the shopping cart'
   
   access checkout:
     title: 'Access checkout'
     description: 'Proceed to payment'
   
   administer tailstore cart:
     title: 'Administer TailStore Cart'
     restrict access: true
   ```

5. **Activer le module**

   ```bash
   ddev drush en tailstore_cart -y
   ddev drush cr
   ```

</Steps>

### Validation ✓

- [ ] Module activé sans erreur
- [ ] Structure des dossiers correcte
- [ ] Permissions visibles dans l'admin

---

## Exercice 6 : CartService

<Card title="Durée estimée : 1 heure" icon="setting">
  Implémenter le service de gestion du panier.
</Card>

### Objectif

Avoir un service fonctionnel pour gérer le panier en session.

### Instructions

<Steps>

1. **Créer l'interface**

   `src/Service/CartServiceInterface.php` :
   ```php
   <?php
   
   declare(strict_types=1);
   
   namespace Drupal\tailstore_cart\Service;
   
   interface CartServiceInterface {
   
     public function add(int $productId, int $quantity = 1): void;
   
     public function remove(int $productId): void;
   
     public function updateQuantity(int $productId, int $quantity): void;
   
     public function getItems(): array;
   
     public function getCount(): int;
   
     public function getTotal(): float;
   
     public function clear(): void;
   
   }
   ```

2. **Créer l'implémentation**

   `src/Service/CartService.php` :
   ```php
   <?php
   
   declare(strict_types=1);
   
   namespace Drupal\tailstore_cart\Service;
   
   use Drupal\Core\Entity\EntityTypeManagerInterface;
   use Symfony\Component\HttpFoundation\RequestStack;
   
   class CartService implements CartServiceInterface {
   
     private const CART_KEY = 'tailstore_cart';
   
     public function __construct(
       private readonly RequestStack $requestStack,
       private readonly EntityTypeManagerInterface $entityTypeManager,
     ) {}
   
     public function add(int $productId, int $quantity = 1): void {
       $cart = $this->getCart();
       
       if (isset($cart[$productId])) {
         $cart[$productId] += $quantity;
       } else {
         $cart[$productId] = $quantity;
       }
       
       $this->saveCart($cart);
     }
   
     public function remove(int $productId): void {
       $cart = $this->getCart();
       unset($cart[$productId]);
       $this->saveCart($cart);
     }
   
     public function updateQuantity(int $productId, int $quantity): void {
       if ($quantity <= 0) {
         $this->remove($productId);
         return;
       }
       
       $cart = $this->getCart();
       $cart[$productId] = $quantity;
       $this->saveCart($cart);
     }
   
     public function getItems(): array {
       $cart = $this->getCart();
       $items = [];
       
       if (empty($cart)) {
         return $items;
       }
       
       $storage = $this->entityTypeManager->getStorage('node');
       $products = $storage->loadMultiple(array_keys($cart));
       
       foreach ($products as $product) {
         $price = (float) $product->get('field_price')->value;
         $quantity = $cart[$product->id()];
         
         $items[] = [
           'product' => $product,
           'quantity' => $quantity,
           'price' => $price,
           'subtotal' => $price * $quantity,
         ];
       }
       
       return $items;
     }
   
     public function getCount(): int {
       return array_sum($this->getCart());
     }
   
     public function getTotal(): float {
       $total = 0;
       foreach ($this->getItems() as $item) {
         $total += $item['subtotal'];
       }
       return $total;
     }
   
     public function clear(): void {
       $this->saveCart([]);
     }
   
     private function getCart(): array {
       $session = $this->requestStack->getSession();
       return $session->get(self::CART_KEY, []);
     }
   
     private function saveCart(array $cart): void {
       $session = $this->requestStack->getSession();
       $session->set(self::CART_KEY, $cart);
     }
   
   }
   ```

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

4. **Tester le service**

   ```bash
   ddev drush php:eval "
     \$cart = \Drupal::service('tailstore_cart.cart');
     \$cart->add(1, 2);
     echo 'Count: ' . \$cart->getCount() . PHP_EOL;
     echo 'Total: ' . \$cart->getTotal() . PHP_EOL;
   "
   ```

</Steps>

### Validation ✓

- [ ] Interface créée
- [ ] Service implémenté
- [ ] Service déclaré
- [ ] Test drush fonctionnel

---

## Exercice 7 : Routes et CartController

<Card title="Durée estimée : 1 heure" icon="rocket">
  Créer les routes et le controller pour le panier.
</Card>

### Objectif

Avoir toutes les routes du panier fonctionnelles.

### Instructions

<Steps>

1. **Créer les routes**

   `tailstore_cart.routing.yml` :
   ```yaml
   tailstore_cart.cart:
     path: '/cart'
     defaults:
       _controller: '\Drupal\tailstore_cart\Controller\CartController::index'
       _title: 'Votre panier'
     requirements:
       _permission: 'access cart'
   
   tailstore_cart.add:
     path: '/cart/add/{product_id}'
     defaults:
       _controller: '\Drupal\tailstore_cart\Controller\CartController::add'
     requirements:
       _permission: 'access cart'
       product_id: \d+
     methods: [POST]
   
   tailstore_cart.update:
     path: '/cart/update/{product_id}'
     defaults:
       _controller: '\Drupal\tailstore_cart\Controller\CartController::update'
     requirements:
       _permission: 'access cart'
       product_id: \d+
     methods: [POST, PATCH]
   
   tailstore_cart.remove:
     path: '/cart/remove/{product_id}'
     defaults:
       _controller: '\Drupal\tailstore_cart\Controller\CartController::remove'
     requirements:
       _permission: 'access cart'
       product_id: \d+
     methods: [POST, DELETE]
   
   tailstore_cart.mini:
     path: '/cart/mini'
     defaults:
       _controller: '\Drupal\tailstore_cart\Controller\CartController::mini'
     requirements:
       _permission: 'access cart'
   
   tailstore_cart.clear:
     path: '/cart/clear'
     defaults:
       _controller: '\Drupal\tailstore_cart\Controller\CartController::clear'
     requirements:
       _permission: 'access cart'
     methods: [POST]
   ```

2. **Créer CartController**

   `src/Controller/CartController.php` :
   ```php
   <?php
   
   declare(strict_types=1);
   
   namespace Drupal\tailstore_cart\Controller;
   
   use Drupal\Core\Controller\ControllerBase;
   use Drupal\tailstore_cart\Service\CartServiceInterface;
   use Symfony\Component\DependencyInjection\ContainerInterface;
   use Symfony\Component\HttpFoundation\Request;
   use Symfony\Component\HttpFoundation\Response;
   
   class CartController extends ControllerBase {
   
     public function __construct(
       private readonly CartServiceInterface $cartService,
     ) {}
   
     public static function create(ContainerInterface $container): static {
       return new static(
         $container->get('tailstore_cart.cart'),
       );
     }
   
     public function index(): array {
       return [
         '#theme' => 'cart_page',
         '#items' => $this->cartService->getItems(),
         '#total' => $this->cartService->getTotal(),
         '#count' => $this->cartService->getCount(),
         '#cache' => ['max-age' => 0],
       ];
     }
   
     public function add(int $product_id, Request $request): Response {
       $quantity = (int) $request->request->get('quantity', 1);
       $this->cartService->add($product_id, $quantity);
       
       if ($this->isHtmxRequest($request)) {
         return $this->renderMiniCart();
       }
       
       $this->messenger()->addStatus($this->t('Product added to cart.'));
       return $this->redirect('tailstore_cart.cart');
     }
   
     public function update(int $product_id, Request $request): Response {
       $quantity = (int) $request->request->get('quantity', 1);
       $this->cartService->updateQuantity($product_id, $quantity);
       
       if ($this->isHtmxRequest($request)) {
         return $this->renderMiniCart();
       }
       
       return $this->redirect('tailstore_cart.cart');
     }
   
     public function remove(int $product_id, Request $request): Response {
       $this->cartService->remove($product_id);
       
       if ($this->isHtmxRequest($request)) {
         return new Response('', Response::HTTP_OK);
       }
       
       $this->messenger()->addStatus($this->t('Product removed from cart.'));
       return $this->redirect('tailstore_cart.cart');
     }
   
     public function mini(): Response {
       return $this->renderMiniCart();
     }
   
     public function clear(Request $request): Response {
       $this->cartService->clear();
       
       if ($this->isHtmxRequest($request)) {
         return $this->renderMiniCart();
       }
       
       return $this->redirect('tailstore_cart.cart');
     }
   
     private function isHtmxRequest(Request $request): bool {
       return $request->headers->has('HX-Request');
     }
   
     private function renderMiniCart(): Response {
       $build = [
         '#theme' => 'mini_cart',
         '#items' => $this->cartService->getItems(),
         '#total' => $this->cartService->getTotal(),
         '#count' => $this->cartService->getCount(),
       ];
       
       $html = \Drupal::service('renderer')->renderRoot($build);
       return new Response($html);
     }
   
   }
   ```

3. **Vider le cache et tester**

   ```bash
   ddev drush cr
   ddev drush router:list --module=tailstore_cart
   ```

</Steps>

### Validation ✓

- [ ] Routes définies
- [ ] Controller créé
- [ ] `/cart` accessible
- [ ] Actions fonctionnelles

---

## Exercice 8 : Templates et htmx

<Card title="Durée estimée : 1 heure" icon="seti:html">
  Créer les templates Twig avec htmx.
</Card>

### Objectif

Avoir des templates fonctionnels avec interactions htmx.

### Instructions

<Steps>

1. **Créer cart-page.html.twig**

   `templates/cart-page.html.twig` :
   ```twig
   <div class="cart-page" id="cart-container">
     <h1>{{ 'Votre panier'|t }}</h1>
     
     {% if items is empty %}
       <p class="cart-empty">{{ 'Votre panier est vide.'|t }}</p>
       <a href="/shop" class="btn btn-primary">{{ 'Continuer vos achats'|t }}</a>
     {% else %}
       <table class="cart-table">
         <thead>
           <tr>
             <th>{{ 'Produit'|t }}</th>
             <th>{{ 'Prix'|t }}</th>
             <th>{{ 'Quantité'|t }}</th>
             <th>{{ 'Sous-total'|t }}</th>
             <th></th>
           </tr>
         </thead>
         <tbody>
           {% for item in items %}
             <tr id="cart-item-{{ item.product.id }}">
               <td class="cart-item-product">
                 {{ item.product.label }}
               </td>
               <td class="cart-item-price">
                 {{ item.price|number_format(2, ',', ' ') }} €
               </td>
               <td class="cart-item-quantity">
                 <input 
                   type="number" 
                   value="{{ item.quantity }}" 
                   min="1"
                   hx-post="/cart/update/{{ item.product.id }}"
                   hx-trigger="change"
                   hx-target="#cart-container"
                   hx-swap="outerHTML"
                   name="quantity"
                 >
               </td>
               <td class="cart-item-subtotal">
                 {{ item.subtotal|number_format(2, ',', ' ') }} €
               </td>
               <td>
                 <button 
                   hx-delete="/cart/remove/{{ item.product.id }}"
                   hx-target="#cart-item-{{ item.product.id }}"
                   hx-swap="outerHTML"
                   hx-confirm="{{ 'Supprimer cet article ?'|t }}"
                   class="btn-remove"
                 >
                   ×
                 </button>
               </td>
             </tr>
           {% endfor %}
         </tbody>
         <tfoot>
           <tr>
             <td colspan="3" class="text-right"><strong>{{ 'Total'|t }}</strong></td>
             <td><strong>{{ total|number_format(2, ',', ' ') }} €</strong></td>
             <td></td>
           </tr>
         </tfoot>
       </table>
       
       <div class="cart-actions">
         <a href="/shop" class="btn btn-secondary">{{ 'Continuer vos achats'|t }}</a>
         <a href="/checkout" class="btn btn-primary">{{ 'Commander'|t }}</a>
       </div>
     {% endif %}
   </div>
   ```

2. **Créer mini-cart.html.twig**

   `templates/mini-cart.html.twig` :
   ```twig
   <div class="mini-cart" id="mini-cart">
     <a href="/cart" class="mini-cart-link">
       <span class="mini-cart-icon">🛒</span>
       <span class="mini-cart-count">{{ count }}</span>
     </a>
     {% if count > 0 %}
       <div class="mini-cart-dropdown">
         <ul class="mini-cart-items">
           {% for item in items|slice(0, 3) %}
             <li>
               <span class="item-name">{{ item.product.label }}</span>
               <span class="item-qty">× {{ item.quantity }}</span>
             </li>
           {% endfor %}
           {% if items|length > 3 %}
             <li class="more-items">
               {{ 'Et %count% autres articles...'|t({'%count%': items|length - 3}) }}
             </li>
           {% endif %}
         </ul>
         <div class="mini-cart-total">
           <strong>{{ 'Total'|t }} :</strong> {{ total|number_format(2, ',', ' ') }} €
         </div>
         <a href="/cart" class="btn btn-primary btn-sm">{{ 'Voir le panier'|t }}</a>
       </div>
     {% endif %}
   </div>
   ```

3. **Ajouter htmx au thème**

   Dans votre fichier `tailstore_theme.libraries.yml` :
   ```yaml
   htmx:
     js:
       https://unpkg.com/htmx.org@2.0.4: { type: external, minified: true }
   ```

4. **Tester les interactions**

   - Ajouter un produit au panier
   - Modifier la quantité
   - Supprimer un article
   - Vérifier le mini-cart

</Steps>

### Validation ✓

- [ ] Templates créés
- [ ] htmx chargé
- [ ] Ajout au panier dynamique
- [ ] Mini-cart mis à jour

---

## Exercice 9 : Stripe Checkout

<Card title="Durée estimée : 1h30" icon="seti:salesforce">
  Implémenter le paiement Stripe.
</Card>

### Objectif

Avoir un checkout Stripe fonctionnel en mode test.

### Instructions

<Steps>

1. **Installer la SDK Stripe**

   ```bash
   ddev composer require stripe/stripe-php
   ```

2. **Créer StripeService**

   `src/Service/StripeService.php` :
   ```php
   <?php
   
   declare(strict_types=1);
   
   namespace Drupal\tailstore_cart\Service;
   
   use Drupal\Core\Config\ConfigFactoryInterface;
   use Stripe\Checkout\Session;
   use Stripe\Stripe;
   
   class StripeService {
   
     public function __construct(
       private readonly ConfigFactoryInterface $configFactory,
     ) {
       $config = $this->configFactory->get('tailstore_cart.settings');
       Stripe::setApiKey($config->get('stripe_secret_key'));
     }
   
     public function createCheckoutSession(array $items, string $successUrl, string $cancelUrl): Session {
       $lineItems = [];
       
       foreach ($items as $item) {
         $lineItems[] = [
           'price_data' => [
             'currency' => 'eur',
             'product_data' => [
               'name' => $item['product']->label(),
             ],
             'unit_amount' => (int) ($item['price'] * 100),
           ],
           'quantity' => $item['quantity'],
         ];
       }
       
       return Session::create([
         'payment_method_types' => ['card'],
         'line_items' => $lineItems,
         'mode' => 'payment',
         'success_url' => $successUrl . '?session_id={CHECKOUT_SESSION_ID}',
         'cancel_url' => $cancelUrl,
       ]);
     }
   
     public function getSession(string $sessionId): Session {
       return Session::retrieve($sessionId);
     }
   
   }
   ```

3. **Créer CheckoutController**

   `src/Controller/CheckoutController.php` :
   ```php
   <?php
   
   declare(strict_types=1);
   
   namespace Drupal\tailstore_cart\Controller;
   
   use Drupal\Core\Controller\ControllerBase;
   use Drupal\Core\Url;
   use Drupal\tailstore_cart\Service\CartServiceInterface;
   use Drupal\tailstore_cart\Service\StripeService;
   use Symfony\Component\DependencyInjection\ContainerInterface;
   use Symfony\Component\HttpFoundation\RedirectResponse;
   use Symfony\Component\HttpFoundation\Request;
   
   class CheckoutController extends ControllerBase {
   
     public function __construct(
       private readonly CartServiceInterface $cartService,
       private readonly StripeService $stripeService,
     ) {}
   
     public static function create(ContainerInterface $container): static {
       return new static(
         $container->get('tailstore_cart.cart'),
         $container->get('tailstore_cart.stripe'),
       );
     }
   
     public function create(Request $request): RedirectResponse {
       $items = $this->cartService->getItems();
       
       if (empty($items)) {
         $this->messenger()->addError($this->t('Your cart is empty.'));
         return $this->redirect('tailstore_cart.cart');
       }
       
       $successUrl = Url::fromRoute('tailstore_cart.checkout_success', [], ['absolute' => TRUE])->toString();
       $cancelUrl = Url::fromRoute('tailstore_cart.checkout_cancel', [], ['absolute' => TRUE])->toString();
       
       $session = $this->stripeService->createCheckoutSession($items, $successUrl, $cancelUrl);
       
       return new RedirectResponse($session->url);
     }
   
     public function success(Request $request): array {
       $sessionId = $request->query->get('session_id');
       
       if ($sessionId) {
         $session = $this->stripeService->getSession($sessionId);
         $this->cartService->clear();
       }
       
       return [
         '#markup' => '<div class="checkout-success">
           <h1>' . $this->t('Merci pour votre commande !') . '</h1>
           <p>' . $this->t('Votre paiement a été accepté.') . '</p>
           <a href="/shop" class="btn btn-primary">' . $this->t('Continuer vos achats') . '</a>
         </div>',
       ];
     }
   
     public function cancel(): array {
       return [
         '#markup' => '<div class="checkout-cancel">
           <h1>' . $this->t('Commande annulée') . '</h1>
           <p>' . $this->t('Votre panier a été conservé.') . '</p>
           <a href="/cart" class="btn btn-primary">' . $this->t('Retour au panier') . '</a>
         </div>',
       ];
     }
   
   }
   ```

4. **Ajouter les routes checkout**

   Ajouter dans `tailstore_cart.routing.yml` :
   ```yaml
   tailstore_cart.checkout_create:
     path: '/checkout/create'
     defaults:
       _controller: '\Drupal\tailstore_cart\Controller\CheckoutController::create'
     requirements:
       _permission: 'access checkout'
     methods: [POST]
   
   tailstore_cart.checkout_success:
     path: '/checkout/success'
     defaults:
       _controller: '\Drupal\tailstore_cart\Controller\CheckoutController::success'
       _title: 'Commande confirmée'
     requirements:
       _permission: 'access checkout'
   
   tailstore_cart.checkout_cancel:
     path: '/checkout/cancel'
     defaults:
       _controller: '\Drupal\tailstore_cart\Controller\CheckoutController::cancel'
       _title: 'Commande annulée'
     requirements:
       _permission: 'access checkout'
   ```

5. **Tester avec les cartes test**

   - Numéro : `4242 4242 4242 4242`
   - Expiration : n'importe quelle date future
   - CVC : n'importe quel nombre

</Steps>

### Validation ✓

- [ ] SDK Stripe installée
- [ ] Redirection vers Stripe OK
- [ ] Paiement test réussi
- [ ] Panier vidé après succès

---

## Exercice 10 : Finalisation

<Card title="Durée estimée : 1 heure" icon="approve-check">
  Tests finaux, documentation et export.
</Card>

### Instructions

<Steps>

1. **Parcours utilisateur complet**

   Testez le flow entier :
   - Navigation catalogue
   - Ajout au panier
   - Modification quantité
   - Checkout
   - Paiement Stripe
   - Page de confirmation

2. **Vérification responsive**

   - Mobile (375px)
   - Tablette (768px)
   - Desktop (1024px+)

3. **Export configuration**

   ```bash
   ddev drush cex -y
   ```

4. **Finaliser README.md**

   Assurez-vous que toutes les instructions sont claires.

5. **Commit final**

   ```bash
   git add .
   git commit -m "feat: complete TailStore project"
   git push
   ```

</Steps>

### Validation finale ✓

- [ ] Parcours d'achat complet fonctionnel
- [ ] Responsive sur tous les écrans
- [ ] Configuration exportée
- [ ] README complet
- [ ] Code pushé sur Git

---

## 🎓 Félicitations !

Vous avez terminé le projet intégrateur ! Vous avez démontré votre maîtrise de :

- ✅ Drupal 11 et son architecture
- ✅ Modélisation de contenu
- ✅ Views et filtres
- ✅ Développement de modules custom
- ✅ Injection de dépendances
- ✅ htmx pour les interactions
- ✅ Intégration Stripe
- ✅ Theming avec Tailwind CSS

**Bonne continuation dans votre parcours Drupal !** 🚀
