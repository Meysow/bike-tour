# Internationalization (i18n) Implementation Guide

## 📋 Table of Contents

1. [Overview](#overview)
2. [Current Implementation Architecture](#current-implementation-architecture)
3. [How It Works](#how-it-works)
4. [Pros and Cons](#pros-and-cons)
5. [Alternative Approaches](#alternative-approaches)
6. [Why This Approach](#why-this-approach)
7. [Potential Improvements](#potential-improvements)
8. [Migration Path](#migration-path)

---

## Overview

This project uses a **hybrid custom i18n implementation** that combines:

- Custom middleware for URL-based routing
- next-intl for translations (partially integrated)
- Manual localized route configurations
- Cookie-based locale persistence

### Supported Languages

- 🇫🇷 French (fr) - Default
- 🇺🇸 English (en)
- 🇩🇪 German (de)
- 🇳🇱 Dutch (nl)
- 🇪🇸 Spanish (es)

### Key Features

- SEO-friendly localized URLs (e.g., `/visite-guidee-de-paris-a-velo` vs `/guided-bike-tour-paris`)
- Browser language detection
- Cookie-based preference persistence
- Dynamic locale switching
- Hreflang tags for SEO

---

## Current Implementation Architecture

### 1. **File Structure**

```
src/
├── app/
│   └── [locale]/           # Dynamic locale segment
│       ├── layout.tsx      # Layout wrapper for locale
│       ├── page.tsx        # Home page
│       ├── tours/          # Tours pages
│       ├── rent/           # Rental pages
│       ├── blog/           # Blog pages
│       └── ...
├── config/
│   ├── i18n.ts            # Centralized i18n config
│   ├── routes.ts          # Localized route definitions
│   └── navigation.ts      # Navigation labels per locale
├── i18n/
│   ├── request.ts         # next-intl config
│   ├── en.json            # English translations
│   ├── fr.json            # French translations
│   ├── de.json            # German translations
│   ├── nl.json            # Dutch translations
│   └── es.json            # Spanish translations
├── hooks/
│   └── use-localized-routes.ts  # Hook for locale-aware routing
├── lib/utils/
│   ├── hreflang.ts        # SEO hreflang generation
│   ├── metadata.ts        # Metadata helpers
│   └── navigation.ts      # Navigation helpers
└── middleware.ts          # Custom URL rewriting middleware
```

### 2. **Core Components**

#### A. Middleware (`src/middleware.ts`)

**Purpose**: Handles all incoming requests to rewrite URLs based on locale

**Flow**:

```
Request → Middleware → Locale Detection → URL Rewrite → Page
```

**Logic**:

1. **Root access (`/`)**: Detects user's preferred locale and rewrites to `/{locale}`
2. **Locale prefix (`/en/`, `/fr/`)**: Allows through if valid
3. **Localized paths**: Rewrites SEO-friendly URLs to internal structure
   - `/visite-guidee-de-paris-a-velo` → `/fr/tours`
   - `/guided-bike-tour-paris` → `/en/tours`

**Locale Detection Priority**:

```
1. Cookie (NEXT_LOCALE)
2. Accept-Language header
3. Default locale (fr)
```

#### B. Route Configuration (`src/config/routes.ts`)

**Purpose**: Maps localized URLs to file paths

```typescript
export const routes = {
  tours: {
    en: "/guided-bike-tour-paris",
    fr: "/visite-guidee-de-paris-a-velo",
    de: "/gefuehrte-radtour-paris",
    nl: "/begeleide-fietstour-parijs",
    es: "/tour-guiado-bicicleta-paris",
    filePath: "/tours", // Actual file location
  },
  // ... other routes
};
```

**Key Functions**:

- `getLocalizedPath(routeKey, locale)`: Get URL for a route in specific locale
- `getLocaleFromPath(pathname, preferredLocale)`: Detect locale from URL
- `hasIdenticalPathsAcrossLocales(routeKey)`: Check if route is same across languages

#### C. Hooks (`src/hooks/use-localized-routes.ts`)

**Purpose**: Client-side hook for locale-aware navigation

```typescript
const { locale, createLink, getLanguageSwitchUrl } = useLocalizedRoutes();

// Usage in components
<Link href={createLink("tours")}>Tours</Link>; // Automatically localized
```

**Features**:

- Auto-detects current locale from URL or params
- Creates properly localized links
- Generates language switch URLs

#### D. Translation System (`src/i18n/`)

**Purpose**: Stores UI text translations (partially implemented)

**Current State**:

- next-intl is configured but **not fully utilized**
- Most translations are hardcoded in components
- Translation files exist but are used minimally
- Navigation labels are in `src/config/navigation.ts` instead

---

## How It Works

### Example: User Journey

#### 1. **First Visit**

```
User visits: https://example.com/

↓ [Middleware detects browser language: French]

User sees: https://example.com/ (URL unchanged)
Internal: Rewrites to /fr (Next.js serves /app/[locale]/page.tsx)
Cookie set: NEXT_LOCALE=fr (1 year)
```

#### 2. **Clicking "Guided Tours" in French**

```
User clicks: <Link href={createLink("tours")} />

↓ [createLink returns: "/visite-guidee-de-paris-a-velo"]

Browser navigates to: /visite-guidee-de-paris-a-velo

↓ [Middleware intercepts]

Middleware matches: "/visite-guidee-de-paris-a-velo" → tours[fr]
Rewrites to: /fr/tours
Serves: /app/[locale]/tours/page.tsx
```

#### 3. **Switching to English**

```
User clicks language switcher → English

↓ [LanguageSwitcher component]

1. Sets cookie: NEXT_LOCALE=en
2. Calls: getLanguageSwitchUrl("en")
3. Returns: "/guided-bike-tour-paris" (English equivalent)
4. Navigates to: /guided-bike-tour-paris

↓ [Middleware rewrites to /en/tours]

Same page, different locale ✓
```

### URL Rewriting Examples

| User sees (SEO URL)              | Internal path | File served                   |
| -------------------------------- | ------------- | ----------------------------- |
| `/`                              | `/fr`         | `app/[locale]/page.tsx`       |
| `/visite-guidee-de-paris-a-velo` | `/fr/tours`   | `app/[locale]/tours/page.tsx` |
| `/guided-bike-tour-paris`        | `/en/tours`   | `app/[locale]/tours/page.tsx` |
| `/location-velo-paris`           | `/fr/rent`    | `app/[locale]/rent/page.tsx`  |
| `/blog`                          | `/fr/blog`    | `app/[locale]/blog/page.tsx`  |

**Note**: `/blog` has identical paths across all locales, so locale is determined by user preference.

---

## Pros and Cons

### ✅ Pros

#### 1. **SEO Excellence**

- **Fully localized URLs**: Each language has its own SEO-optimized URL
- **Hreflang tags**: Proper alternate language tags for search engines
- **Clean URLs**: No locale prefix pollution (users see `/visite-guidee-de-paris-a-velo`, not `/fr/visite-guidee-de-paris-a-velo`)
- **Keyword optimization**: URLs contain relevant keywords in each language

#### 2. **User Experience**

- **Natural URLs**: Users see URLs in their language
- **Persistent preferences**: Cookie-based locale memory (1 year)
- **Auto-detection**: Respects browser language on first visit
- **Seamless switching**: Language changes maintain current page context

#### 3. **Developer Control**

- **Full control**: Complete control over routing logic
- **Flexibility**: Can handle complex routing scenarios
- **Type safety**: TypeScript types for all routes and locales
- **Centralized configuration**: Single source of truth for routes

#### 4. **Performance**

- **No URL redirects**: Uses Next.js rewrites (no 302/301)
- **Edge-compatible**: Middleware runs on edge
- **Static generation**: Compatible with Static Site Generation

### ❌ Cons

#### 1. **Maintenance Burden**

- **Manual route management**: Every new page needs manual route configuration in 5 languages
- **Duplication**: Same route logic repeated for each locale
- **Human error prone**: Easy to forget adding a locale or mistype a URL
- **Scaling issues**: Adding new languages requires updating many files

```typescript
// Example: Adding a new page requires this in routes.ts
contact: {
  en: "/contact-us",
  fr: "/nous-contacter",
  de: "/kontakt",
  nl: "/contact",
  es: "/contacto",
  filePath: "/contact",
}
```

#### 2. **Complexity**

- **Custom middleware**: Complex logic that needs maintenance
- **Learning curve**: New developers must understand custom routing system
- **Debugging difficulty**: URL rewriting can be confusing to debug
- **Multiple sources of truth**: Routes, navigation, and translations are separate

#### 3. **Incomplete Implementation**

- **next-intl underutilized**: Translation library configured but barely used
- **Hardcoded content**: Most UI text is hardcoded instead of using translation files
- **Inconsistent patterns**: Some components use translations, others don't
- **Mixed approaches**: Navigation labels in `navigation.ts`, not in translation files

#### 4. **Testing Complexity**

- **More edge cases**: Custom routing creates more scenarios to test
- **URL testing**: Need to test both user-facing and internal URLs
- **Locale switching**: Complex state management to test

#### 5. **Limited Tooling**

- **No automatic translation extraction**: Can't auto-extract translatable strings
- **No translation management**: No built-in way to manage missing translations
- **No fallback handling**: If a route isn't defined, page breaks

---

## Alternative Approaches

### 1. **next-intl (Official Next.js i18n Library)**

#### How it works:

```typescript
// app/[locale]/layout.tsx
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function Layout({ children, params: { locale } }) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
}

// Usage in components
import { useTranslations } from "next-intl";

function Component() {
  const t = useTranslations("navigation");
  return <p>{t("tours")}</p>; // "Guided Tours" or "Visites Guidées"
}
```

#### URL Structure:

```
/en/tours
/fr/tours
/de/tours
```

**Pros**:

- ✅ Official and well-maintained
- ✅ Built-in translation management
- ✅ Type-safe translations
- ✅ Automatic locale detection
- ✅ Rich formatting (dates, numbers, plurals)
- ✅ Server and client components support
- ✅ Good documentation

**Cons**:

- ❌ Locale always in URL (`/fr/tours` not `/visite-guidee-de-paris-a-velo`)
- ❌ Less SEO-friendly URLs
- ❌ No per-locale URL customization
- ❌ More opinionated structure

**Why not used fully**:
The project is configured with next-intl but **not leveraging it**. It's partially integrated for future use, but currently the custom routing system takes precedence for SEO reasons.

---

### 2. **next-i18next (Legacy Approach)**

#### How it works:

Based on `react-i18next`, popular in Pages Router.

```typescript
// pages/index.tsx
import { useTranslation } from "next-i18next";

export default function Home() {
  const { t } = useTranslation("common");
  return <h1>{t("welcome")}</h1>;
}
```

**Pros**:

- ✅ Mature ecosystem
- ✅ Large community
- ✅ Many plugins

**Cons**:

- ❌ Designed for Pages Router (legacy)
- ❌ Not optimized for App Router
- ❌ Heavier bundle size
- ❌ More client-side focused

**Why not used**:
This project uses App Router, and next-i18next is primarily designed for the older Pages Router architecture.

---

### 3. **Next.js Built-in i18n (Deprecated)**

#### How it worked (Next.js 12):

```javascript
// next.config.js
module.exports = {
  i18n: {
    locales: ["en", "fr", "de"],
    defaultLocale: "en",
  },
};
```

**Why not used**:

- ❌ **Removed in Next.js 13+ App Router**
- ❌ Only worked with Pages Router
- ❌ Basic features, no advanced routing

---

### 4. **Paraglide.js (Modern Alternative)**

New i18n library by Inlang team.

```typescript
// Compile-time translations
import * as m from "@/paraglide/messages";

<p>{m.welcome()}</p>; // No runtime overhead
```

**Pros**:

- ✅ Compile-time translations (zero runtime cost)
- ✅ Extremely fast
- ✅ Type-safe
- ✅ Smaller bundle size

**Cons**:

- ❌ Newer, smaller community
- ❌ Less documentation
- ❌ Still doesn't solve custom URL routing

---

### 5. **Full Custom Solution (No Library)**

Pure custom implementation without any i18n library.

```typescript
// Manual translation object
const translations = {
  en: { welcome: "Welcome" },
  fr: { welcome: "Bienvenue" },
};

function t(key: string) {
  return translations[locale][key];
}
```

**Pros**:

- ✅ Complete control
- ✅ No dependencies
- ✅ Minimal bundle size

**Cons**:

- ❌ Massive development effort
- ❌ No standard features (pluralization, formatting)
- ❌ Reinventing the wheel
- ❌ Hard to maintain

---

### 6. **Lingui**

Macro-based i18n library.

```typescript
import { Trans } from "@lingui/macro";

<Trans>Welcome to our site</Trans>;
// Compiled to: t('id_abc123')
```

**Pros**:

- ✅ Automatic ID generation
- ✅ Great DX with macros
- ✅ ICU message format

**Cons**:

- ❌ Requires build-time compilation
- ❌ Babel/SWC plugin needed
- ❌ Complex setup

---

## Why This Approach

### Decision Rationale

The current hybrid approach was chosen for specific business requirements:

#### 1. **SEO is Critical Priority**

**Business Need**: Compete in multiple markets with localized keywords

**Example**:

```
Bad:  /en/tours  (generic, poor SEO)
Good: /guided-bike-tour-paris (keyword-rich, ranks well)
Good: /visite-guidee-de-paris-a-velo (French keywords, ranks in France)
```

**Impact**:

- Better search engine rankings per locale
- Higher click-through rates (users see relevant keywords)
- Local search advantage

#### 2. **User Experience Requirement**

Users expect URLs in their language:

- French tourist types: "location vélo paris" → lands on `/location-velo-paris`
- English tourist types: "bike rental paris" → lands on `/bike-rental-paris`

#### 3. **Flexibility for Content Marketing**

- Can customize each URL for marketing campaigns
- A/B test different URL structures per market
- Adapt to local search trends

#### 4. **Why Not Pure next-intl**

next-intl would give URLs like:

```
/en/tours
/fr/tours
/de/tours
```

This doesn't allow:

```
/guided-bike-tour-paris
/visite-guidee-de-paris-a-velo
/gefuehrte-radtour-paris
```

**Trade-off**: Sacrificed simplicity for SEO advantage

#### 5. **Partial next-intl Integration**

Why keep next-intl if not fully using it?

- **Future migration path**: Can gradually migrate hardcoded text to translations
- **Rich formatting**: Can use for dates, numbers, plurals when needed
- **Best practice**: Better than pure hardcoded strings
- **Low cost**: Minimal overhead to have it configured

---

## Potential Improvements

### 🎯 Priority 1: Complete next-intl Integration

**Current Problem**: Most UI text is hardcoded

**Solution**: Migrate all hardcoded strings to translation files

**Before**:

```tsx
// src/components/sections/hero-section.tsx
<h1>Explore Paris like never before</h1>
```

**After**:

```tsx
import { useTranslations } from "next-intl";

function HeroSection() {
  const t = useTranslations("hero");
  return <h1>{t("title")}</h1>;
}
```

**Benefits**:

- ✅ Centralized content management
- ✅ Easier for translators (non-developers can edit JSON)
- ✅ Find missing translations
- ✅ Consistent translation patterns

**Effort**: Medium (2-3 days)

---

### 🎯 Priority 2: Automated Route Generation

**Current Problem**: Manual route configuration for each page

**Solution**: Generate routes from a simplified config

**Current**:

```typescript
// Need to manually add every locale
tours: {
  en: "/guided-bike-tour-paris",
  fr: "/visite-guidee-de-paris-a-velo",
  de: "/gefuehrte-radtour-paris",
  nl: "/begeleide-fietstour-parijs",
  es: "/tour-guiado-bicicleta-paris",
  filePath: "/tours",
}
```

**Improved**:

```typescript
// routes-config.yaml or JSON
tours:
  filePath: /tours
  urls:
    en: guided-bike-tour-paris
    fr: visite-guidee-de-paris-a-velo
    de: gefuehrte-radtour-paris
    nl: begeleide-fietstour-parijs
    es: tour-guiado-bicicleta-paris

// Auto-generate TypeScript types and routes
// Build script: node scripts/generate-routes.js
```

**Benefits**:

- ✅ Less boilerplate
- ✅ Validation at build time
- ✅ Auto-generate types
- ✅ Easier to audit (one file to check)

**Effort**: Low (1 day)

---

### 🎯 Priority 3: Fallback Handling

**Current Problem**: If a route is missing for a locale, the app breaks

**Solution**: Add fallback logic

```typescript
function getLocalizedPath(routeKey: RouteKey, locale: Locale): string {
  const route = routes[routeKey];

  // Try requested locale
  if (route[locale]) return route[locale];

  // Fallback to English
  if (route.en) {
    console.warn(`Missing ${locale} route for ${routeKey}, using English`);
    return route.en;
  }

  // Last resort: use file path
  return route.filePath;
}
```

**Benefits**:

- ✅ Graceful degradation
- ✅ Warnings in development
- ✅ No runtime errors

**Effort**: Low (2 hours)

---

### 🎯 Priority 4: Translation Validation

**Current Problem**: No way to know if translations are missing

**Solution**: Build-time validation script

```bash
# scripts/validate-translations.js
node scripts/validate-translations.js

# Output:
# ✗ Missing translations:
#   - de.json: hero.subtitle
#   - es.json: navigation.contact
# ✓ 234/240 translations complete (97.5%)
```

**Benefits**:

- ✅ Catch missing translations before deployment
- ✅ Translation progress tracking
- ✅ CI/CD integration

**Effort**: Medium (4 hours)

---

### 🎯 Priority 5: Better Developer Experience

#### A. **VS Code Extension**

Create or use an extension for:

- Auto-complete translation keys
- Preview translations inline
- Quick navigation to translation files

#### B. **CLI Tool**

```bash
# Add new route
npm run i18n:add-route contact

# Extract translatable strings
npm run i18n:extract

# Validate translations
npm run i18n:validate
```

**Effort**: High (1 week)

---

### 🎯 Priority 6: Edge Case Handling

**Improvements needed**:

1. **Query parameters and hashes**

   ```
   /visite-guidee-de-paris-a-velo?date=2024-10-15#booking
   → Preserve in language switching
   ```

2. **Dynamic routes**

   ```
   /blog/[slug] in multiple languages
   /blog/choisir-velo-paris (fr)
   /blog/choosing-bike-paris (en)
   ```

3. **Error pages**
   - 404 page in user's language
   - 500 page with language selector

**Effort**: Medium (2-3 days)

---

### 🎯 Priority 7: Performance Optimizations

**Current**: Middleware runs on every request

**Improvements**:

1. **Static route map**

   ```typescript
   // Generate at build time
   const routeMap = new Map([
     ["/visite-guidee-de-paris-a-velo", { locale: "fr", file: "/tours" }],
     ["/guided-bike-tour-paris", { locale: "en", file: "/tours" }],
     // ...
   ]);

   // O(1) lookup instead of looping
   const route = routeMap.get(pathname);
   ```

2. **Cache locale detection**

   - Reduce cookie parsing overhead
   - Memoize Accept-Language parsing

3. **Optimize bundle size**
   - Split translation files (load only current locale)
   - Tree-shake unused translations

**Effort**: Low-Medium (1-2 days)

---

### 🎯 Priority 8: Testing Infrastructure

**Current**: Limited i18n tests

**Needed**:

1. **Middleware tests**

   - Test all URL rewriting scenarios
   - Test locale detection logic
   - Test edge cases

2. **Route tests**

   - Validate all routes exist for all locales
   - Test language switching
   - Test canonical URLs

3. **Translation tests**
   - Detect missing keys
   - Detect unused keys
   - Format validation (ICU syntax)

**Example**:

```typescript
describe("Localized Routes", () => {
  it("should rewrite French tour URL", () => {
    const result = getLocaleFromPath("/visite-guidee-de-paris-a-velo");
    expect(result).toEqual({
      locale: "fr",
      routeKey: "tours",
      filePath: "/tours",
    });
  });

  it("should handle language switching", () => {
    const url = getAlternateLanguageUrl(
      "/visite-guidee-de-paris-a-velo",
      "fr",
      "en"
    );
    expect(url).toBe("/guided-bike-tour-paris");
  });
});
```

**Effort**: Medium (2 days)

---

## Migration Path

If you decide to change approaches, here's a recommended migration path:

### Scenario 1: Simplify to Pure next-intl

**If**: SEO requirements change, willing to use `/fr/tours` style URLs

**Steps**:

1. Remove custom middleware logic
2. Move all routes to standard structure
3. Update all `createLink()` calls to simple paths
4. Fully utilize next-intl translations
5. Update tests

**Effort**: 1-2 weeks
**Risk**: Medium (affects all URLs, need redirects)

---

### Scenario 2: Keep Hybrid, Improve Implementation

**If**: Want to keep SEO URLs but reduce complexity

**Steps**:

1. ✅ Complete next-intl integration (Priority 1)
2. ✅ Add automated route generation (Priority 2)
3. ✅ Add validation and fallbacks (Priority 3-4)
4. ✅ Improve DX with tooling (Priority 5)

**Effort**: 2-3 weeks
**Risk**: Low (incremental improvements)

---

### Scenario 3: Migrate to Paraglide.js

**If**: Want modern approach with better performance

**Steps**:

1. Install and configure Paraglide
2. Migrate translations to Paraglide format
3. Replace next-intl calls with Paraglide
4. Keep custom routing (still needed for SEO URLs)
5. Update build process

**Effort**: 2-3 weeks
**Risk**: Medium (new library, less mature)

---

## Conclusion

### Current State Summary

**Architecture**: Hybrid custom routing + partial next-intl

**Strengths**:

- 🏆 Excellent SEO with localized URLs
- 🏆 Good user experience with natural URLs
- 🏆 Flexible for marketing needs

**Weaknesses**:

- ⚠️ High maintenance burden
- ⚠️ Incomplete translation integration
- ⚠️ Complex for new developers
- ⚠️ Scaling challenges

### Recommendation

**Short-term (1-2 months)**:

1. Complete next-intl integration
2. Add validation and fallback handling
3. Improve documentation

**Medium-term (3-6 months)**: 4. Automate route generation 5. Build tooling for better DX 6. Comprehensive testing

**Long-term (6+ months)**:

- Re-evaluate if custom routing is still worth the complexity
- Consider if business needs have changed
- Explore newer i18n solutions (Paraglide, etc.)

### Final Thoughts

This implementation prioritizes **SEO and user experience over developer experience**. It's a valid trade-off for a business where organic search traffic is critical. However, as the team grows, the complexity may become a bottleneck.

The good news: You can incrementally improve without a complete rewrite. Focus on the high-impact, low-effort improvements first (Priorities 1-4), then decide if larger changes are needed.

---

**Questions or Need Help?**

If you need clarification on any part of this implementation or want to discuss improvements, refer to:

- `documentation/LOCALIZED_ROUTES.md` - Original routing documentation
- `documentation/I18N_IMPROVEMENTS.md` - Recent improvements
- `documentation/TESTING.md` - Testing guidelines
