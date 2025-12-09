---
title: Webform
description: Créer des formulaires de contact et de commande
sidebar:
  order: 4
---

import { Tabs, TabItem, Aside, Steps } from '@astrojs/starlight/components';

## 🎯 Qu'est-ce que Webform ?

**Webform** est le module de formulaires le plus complet de Drupal. Il permet de :

- Créer des formulaires sans code
- Gérer les soumissions
- Envoyer des emails
- Intégrer des paiements
- Exporter les données

<Aside type="note" title="Cas d'usage">
Contact, demande de devis, newsletter, enquêtes, commandes...
</Aside>

## 📦 Installation

```bash
# Installer Webform
ddev composer require drupal/webform

# Activer
ddev drush en webform webform_ui -y
```

### Modules complémentaires

```bash
# Pour le développement
ddev drush en webform_devel -y

# Pour les exports
ddev drush en webform_submission_export_import -y
```

## ⚙️ Créer un formulaire

### Accès

**Structure** → **Webforms** → **Ajouter un webform**

Ou : `/admin/structure/webform/add`

### Formulaire de contact TailStore

<Steps>

1. **Créer le webform**
   - **Titre** : Formulaire de contact
   - **ID machine** : contact

2. **Ajouter les éléments**
   
   Cliquez sur **Construire** puis **Ajouter un élément** :

   | Type | Clé | Libellé | Requis |
   |------|-----|---------|--------|
   | Champ texte | name | Nom complet | ✅ |
   | Email | email | Email | ✅ |
   | Téléphone | phone | Téléphone | ❌ |
   | Liste de sélection | subject | Sujet | ✅ |
   | Zone de texte | message | Message | ✅ |

3. **Configurer le sujet**
   
   Options :
   ```
   general: Question générale
   order: Suivi de commande
   return: Retour produit
   partnership: Partenariat
   ```

4. **Enregistrer**

</Steps>

## 📧 Configuration des emails

### Email de notification admin

<Steps>

1. Allez dans **Paramètres** → **Emails/Gestionnaires**

2. **Ajouter un gestionnaire** → **Email**

3. Configuration :
   ```yaml
   Titre: Notification admin
   Destinataire: admin@tailstore.com
   Sujet: "[webform_submission:values:subject] - Nouveau message de [webform_submission:values:name]"
   Corps: |
     Nouveau message reçu sur TailStore:
     
     Nom: [webform_submission:values:name]
     Email: [webform_submission:values:email]
     Téléphone: [webform_submission:values:phone]
     Sujet: [webform_submission:values:subject]
     
     Message:
     [webform_submission:values:message]
   ```

4. **Enregistrer**

</Steps>

### Email de confirmation client

```yaml
Titre: Confirmation client
Destinataire: [webform_submission:values:email]
Sujet: "Votre message a bien été reçu - TailStore"
Corps: |
  Bonjour [webform_submission:values:name],
  
  Nous avons bien reçu votre message concernant "[webform_submission:values:subject]".
  
  Notre équipe vous répondra dans les 48h.
  
  Cordialement,
  L'équipe TailStore
```

## 🎨 Personnalisation

### Ajouter des classes CSS

Dans chaque élément :

```yaml
# Attributs du wrapper
wrapper_attributes:
  class: mb-4

# Attributs de l'élément
attributes:
  class: form-input
```

### Template Twig personnalisé

```twig
{# templates/webform/webform--contact.html.twig #}
<div class="bg-white rounded-lg shadow-md p-6 md:p-8">
  <h2 class="text-2xl font-bold mb-6">{{ label }}</h2>
  
  {{ content }}
</div>
```

### Styles des éléments

Dans le thème, ciblez les classes Webform :

```css
/* css/src/components/webform.css */
.webform-submission-form {
  @apply space-y-4;
}

.webform-element--type-textfield input,
.webform-element--type-email input,
.webform-element--type-tel input {
  @apply form-input;
}

.webform-element--type-textarea textarea {
  @apply form-input min-h-32;
}

.webform-element--type-select select {
  @apply form-input;
}

.webform-button--submit {
  @apply btn btn-primary;
}
```

## 📋 Formulaire de demande de devis

### Structure

```yaml
Éléments:
  - fieldset: Informations personnelles
    - name (text): Nom complet
    - email (email): Email
    - phone (tel): Téléphone
    - company (text): Entreprise
  
  - fieldset: Détails de la demande
    - products (entity_autocomplete): Produits concernés
    - quantity (number): Quantité estimée
    - budget (select): Budget estimé
    - deadline (date): Date souhaitée
  
  - message (textarea): Détails supplémentaires
  - terms (checkbox): J'accepte les CGV
```

