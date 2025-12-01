---
title: Structure d'un Module
description: Architecture et fichiers de base d'un module Drupal custom
sidebar:
  order: 1
---

import { Tabs, TabItem, Aside, Steps, FileTree } from '@astrojs/starlight/components';

## 📁 Structure minimale

Un module Drupal nécessite au minimum un fichier `.info.yml` :

<FileTree>

- modules/
  - custom/
    - tailstore_cart/
      - tailstore_cart.info.yml

</FileTree>

## 📝 Fichier .info.yml

C'est la carte d'identité du module :

```yaml
# tailstore_cart.info.yml
name: TailStore Cart
type: module
description: 'Gestion du panier et checkout pour TailStore'
core_version_requirement: ^10 || ^11
package: TailStore
version: 1.0.0

# Dépendances
dependencies:
  - drupal:node
  - drupal:user

# Dépendances de test (optionnel)
test_dependencies:
  - drupal:phpunit

# Configuration à installer
configure: tailstore_cart.settings
```

### Propriétés importantes

| Propriété | Description |
|-----------|-------------|
| `name` | Nom affiché dans l'admin |
| `type` | `module`, `theme`, ou `profile` |
| `description` | Description courte |
| `core_version_requirement` | Versions Drupal compatibles |
| `package` | Groupe dans la liste des modules |
| `dependencies` | Modules requis |

## 🏗️ Structure complète

<FileTree>

- tailstore_cart/
  - **tailstore_cart.info.yml** Déclaration du module
  - tailstore_cart.module Hooks PHP
  - tailstore_cart.install Installation/désinstallation
  - tailstore_cart.routing.yml Routes
  - tailstore_cart.services.yml Services
  - tailstore_cart.permissions.yml Permissions
  - tailstore_cart.libraries.yml CSS/JS
  - tailstore_cart.links.menu.yml Liens de menu
  - tailstore_cart.links.task.yml Onglets
  - tailstore_cart.links.action.yml Boutons d'action
  - config/
    - install/
      - tailstore_cart.settings.yml Configuration par défaut
    - schema/
      - tailstore_cart.schema.yml Schéma de config
  - src/
    - Controller/ Controllers
    - Service/ Services
    - Form/ Formulaires
    - Plugin/ Plugins (blocs, champs...)
    - EventSubscriber/ Écouteurs d'événements
  - templates/ Templates Twig
  - tests/ Tests PHPUnit

</FileTree>

## 📄 Fichier .module

Contient les hooks et fonctions PHP :

```php
<?php

/**
 * @file
 * Primary module hooks for TailStore Cart module.
 */

declare(strict_types=1);

use Drupal\Core\Routing\RouteMatchInterface;

/**
 * Implements hook_help().
 */
function tailstore_cart_help(string $route_name, RouteMatchInterface $route_match): string {
  if ($route_name === 'help.page.tailstore_cart') {
    return '<p>' . t('Provides cart and checkout functionality for TailStore.') . '</p>';
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
      ],
    ],
    'cart_item' => [
      'variables' => [
        'product' => NULL,
        'quantity' => 1,
        'subtotal' => 0,
      ],
    ],
    'mini_cart' => [
      'variables' => [
        'count' => 0,
        'total' => 0,
        'items' => [],
      ],
    ],
  ];
}

/**
 * Implements hook_page_attachments().
 */
function tailstore_cart_page_attachments(array &$attachments): void {
  // Attacher htmx sur toutes les pages
  $attachments['#attached']['library'][] = 'tailstore_cart/htmx';
}
```

## 📦 Fichier .install

Gère l'installation, la mise à jour et la désinstallation :

```php
<?php

/**
 * @file
 * Install, update and uninstall functions for TailStore Cart.
 */

declare(strict_types=1);

/**
 * Implements hook_schema().
 */
function tailstore_cart_schema(): array {
  $schema['tailstore_cart_items'] = [
    'description' => 'Stores cart items for users.',
    'fields' => [
      'id' => [
        'type' => 'serial',
        'not null' => TRUE,
      ],
      'session_id' => [
        'type' => 'varchar',
        'length' => 128,
        'not null' => TRUE,
      ],
      'user_id' => [
        'type' => 'int',
        'unsigned' => TRUE,
        'default' => 0,
      ],
      'product_id' => [
        'type' => 'int',
        'unsigned' => TRUE,
        'not null' => TRUE,
      ],
      'quantity' => [
        'type' => 'int',
        'unsigned' => TRUE,
        'not null' => TRUE,
        'default' => 1,
      ],
      'created' => [
        'type' => 'int',
        'not null' => TRUE,
      ],
    ],
    'primary key' => ['id'],
    'indexes' => [
      'session_id' => ['session_id'],
      'user_id' => ['user_id'],
    ],
  ];
  
  return $schema;
}

/**
 * Implements hook_install().
 */
function tailstore_cart_install(): void {
  \Drupal::messenger()->addStatus(t('TailStore Cart has been installed.'));
}

/**
 * Implements hook_uninstall().
 */
function tailstore_cart_uninstall(): void {
  // Supprimer les variables de configuration
  \Drupal::configFactory()->getEditable('tailstore_cart.settings')->delete();
}

/**
 * Add quantity column to cart_items table.
 */
function tailstore_cart_update_9001(): void {
  $schema = \Drupal::database()->schema();
  
  if (!$schema->fieldExists('tailstore_cart_items', 'quantity')) {
    $schema->addField('tailstore_cart_items', 'quantity', [
      'type' => 'int',
      'unsigned' => TRUE,
      'not null' => TRUE,
      'default' => 1,
    ]);
  }
}
```

