---
title: Form API
description: Créer des formulaires programmatiques avec l'API Form de Drupal
sidebar:
  order: 4
---

import { Tabs, TabItem, Aside, Steps } from '@astrojs/starlight/components';

## 🎯 L'API Form de Drupal

Drupal fournit une API puissante pour créer des formulaires :

- **Validation** automatique et personnalisée
- **Protection CSRF** intégrée
- **Cache** et performance
- **Ajax** natif

## 📝 Structure de base

### Formulaire simple

```php
<?php

declare(strict_types=1);

namespace Drupal\tailstore_cart\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Simple form example.
 */
class ContactForm extends FormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId(): string {
    return 'tailstore_cart_contact_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state): array {
    $form['name'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Your name'),
      '#required' => TRUE,
      '#maxlength' => 100,
    ];

    $form['email'] = [
      '#type' => 'email',
      '#title' => $this->t('Email'),
      '#required' => TRUE,
    ];

    $form['message'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Message'),
      '#required' => TRUE,
      '#rows' => 5,
    ];

    $form['actions'] = [
      '#type' => 'actions',
    ];

    $form['actions']['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Send'),
      '#button_type' => 'primary',
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state): void {
    $email = $form_state->getValue('email');
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $form_state->setErrorByName('email', $this->t('Invalid email address.'));
    }
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state): void {
    $this->messenger()->addStatus($this->t('Message sent successfully!'));
    $form_state->setRedirect('<front>');
  }

}
```

## ⚙️ Formulaire de configuration

### SettingsForm

```php
<?php

declare(strict_types=1);

namespace Drupal\tailstore_cart\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Configure TailStore Cart settings.
 */
class SettingsForm extends ConfigFormBase {

  /**
   * Config name.
   */
  public const CONFIG_NAME = 'tailstore_cart.settings';

  /**
   * {@inheritdoc}
   */
  public function getFormId(): string {
    return 'tailstore_cart_settings';
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames(): array {
    return [self::CONFIG_NAME];
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state): array {
    $config = $this->config(self::CONFIG_NAME);

    $form['stripe'] = [
      '#type' => 'details',
      '#title' => $this->t('Stripe Configuration'),
      '#open' => TRUE,
    ];

    $form['stripe']['stripe_public_key'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Stripe Public Key'),
      '#default_value' => $config->get('stripe_public_key'),
      '#description' => $this->t('Your Stripe publishable key (pk_test_... or pk_live_...).'),
      '#required' => TRUE,
    ];

    $form['stripe']['stripe_secret_key'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Stripe Secret Key'),
      '#default_value' => $config->get('stripe_secret_key'),
      '#description' => $this->t('Your Stripe secret key (sk_test_... or sk_live_...).'),
      '#required' => TRUE,
    ];

    $form['stripe']['stripe_webhook_secret'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Stripe Webhook Secret'),
      '#default_value' => $config->get('stripe_webhook_secret'),
      '#description' => $this->t('Your Stripe webhook signing secret (whsec_...).'),
    ];

    $form['checkout'] = [
      '#type' => 'details',
      '#title' => $this->t('Checkout Settings'),
      '#open' => TRUE,
    ];

    $form['checkout']['currency'] = [
      '#type' => 'select',
      '#title' => $this->t('Currency'),
      '#default_value' => $config->get('currency') ?? 'EUR',
      '#options' => [
        'EUR' => 'Euro (€)',
        'USD' => 'US Dollar ($)',
        'GBP' => 'British Pound (£)',
        'CHF' => 'Swiss Franc (CHF)',
      ],
    ];

    $form['checkout']['success_redirect'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Success Redirect Path'),
      '#default_value' => $config->get('success_redirect') ?? '/checkout/success',
    ];

    $form['checkout']['cancel_redirect'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Cancel Redirect Path'),
      '#default_value' => $config->get('cancel_redirect') ?? '/cart',
    ];

    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state): void {
    $publicKey = $form_state->getValue('stripe_public_key');
    $secretKey = $form_state->getValue('stripe_secret_key');

    // Valider format des clés
    if (!str_starts_with($publicKey, 'pk_')) {
      $form_state->setErrorByName('stripe_public_key', 
        $this->t('Public key must start with "pk_".'));
    }

    if (!str_starts_with($secretKey, 'sk_')) {
      $form_state->setErrorByName('stripe_secret_key', 
        $this->t('Secret key must start with "sk_".'));
    }

    parent::validateForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state): void {
    $this->config(self::CONFIG_NAME)
      ->set('stripe_public_key', $form_state->getValue('stripe_public_key'))
      ->set('stripe_secret_key', $form_state->getValue('stripe_secret_key'))
      ->set('stripe_webhook_secret', $form_state->getValue('stripe_webhook_secret'))
      ->set('currency', $form_state->getValue('currency'))
      ->set('success_redirect', $form_state->getValue('success_redirect'))
      ->set('cancel_redirect', $form_state->getValue('cancel_redirect'))
      ->save();

    parent::submitForm($form, $form_state);
  }

}
```

