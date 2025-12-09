---
title: Services et Injection de Dépendances
description: Créer et utiliser des services Drupal avec le container Symfony
sidebar:
  order: 3
---

import { Tabs, TabItem, Aside, Steps } from '@astrojs/starlight/components';

## 🔧 Qu'est-ce qu'un service ?

Un **service** est une classe réutilisable qui encapsule une logique métier :

- Gestion du panier (`CartService`)
- Communication avec Stripe (`StripeService`)
- Envoi d'emails (`MailService`)

<Aside type="tip" title="Avantages">
- **Réutilisable** : Utilisable dans tout le code
- **Testable** : Facile à mocker dans les tests
- **Découplé** : Dépendances explicites
</Aside>

## 📝 Déclaration des services

```yaml
# tailstore_cart.services.yml
services:
  # Service panier
  tailstore_cart.cart:
    class: Drupal\tailstore_cart\Service\CartService
    arguments:
      - '@request_stack'
      - '@entity_type.manager'
      - '@database'
      - '@current_user'

  # Service Stripe
  tailstore_cart.stripe:
    class: Drupal\tailstore_cart\Service\StripeService
    arguments:
      - '@config.factory'
      - '@logger.factory'

  # Alias avec interface
  Drupal\tailstore_cart\Service\CartServiceInterface: '@tailstore_cart.cart'
  Drupal\tailstore_cart\Service\StripeServiceInterface: '@tailstore_cart.stripe'
```

## 🛒 CartService

### Interface

```php
<?php

declare(strict_types=1);

namespace Drupal\tailstore_cart\Service;

/**
 * Interface for cart service.
 */
interface CartServiceInterface {

  /**
   * Add a product to the cart.
   *
   * @param int $productId
   *   The product node ID.
   * @param int $quantity
   *   The quantity to add.
   *
   * @return void
   */
  public function add(int $productId, int $quantity = 1): void;

  /**
   * Remove a product from the cart.
   *
   * @param int $productId
   *   The product node ID.
   *
   * @return void
   */
  public function remove(int $productId): void;

  /**
   * Update quantity for a product.
   *
   * @param int $productId
   *   The product node ID.
   * @param int $quantity
   *   The new quantity.
   *
   * @return void
   */
  public function updateQuantity(int $productId, int $quantity): void;

  /**
   * Get all cart items.
   *
   * @return array
   *   Array of cart items with product and quantity.
   */
  public function getItems(): array;

  /**
   * Get a single cart item.
   *
   * @param int $productId
   *   The product node ID.
   *
   * @return array|null
   *   The cart item or NULL if not found.
   */
  public function getItem(int $productId): ?array;

  /**
   * Get the total count of items.
   *
   * @return int
   *   The total quantity of all items.
   */
  public function getCount(): int;

  /**
   * Get the total price.
   *
   * @return float
   *   The total price of all items.
   */
  public function getTotal(): float;

  /**
   * Clear the cart.
   *
   * @return void
   */
  public function clear(): void;

}
```

### Implémentation

