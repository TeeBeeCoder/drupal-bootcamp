---
title: Correction - Projet Intégrateur
description: Guide de correction et exemples de solutions pour le projet TailStore
sidebar:
  order: 2
---

import { Card, CardGrid, Aside, Tabs, TabItem } from '@astrojs/starlight/components';

## 📋 Guide de correction

Ce document fournit les points de vérification et exemples de code pour évaluer le projet intégrateur.

---

## ✅ Checklist de correction

### Fonctionnalités (30 points)

| Critère | Points | Vérifié |
|---------|--------|---------|
| Catalogue avec pagination | 3 | ☐ |
| Filtres par catégorie | 2 | ☐ |
| Page produit complète | 5 | ☐ |
| Ajout au panier | 4 | ☐ |
| Modification quantité | 2 | ☐ |
| Suppression article | 2 | ☐ |
| Mini-cart dynamique | 4 | ☐ |
| Checkout Stripe | 6 | ☐ |
| Page succès/annulation | 2 | ☐ |

### Code qualité (20 points)

| Critère | Points | Vérifié |
|---------|--------|---------|
| Structure PSR-4 | 4 | ☐ |
| Interface pour services | 3 | ☐ |
| Injection de dépendances | 5 | ☐ |
| Pas de code mort | 2 | ☐ |
| Typage strict (PHP 8+) | 3 | ☐ |
| Gestion des erreurs | 3 | ☐ |

### Theming (15 points)

| Critère | Points | Vérifié |
|---------|--------|---------|
| Templates Twig propres | 5 | ☐ |
| Tailwind CSS | 5 | ☐ |
| Responsive design | 5 | ☐ |

### Documentation (15 points)

| Critère | Points | Vérifié |
|---------|--------|---------|
| README installation | 5 | ☐ |
| Clés Stripe documentées | 3 | ☐ |
| Instructions claires | 4 | ☐ |
| Captures/vidéo | 3 | ☐ |

### Git (10 points)

| Critère | Points | Vérifié |
|---------|--------|---------|
| Historique propre | 4 | ☐ |
| Commits atomiques | 3 | ☐ |
| Messages descriptifs | 3 | ☐ |

### Bonus (10 points)

| Critère | Points | Vérifié |
|---------|--------|---------|
| Fonctionnalités supplémentaires | 0-10 | ☐ |

---

## 🏗️ Architecture attendue

### Structure des fichiers

```
tailstore/
├── web/
│   ├── modules/custom/
│   │   └── tailstore_cart/
│   │       ├── tailstore_cart.info.yml
│   │       ├── tailstore_cart.module
│   │       ├── tailstore_cart.routing.yml
│   │       ├── tailstore_cart.services.yml
│   │       ├── tailstore_cart.permissions.yml
│   │       ├── tailstore_cart.libraries.yml
│   │       ├── src/
│   │       │   ├── Controller/
│   │       │   │   ├── CartController.php
│   │       │   │   └── CheckoutController.php
│   │       │   ├── Service/
│   │       │   │   ├── CartServiceInterface.php
│   │       │   │   ├── CartService.php
│   │       │   │   └── StripeService.php
│   │       │   └── Form/
│   │       │       └── SettingsForm.php
│   │       ├── templates/
│   │       │   ├── cart-page.html.twig
│   │       │   └── mini-cart.html.twig
│   │       └── config/
│   │           └── install/
│   │               └── tailstore_cart.settings.yml
│   └── themes/custom/
│       └── tailstore_theme/
│           ├── tailstore_theme.info.yml
│           ├── tailstore_theme.libraries.yml
│           ├── templates/
│           └── css/
├── config/
│   └── sync/
├── composer.json
└── README.md
```

---

## 📝 Exemples de code attendu

### tailstore_cart.services.yml

```yaml
services:
  tailstore_cart.cart:
    class: Drupal\tailstore_cart\Service\CartService
    arguments:
      - '@request_stack'
      - '@entity_type.manager'

  tailstore_cart.stripe:
    class: Drupal\tailstore_cart\Service\StripeService
    arguments:
      - '@config.factory'
```

### CartServiceInterface.php

