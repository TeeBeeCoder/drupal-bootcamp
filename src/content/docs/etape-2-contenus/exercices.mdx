---
title: Exercices - Contenus
description: Exercices pratiques pour valider les acquis de l'Étape 2
sidebar:
  order: 5
---

import { Steps } from '@astrojs/starlight/components';

## 🎯 Objectifs des exercices

Ces exercices vous permettent de valider vos acquis sur :
- La création de types de contenu
- L'ajout et la configuration de champs
- Les modes d'affichage
- La gestion des médias

---

## 📝 Exercice 1 : Créer le type "Témoignage"

**Objectif** : Créer un nouveau type de contenu pour les avis clients

<Steps>

1. Créez un type de contenu "Témoignage" (`testimonial`)

2. Ajoutez les champs suivants :
   - `field_author_name` : Texte (brut) - Requis
   - `field_author_photo` : Média (Image) - Optionnel
   - `field_rating` : Liste (entier) avec valeurs 1-5 - Requis
   - `field_testimonial_text` : Texte (formaté, long) - Requis
   - `field_date` : Date - Requis

3. Configurez le mode d'affichage "Teaser" :
   - Photo, Nom, Note, Extrait du texte (50 caractères)

4. Exportez la configuration

</Steps>

<details>
<summary>💡 Aide : Configuration du champ Rating</summary>

Pour le champ `field_rating` de type "Liste (entier)" :

Valeurs autorisées :
```
1|★
2|★★
3|★★★
4|★★★★
5|★★★★★
```

Widget : Boutons radio

</details>

<details>
<summary>💡 Solution</summary>

1. Créer le type : `/admin/structure/types/add`
   - Nom : Témoignage
   - Machine name : testimonial

2. Ajouter les champs : `/admin/structure/types/manage/testimonial/fields`

3. Configurer l'affichage : `/admin/structure/types/manage/testimonial/display`
   - Activer Teaser
   - Configurer les champs visibles

4. Exporter :
   ```bash
   drush cex -y
   git add config/sync/node.type.testimonial.yml
   git add config/sync/field.*.testimonial.*.yml
   git commit -m "feat: add testimonial content type"
   ```

</details>

---

## 📝 Exercice 2 : Champ "Prix barré"

**Objectif** : Afficher le prix original barré quand un produit est en promotion

<Steps>

1. Dans la configuration d'affichage du Produit (mode Full)

2. Configurez les champs `field_price` et `field_sale_price` pour afficher :
   - Le prix soldé en premier (plus grand)
   - Le prix original barré (si soldé)

3. Utilisez les classes CSS appropriées (préfixes/suffixes)

</Steps>

<details>
<summary>💡 Aide</summary>

Dans la configuration du formateur de champ :
- Préfixe : `<span class="original-price">`
- Suffixe : `</span>`

Ou mieux : créez un template Twig personnalisé (Étape 6).

</details>

---

## 📝 Exercice 3 : Styles d'images pour le responsive

**Objectif** : Créer une configuration d'images responsive

<Steps>

1. Créez 3 styles d'images :
   - `product_mobile` : 300×400
   - `product_tablet` : 450×600
   - `product_desktop` : 600×800

2. Activez le module Responsive Image :
   ```bash
   drush en responsive_image -y
   ```

3. Créez un style responsive "Product Responsive"

4. Appliquez-le au champ `field_images` du produit

</Steps>

<details>
<summary>💡 Solution</summary>

1. Créer les styles : `/admin/config/media/image-styles`

2. Créer le style responsive : `/admin/config/media/responsive-image-style/add`
   - Nom : Product Responsive
   - Breakpoint group : Responsive Image (ou votre thème)
   - Mappings selon les breakpoints

3. Appliquer dans l'affichage : `/admin/structure/types/manage/product/display`
   - field_images > Formateur : Responsive image
   - Style : Product Responsive

</details>

---

## 📝 Exercice 4 : View mode "Mini"

**Objectif** : Créer un mode d'affichage minimaliste pour les produits

<Steps>

1. Créez un view mode "Mini" (`mini`)

2. Configurez-le pour afficher uniquement :
   - Image (style thumbnail)
   - Titre (lien)
   - Prix

3. Ce mode sera utilisé pour :
   - Le mini-panier
   - Les widgets "Produits liés"