## 🛒 Formulaire du panier

```php
<?php

declare(strict_types=1);

namespace Drupal\tailstore_cart\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Url;
use Drupal\tailstore_cart\Service\CartServiceInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Cart form with quantity updates.
 */
class CartForm extends FormBase {

  /**
   * Constructs a CartForm object.
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
   * {@inheritdoc}
   */
  public function getFormId(): string {
    return 'tailstore_cart_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state): array {
    $items = $this->cartService->getItems();

    if (empty($items)) {
      $form['empty'] = [
        '#markup' => '<p class="text-center py-8">' . $this->t('Your cart is empty.') . '</p>',
      ];
      
      $form['continue'] = [
        '#type' => 'link',
        '#title' => $this->t('Continue shopping'),
        '#url' => Url::fromRoute('view.products_catalog.page_1'),
        '#attributes' => ['class' => ['btn', 'btn-primary']],
      ];
      
      return $form;
    }

    $form['items'] = [
      '#type' => 'table',
      '#header' => [
        $this->t('Product'),
        $this->t('Price'),
        $this->t('Quantity'),
        $this->t('Subtotal'),
        $this->t('Actions'),
      ],
      '#empty' => $this->t('Your cart is empty.'),
    ];

    foreach ($items as $index => $item) {
      $product = $item['product'];
      $productId = $product->id();

      $form['items'][$productId]['product'] = [
        '#type' => 'container',
        '#attributes' => ['class' => ['flex', 'items-center', 'gap-4']],
        'image' => [
          '#theme' => 'image_style',
          '#style_name' => 'thumbnail',
          '#uri' => $product->get('field_images')->entity?->getFileUri(),
          '#alt' => $product->label(),
        ],
        'title' => [
          '#type' => 'link',
          '#title' => $product->label(),
          '#url' => $product->toUrl(),
        ],
      ];

      $form['items'][$productId]['price'] = [
        '#markup' => number_format($item['price'], 2, ',', ' ') . ' €',
      ];

      $form['items'][$productId]['quantity'] = [
        '#type' => 'number',
        '#title' => $this->t('Quantity'),
        '#title_display' => 'invisible',
        '#default_value' => $item['quantity'],
        '#min' => 1,
        '#max' => 99,
        '#size' => 3,
        '#attributes' => ['class' => ['w-20']],
      ];

      $form['items'][$productId]['subtotal'] = [
        '#markup' => '<strong>' . number_format($item['subtotal'], 2, ',', ' ') . ' €</strong>',
      ];

      $form['items'][$productId]['remove'] = [
        '#type' => 'submit',
        '#value' => $this->t('Remove'),
        '#name' => 'remove_' . $productId,
        '#submit' => ['::removeItem'],
        '#limit_validation_errors' => [],
        '#ajax' => [
          'callback' => '::ajaxRefresh',
          'wrapper' => 'cart-form-wrapper',
        ],
        '#attributes' => ['class' => ['btn', 'btn-ghost', 'text-red-500']],
      ];
    }

    $form['total'] = [
      '#type' => 'container',
      '#attributes' => ['class' => ['flex', 'justify-end', 'mt-4', 'text-xl', 'font-bold']],
      'label' => [
        '#markup' => $this->t('Total: @total €', [
          '@total' => number_format($this->cartService->getTotal(), 2, ',', ' '),
        ]),
      ],
    ];

    $form['actions'] = [
      '#type' => 'actions',
      '#attributes' => ['class' => ['flex', 'gap-4', 'mt-6']],
    ];

    $form['actions']['update'] = [
      '#type' => 'submit',
      '#value' => $this->t('Update cart'),
      '#submit' => ['::updateQuantities'],
      '#attributes' => ['class' => ['btn', 'btn-secondary']],
    ];

    $form['actions']['checkout'] = [
      '#type' => 'submit',
      '#value' => $this->t('Proceed to checkout'),
      '#button_type' => 'primary',
      '#attributes' => ['class' => ['btn', 'btn-primary']],
    ];

    $form['#prefix'] = '<div id="cart-form-wrapper">';
    $form['#suffix'] = '</div>';

    return $form;
  }

  /**
   * Update quantities submit handler.
   */
  public function updateQuantities(array &$form, FormStateInterface $form_state): void {
    $items = $form_state->getValue('items');
    
    foreach ($items as $productId => $values) {
      $quantity = (int) $values['quantity'];
      $this->cartService->updateQuantity($productId, $quantity);
    }
    
    $this->messenger()->addStatus($this->t('Cart updated.'));
  }

  /**
   * Remove item submit handler.
   */
  public function removeItem(array &$form, FormStateInterface $form_state): void {
    $trigger = $form_state->getTriggeringElement();
    $productId = (int) str_replace('remove_', '', $trigger['#name']);
    
    $this->cartService->remove($productId);
    $this->messenger()->addStatus($this->t('Item removed from cart.'));
    
    $form_state->setRebuild();
  }

  /**
   * Ajax callback to refresh the form.
   */
  public function ajaxRefresh(array &$form, FormStateInterface $form_state): array {
    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state): void {
    // Rediriger vers le checkout
    $form_state->setRedirect('tailstore_cart.checkout_create');
  }

}
```

