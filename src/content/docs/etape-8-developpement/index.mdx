---
title: Étape 8 - Développement Custom
description: Créer des modules Drupal personnalisés avec routing, controllers et services
sidebar:
  order: 0
---

import { Card, CardGrid, Aside } from '@astrojs/starlight/components';

<div class="duration-badge">⏱️ Durée estimée : 6h</div>

## 🎯 Objectifs de cette étape

À la fin de cette étape, vous serez capable de :

- ✅ Créer un module Drupal custom
- ✅ Définir des routes et des controllers
- ✅ Utiliser l'injection de dépendances
- ✅ Créer des services et des plugins
- ✅ Intégrer htmx pour des interactions dynamiques
- ✅ Implémenter Stripe Checkout

## 📋 Prérequis

- [x] Étapes 1-7 terminées
- [x] Connaissances PHP orienté objet
- [x] Notions de PSR-4 et autoloading
- [x] Compte Stripe (gratuit en mode test)

## 📚 Sommaire

<CardGrid>
  <Card title="1. Structure d'un module" icon="setting">
    Architecture et fichiers de base.
    [Voir →](/etape-8-developpement/structure-module/)
  </Card>
  <Card title="2. Routes et Controllers" icon="rocket">
    Créer des pages personnalisées.
    [Voir →](/etape-8-developpement/routes-controllers/)
  </Card>
  <Card title="3. Services" icon="puzzle">
    Injection de dépendances et services.
    [Voir →](/etape-8-developpement/services/)
  </Card>
  <Card title="4. Form API" icon="pencil">
    Créer des formulaires programmatiques.
    [Voir →](/etape-8-developpement/form-api/)
  </Card>
  <Card title="5. htmx" icon="seti:javascript">
    Interactions dynamiques sans JavaScript.
    [Voir →](/etape-8-developpement/htmx/)
  </Card>
  <Card title="6. Stripe Checkout" icon="seti:salesforce">
    Intégration paiement Stripe.
    [Voir →](/etape-8-developpement/stripe/)
  </Card>
</CardGrid>

## 🏗️ Architecture du module TailStore Cart

Nous allons créer le module `tailstore_cart` qui gère :

- Le panier côté serveur
- L'API pour htmx
- Le checkout Stripe

### Structure complète

```
modules/custom/tailstore_cart/
├── tailstore_cart.info.yml          # Déclaration du module
├── tailstore_cart.module            # Hooks et fonctions
├── tailstore_cart.services.yml      # Déclaration des services
├── tailstore_cart.routing.yml       # Routes
├── tailstore_cart.permissions.yml   # Permissions
├── tailstore_cart.libraries.yml     # Assets
│
├── src/
│   ├── Controller/
│   │   ├── CartController.php       # API panier (htmx)
│   │   └── CheckoutController.php   # Stripe checkout
│   │
│   ├── Service/
│   │   ├── CartService.php          # Logique panier
│   │   └── StripeService.php        # API Stripe
│   │
│   ├── Form/
│   │   ├── CartForm.php             # Formulaire panier
│   │   └── CheckoutForm.php         # Formulaire checkout
│   │
│   ├── EventSubscriber/
│   │   └── CartEventSubscriber.php  # Events
│   │
│   └── Plugin/
│       └── Block/
│           └── MiniCartBlock.php    # Bloc mini-panier
│
├── templates/
│   ├── cart-page.html.twig
│   ├── cart-item.html.twig
│   └── mini-cart.html.twig
│
└── config/
    └── install/
        └── tailstore_cart.settings.yml
```

## 🧩 Concepts Drupal à maîtriser

### PSR-4 Autoloading

Drupal utilise le standard PSR-4 pour le chargement automatique des classes :

```
Namespace: Drupal\tailstore_cart\Controller\CartController
Fichier:   modules/custom/tailstore_cart/src/Controller/CartController.php
```

### Injection de dépendances

Pattern central dans Drupal :

```php
class CartController extends ControllerBase {
  
  public function __construct(
    private readonly CartService $cartService,
    private readonly EntityTypeManagerInterface $entityTypeManager,
  ) {}
  
  public static function create(ContainerInterface $container): static {
    return new static(
      $container->get('tailstore_cart.cart'),
      $container->get('entity_type.manager'),
    );
  }
}
```

### Container de services