```php
<?php

declare(strict_types=1);

namespace Drupal\tailstore_cart\Service;

use Drupal\Core\Database\Connection;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Session\AccountProxyInterface;
use Drupal\node\NodeInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

/**
 * Cart service implementation.
 */
class CartService implements CartServiceInterface {

  /**
   * Session storage key.
   */
  private const SESSION_KEY = 'tailstore_cart';

  /**
   * The session.
   */
  private SessionInterface $session;

  /**
   * Constructs a CartService object.
   */
  public function __construct(
    private readonly RequestStack $requestStack,
    private readonly EntityTypeManagerInterface $entityTypeManager,
    private readonly Connection $database,
    private readonly AccountProxyInterface $currentUser,
  ) {
    $this->session = $this->requestStack->getSession();
  }

  /**
   * {@inheritdoc}
   */
  public function add(int $productId, int $quantity = 1): void {
    $cart = $this->getCartData();
    
    // Vérifier que le produit existe
    $product = $this->loadProduct($productId);
    if (!$product) {
      throw new \InvalidArgumentException('Product not found.');
    }
    
    // Ajouter ou incrémenter
    if (isset($cart[$productId])) {
      $cart[$productId] += $quantity;
    }
    else {
      $cart[$productId] = $quantity;
    }
    
    $this->saveCartData($cart);
  }

  /**
   * {@inheritdoc}
   */
  public function remove(int $productId): void {
    $cart = $this->getCartData();
    unset($cart[$productId]);
    $this->saveCartData($cart);
  }

  /**
   * {@inheritdoc}
   */
  public function updateQuantity(int $productId, int $quantity): void {
    $cart = $this->getCartData();
    
    if ($quantity <= 0) {
      $this->remove($productId);
      return;
    }
    
    $cart[$productId] = $quantity;
    $this->saveCartData($cart);
  }

  /**
   * {@inheritdoc}
   */
  public function getItems(): array {
    $cart = $this->getCartData();
    $items = [];
    
    foreach ($cart as $productId => $quantity) {
      $product = $this->loadProduct($productId);
      if ($product) {
        $price = (float) $product->get('field_price')->value;
        $items[] = [
          'product' => $product,
          'quantity' => $quantity,
          'price' => $price,
          'subtotal' => $price * $quantity,
        ];
      }
    }
    
    return $items;
  }

  /**
   * {@inheritdoc}
   */
  public function getItem(int $productId): ?array {
    $cart = $this->getCartData();
    
    if (!isset($cart[$productId])) {
      return NULL;
    }
    
    $product = $this->loadProduct($productId);
    if (!$product) {
      return NULL;
    }
    
    $price = (float) $product->get('field_price')->value;
    $quantity = $cart[$productId];
    
    return [
      'product' => $product,
      'quantity' => $quantity,
      'price' => $price,
      'subtotal' => $price * $quantity,
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function getCount(): int {
    $cart = $this->getCartData();
    return array_sum($cart);
  }

  /**
   * {@inheritdoc}
   */
  public function getTotal(): float {
    $items = $this->getItems();
    return array_reduce($items, fn($sum, $item) => $sum + $item['subtotal'], 0.0);
  }

  /**
   * {@inheritdoc}
   */
  public function clear(): void {
    $this->saveCartData([]);
  }

  /**
   * Get cart data from session.
   */
  private function getCartData(): array {
    return $this->session->get(self::SESSION_KEY, []);
  }

  /**
   * Save cart data to session.
   */
  private function saveCartData(array $cart): void {
    $this->session->set(self::SESSION_KEY, $cart);
  }

  /**
   * Load a product by ID.
   */
  private function loadProduct(int $productId): ?NodeInterface {
    $storage = $this->entityTypeManager->getStorage('node');
    $product = $storage->load($productId);
    
    if ($product && $product->bundle() === 'product') {
      return $product;
    }
    
    return NULL;
  }

}
```

## 💳 StripeService

### Interface

```php
<?php

declare(strict_types=1);

namespace Drupal\tailstore_cart\Service;

/**
 * Interface for Stripe service.
 */
interface StripeServiceInterface {

  /**
   * Create a Checkout Session.
   *
   * @param array $items
   *   Cart items.
   * @param string $successUrl
   *   URL to redirect on success.
   * @param string $cancelUrl
   *   URL to redirect on cancel.
   *
   * @return string
   *   The Checkout Session URL.
   */
  public function createCheckoutSession(array $items, string $successUrl, string $cancelUrl): string;

  /**
   * Retrieve a Checkout Session.
   *
   * @param string $sessionId
   *   The Stripe session ID.
   *
   * @return array
   *   Session data.
   */
  public function getSession(string $sessionId): array;

  /**
   * Handle webhook event.
   *
   * @param string $payload
   *   Raw webhook payload.
   * @param string $signature
   *   Stripe signature header.
   *
   * @return array
   *   Event data.
   */
  public function handleWebhook(string $payload, string $signature): array;

}
```

### Implémentation