### Configuration avancée

```yaml
# Produits - Entity autocomplete
Type: Référence d'entité
Cible: Contenu - Produit
Limite de sélection: 5
```

```yaml
# Budget - Select
Options:
  - Moins de 500€
  - 500€ - 1000€
  - 1000€ - 5000€
  - Plus de 5000€
```

## 📊 Gestion des soumissions

### Voir les soumissions

**Structure** → **Webforms** → **[Formulaire]** → **Résultats**

### Exporter les données

<Tabs>
<TabItem label="Interface">

1. **Résultats** → **Télécharger**
2. Choisir le format (CSV, Excel, JSON)
3. Sélectionner les champs
4. **Télécharger**

</TabItem>
<TabItem label="Drush">

```bash
# Exporter en CSV
ddev drush webform:export contact --format=csv > contact.csv

# Exporter en JSON
ddev drush webform:export contact --format=json > contact.json
```

</TabItem>
</Tabs>

### Nettoyer les anciennes soumissions

**Configuration** → **Webforms** → **Paramètres** → **Purge**

```yaml
Supprimer les soumissions après: 90 jours
Conserver les soumissions non lues: Oui
```

## 🔌 Intégration dans le site

### Bloc

<Steps>

1. **Structure** → **Mise en page des blocs**
2. **Placer un bloc** dans la région souhaitée
3. Chercher **Webform**
4. Sélectionner le formulaire
5. Configurer la visibilité (pages)

</Steps>

### Page dédiée

Le formulaire est accessible à : `/form/contact`

Personnaliser l'URL dans **Paramètres** → **Paramètres généraux** → **Chemin**

### Dans un template Twig

```twig
{# Dans page.html.twig ou un bloc #}
{{ drupal_entity('webform', 'contact') }}
```

### Dans un contenu

Utilisez le format d'entrée "Full HTML" :

```html
<drupal-entity data-entity-type="webform" data-entity-uuid="[UUID]"></drupal-entity>
```

## 🔒 Anti-spam

### Honeypot

```bash
ddev composer require drupal/honeypot
ddev drush en honeypot -y
```

Activé automatiquement sur les webforms.

### CAPTCHA

```bash
ddev composer require drupal/captcha drupal/recaptcha
ddev drush en captcha recaptcha -y
```

Configuration :
1. Obtenir les clés API Google reCAPTCHA
2. **Configuration** → **CAPTCHA** → **reCAPTCHA**
3. Ajouter l'élément CAPTCHA au webform

### Limite de soumissions

Dans **Paramètres** → **Limites des soumissions** :

```yaml
Limite par utilisateur: 3 par jour
Limite totale: 100 par jour
Message limite: "Vous avez atteint la limite..."
```

## 📱 Formulaire responsive

### Configuration mobile

```yaml
# Paramètres d'affichage
Afficher les étiquettes: Au-dessus
Largeur par défaut: 100%
Description position: Sous l'élément
```

### Multi-étapes (Wizard)

Pour les formulaires longs :

<Steps>

1. Ajouter un élément **Page wizard**
2. Déplacer les éléments dans chaque page
3. Configurer les boutons Précédent/Suivant

</Steps>

## 🧪 Test et debug

### Mode test

```bash
# Générer des soumissions test
ddev drush webform:generate contact 10
```

### Voir les logs

**Rapports** → **Journaux récents** → Filtrer par "webform"

### Debug tokens

Dans l'email, affichez tous les tokens :

```
[webform_submission:values]
```

## 📦 Exporter/Importer

### Exporter la configuration

```bash
# Exporter un webform
ddev drush cex -y
# Fichiers dans config/sync/webform.webform.contact.yml
```

### Importer

```bash
# Sur un autre environnement
ddev drush cim -y
```

## ✅ Checklist

- [ ] Webform installé et activé
- [ ] Formulaire de contact créé
- [ ] Email notification admin configuré
- [ ] Email confirmation client configuré
- [ ] Anti-spam activé (Honeypot)
- [ ] Formulaire intégré dans le site
- [ ] Export configuré
- [ ] Style personnalisé appliqué

## 🔜 Prochaine étape

Formulaires en place ! Découvrons les [autres modules utiles](/etape-7-modules/autres-modules/).