Drupal utilise le container Symfony :

```yaml
# tailstore_cart.services.yml
services:
  tailstore_cart.cart:
    class: Drupal\tailstore_cart\Service\CartService
    arguments: ['@session', '@entity_type.manager']
```

## 🔌 Technologies intégrées

### htmx

**htmx** permet d'ajouter des comportements AJAX directement dans le HTML :

```html
<button 
  hx-post="/cart/add/42"
  hx-target="#cart-count"
  hx-swap="innerHTML"
>
  Ajouter au panier
</button>
```

<Aside type="tip" title="htmx vs JavaScript">
htmx réduit considérablement le code JavaScript nécessaire pour les interactions serveur.
</Aside>

### Stripe Checkout

Mode **Redirect** simplifié :

1. L'utilisateur clique sur "Commander"
2. Drupal crée une session Stripe
3. Redirection vers la page Stripe hosted
4. Stripe gère le paiement
5. Retour sur le site avec confirmation

```php
$session = \Stripe\Checkout\Session::create([
  'payment_method_types' => ['card'],
  'line_items' => $items,
  'mode' => 'payment',
  'success_url' => $successUrl,
  'cancel_url' => $cancelUrl,
]);

return new RedirectResponse($session->url);
```

## 🔄 Flux du panier TailStore

```
┌──────────────────────────────────────────────────────────────┐
│                        Frontend                               │
├──────────────────────────────────────────────────────────────┤
│                                                               │
│  [Produit]  ──htmx POST──>  [Mini-Cart]  ──>  [Page Panier]  │
│                   │               │                │          │
│                   ▼               ▼                ▼          │
├──────────────────────────────────────────────────────────────┤
│                       Controller                              │
├──────────────────────────────────────────────────────────────┤
│   CartController::add()                                       │
│   CartController::update()                                    │
│   CartController::remove()                                    │
│   CheckoutController::create()                                │
├──────────────────────────────────────────────────────────────┤
│                        Services                               │
├──────────────────────────────────────────────────────────────┤
│   CartService           StripeService                         │
│   ├── add()             ├── createSession()                  │
│   ├── remove()          ├── handleWebhook()                  │
│   ├── getItems()        └── getSession()                     │
│   └── getTotal()                                              │
├──────────────────────────────────────────────────────────────┤
│                       Stockage                                │
├──────────────────────────────────────────────────────────────┤
│   Session PHP / Table custom                                  │
└──────────────────────────────────────────────────────────────┘
```

## 📋 Fonctionnalités à développer

| Fonctionnalité | Route | Méthode |
|----------------|-------|---------|
| Ajouter au panier | `/cart/add/{product_id}` | POST |
| Modifier quantité | `/cart/update/{product_id}` | PATCH |
| Supprimer | `/cart/remove/{product_id}` | DELETE |
| Voir le panier | `/cart` | GET |
| Mini-panier (htmx) | `/cart/mini` | GET |
| Créer checkout | `/checkout/create` | POST |
| Succès paiement | `/checkout/success` | GET |
| Annulation | `/checkout/cancel` | GET |
| Webhook Stripe | `/webhook/stripe` | POST |

## 🔐 Sécurité

### CSRF Protection

Drupal gère automatiquement les tokens CSRF pour les formulaires. Pour les requêtes htmx :

```php
// Dans le controller
$token = \Drupal::csrfToken()->get('cart');

// Validation
if (!\Drupal::csrfToken()->validate($request->headers->get('X-CSRF-Token'), 'cart')) {
  throw new AccessDeniedHttpException();
}
```

### Permissions

```yaml
# tailstore_cart.permissions.yml
access checkout:
  title: 'Access checkout'
  description: 'Allows users to proceed to checkout'
  
administer cart:
  title: 'Administer cart settings'
  restrict access: true
```

## 🧪 Tests

### PHPUnit

```php
namespace Drupal\Tests\tailstore_cart\Unit;

use Drupal\Tests\UnitTestCase;

class CartServiceTest extends UnitTestCase {
  
  public function testAddItem(): void {
    // Test logic
  }
}
```

### Exécution

```bash
ddev exec ./vendor/bin/phpunit modules/custom/tailstore_cart/tests
```

## 🚀 C'est parti !

Commencez par [Structure d'un module](/etape-8-developpement/structure-module/).
