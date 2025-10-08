# 🌍 URLs Localisées (Localized Routes)

Ce projet utilise un système d'URLs traduites pour améliorer le SEO et l'expérience utilisateur.

## ✅ Avantages SEO

### Pourquoi utiliser des URLs traduites ?

1. **Mots-clés localisés** : Les URLs contiennent des mots-clés dans la langue de l'utilisateur

   - `/bike-rental-paris` pour les anglophones
   - `/location-velo-paris` pour les francophones

2. **Meilleur référencement local** : Google comprend mieux le marché cible

3. **Expérience utilisateur améliorée** : URLs lisibles dans la langue de l'utilisateur

4. **Taux de clic (CTR) amélioré** : Les URLs traduites sont plus attractives dans les résultats de recherche

5. **Conformité aux best practices Google** : Recommandé pour les sites multilingues

## 📁 Structure

```
src/
├── config/
│   ├── routes.ts           # Configuration des routes localisées
│   └── navigation.ts       # Configuration des labels de navigation
├── hooks/
│   └── use-localized-routes.ts  # Hook pour utiliser les routes
├── lib/
│   └── utils/
│       └── navigation.ts   # Utilitaires de navigation
└── middleware.ts           # Middleware pour gérer les rewrites
```

## 🚀 Utilisation

### 1. Ajouter une nouvelle route

Dans `src/config/routes.ts` :

```typescript
export const routes = {
  // ... autres routes
  newPage: {
    en: "/my-new-page-paris",
    fr: "/ma-nouvelle-page-paris",
  },
} as const;
```

### 2. Ajouter les labels de navigation

Dans `src/config/navigation.ts` :

```typescript
export const navigationConfig = {
  en: {
    // ... autres labels
    newPage: "My New Page",
  },
  fr: {
    // ... autres labels
    newPage: "Ma Nouvelle Page",
  },
} as const;
```

### 3. Créer un lien vers une page

```tsx
import { useLocalizedRoutes } from "@/hooks/use-localized-routes";

function MyComponent() {
  const { createLink } = useLocalizedRoutes();

  return <Link href={createLink("rent")}>Location de vélos</Link>;
}
```

### 4. Utiliser la locale actuelle

```tsx
import { useLocale } from "@/hooks/use-localized-routes";

function MyComponent() {
  const locale = useLocale();

  return <div>Langue actuelle : {locale}</div>;
}
```

## 🔄 Changement de langue

Le composant `LanguageSwitcher` gère automatiquement le changement de langue tout en conservant l'utilisateur sur la même page (avec l'URL traduite).

Exemple :

- Si l'utilisateur est sur `/location-velo-paris` (français)
- Et qu'il change pour l'anglais
- Il sera redirigé vers `/bike-rental-paris` (anglais)

## 🎯 Comment ça fonctionne ?

### Middleware

Le middleware intercepte les requêtes et :

1. Détecte si l'URL correspond à une route traduite
2. Fait un rewrite vers la route Next.js appropriée (ex: `/[locale]/rent`)
3. Préserve l'URL traduite dans le navigateur

### Exemple de flux

1. Utilisateur visite : `/location-velo-paris`
2. Middleware détecte : C'est la route `rent` en français
3. Rewrite vers : `/fr/rent`
4. Le navigateur affiche toujours : `/location-velo-paris`

## 📄 Métadonnées SEO

Pour chaque page, utilisez le helper `generateLocalizedMetadata` pour créer les balises `hreflang` :

```tsx
import { generateLocalizedMetadata } from "@/lib/utils/seo";

export function generateMetadata() {
  return generateLocalizedMetadata({
    routeKey: "rent",
    title: {
      en: "Bike Rental in Paris | RentaTour",
      fr: "Location de Vélo à Paris | RentaTour",
    },
    description: {
      en: "Rent quality bikes in Paris...",
      fr: "Louez des vélos de qualité à Paris...",
    },
  });
}
```

## 🌐 Routes actuelles

| Page            | Anglais               | Français                 |
| --------------- | --------------------- | ------------------------ |
| Accueil         | `/`                   | `/`                      |
| Visites guidées | `/guided-tours-paris` | `/visites-guidees-paris` |
| Location        | `/bike-rental-paris`  | `/location-velo-paris`   |
| Blog            | `/blog`               | `/blog`                  |
| À propos        | `/about-us`           | `/a-propos`              |

## 🔍 SEO Best Practices

1. **Balises hreflang** : Utilisez `generateLocalizedMetadata` pour les générer automatiquement
2. **Sitemap** : Incluez toutes les URLs traduites dans votre sitemap
3. **Canonical URLs** : Chaque version linguistique a sa propre URL canonique
4. **Structured Data** : Incluez la langue dans vos données structurées

## 📝 Notes

- Les URLs traduites sont toujours sans le préfixe `/en/` ou `/fr/`
- Le middleware gère les rewrites automatiquement
- Les composants de navigation utilisent automatiquement les bonnes URLs
- Le changement de langue conserve l'utilisateur sur la même page