## 🎨 Types d'éléments de formulaire

### Champs de texte

```php
$form['text'] = [
  '#type' => 'textfield',
  '#title' => $this->t('Text'),
  '#maxlength' => 255,
  '#placeholder' => 'Enter text...',
];

$form['textarea'] = [
  '#type' => 'textarea',
  '#title' => $this->t('Textarea'),
  '#rows' => 5,
];

$form['email'] = [
  '#type' => 'email',
  '#title' => $this->t('Email'),
];

$form['password'] = [
  '#type' => 'password',
  '#title' => $this->t('Password'),
];
```

### Sélections

```php
$form['select'] = [
  '#type' => 'select',
  '#title' => $this->t('Select'),
  '#options' => [
    'option1' => 'Option 1',
    'option2' => 'Option 2',
  ],
  '#empty_option' => '- Select -',
];

$form['radios'] = [
  '#type' => 'radios',
  '#title' => $this->t('Radios'),
  '#options' => [
    'yes' => 'Yes',
    'no' => 'No',
  ],
];

$form['checkboxes'] = [
  '#type' => 'checkboxes',
  '#title' => $this->t('Checkboxes'),
  '#options' => [
    'a' => 'Option A',
    'b' => 'Option B',
  ],
];

$form['checkbox'] = [
  '#type' => 'checkbox',
  '#title' => $this->t('I agree'),
];
```

### Nombres et dates

```php
$form['number'] = [
  '#type' => 'number',
  '#title' => $this->t('Quantity'),
  '#min' => 1,
  '#max' => 100,
  '#step' => 1,
];

$form['date'] = [
  '#type' => 'date',
  '#title' => $this->t('Date'),
];

$form['datetime'] = [
  '#type' => 'datetime',
  '#title' => $this->t('Date and time'),
];
```

### Conteneurs

```php
$form['fieldset'] = [
  '#type' => 'fieldset',
  '#title' => $this->t('Group'),
];

$form['details'] = [
  '#type' => 'details',
  '#title' => $this->t('Collapsible'),
  '#open' => TRUE,
];

$form['container'] = [
  '#type' => 'container',
  '#attributes' => ['class' => ['my-class']],
];
```

## 🔄 Ajax dans les formulaires

```php
$form['country'] = [
  '#type' => 'select',
  '#title' => $this->t('Country'),
  '#options' => $this->getCountries(),
  '#ajax' => [
    'callback' => '::updateCities',
    'wrapper' => 'cities-wrapper',
    'event' => 'change',
  ],
];

$form['city'] = [
  '#type' => 'select',
  '#title' => $this->t('City'),
  '#options' => $this->getCities($form_state->getValue('country')),
  '#prefix' => '<div id="cities-wrapper">',
  '#suffix' => '</div>',
];

/**
 * Ajax callback for cities.
 */
public function updateCities(array &$form, FormStateInterface $form_state): array {
  return $form['city'];
}
```

## 📋 Route pour le formulaire

```yaml
# tailstore_cart.routing.yml
tailstore_cart.settings:
  path: '/admin/config/tailstore/cart'
  defaults:
    _form: '\Drupal\tailstore_cart\Form\SettingsForm'
    _title: 'TailStore Cart Settings'
  requirements:
    _permission: 'administer tailstore cart'
```

## ✅ Checklist

- [ ] SettingsForm créé et fonctionnel
- [ ] CartForm avec gestion des quantités
- [ ] Validation personnalisée
- [ ] Protection CSRF automatique
- [ ] Ajax fonctionnel
- [ ] Routes définies

## 🔜 Prochaine étape

Les formulaires sont prêts ! Intégrons [htmx](/etape-8-developpement/htmx/) pour des interactions modernes.
