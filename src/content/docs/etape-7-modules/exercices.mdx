---
title: Exercices Étape 7
description: Mise en pratique des modules contributifs Drupal
sidebar:
  order: 6
---

import { Tabs, TabItem, Aside, Card, CardGrid, Steps } from '@astrojs/starlight/components';

## 🎯 Objectifs

À la fin de ces exercices, vous aurez :
- Installé tous les modules essentiels
- Configuré les URLs automatiques
- Optimisé le SEO
- Créé des formulaires fonctionnels

---

## Exercice 1 : Installation des modules

<Card title="Durée estimée : 20 minutes" icon="clock">
  Installer et activer tous les modules contributifs nécessaires.
</Card>

### Objectif

Préparer l'environnement TailStore avec tous les modules.

### Instructions

<Steps>

1. **Installer les modules avec Composer**

   ```bash
   ddev composer require \
     drupal/pathauto \
     drupal/token \
     drupal/metatag \
     drupal/webform \
     drupal/redirect \
     drupal/simple_sitemap \
     drupal/admin_toolbar \
     drupal/gin \
     drupal/honeypot
   ```

2. **Activer les modules**

   ```bash
   ddev drush en \
     pathauto token \
     metatag metatag_open_graph metatag_twitter_cards \
     webform webform_ui \
     redirect simple_sitemap \
     admin_toolbar admin_toolbar_tools \
     honeypot -y
   ```

3. **Configurer Gin comme thème admin**

   ```bash
   ddev drush theme:enable gin -y
   ddev drush config-set system.theme admin gin -y
   ```

4. **Vérifier l'installation**

   ```bash
   ddev drush pm:list --status=enabled --format=table
   ```

</Steps>

### Validation ✓

- [ ] Tous les modules installés sans erreur
- [ ] Modules activés
- [ ] Gin visible dans l'administration
- [ ] Admin Toolbar avec menus déroulants

---

## Exercice 2 : Configuration Pathauto

<Card title="Durée estimée : 25 minutes" icon="clock">
  Configurer les URLs automatiques pour tous les contenus.
</Card>

### Objectif

Créer des modèles d'URL propres pour chaque type.

### Instructions

<Steps>

1. **Accéder à Pathauto**

   `/admin/config/search/path/patterns`

2. **Créer le modèle Produits**

   - Type : Contenu → Produit
   - Libellé : Produits
   - Modèle : `boutique/[node:field_category:entity:name]/[node:title]`

3. **Créer le modèle Articles**

   - Type : Contenu → Article Blog
   - Libellé : Articles Blog
   - Modèle : `blog/[node:created:custom:Y-m]/[node:title]`

4. **Créer le modèle Catégories**

   - Type : Terme de taxonomie → Catégorie
   - Libellé : Catégories
   - Modèle : `categories/[term:name]`

5. **Créer le modèle Marques**

   - Type : Terme de taxonomie → Marque
   - Libellé : Marques
   - Modèle : `marques/[term:name]`

6. **Configurer les paramètres généraux**

   `/admin/config/search/path/settings`

   ```yaml
   Séparateur: "-"
   Casse: Minuscules
   Longueur max: 100
   ```

7. **Générer les alias existants**

   ```bash
   ddev drush pathauto:aliases-generate all
   ```

</Steps>

### Test

Créez un produit "Pantalon Cargo" dans la catégorie "Pantalons".

**URL attendue** : `/boutique/pantalons/pantalon-cargo`

### Validation ✓

- [ ] Modèle Produits créé
- [ ] Modèle Articles créé
- [ ] Modèle Catégories créé
- [ ] Modèle Marques créé
- [ ] URLs générées correctement
- [ ] Translittération fonctionnelle (é → e)

---

## Exercice 3 : Configuration SEO

<Card title="Durée estimée : 30 minutes" icon="clock">
  Optimiser les métadonnées pour le référencement.
</Card>

### Objectif

Configurer Metatag pour les produits et le partage social.

### Instructions

<Steps>

1. **Configuration globale**

   `/admin/config/search/metatag`

   Modifier **Global** :

   ```yaml
   Titre: "[current-page:title] | TailStore"
   Description: "TailStore - Votre boutique de mode en ligne"
   ```

2. **Configuration Produit**

   Ajouter un modèle pour **Contenu: Produit** :

   **Basique :**
   ```yaml
   Titre: "[node:title] - [node:field_price:value]€ | TailStore"
   Description: "[node:field_description:summary]"
   ```

   **Open Graph :**
   ```yaml
   og:type: "product"
   og:title: "[node:title]"
   og:description: "[node:field_description:summary]"
   og:image: "[node:field_images:entity:url]"
   og:site_name: "TailStore"
   ```

   **Twitter Cards :**
   ```yaml
   twitter:card: "summary_large_image"
   twitter:title: "[node:title]"
   twitter:description: "[node:field_description:summary]"
   twitter:image: "[node:field_images:entity:url]"
   ```