```php
<?php

declare(strict_types=1);

namespace Drupal\tailstore_cart\Service;

use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\Logger\LoggerChannelFactoryInterface;
use Psr\Log\LoggerInterface;
use Stripe\Checkout\Session;
use Stripe\Exception\SignatureVerificationException;
use Stripe\Stripe;
use Stripe\Webhook;

/**
 * Stripe service implementation.
 */
class StripeService implements StripeServiceInterface {

  /**
   * The logger.
   */
  private readonly LoggerInterface $logger;

  /**
   * Constructs a StripeService object.
   */
  public function __construct(
    private readonly ConfigFactoryInterface $configFactory,
    LoggerChannelFactoryInterface $loggerFactory,
  ) {
    $this->logger = $loggerFactory->get('tailstore_cart');
    
    // Initialiser Stripe
    $config = $this->configFactory->get('tailstore_cart.settings');
    Stripe::setApiKey($config->get('stripe_secret_key'));
  }

  /**
   * {@inheritdoc}
   */
  public function createCheckoutSession(array $items, string $successUrl, string $cancelUrl): string {
    $lineItems = [];
    
    foreach ($items as $item) {
      $product = $item['product'];
      
      $lineItems[] = [
        'price_data' => [
          'currency' => $this->getCurrency(),
          'product_data' => [
            'name' => $product->label(),
            'description' => $this->truncate($product->get('field_description')->value ?? '', 200),
            'images' => $this->getProductImages($product),
          ],
          'unit_amount' => (int) ($item['price'] * 100), // En centimes
        ],
        'quantity' => $item['quantity'],
      ];
    }
    
    try {
      $session = Session::create([
        'payment_method_types' => ['card'],
        'line_items' => $lineItems,
        'mode' => 'payment',
        'success_url' => $successUrl . '?session_id={CHECKOUT_SESSION_ID}',
        'cancel_url' => $cancelUrl,
        'metadata' => [
          'source' => 'tailstore',
        ],
      ]);
      
      $this->logger->info('Created Stripe session: @id', ['@id' => $session->id]);
      
      return $session->url;
    }
    catch (\Exception $e) {
      $this->logger->error('Stripe error: @message', ['@message' => $e->getMessage()]);
      throw $e;
    }
  }

  /**
   * {@inheritdoc}
   */
  public function getSession(string $sessionId): array {
    try {
      $session = Session::retrieve($sessionId);
      
      return [
        'id' => $session->id,
        'status' => $session->status,
        'payment_status' => $session->payment_status,
        'customer_email' => $session->customer_details->email ?? NULL,
        'amount_total' => $session->amount_total / 100,
        'currency' => $session->currency,
      ];
    }
    catch (\Exception $e) {
      $this->logger->error('Cannot retrieve session: @message', ['@message' => $e->getMessage()]);
      throw $e;
    }
  }

  /**
   * {@inheritdoc}
   */
  public function handleWebhook(string $payload, string $signature): array {
    $config = $this->configFactory->get('tailstore_cart.settings');
    $webhookSecret = $config->get('stripe_webhook_secret');
    
    try {
      $event = Webhook::constructEvent($payload, $signature, $webhookSecret);
      
      $this->logger->info('Webhook received: @type', ['@type' => $event->type]);
      
      return [
        'type' => $event->type,
        'data' => $event->data->object,
      ];
    }
    catch (SignatureVerificationException $e) {
      $this->logger->error('Invalid webhook signature');
      throw $e;
    }
  }

  /**
   * Get currency from config.
   */
  private function getCurrency(): string {
    return $this->configFactory->get('tailstore_cart.settings')->get('currency') ?? 'eur';
  }

  /**
   * Get product images URLs.
   */
  private function getProductImages($product): array {
    $images = [];
    
    if ($product->hasField('field_images') && !$product->get('field_images')->isEmpty()) {
      $file = $product->get('field_images')->entity;
      if ($file) {
        $images[] = \Drupal::service('file_url_generator')->generateAbsoluteString($file->getFileUri());
      }
    }
    
    return $images;
  }

  /**
   * Truncate a string.
   */
  private function truncate(string $text, int $length): string {
    $text = strip_tags($text);
    if (strlen($text) <= $length) {
      return $text;
    }
    return substr($text, 0, $length - 3) . '...';
  }

}
```

## 💉 Utilisation dans les controllers

```php
<?php

namespace Drupal\tailstore_cart\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\tailstore_cart\Service\CartServiceInterface;
use Drupal\tailstore_cart\Service\StripeServiceInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;

class CheckoutController extends ControllerBase {

  public function __construct(
    private readonly CartServiceInterface $cartService,
    private readonly StripeServiceInterface $stripeService,
  ) {}

  public static function create(ContainerInterface $container): static {
    return new static(
      $container->get('tailstore_cart.cart'),
      $container->get('tailstore_cart.stripe'),
    );
  }

  public function create(): RedirectResponse {
    $items = $this->cartService->getItems();
    
    if (empty($items)) {
      $this->messenger()->addError($this->t('Your cart is empty.'));
      return $this->redirect('tailstore_cart.cart');
    }
    
    $baseUrl = \Drupal::request()->getSchemeAndHttpHost();
    $successUrl = $baseUrl . '/checkout/success';
    $cancelUrl = $baseUrl . '/checkout/cancel';
    
    $checkoutUrl = $this->stripeService->createCheckoutSession(
      $items, 
      $successUrl, 
      $cancelUrl
    );
    
    return new RedirectResponse($checkoutUrl);
  }
}
```

## 🏭 Factory de services

Pour créer des services complexes :

```yaml
services:
  tailstore_cart.mailer:
    class: Drupal\tailstore_cart\Service\MailerService
    factory: ['@tailstore_cart.mailer_factory', 'create']
    arguments: ['@config.factory']

  tailstore_cart.mailer_factory:
    class: Drupal\tailstore_cart\Factory\MailerFactory
```

## 🏷️ Tags de services

```yaml
services:
  tailstore_cart.event_subscriber:
    class: Drupal\tailstore_cart\EventSubscriber\CartEventSubscriber
    tags:
      - { name: event_subscriber }
```

## ✅ Checklist

- [ ] Interface définie pour chaque service
- [ ] Service CartService implémenté
- [ ] Service StripeService implémenté
- [ ] Services déclarés dans .services.yml
- [ ] Injection de dépendances fonctionnelle
- [ ] Tests unitaires créés

## 🔜 Prochaine étape

Les services sont prêts ! Créons des [formulaires avec Form API](/etape-8-developpement/form-api/).
