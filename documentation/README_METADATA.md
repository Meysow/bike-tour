# Metadata Configuration

Ce fichier centralise toutes les metadata SEO pour le site. Chaque page a ses propres titres, descriptions et mots-clés dans toutes les langues supportées.

## 📁 Fichier: `metadata.ts`

Contient les metadata pour toutes les pages du site.

## 🎯 Utilisation dans une page

### Exemple 1: Page simple (Rent)

```typescript
// src/app/[locale]/rent/layout.tsx
import { rentMetadata } from "@/config/metadata";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const currentLocale = locale as Locale;

  return {
    title: rentMetadata.title[currentLocale],
    description: rentMetadata.description[currentLocale],
    keywords: rentMetadata.keywords,
    // ... autres metadata
  };
}
```

### Exemple 2: Ajouter une nouvelle page

1. **Ajouter les metadata dans `metadata.ts`:**

```typescript
export const contactMetadata: PageMetadata = {
  title: {
    en: "Contact Us - RentaBike Paris",
    fr: "Contactez-Nous - RentaBike Paris",
    de: "Kontakt - RentaBike Paris",
    nl: "Contact - RentaBike Parijs",
    es: "Contacto - RentaBike París",
  },
  description: {
    en: "Get in touch with RentaBike Paris. Book your bike, ask questions, or request information about our tours and rentals.",
    fr: "Contactez RentaBike Paris. Réservez votre vélo, posez des questions ou demandez des informations sur nos tours et locations.",
    // ... autres langues
  },
  keywords: ["contact bike rental Paris", "RentaBike contact"],
  ogImage: "/images/hero/louvre.jpg",
};
```

2. **Utiliser dans le layout de la page:**

```typescript
// src/app/[locale]/contact/layout.tsx
import { contactMetadata } from "@/config/metadata";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  // ... implémenter comme dans l'exemple Rent
}
```

## 📊 Structure des Metadata

```typescript
interface PageMetadata {
  title: Record<Locale, string>; // Titre SEO pour chaque langue
  description: Record<Locale, string>; // Description pour chaque langue
  keywords?: string[]; // Mots-clés (optionnel)
  ogImage?: string; // Image Open Graph (optionnel)
}
```

## 🌍 Langues supportées

- 🇬🇧 `en` - English
- 🇫🇷 `fr` - Français (défaut)
- 🇩🇪 `de` - Deutsch
- 🇳🇱 `nl` - Nederlands
- 🇪🇸 `es` - Español

## ✅ Bonnes pratiques

### 1. **Titres (title)**

- ✅ Inclure le nom de la marque: "Page Title - RentaBike Paris"
- ✅ Longueur: 50-60 caractères
- ✅ Inclure mots-clés principaux
- ✅ Unique pour chaque page
- ❌ Éviter: "Page d'accueil", "Bienvenue"

**Exemples:**

```typescript
// ✅ Bon
title: "Bike Rental Paris - Rent Quality Bikes from €15/day";

// ❌ Mauvais
title: "Accueil";
```

### 2. **Descriptions (description)**

- ✅ Longueur: 150-160 caractères
- ✅ Appel à l'action
- ✅ Inclure prix/USP si pertinent
- ✅ Naturel et attractif
- ❌ Éviter: Bourrage de mots-clés

**Exemples:**

```typescript
// ✅ Bon
description: "Rent a bike in Paris from €15/day. Electric bikes, city bikes, and accessories. Book now!";

// ❌ Mauvais
description: "bike rental paris rent bike paris location velo paris bike paris rental";
```

### 3. **Mots-clés (keywords)**

- ✅ 10-15 mots-clés max
- ✅ Mix de langues principales (FR + EN)
- ✅ Variations naturelles
- ✅ Longue traîne
- ❌ Éviter: Répétitions, non pertinent

**Exemples:**

```typescript
// ✅ Bon
keywords: [
  "bike rental Paris",
  "location vélo Paris",
  "electric bike rental",
  "Paris cycling tours"
]

// ❌ Mauvais
keywords: [
  "bike", "rental", "paris", "bike paris", "rental paris", "bike rental", ...
]
```

### 4. **Images Open Graph (ogImage)**

- ✅ Format: 1200x630px (ratio 1.91:1)
- ✅ Poids: < 1MB
- ✅ Format: WebP ou JPG
- ✅ Pertinent à la page
- ❌ Éviter: Images génériques

## 🔧 Maintenance

### Ajouter une nouvelle langue

1. Ajouter la langue dans `src/config/i18n.ts`:

```typescript
export const locales = ["en", "fr", "de", "nl", "es", "it"] as const;
```

2. Ajouter les traductions dans chaque metadata:

```typescript
export const rentMetadata: PageMetadata = {
  title: {
    en: "...",
    fr: "...",
    de: "...",
    nl: "...",
    es: "...",
    it: "...", // ← Nouvelle langue
  },
  // ...
};
```

### Modifier les metadata existantes

Éditez directement le fichier `src/config/metadata.ts`. Les changements seront automatiquement pris en compte par Next.js.

### Tester les metadata

1. **En développement:**

```bash
pnpm dev
```

2. **Vérifier dans le navigateur:**

   - Ouvrir DevTools (F12)
   - Onglet Elements
   - Chercher `<head>` → `<meta name="description">`

3. **Tester Open Graph:**
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)
   - [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

## 📈 SEO Impact

Les metadata bien configurées améliorent:

- ✅ **CTR** (Click-Through Rate): Titres et descriptions attractifs
- ✅ **Rankings**: Mots-clés pertinents
- ✅ **Social Sharing**: Open Graph optimisé
- ✅ **UX**: Aperçus cohérents sur tous les canaux
- ✅ **Multilingue**: Hreflang tags automatiques

## 🚨 Erreurs communes

### Erreur 1: Metadata manquantes pour une langue

```typescript
// ❌ Mauvais - langue manquante
title: {
  en: "...",
  fr: "...",
  // de, nl, es manquants
}

// ✅ Bon - toutes les langues
title: {
  en: "...",
  fr: "...",
  de: "...",
  nl: "...",
  es: "...",
}
```

### Erreur 2: Chemins d'images incorrects

```typescript
// ❌ Mauvais
ogImage: "images/hero/louvre.jpg";

// ✅ Bon
ogImage: "/images/hero/louvre.jpg";
```

### Erreur 3: Descriptions trop longues

```typescript
// ❌ Mauvais - 250 caractères (tronqué dans les SERPs)
description: "Very long description that goes on and on...";

// ✅ Bon - 150 caractères
description: "Concise description with key info and CTA.";
```

## 📚 Resources

- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Next.js Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)

---

**Last Updated**: October 2024