3. **Configuration Article Blog**

   Ajouter un modèle pour **Contenu: Article Blog** :

   ```yaml
   og:type: "article"
   article:published_time: "[node:created:html_datetime]"
   article:author: "[node:author:display-name]"
   ```

4. **Créer un style d'image Open Graph**

   `/admin/config/media/image-styles/add`

   - Nom : `opengraph`
   - Effet : Scale and crop (1200×630)

</Steps>

### Test

1. Visitez un produit
2. Affichez le code source
3. Vérifiez les balises `<meta property="og:..."`

### Validation ✓

- [ ] Métadonnées globales configurées
- [ ] Open Graph pour les produits
- [ ] Twitter Cards configurées
- [ ] Style d'image OG créé
- [ ] Test avec [Facebook Debugger](https://developers.facebook.com/tools/debug/)

---

## Exercice 4 : Formulaire de contact

<Card title="Durée estimée : 35 minutes" icon="clock">
  Créer un formulaire de contact complet avec notifications.
</Card>

### Objectif

Créer le formulaire de contact TailStore avec emails automatiques.

### Instructions

<Steps>

1. **Créer le webform**

   `/admin/structure/webform/add`

   - Titre : Formulaire de contact
   - ID : `contact`

2. **Ajouter les éléments**

   | Ordre | Type | Clé | Libellé | Requis |
   |-------|------|-----|---------|--------|
   | 1 | Fieldset | personal_info | Vos informations | - |
   | 2 | Text | name | Nom complet | ✅ |
   | 3 | Email | email | Email | ✅ |
   | 4 | Tel | phone | Téléphone | ❌ |
   | 5 | Fieldset | message_info | Votre message | - |
   | 6 | Select | subject | Sujet | ✅ |
   | 7 | Textarea | message | Message | ✅ |

   **Options du sujet :**
   ```
   general|Question générale
   order|Suivi de commande
   return|Retour produit
   partnership|Partenariat
   other|Autre
   ```

3. **Configurer l'email admin**

   `/admin/structure/webform/manage/contact/handlers`

   Ajouter un **Email handler** :

   ```yaml
   Titre: Notification équipe
   Destinataire: contact@tailstore.com
   Sujet: "[TailStore] [webform_submission:values:subject] - [webform_submission:values:name]"
   Corps: |
     Un nouveau message a été reçu sur TailStore.
     
     === Expéditeur ===
     Nom: [webform_submission:values:name]
     Email: [webform_submission:values:email]
     Téléphone: [webform_submission:values:phone]
     
     === Message ===
     Sujet: [webform_submission:values:subject]
     
     [webform_submission:values:message]
     
     ---
     Répondre directement à cet email pour contacter le client.
   
   Répondre à: [webform_submission:values:email]
   ```

4. **Configurer l'email confirmation**

   Ajouter un second **Email handler** :

   ```yaml
   Titre: Confirmation client
   Destinataire: [webform_submission:values:email]
   Sujet: "Votre message a bien été reçu - TailStore"
   Corps: |
     Bonjour [webform_submission:values:name],
     
     Nous avons bien reçu votre message concernant "[webform_submission:values:subject]".
     
     Notre équipe vous répondra dans les 48 heures ouvrées.
     
     Cordialement,
     L'équipe TailStore
     
     ---
     Ceci est un message automatique, merci de ne pas y répondre.
   ```

5. **Configurer le message de confirmation**

   `/admin/structure/webform/manage/contact/settings/confirmation`

   ```yaml
   Type: Page
   Titre: Merci pour votre message !
   Message: |
     Votre message a été envoyé avec succès.
     Nous vous répondrons dans les plus brefs délais.
   ```

6. **Ajouter le formulaire à une page**

   Créez une page "Contact" et intégrez le bloc Webform.

</Steps>

### Validation ✓

- [ ] Formulaire créé avec tous les champs
- [ ] Email admin configuré
- [ ] Email confirmation client configuré
- [ ] Message de confirmation affiché
- [ ] Formulaire accessible sur /contact
- [ ] Test d'envoi fonctionnel

---

## Exercice 5 : Formulaire demande de devis

<Card title="Durée estimée : 30 minutes" icon="clock">
  Créer un formulaire multi-étapes pour les demandes de devis.
</Card>

### Objectif

Créer un formulaire plus complexe avec wizard et champs conditionnels.

### Instructions

<Steps>

1. **Créer le webform**

   - Titre : Demande de devis
   - ID : `quote_request`

2. **Page 1 : Informations**

   ```yaml
   wizard_page_1:
     type: wizard_page
     title: "Vos informations"
   
   name:
     type: textfield
     title: "Nom complet"
     required: true
   
   email:
     type: email
     title: "Email"
     required: true
   
   company:
     type: textfield
     title: "Entreprise"
   
   phone:
     type: tel
     title: "Téléphone"
     required: true
   ```

3. **Page 2 : Produits**

   ```yaml
   wizard_page_2:
     type: wizard_page
     title: "Produits souhaités"
   
   products:
     type: checkboxes
     title: "Catégories de produits"
     options:
       clothing: "Vêtements"
       shoes: "Chaussures"
       accessories: "Accessoires"
   
   quantity:
     type: select
     title: "Quantité estimée"
     options:
       10_50: "10 à 50 pièces"
       50_100: "50 à 100 pièces"
       100_500: "100 à 500 pièces"
       500_plus: "Plus de 500 pièces"
   
   details:
     type: textarea
     title: "Description des besoins"
   ```

4. **Page 3 : Budget et délai**

   ```yaml
   wizard_page_3:
     type: wizard_page
     title: "Budget et planning"
   
   budget:
     type: radios
     title: "Budget estimé"
     options:
       small: "Moins de 1 000€"
       medium: "1 000€ - 5 000€"
       large: "5 000€ - 20 000€"
       enterprise: "Plus de 20 000€"
   
   deadline:
     type: date
     title: "Date souhaitée de livraison"
   
   urgency:
     type: radios
     title: "Niveau d'urgence"
     options:
       low: "Faible - Plusieurs mois"
       medium: "Moyen - 1 à 2 mois"
       high: "Élevé - Moins d'un mois"
   ```

5. **Configurer la progression**

   - Afficher la barre de progression
   - Permettre le retour arrière

6. **Configurer les emails**

   Créer des emails personnalisés avec toutes les infos.

</Steps>

### Validation ✓

- [ ] Wizard à 3 étapes
- [ ] Navigation avant/arrière
- [ ] Barre de progression
- [ ] Tous les champs fonctionnels
- [ ] Email récapitulatif complet

---

## Exercice 6 : Sitemap XML

<Card title="Durée estimée : 15 minutes" icon="clock">
  Générer un sitemap pour les moteurs de recherche.
</Card>

### Objectif

Configurer Simple Sitemap pour indexer tous les contenus.

### Instructions

<Steps>

1. **Configuration du sitemap**

   `/admin/config/search/simplesitemap`

2. **Activer les types de contenu**

   Pour chaque entité, configurer :

   | Type | Indexer | Priorité |
   |------|---------|----------|
   | Produit | ✅ | 0.8 |
   | Article Blog | ✅ | 0.6 |
   | Page | ✅ | 0.5 |
   | Catégorie | ✅ | 0.7 |
   | Marque | ✅ | 0.6 |

3. **Générer le sitemap**

   ```bash
   ddev drush simple-sitemap:generate
   ```

4. **Vérifier**

   Accédez à `/sitemap.xml`

5. **Soumettre à Google**

   Dans Google Search Console, soumettez l'URL du sitemap.

</Steps>

### Validation ✓

- [ ] Tous les types configurés
- [ ] Sitemap accessible à /sitemap.xml
- [ ] URLs propres dans le sitemap
- [ ] Priorités définies

---

## Exercice 7 : Sécurité anti-spam

<Card title="Durée estimée : 15 minutes" icon="clock">
  Protéger les formulaires contre le spam.
</Card>

### Objectif

Configurer Honeypot et limiter les soumissions.

### Instructions

<Steps>

1. **Vérifier Honeypot**

   `/admin/config/content/honeypot`

   ```yaml
   Protéger tous les formulaires: Oui
   Délai minimum: 5 secondes
   ```

2. **Limiter les soumissions Webform**

   Pour chaque formulaire :

   `/admin/structure/webform/manage/[id]/settings/submissions`

   ```yaml
   Limite par utilisateur: 3 par jour
   Limite totale: 50 par jour
   Message: "Vous avez atteint la limite..."
   ```

3. **Tester**

   Essayez de soumettre trop rapidement (< 5 secondes).

</Steps>

### Validation ✓

- [ ] Honeypot actif sur tous les formulaires
- [ ] Délai minimum configuré
- [ ] Limites de soumission définies

---

## 🏆 Récapitulatif Étape 7

<CardGrid>
  <Card title="Modules installés" icon="puzzle">
    9 modules contributifs
  </Card>
  <Card title="URLs propres" icon="document">
    Pathauto configuré
  </Card>
  <Card title="SEO optimisé" icon="magnifier">
    Metatag + Open Graph
  </Card>
  <Card title="Formulaires" icon="pencil">
    Contact + Devis
  </Card>
</CardGrid>

## 📋 Export final

```bash
# Exporter toute la configuration
ddev drush cex -y

# Commit
git add .
git commit -m "feat: configure contrib modules (pathauto, metatag, webform, etc.)"
```

## 🔜 Prochaine étape

Les modules sont configurés ! Dans l'[Étape 8](/etape-8-developpement/), nous développerons nos propres modules custom.
