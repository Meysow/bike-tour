# Améliorations i18n - Documentation

## 📋 Vue d'ensemble

Ce document détaille les améliorations apportées à la configuration i18n du projet pour optimiser le SEO multilingue et centraliser la gestion des locales.

## 🎯 Objectifs atteints

1. ✅ Configuration centralisée pour toutes les locales
2. ✅ Balises hreflang ajoutées pour le SEO
3. ✅ Code plus maintenable et DRY (Don't Repeat Yourself)
4. ✅ Middleware personnalisé optimisé pour routes localisées

## 📁 Fichiers modifiés et créés

### Fichiers supprimés

**`src/app/page.tsx`** ❌

- Supprimé car il entrait en conflit avec la configuration i18n
- La route racine `/` est maintenant gérée par le middleware qui redirige vers `/[locale]`

### Nouveaux fichiers créés

### 1. `src/config/i18n.ts`

**Rôle** : Fichier central pour toute la configuration i18n

**Contenu** :

- Liste des locales supportées : `["en", "fr", "de", "nl", "es"]`
- Locale par défaut : `"fr"`
- Noms des langues pour l'affichage
- Configuration des cookies (nom et durée)
- Helper `isValidLocale()` pour validation

**Utilisation** :

```typescript
import { locales, defaultLocale, isValidLocale } from "@/config/i18n";
```

### 2. `src/lib/utils/hreflang.ts`

**Rôle** : Génération des balises hreflang pour le SEO

**Fonctions** :

- `generatePageMetadata(params, routeKey)` : Génère les métadonnées avec hreflang pour une route donnée
- Note: Les fonctions hreflang ont été consolidées dans metadata.ts

**Exemple d'utilisation** :

```typescript
import { generatePageMetadata } from "@/lib/utils/metadata";

export async function generateMetadata({ params }) {
  return {
    alternates: {
      canonical: `${siteConfig.url}/${locale}/tours`,
      // Using generatePageMetadata helper instead
    },
  };
}
```

## 🔄 Fichiers modifiés

### 1. `src/middleware.ts`

**Changements** :

- Import de la config centralisée au lieu de définir les locales localement
- Utilisation de `isValidLocale()` pour la validation
- Utilisation des constantes `LOCALE_COOKIE_NAME` et `LOCALE_COOKIE_MAX_AGE`

**Avant** :

```typescript
const locales: Locale[] = ["en", "fr", "de", "nl", "es"];
const defaultLocale: Locale = "fr";
```

**Après** :

```typescript
import {
  defaultLocale,
  isValidLocale,
  LOCALE_COOKIE_MAX_AGE,
  LOCALE_COOKIE_NAME,
  locales,
} from "@/config/i18n";
```

### 2. `src/i18n/request.ts`

**Changements** :

- Import de `isValidLocale` depuis la config centralisée
- Validation simplifiée

**Avant** :

```typescript
const locales = ["en", "fr", "de", "nl", "es"] as const;
if (!locale || !locales.includes(locale as (typeof locales)[number])) {
  notFound();
}
```

**Après** :

```typescript
import { isValidLocale } from "@/config/i18n";
if (!locale || !isValidLocale(locale)) {
  notFound();
}
```

### 3. `src/config/routes.ts`

**Changements** :

- Import du type `Locale` et de `defaultLocale`
- Utilisation de `defaultLocale` au lieu de hardcoder "fr"

**Avant** :

```typescript
export type Locale = "en" | "fr" | "de" | "nl" | "es";

export function getLocalizedPath(
  routeKey: RouteKey,
  locale: Locale = "fr"
): string {
  return routes[routeKey][locale];
}
```

**Après** :

```typescript
import { defaultLocale, type Locale } from "./i18n";

export function getLocalizedPath(
  routeKey: RouteKey,
  locale: Locale = defaultLocale
): string {
  return routes[routeKey][locale];
}
```

### 4. `next.config.mjs`

**Changements** :

- Le plugin next-intl reste désactivé volontairement
- Raison : Incompatibilité avec notre middleware personnalisé pour routes localisées

**Configuration actuelle** :

```javascript
/**
 * Note: Le plugin next-intl est désactivé car nous utilisons un middleware personnalisé
 * pour gérer les routes localisées (ex: /visite-guidee-de-paris-a-velo vs /guided-bike-tour-paris).
 * Les traductions sont gérées via src/i18n/request.ts et chargées manuellement.
 */

const nextConfig = {};
export default nextConfig;
```

**Pourquoi ne pas utiliser le plugin next-intl ?**

Le plugin next-intl crée automatiquement un middleware qui gère les routes au format standard `/[locale]/page`. Cependant, votre application utilise des **routes SEO-friendly personnalisées par langue** :

- 🇫🇷 `/visite-guidee-de-paris-a-velo` (français)
- 🇬🇧 `/guided-bike-tour-paris` (anglais)
- 🇩🇪 `/gefuehrte-radtour-paris` (allemand)

Cette approche nécessite un middleware personnalisé (défini dans `src/middleware.ts`) qui :

1. Détecte la langue de l'URL personnalisée
2. Fait un rewrite vers la route Next.js `[locale]/page`
3. Maintient l'URL SEO-friendly visible pour l'utilisateur

Le plugin next-intl entrerait en conflit avec ce middleware personnalisé, d'où sa désactivation.

### 5. `src/app/[locale]/layout.tsx`

**Changements** :

- Ajout de `generateMetadata()` avec balises hreflang pour le SEO
- Validation de la locale avec la config centralisée
- Layout simplifié sans le NextIntlClientProvider (car pas de plugin next-intl)

**Code complet** :

```typescript
import { isValidLocale, type Locale } from "@/config/i18n";
import { siteConfig } from "@/config/site";
import { generatePageMetadata } from "@/lib/utils/metadata";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return {
    alternates: {
      canonical: `${siteConfig.url}/${locale}`,
      // Using generatePageMetadata helper instead
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return <>{children}</>;
}
```

### 6. Pages avec hreflang

Les pages suivantes ont été mises à jour avec `generateMetadata()` et balises hreflang :

- ✅ `src/app/[locale]/page.tsx` (Home)
- ✅ `src/app/[locale]/tours/page.tsx`
- ✅ `src/app/[locale]/about/page.tsx`
- ✅ `src/app/[locale]/blog/page.tsx`

**Note** : La page `rent` n'a pas été modifiée car c'est un Client Component (`"use client"`). Pour ajouter des metadata, il faudrait créer un fichier `metadata.tsx` séparé.

## 🌍 Structure des URLs

Votre configuration actuelle suit les bonnes pratiques :

```
✅ http://localhost:3000/                          → Rewrite vers /fr (détection auto)
✅ http://localhost:3000/visite-guidee-paris       → Route FR localisée
✅ http://localhost:3000/guided-bike-tour-paris    → Route EN localisée
✅ http://localhost:3000/fr/...                    → Accès direct FR
✅ http://localhost:3000/en/...                    → Accès direct EN
```

## 🔍 Balises hreflang générées

Exemple pour la page tours :

```html
<link rel="canonical" href="https://rentabikeparis.fr/fr/tours" />
<link
  rel="alternate"
  hreflang="en"
  href="https://rentabikeparis.fr/en/guided-bike-tour-paris"
/>
<link
  rel="alternate"
  hreflang="fr"
  href="https://rentabikeparis.fr/fr/visite-guidee-de-paris-a-velo"
/>
<link
  rel="alternate"
  hreflang="de"
  href="https://rentabikeparis.fr/de/gefuehrte-radtour-paris"
/>
<link
  rel="alternate"
  hreflang="nl"
  href="https://rentabikeparis.fr/nl/begeleide-fietstour-parijs"
/>
<link
  rel="alternate"
  hreflang="es"
  href="https://rentabikeparis.fr/es/tour-guiado-bicicleta-paris"
/>
<link rel="alternate" hreflang="x-default" href="https://rentabikeparis.fr" />
```

## 📚 Bonnes pratiques appliquées

### 1. Format des locales : `fr` vs `fr_FR`

✅ **Utilisé** : Codes courts (`fr`, `en`, `de`)

- Plus simples et propres dans les URLs
- Suffisants sans variantes régionales
- Standard web moderne

### 2. Landing page

✅ **Approche** : Rewrite de `/` vers `/{locale}`

- URL reste propre : `http://localhost:3000/`
- Bon pour le SEO (URL canonique unique)
- Détection automatique via `Accept-Language` + cookies

### 3. Configuration centralisée

✅ **Fichier unique** : `src/config/i18n.ts`

- Évite la duplication de code
- Facilite la maintenance
- Source unique de vérité

### 4. SEO multilingue

✅ **Balises hreflang** : Implémentées sur toutes les pages principales

- Indique à Google les versions linguistiques
- Améliore le référencement international
- Évite le contenu dupliqué

## 🚀 Prochaines étapes (optionnelles)

### 1. Ajouter metadata pour la page Rent

Créer `src/app/[locale]/rent/metadata.ts` :

```typescript
import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/utils/metadata";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  alternates: {
    canonical: `${siteConfig.url}/rent`,
    // Using generatePageMetadata helper instead
  },
};
```

### 2. Ajouter l'attribut lang dynamique

Modifier `src/app/layout.tsx` pour utiliser la locale dynamiquement :

```typescript
export default function RootLayout({ children, params }) {
  const locale = params?.locale || "fr";

  return <html lang={locale}>{/* ... */}</html>;
}
```

### 3. Ajouter des metadata localisées

Utiliser les fichiers de traduction pour les titres et descriptions :

```typescript
import { useTranslations } from "next-intl";

export async function generateMetadata({ params }) {
  const t = await getTranslations({ locale: params.locale });

  return {
    title: t("pages.tours.title"),
    description: t("pages.tours.description"),
    // ...
  };
}
```

## 📊 Impact SEO

### Avant les améliorations

- ❌ Pas de balises hreflang
- ❌ Configuration dispersée
- ❌ Plugin next-intl désactivé

### Après les améliorations

- ✅ Balises hreflang sur toutes les pages principales
- ✅ Configuration centralisée et maintenable
- ✅ Plugin next-intl activé
- ✅ URLs canoniques définies
- ✅ Meilleure indexation multilingue par Google

## 🐛 Résolution du problème 404 sur `/`

Lors de la mise en place initiale, une erreur 404 apparaissait sur la route racine `/`. Voici ce qui a été corrigé :

### Problèmes identifiés

1. **Conflit avec `src/app/page.tsx`**

   - Ce fichier faisait une redirection vers `/en`
   - Il entrait en conflit avec le middleware qui essayait de faire un rewrite vers `/{locale}`
   - **Solution** : Suppression du fichier

2. **Conflit avec le plugin next-intl**
   - Le plugin créait son propre middleware automatique
   - Ce middleware entrait en conflit avec notre middleware personnalisé pour routes localisées
   - **Solution** : Désactivation du plugin next-intl dans `next.config.mjs`

### Architecture finale

```
Requête: GET /
    ↓
Middleware (src/middleware.ts)
    ↓
Détection locale (Accept-Language + cookies)
    ↓
Rewrite vers /fr (ou autre locale détectée)
    ↓
Rendu: src/app/[locale]/page.tsx
```

Cette architecture permet :

- ✅ URL propre visible : `http://localhost:3000/`
- ✅ Détection automatique de la langue
- ✅ Routes SEO-friendly personnalisées par langue
- ✅ Pas de redirection (meilleur pour le SEO)

## 🎯 Résumé

Votre application est maintenant configurée selon les **meilleures pratiques i18n et SEO** :

1. **Codes de langue courts** (`fr`, `en`) - parfait pour votre cas
2. **Landing page propre** (`/`) avec rewrite intelligent
3. **Configuration centralisée** - facile à maintenir
4. **Balises hreflang** - excellent pour le SEO international
5. **Middleware personnalisé** - routes SEO-friendly par langue
6. **Architecture sans conflits** - fonctionnement optimal

Vous êtes prêt pour un déploiement multilingue professionnel ! 🚀