```php
<?php

declare(strict_types=1);

namespace Drupal\tailstore_cart\Service;

/**
 * Interface for cart service.
 */
interface CartServiceInterface {

  /**
   * Adds a product to the cart.
   *
   * @param int $productId
   *   The product node ID.
   * @param int $quantity
   *   The quantity to add.
   */
  public function add(int $productId, int $quantity = 1): void;

  /**
   * Removes a product from the cart.
   *
   * @param int $productId
   *   The product node ID.
   */
  public function remove(int $productId): void;

  /**
   * Updates the quantity of a product.
   *
   * @param int $productId
   *   The product node ID.
   * @param int $quantity
   *   The new quantity.
   */
  public function updateQuantity(int $productId, int $quantity): void;

  /**
   * Gets all cart items with product data.
   *
   * @return array
   *   Array of cart items with product, quantity, price, subtotal.
   */
  public function getItems(): array;

  /**
   * Gets the total item count.
   *
   * @return int
   *   The total number of items.
   */
  public function getCount(): int;

  /**
   * Gets the cart total.
   *
   * @return float
   *   The total price.
   */
  public function getTotal(): float;

  /**
   * Clears the cart.
   */
  public function clear(): void;

}
```

### CartController.php (points clés)

```php
<?php

declare(strict_types=1);

namespace Drupal\tailstore_cart\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\tailstore_cart\Service\CartServiceInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Controller for cart operations.
 */
class CartController extends ControllerBase {

  /**
   * Constructs a CartController.
   */
  public function __construct(
    private readonly CartServiceInterface $cartService,
  ) {}

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container): static {
    return new static(
      $container->get('tailstore_cart.cart'),
    );
  }

  /**
   * Displays the cart page.
   */
  public function index(): array {
    return [
      '#theme' => 'cart_page',
      '#items' => $this->cartService->getItems(),
      '#total' => $this->cartService->getTotal(),
      '#count' => $this->cartService->getCount(),
      '#cache' => ['max-age' => 0],
    ];
  }

  /**
   * Adds a product to cart.
   */
  public function add(int $product_id, Request $request): Response {
    $quantity = (int) $request->request->get('quantity', 1);
    $this->cartService->add($product_id, $quantity);

    // Check if htmx request
    if ($request->headers->has('HX-Request')) {
      return $this->renderMiniCart();
    }

    $this->messenger()->addStatus($this->t('Product added to cart.'));
    return $this->redirect('tailstore_cart.cart');
  }

  /**
   * Renders the mini cart HTML fragment.
   */
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

### Template htmx (cart-page.html.twig)

```twig
{#
/**
 * @file
 * Cart page template.
 *
 * Variables:
 * - items: Array of cart items
 * - total: Cart total
 * - count: Item count
 */
#}
<div class="cart-page" id="cart-container">
  {% if items is empty %}
    <div class="cart-empty text-center py-12">
      <p class="text-gray-500 mb-4">{{ 'Votre panier est vide.'|t }}</p>
      <a href="/shop" class="btn btn-primary">
        {{ 'Découvrir nos produits'|t }}
      </a>
    </div>
  {% else %}
    <div class="cart-items space-y-4">
      {% for item in items %}
        <div class="cart-item flex items-center gap-4 p-4 border rounded-lg"
             id="cart-item-{{ item.product.id }}">
          
          {# Product image #}
          <div class="cart-item-image w-20 h-20 shrink-0">
            {{ item.product.field_image|view }}
          </div>
          
          {# Product info #}
          <div class="cart-item-info grow">
            <h3 class="font-medium">{{ item.product.label }}</h3>
            <p class="text-gray-600">{{ item.price|number_format(2) }} €</p>
          </div>
          
          {# Quantity input with htmx #}
          <div class="cart-item-quantity">
            <input 
              type="number"
              name="quantity"
              value="{{ item.quantity }}"
              min="1"
              max="99"
              class="w-16 p-2 border rounded text-center"
              hx-post="/cart/update/{{ item.product.id }}"
              hx-trigger="change"
              hx-target="#mini-cart"
              hx-swap="innerHTML"
            >
          </div>
          
          {# Subtotal #}
          <div class="cart-item-subtotal font-semibold">
            {{ item.subtotal|number_format(2) }} €
          </div>
          
          {# Remove button with htmx #}
          <button 
            class="cart-item-remove text-red-500 hover:text-red-700"
            hx-delete="/cart/remove/{{ item.product.id }}"
            hx-target="#cart-item-{{ item.product.id }}"
            hx-swap="outerHTML swap:0.3s"
            hx-confirm="{{ 'Supprimer cet article ?'|t }}"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      {% endfor %}
    </div>
    
    {# Cart summary #}
    <div class="cart-summary mt-8 p-6 bg-gray-50 rounded-lg">
      <div class="flex justify-between items-center mb-4">
        <span class="text-lg">{{ 'Total'|t }} ({{ count }} {{ count == 1 ? 'article' : 'articles' }})</span>
        <span class="text-2xl font-bold">{{ total|number_format(2) }} €</span>
      </div>
      
      <form action="/checkout/create" method="post">
        <input type="hidden" name="form_token" value="{{ csrf_token }}">
        <button type="submit" class="w-full btn btn-primary py-3">
          {{ 'Procéder au paiement'|t }}
        </button>
      </form>
    </div>
  {% endif %}
</div>
```

---

## 🔍 Points de vigilance

### Sécurité

<Tabs>
  <TabItem label="CSRF">
    Les formulaires doivent utiliser le token CSRF de Drupal :
    ```php
    // Dans le controller
    $form['token'] = [
      '#type' => 'token',
    ];
    ```
  </TabItem>
  <TabItem label="Validation">
    Toujours valider les entrées :
    ```php
    public function add(int $product_id, Request $request): Response {
      // Vérifier que le produit existe
      $product = $this->entityTypeManager
        ->getStorage('node')
        ->load($product_id);
      
      if (!$product || $product->bundle() !== 'product') {
        throw new NotFoundHttpException();
      }
      
      // Valider la quantité
      $quantity = max(1, min(99, (int) $request->request->get('quantity', 1)));
      
      // ...
    }
    ```
  </TabItem>
  <TabItem label="Stripe Webhook">
    Vérifier la signature du webhook :
    ```php
    $payload = $request->getContent();
    $sig_header = $request->headers->get('Stripe-Signature');
    
    try {
      $event = Webhook::constructEvent(
        $payload, $sig_header, $webhookSecret
      );
    } catch (\Exception $e) {
      return new Response('Invalid signature', 400);
    }
    ```
  </TabItem>
</Tabs>

### Performance

- [ ] Cache désactivé uniquement pour les pages dynamiques (`#cache => ['max-age' => 0]`)
- [ ] Pas de requêtes N+1 (charger les entités en batch)
- [ ] Utilisation de `lazy_builder` pour les blocs dynamiques

### Accessibilité

- [ ] Labels sur tous les inputs
- [ ] Boutons avec texte descriptif
- [ ] Contrastes suffisants
- [ ] Focus visible

---

## 🎯 Barème récapitulatif

| Catégorie | Points |
|-----------|--------|
| Fonctionnalités | 30 |
| Code qualité | 20 |
| Theming | 15 |
| Documentation | 15 |
| Git | 10 |
| Bonus | 10 |
| **Total** | **100** |

### Échelle de notes

| Points | Appréciation |
|--------|--------------|
| 90-100 | Excellent |
| 80-89 | Très bien |
| 70-79 | Bien |
| 60-69 | Satisfaisant |
| 50-59 | Passable |
| < 50 | Insuffisant |

---

## 🧪 Tests de validation

### Commandes Drush utiles

```bash
# Vérifier les routes du module
ddev drush router:list --module=tailstore_cart

# Vérifier les services
ddev drush php:eval "print_r(array_keys(\Drupal::getContainer()->getServiceIds()));" | grep tailstore

# Tester le service panier
ddev drush php:eval "
  \$cart = \Drupal::service('tailstore_cart.cart');
  \$cart->add(1, 2);
  echo 'Count: ' . \$cart->getCount();
  echo ' Total: ' . \$cart->getTotal();
"

# Vérifier les permissions
ddev drush role:perm:list authenticated | grep cart

# Logs d'erreur
ddev drush watchdog:show --severity=error
```

### Tests manuels

1. **Catalogue**
   - Accéder à `/shop`
   - Utiliser les filtres
   - Vérifier la pagination

2. **Panier**
   - Ajouter plusieurs produits
   - Modifier les quantités
   - Supprimer un article
   - Vérifier le mini-cart

3. **Checkout**
   - Procéder au paiement
   - Utiliser la carte test `4242 4242 4242 4242`
   - Vérifier la page de succès
   - Confirmer que le panier est vidé

4. **Responsive**
   - Tester sur mobile (375px)
   - Tester sur tablette (768px)
   - Vérifier le menu et le mini-cart

---

<Aside type="tip" title="Pour le correcteur">
N'hésitez pas à regarder les logs Drupal (`/admin/reports/dblog`) et les logs DDEV (`ddev logs`) pour identifier les erreurs potentielles.
</Aside>
