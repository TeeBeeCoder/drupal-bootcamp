---
title: Stripe Checkout
description: Intégrer le paiement Stripe Checkout dans Drupal
sidebar:
  order: 6
---

import { Tabs, TabItem, Aside, Steps } from '@astrojs/starlight/components';

## 🎯 Stripe Checkout

**Stripe Checkout** est une page de paiement hébergée par Stripe :

- ✅ Sécurité gérée par Stripe
- ✅ Responsive et accessible
- ✅ Support de nombreuses méthodes de paiement
- ✅ Conformité PCI-DSS automatique

<Aside type="tip" title="Mode redirect">
Nous utilisons le mode **redirect** : l'utilisateur est envoyé sur la page Stripe, puis revient sur le site.
</Aside>

## 📦 Installation

### Installer la SDK Stripe

```bash
ddev composer require stripe/stripe-php
```

### Créer un compte Stripe

1. Inscrivez-vous sur [stripe.com](https://stripe.com)
2. Récupérez vos clés API dans **Developers** → **API keys**
3. En mode test : `pk_test_...` et `sk_test_...`

## ⚙️ Configuration

### Formulaire de configuration

Le formulaire `SettingsForm` (créé précédemment) stocke les clés.

### Variables d'environnement (recommandé)

En production, utilisez des variables d'environnement :

```php
// settings.php
$config['tailstore_cart.settings']['stripe_secret_key'] = getenv('STRIPE_SECRET_KEY');
$config['tailstore_cart.settings']['stripe_public_key'] = getenv('STRIPE_PUBLIC_KEY');
$config['tailstore_cart.settings']['stripe_webhook_secret'] = getenv('STRIPE_WEBHOOK_SECRET');
```

## 💳 Flux de paiement

```
┌─────────────────────────────────────────────────────────────┐
│ 1. Page Panier                                               │
│    [Commander] ────────────────────────────────────────────┐│
└─────────────────────────────────────────────────────────────┘│
                                                               │
┌─────────────────────────────────────────────────────────────┐│
│ 2. Drupal: CheckoutController::create()                     ◄┘
│    - Crée une Session Stripe                                 │
│    - Redirige vers Stripe                                    │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│ 3. Page Stripe Checkout                                      │
│    - Saisie carte                                            │
│    - Paiement sécurisé                                       │
└─────────────────────────────────────────────────────────────┘
                              │
              ┌───────────────┴───────────────┐
              ▼                               ▼
┌──────────────────────┐         ┌──────────────────────┐
│ 4a. Success          │         │ 4b. Cancel           │
│ /checkout/success    │         │ /checkout/cancel     │
│ - Affiche merci      │         │ - Retour au panier   │
│ - Vide le panier     │         │                      │
└──────────────────────┘         └──────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│ 5. Webhook Stripe (asynchrone)                               │
│    - Confirme le paiement                                    │
│    - Met à jour la commande                                  │
└─────────────────────────────────────────────────────────────┘
```

## 📝 CheckoutController

```php
<?php

declare(strict_types=1);

namespace Drupal\tailstore_cart\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Url;
use Drupal\tailstore_cart\Service\CartServiceInterface;
use Drupal\tailstore_cart\Service\StripeServiceInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;

/**
 * Controller for checkout process.
 */
class CheckoutController extends ControllerBase {

  /**
   * Constructs a CheckoutController object.
   */
  public function __construct(
    private readonly CartServiceInterface $cartService,
    private readonly StripeServiceInterface $stripeService,
  ) {}

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container): static {
    return new static(
      $container->get('tailstore_cart.cart'),
      $container->get('tailstore_cart.stripe'),
    );
  }

  /**
   * Display checkout page.
   */
  public function index(): array {
    $items = $this->cartService->getItems();
    
    if (empty($items)) {
      $this->messenger()->addWarning($this->t('Your cart is empty.'));
      return $this->redirect('tailstore_cart.cart');
    }

    return [
      '#theme' => 'checkout_page',
      '#items' => $items,
      '#total' => $this->cartService->getTotal(),
    ];
  }

  /**
   * Create Stripe Checkout session and redirect.
   */
  public function create(Request $request): RedirectResponse {
    $items = $this->cartService->getItems();
    
    if (empty($items)) {
      $this->messenger()->addError($this->t('Your cart is empty.'));
      return new RedirectResponse(Url::fromRoute('tailstore_cart.cart')->toString());
    }

    try {
      $baseUrl = $request->getSchemeAndHttpHost();
      $successUrl = $baseUrl . Url::fromRoute('tailstore_cart.checkout_success')->toString();
      $cancelUrl = $baseUrl . Url::fromRoute('tailstore_cart.checkout_cancel')->toString();
      
      $checkoutUrl = $this->stripeService->createCheckoutSession(
        $items,
        $successUrl,
        $cancelUrl
      );
      
      return new RedirectResponse($checkoutUrl);
    }
    catch (\Exception $e) {
      $this->messenger()->addError($this->t('An error occurred. Please try again.'));
      $this->getLogger('tailstore_cart')->error('Stripe error: @message', [
        '@message' => $e->getMessage(),
      ]);
      
      return new RedirectResponse(Url::fromRoute('tailstore_cart.cart')->toString());
    }
  }

  /**
   * Success page after payment.
   */
  public function success(Request $request): array {
    $sessionId = $request->query->get('session_id');
    
    if (!$sessionId) {
      return $this->redirect('tailstore_cart.cart');
    }

    try {
      $session = $this->stripeService->getSession($sessionId);
      
      // Vider le panier
      $this->cartService->clear();
      
      return [
        '#theme' => 'checkout_success',
        '#session' => $session,
        '#order_email' => $session['customer_email'],
        '#amount' => $session['amount_total'],
        '#currency' => strtoupper($session['currency']),
      ];
    }
    catch (\Exception $e) {
      $this->messenger()->addError($this->t('Unable to verify your payment.'));
      return $this->redirect('tailstore_cart.cart');
    }
  }

  /**
   * Cancel page.
   */
  public function cancel(): array {
    $this->messenger()->addWarning($this->t('Your payment was cancelled.'));
    
    return [
      '#theme' => 'checkout_cancel',
      '#cart_url' => Url::fromRoute('tailstore_cart.cart')->toString(),
    ];
  }

}
```

## 🔔 Webhook Controller

```php
<?php

declare(strict_types=1);

namespace Drupal\tailstore_cart\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\tailstore_cart\Service\StripeServiceInterface;
use Psr\Log\LoggerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Handles Stripe webhooks.
 */
class WebhookController extends ControllerBase {

  /**
   * Constructs a WebhookController.
   */
  public function __construct(
    private readonly StripeServiceInterface $stripeService,
    private readonly LoggerInterface $logger,
  ) {}

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container): static {
    return new static(
      $container->get('tailstore_cart.stripe'),
      $container->get('logger.factory')->get('tailstore_cart'),
    );
  }

  /**
   * Handle Stripe webhook.
   */
  public function stripe(Request $request): Response {
    $payload = $request->getContent();
    $signature = $request->headers->get('Stripe-Signature');
    
    if (!$signature) {
      return new Response('Missing signature', Response::HTTP_BAD_REQUEST);
    }

    try {
      $event = $this->stripeService->handleWebhook($payload, $signature);
      
      switch ($event['type']) {
        case 'checkout.session.completed':
          $this->handleCheckoutCompleted($event['data']);
          break;
          
        case 'payment_intent.succeeded':
          $this->handlePaymentSucceeded($event['data']);
          break;
          
        case 'payment_intent.payment_failed':
          $this->handlePaymentFailed($event['data']);
          break;
          
        default:
          $this->logger->info('Unhandled webhook event: @type', ['@type' => $event['type']]);
      }
      
      return new Response('OK', Response::HTTP_OK);
    }
    catch (\Exception $e) {
      $this->logger->error('Webhook error: @message', ['@message' => $e->getMessage()]);
      return new Response('Webhook Error', Response::HTTP_BAD_REQUEST);
    }
  }

  /**
   * Handle checkout.session.completed event.
   */
  private function handleCheckoutCompleted(object $session): void {
    $this->logger->info('Checkout completed: @id, Email: @email', [
      '@id' => $session->id,
      '@email' => $session->customer_details->email ?? 'unknown',
    ]);
    
    // Ici vous pourriez :
    // - Créer une entité "Order" dans Drupal
    // - Envoyer un email de confirmation
    // - Mettre à jour le stock
    // - Déclencher d'autres workflows
  }

  /**
   * Handle payment_intent.succeeded event.
   */
  private function handlePaymentSucceeded(object $paymentIntent): void {
    $this->logger->info('Payment succeeded: @id', ['@id' => $paymentIntent->id]);
  }

  /**
   * Handle payment_intent.payment_failed event.
   */
  private function handlePaymentFailed(object $paymentIntent): void {
    $this->logger->warning('Payment failed: @id', ['@id' => $paymentIntent->id]);
  }

}
```

## 📄 Templates

### Page de succès

```twig
{# templates/checkout-success.html.twig #}
<div class="max-w-2xl mx-auto py-12 text-center">
  <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
    <svg class="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
    </svg>
  </div>
  
  <h1 class="text-3xl font-bold text-gray-900 mb-4">
    {{ 'Thank you for your order!'|t }}
  </h1>
  
  <p class="text-lg text-gray-600 mb-8">
    {{ 'A confirmation email has been sent to @email.'|t({'@email': order_email}) }}
  </p>
  
  <div class="bg-gray-50 rounded-lg p-6 mb-8">
    <p class="text-sm text-gray-500 mb-2">{{ 'Order total'|t }}</p>
    <p class="text-3xl font-bold">{{ amount|number_format(2, ',', ' ') }} {{ currency }}</p>
  </div>
  
  <a href="{{ path('<front>') }}" class="btn btn-primary">
    {{ 'Continue shopping'|t }}
  </a>
</div>
```

### Page d'annulation

```twig
{# templates/checkout-cancel.html.twig #}
<div class="max-w-2xl mx-auto py-12 text-center">
  <div class="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
    <svg class="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
    </svg>
  </div>
  
  <h1 class="text-3xl font-bold text-gray-900 mb-4">
    {{ 'Payment cancelled'|t }}
  </h1>
  
  <p class="text-lg text-gray-600 mb-8">
    {{ 'Your payment was cancelled. Your cart items are still saved.'|t }}
  </p>
  
  <div class="flex gap-4 justify-center">
    <a href="{{ cart_url }}" class="btn btn-secondary">
      {{ 'Return to cart'|t }}
    </a>
    <a href="{{ path('tailstore_cart.checkout_create') }}" class="btn btn-primary">
      {{ 'Try again'|t }}
    </a>
  </div>
</div>
```

## 🔧 Configurer le Webhook Stripe

<Steps>

1. **Dashboard Stripe**
   
   Allez dans **Developers** → **Webhooks**

2. **Ajouter un endpoint**
   
   - URL : `https://votre-site.com/webhook/stripe`
   - Events à écouter :
     - `checkout.session.completed`
     - `payment_intent.succeeded`
     - `payment_intent.payment_failed`

3. **Copier le secret**
   
   Copiez `whsec_...` dans la configuration du module

4. **Tester**
   
   Utilisez le CLI Stripe :
   ```bash
   stripe listen --forward-to https://votre-site.ddev.site/webhook/stripe
   ```

</Steps>

## 🧪 Test en mode développement

### Cartes de test Stripe

| Numéro | Résultat |
|--------|----------|
| `4242 4242 4242 4242` | Succès |
| `4000 0000 0000 9995` | Échec (fonds insuffisants) |
| `4000 0000 0000 0002` | Refusée |
| `4000 0025 0000 3155` | Authentification 3DS |

Date d'expiration : n'importe quelle date future
CVC : n'importe quels 3 chiffres

### CLI Stripe pour webhooks

```bash
# Installer le CLI
brew install stripe/stripe-cli/stripe

# Login
stripe login

# Forward les webhooks
stripe listen --forward-to localhost/webhook/stripe

# Déclencher un event de test
stripe trigger checkout.session.completed
```

## 🔒 Sécurité

### Validation du webhook

```php
// Toujours valider la signature
try {
  $event = Webhook::constructEvent($payload, $signature, $webhookSecret);
} catch (SignatureVerificationException $e) {
  // Signature invalide - rejeter
  return new Response('Invalid signature', 400);
}
```

### HTTPS obligatoire

En production, Stripe exige HTTPS pour les webhooks.

### Idempotence

Les webhooks peuvent être envoyés plusieurs fois. Vérifiez si l'event a déjà été traité :

```php
// Stocker les event IDs traités
$eventId = $event->id;
if ($this->isEventProcessed($eventId)) {
  return new Response('Already processed');
}
$this->markEventProcessed($eventId);
```

## ✅ Checklist

- [ ] SDK Stripe installée
- [ ] Clés API configurées
- [ ] CheckoutController fonctionnel
- [ ] Session Stripe créée correctement
- [ ] Pages success/cancel affichées
- [ ] Webhook configuré et validé
- [ ] Tests avec cartes de test
- [ ] Panier vidé après paiement

## 🔜 Prochaine étape

Le paiement est intégré ! Passez aux [exercices](/etape-8-developpement/exercices/) pour tout mettre en pratique.