## 📋 Fichier .permissions.yml

Définit les permissions du module :

```yaml
# tailstore_cart.permissions.yml
access cart:
  title: 'Access shopping cart'
  description: 'Allows users to view and manage their cart'

access checkout:
  title: 'Access checkout'
  description: 'Allows users to proceed to checkout'

administer tailstore cart:
  title: 'Administer TailStore Cart'
  description: 'Configure cart settings and view all carts'
  restrict access: true
```

## 📚 Fichier .libraries.yml

Déclare les assets CSS et JavaScript :

```yaml
# tailstore_cart.libraries.yml
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
  js:
    js/cart.js: {}
  css:
    component:
      css/cart.css: {}
  dependencies:
    - core/drupal
    - tailstore_cart/htmx
```

## ⚙️ Configuration

### Fichier de configuration par défaut

```yaml
# config/install/tailstore_cart.settings.yml
stripe_public_key: ''
stripe_secret_key: ''
stripe_webhook_secret: ''
currency: 'EUR'
success_redirect: '/checkout/success'
cancel_redirect: '/cart'
```

### Schéma de configuration

```yaml
# config/schema/tailstore_cart.schema.yml
tailstore_cart.settings:
  type: config_object
  label: 'TailStore Cart settings'
  mapping:
    stripe_public_key:
      type: string
      label: 'Stripe public key'
    stripe_secret_key:
      type: string
      label: 'Stripe secret key'
    stripe_webhook_secret:
      type: string
      label: 'Stripe webhook secret'
    currency:
      type: string
      label: 'Currency code'
    success_redirect:
      type: path
      label: 'Success redirect path'
    cancel_redirect:
      type: path
      label: 'Cancel redirect path'
```

## 🔧 Créer le module

<Steps>

1. **Créer le dossier**

   ```bash
   mkdir -p web/modules/custom/tailstore_cart/{src/{Controller,Service,Form,Plugin/Block},templates,config/{install,schema}}
   ```

2. **Créer le fichier .info.yml**

   ```bash
   cat > web/modules/custom/tailstore_cart/tailstore_cart.info.yml << 'EOF'
   name: TailStore Cart
   type: module
   description: 'Gestion du panier et checkout pour TailStore'
   core_version_requirement: ^10 || ^11
   package: TailStore
   version: 1.0.0
   dependencies:
     - drupal:node
     - drupal:user
   EOF
   ```

3. **Activer le module**

   ```bash
   ddev drush en tailstore_cart -y
   ```

4. **Vérifier**

   ```bash
   ddev drush pm:list --filter=tailstore_cart
   ```

</Steps>

## 🏷️ Namespaces PSR-4

Drupal utilise l'autoloading PSR-4 :

| Chemin du fichier | Namespace |
|-------------------|-----------|
| `src/Controller/CartController.php` | `Drupal\tailstore_cart\Controller` |
| `src/Service/CartService.php` | `Drupal\tailstore_cart\Service` |
| `src/Form/SettingsForm.php` | `Drupal\tailstore_cart\Form` |
| `src/Plugin/Block/MiniCartBlock.php` | `Drupal\tailstore_cart\Plugin\Block` |

### Exemple de classe

```php
<?php

declare(strict_types=1);

namespace Drupal\tailstore_cart\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Controller for cart operations.
 */
class CartController extends ControllerBase {
  
  /**
   * Display the cart page.
   */
  public function index(): array {
    return [
      '#theme' => 'cart_page',
      '#items' => [],
      '#total' => 0,
    ];
  }
  
}
```

<Aside type="note" title="declare(strict_types=1)">
Utilisez toujours le mode strict en PHP 8+ pour une meilleure qualité de code.
</Aside>

## 🧪 Tester l'installation

```bash
# Vérifier que le module est bien listé
ddev drush pm:list --filter=tailstore_cart

# Activer
ddev drush en tailstore_cart -y

# Vérifier les tables créées
ddev drush sqlq "SHOW TABLES LIKE 'tailstore%'"

# Désactiver pour test
ddev drush pm:uninstall tailstore_cart -y
```

## ✅ Checklist

- [ ] Dossier du module créé
- [ ] Fichier .info.yml valide
- [ ] Fichier .module avec hooks
- [ ] Fichier .install avec schéma
- [ ] Permissions définies
- [ ] Configuration par défaut
- [ ] Module activable sans erreur

## 🔜 Prochaine étape

La structure est en place ! Créons les [routes et controllers](/etape-8-developpement/routes-controllers/).