</Steps>

<details>
<summary>💡 Solution</summary>

1. Créer le view mode : `/admin/structure/display-modes/view/add`
   - Nom : Mini
   - Type d'entité : Contenu

2. Activer pour Produit : `/admin/structure/types/manage/product/display`
   - Cocher "Mini" dans les modes personnalisés

3. Configurer l'onglet Mini :
   - field_images (thumbnail, 100×100)
   - title (link)
   - field_price
   - Tout le reste masqué

4. Exporter :
   ```bash
   drush cex -y
   ```

</details>

---

## 📝 Exercice 5 : Bibliothèque de médias

**Objectif** : Préparer le contenu média pour TailStore

<Steps>

1. Uploadez au moins 10 images dans la bibliothèque de médias :
   - 6 images de produits
   - 3 images de slides
   - 1 image pour un article de blog

2. Remplissez correctement :
   - Le nom de chaque média
   - Le texte alternatif
   - Les crédits (optionnel)

3. Organisez avec des noms cohérents :
   - `product-dress-black-1`
   - `slide-women-collection`
   - `blog-fashion-trends`

</Steps>

<details>
<summary>💡 Ressources pour les images</summary>

Vous pouvez utiliser des images libres de droits depuis :
- [Unsplash](https://unsplash.com) - Photos HD gratuites
- [Pexels](https://pexels.com) - Photos et vidéos
- [Freepik](https://freepik.com) - Vecteurs et photos (avec attribution)

Pour TailStore, cherchez :
- "fashion", "clothing", "dress", "t-shirt"
- "women fashion", "men clothing"
- "accessories", "jewelry"

</details>

---

## 📝 Exercice 6 : Créer du contenu de test

**Objectif** : Créer les premiers contenus TailStore

<Steps>

1. Créez 3 produits avec :
   - Toutes les informations remplies
   - Au moins 2 images par produit
   - Prix et prix soldé pour au moins 1 produit

2. Créez 2 articles de blog

3. Créez 3 slides pour le carrousel

4. Vérifiez l'affichage dans les différents view modes

</Steps>

<details>
<summary>💡 Exemples de produits</summary>

**Produit 1 : Robe d'été noire**
- SKU : DRESS-001
- Prix : 49.99 €
- Prix soldé : 39.99 €
- Matière : 100% coton
- Disponibilité : En stock

**Produit 2 : Costume noir homme**
- SKU : SUIT-001
- Prix : 199.99 €
- Matière : Polyester, Laine
- Disponibilité : En stock

**Produit 3 : Veste en cuir**
- SKU : JACKET-001
- Prix : 149.99 €
- Prix soldé : 119.99 €
- Matière : Cuir véritable
- Disponibilité : En stock

</details>

---

## 🏆 Exercice bonus : Module Devel Generate

**Objectif** : Générer automatiquement du contenu de test

<Steps>

1. Installez le module Devel (si pas déjà fait) :
   ```bash
   composer require --dev drupal/devel
   drush en devel devel_generate -y
   ```

2. Générez 20 produits :
   ```bash
   drush genc 20 --bundles=product
   ```

3. Générez 5 articles de blog :
   ```bash
   drush genc 5 --bundles=blog_article
   ```

4. Vérifiez dans `/admin/content`

</Steps>

<details>
<summary>💡 Options de Devel Generate</summary>

```bash
# Générer avec des options
drush genc 10 \
  --bundles=product \
  --languages=fr \
  --authors=1 \
  --kill  # Supprime les contenus existants du type

# Générer des termes de taxonomie
drush gent tags 20

# Générer des utilisateurs
drush genu 5
```

</details>

---

## ✅ Checklist de validation

Avant de passer à l'Étape 3, assurez-vous de pouvoir :

- [ ] Créer un type de contenu avec plusieurs champs
- [ ] Ajouter des champs de différents types (texte, nombre, booléen, référence)
- [ ] Configurer les modes d'affichage (form display, view display)
- [ ] Créer et utiliser des styles d'images
- [ ] Utiliser la bibliothèque de médias
- [ ] Exporter la configuration des types et champs

## 🚀 Prêt pour la suite ?

Passez à l'[Étape 3 - Taxonomies](/etape-3-taxonomies/) pour créer les catégories, marques et attributs de vos produits.
