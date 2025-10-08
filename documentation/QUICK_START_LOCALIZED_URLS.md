# 🚀 Guide de Démarrage Rapide - URLs Localisées

## ✅ Ce qui a été mis en place

Votre site utilise maintenant des **URLs traduites** pour un meilleur SEO :

### URLs actuelles :

| Page                | 🇬🇧 Anglais            | 🇫🇷 Français              |
| ------------------- | --------------------- | ------------------------ |
| Accueil             | `/`                   | `/`                      |
| **Visites guidées** | `/guided-tours-paris` | `/visites-guidees-paris` |
| **Location**        | `/bike-rental-paris`  | `/location-velo-paris`   |
| Blog                | `/blog`               | `/blog`                  |
| À propos            | `/about-us`           | `/a-propos`              |

## 🎯 Comment ça marche ?

### 1. L'utilisateur visite une URL traduite

```
https://votresite.com/location-velo-paris
```

### 2. Le middleware détecte la langue

- Reconnaît que c'est la route `rent` en français
- Fait un rewrite interne vers `/fr/rent`

### 3. L'URL reste traduite dans le navigateur

```
✅ L'utilisateur voit : /location-velo-paris
🔧 Next.js charge : /fr/rent/page.tsx
```

## 📝 Tester le système

### Étape 1 : Démarrer le serveur

```bash
npm run dev
```

### Étape 2 : Tester les URLs

**En anglais :**

- http://localhost:3000/bike-rental-paris
- http://localhost:3000/guided-tours-paris
- http://localhost:3000/about-us

**En français :**

- http://localhost:3000/location-velo-paris
- http://localhost:3000/visites-guidees-paris
- http://localhost:3000/a-propos

### Étape 3 : Tester le changement de langue

1. Visitez `/location-velo-paris` (français)
2. Cliquez sur le sélecteur de langue
3. Changez pour l'anglais
4. Vous devriez être redirigé vers `/bike-rental-paris` (anglais)

## 🔧 Ajouter une nouvelle page traduite

### 1. Ajoutez la route dans `src/config/routes.ts`

```typescript
export const routes = {
  // ... autres routes
  contact: {
    en: "/contact-us-paris",
    fr: "/nous-contacter-paris",
    filePath: "/contact", // Le nom du dossier dans [locale]/
  },
} as const;
```

### 2. Ajoutez les labels dans `src/config/navigation.ts`

```typescript
export const navigationConfig = {
  en: {
    // ... autres labels
    contact: "Contact Us",
  },
  fr: {
    // ... autres labels
    contact: "Nous Contacter",
  },
} as const;
```

### 3. Créez le dossier et la page

```
src/app/[locale]/contact/page.tsx
```

### 4. Ajoutez les métadonnées SEO (optionnel mais recommandé)

```typescript
// src/app/[locale]/contact/page.tsx
import { generateLocalizedMetadata } from "@/lib/utils/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  return generateLocalizedMetadata({
    routeKey: "contact",
    locale,
    title: {
      en: "Contact Us | RentaTour Paris",
      fr: "Nous Contacter | RentaTour Paris",
    },
    description: {
      en: "Get in touch with RentaTour...",
      fr: "Contactez RentaTour...",
    },
  });
}
```

## 🌐 Avantages SEO

### ✅ Mots-clés localisés

- `/location-velo-paris` contient les mots-clés en français
- `/bike-rental-paris` contient les mots-clés en anglais

### ✅ Balises hreflang automatiques

```html
<link rel="alternate" hreflang="en" href="/bike-rental-paris" />
<link rel="alternate" hreflang="fr" href="/location-velo-paris" />
```

### ✅ Pas de contenu dupliqué

Google comprend que ce sont des versions linguistiques différentes.

### ✅ Meilleur CTR

Les URLs lisibles augmentent le taux de clic dans les résultats de recherche.

## 🐛 Dépannage

### Problème : "404 Not Found"

**Solution :** Vérifiez que le `filePath` correspond au nom du dossier dans `src/app/[locale]/`

```typescript
// Si votre dossier est : src/app/[locale]/rent/
// Alors filePath doit être :
filePath: "/rent";
```

### Problème : "Le changement de langue ne fonctionne pas"

**Solution :** Assurez-vous que les deux URLs sont bien définies dans `routes.ts`

### Problème : "La navigation ne fonctionne pas"

**Solution :** Vérifiez que vous avez bien ajouté les labels dans `navigation.ts`

## 📚 Documentation complète

Pour plus de détails, consultez : [LOCALIZED_ROUTES.md](./LOCALIZED_ROUTES.md)

## 🎉 C'est tout !

Votre site utilise maintenant des URLs traduites pour un meilleur SEO ! 🚀
