# i18n Architecture - Visual Reference

## 🔄 Request Flow Diagram

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           USER BROWSER                                   │
│                                                                          │
│  User types: rentabikeparis.fr/visite-guidee-de-paris-a-velo           │
│  Browser language: fr-FR                                                │
│  Cookie: NEXT_LOCALE=fr (if exists)                                    │
└────────────────────────────┬────────────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                        NEXT.JS MIDDLEWARE                                │
│                      (src/middleware.ts)                                 │
│                                                                          │
│  Step 1: Detect Preferred Locale                                        │
│  ┌────────────────────────────────┐                                    │
│  │ 1. Check Cookie (NEXT_LOCALE)  │ ─── Found: fr ✓                   │
│  │ 2. Check Accept-Language       │                                     │
│  │ 3. Use default (fr)            │                                     │
│  └────────────────────────────────┘                                    │
│                                                                          │
│  Step 2: Parse URL Path                                                 │
│  ┌────────────────────────────────────────────────────┐               │
│  │ URL: /visite-guidee-de-paris-a-velo                │               │
│  │                                                      │               │
│  │ Check routes configuration:                         │               │
│  │ routes.tours.fr = "/visite-guidee-de-paris-a-velo" │ ─── MATCH! ✓  │
│  │ routes.tours.filePath = "/tours"                    │               │
│  └────────────────────────────────────────────────────┘               │
│                                                                          │
│  Step 3: URL Rewrite                                                    │
│  ┌──────────────────────────────────────┐                             │
│  │ Original: /visite-guidee-de-paris    │                             │
│  │ Rewrite:  /fr/tours                  │ ──────┐                     │
│  │ Set Cookie: NEXT_LOCALE=fr           │       │                     │
│  └──────────────────────────────────────┘       │                     │
└──────────────────────────────────────────────────┼─────────────────────┘
                                                    │
                                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                        NEXT.JS APP ROUTER                                │
│                                                                          │
│  Serves: app/[locale]/tours/page.tsx                                    │
│  Params: { locale: "fr" }                                               │
│                                                                          │
│  Layout Wrapper: app/[locale]/layout.tsx                                │
│  ├─ Validates locale                                                    │
│  ├─ Loads translations: i18n/fr.json                                   │
│  └─ Provides locale context                                             │
└────────────────────────────┬────────────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                      PAGE COMPONENT RENDERS                              │
│                   (app/[locale]/tours/page.tsx)                         │
│                                                                          │
│  Uses:                                                                   │
│  ├─ useLocalizedRoutes() ───► Gets current locale (fr)                 │
│  ├─ createLink("rent") ─────► Returns: "/location-velo-paris"          │
│  └─ getNavItems(locale) ────► Returns nav items in French              │
│                                                                          │
│  Renders: French content with French URLs                               │
└─────────────────────────────────────────────────────────────────────────┘
```

## 🔀 Language Switching Flow

```
┌─────────────────────────────────────────────────────────────────────────┐
│                       USER ON FRENCH PAGE                                │
│  Current URL (visible): /visite-guidee-de-paris-a-velo                 │
│  Current locale: fr                                                      │
│  Current cookie: NEXT_LOCALE=fr                                         │
└────────────────────────────┬────────────────────────────────────────────┘
                             │
                             │ User clicks language switcher → English
                             ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                    LANGUAGE SWITCHER COMPONENT                           │
│                 (src/components/shared/language-switcher.tsx)           │
│                                                                          │
│  const switchLanguage = (newLocale: "en") => {                          │
│    1. Set cookie: NEXT_LOCALE=en                                        │
│    2. Get equivalent URL:                                                │
│       getLanguageSwitchUrl("en")                                        │
│       ├─ Current path: /visite-guidee-de-paris-a-velo                  │
│       ├─ Current locale: fr                                              │
│       ├─ Match to: routes.tours                                         │
│       └─ Return: routes.tours.en = "/guided-bike-tour-paris"           │
│    3. Navigate to: /guided-bike-tour-paris                              │
│  }                                                                       │
└────────────────────────────┬────────────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                        BROWSER NAVIGATION                                │
│  Navigates to: /guided-bike-tour-paris                                  │
└────────────────────────────┬────────────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                         MIDDLEWARE AGAIN                                 │
│  Path: /guided-bike-tour-paris                                          │
│  Cookie: NEXT_LOCALE=en (just set)                                     │
│  Match: routes.tours.en                                                 │
│  Rewrite to: /en/tours                                                  │
└────────────────────────────┬────────────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                      SAME PAGE, ENGLISH VERSION                          │
│  URL (visible): /guided-bike-tour-paris                                 │
│  Locale: en                                                              │
│  Content: English                                                        │
│  Links: All English URLs                                                │
└─────────────────────────────────────────────────────────────────────────┘
```

## 📊 Component Interaction Diagram

```
┌──────────────────────────────────────────────────────────────────────────┐
│                           CONFIGURATION LAYER                             │
│                                                                           │
│  ┌─────────────────┐  ┌──────────────────┐  ┌─────────────────────┐   │
│  │  config/i18n.ts │  │ config/routes.ts │  │ config/navigation.ts│   │
│  ├─────────────────┤  ├──────────────────┤  ├─────────────────────┤   │
│  │ • locales []    │  │ • routes map     │  │ • nav labels        │   │
│  │ • defaultLocale │  │ • getLocalized   │  │ • getNavItems()     │   │
│  │ • isValidLocale │  │ • getFromPath    │  │                     │   │
│  └────────┬────────┘  └────────┬─────────┘  └──────────┬──────────┘   │
└───────────┼────────────────────┼───────────────────────┼───────────────┘
            │                    │                       │
            └────────────────────┼───────────────────────┘
                                 │
            ┌────────────────────┴────────────────────┐
            │                                         │
            ▼                                         ▼
┌─────────────────────────┐              ┌─────────────────────────────┐
│   MIDDLEWARE LAYER      │              │   TRANSLATION LAYER         │
│   (Server-side)         │              │   (Server & Client)         │
│                         │              │                             │
│  src/middleware.ts      │              │  i18n/request.ts            │
│  ├─ URL detection       │              │  ├─ next-intl config        │
│  ├─ Locale detection    │              │  └─ Load translations       │
│  ├─ URL rewriting       │              │                             │
│  └─ Cookie management   │              │  i18n/*.json                │
│                         │              │  ├─ en.json                 │
│                         │              │  ├─ fr.json                 │
└────────────┬────────────┘              │  ├─ de.json                 │
             │                           │  ├─ nl.json                 │
             │                           │  └─ es.json                 │
             │                           └────────────┬────────────────┘
             │                                        │
             └────────────────┬───────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────────────────┐
│                            HOOK LAYER                                     │
│                          (Client-side)                                    │
│                                                                           │
│  hooks/use-localized-routes.ts                                           │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  export function useLocalizedRoutes() {                           │   │
│  │    const pathname = usePathname();                                │   │
│  │    const locale = useLocale();  // Detect from URL/params         │   │
│  │                                                                    │   │
│  │    return {                                                        │   │
│  │      locale,                      // Current locale               │   │
│  │      createLink(routeKey),        // Generate localized link      │   │
│  │      getLanguageSwitchUrl(locale) // Get URL for lang switch      │   │
│  │    }                                                               │   │
│  │  }                                                                 │   │
│  └──────────────────────────────────────────────────────────────────┘   │
└────────────────────────────────────┬─────────────────────────────────────┘
                                     │
                                     │ Used by ↓
                                     │
┌────────────────────────────────────┴─────────────────────────────────────┐
│                         COMPONENT LAYER                                   │
│                                                                           │
│  ┌────────────────────┐  ┌────────────────────┐  ┌──────────────────┐  │
│  │  Header            │  │  Hero Section      │  │  Footer          │  │
│  │  • Navigation      │  │  • CTA Buttons     │  │  • Links         │  │
│  │  • Lang Switcher   │  │  • Localized links │  │  • Legal links   │  │
│  └────────────────────┘  └────────────────────┘  └──────────────────┘  │
│                                                                           │
│  All use: const { locale, createLink } = useLocalizedRoutes()            │
│  All generate: Properly localized URLs                                   │
└───────────────────────────────────────────────────────────────────────────┘
```

## 🗺️ Route Resolution Example

```
INPUT: User visits /location-velo-paris
              │
              ▼
┌──────────────────────────────────────────────────────┐
│  STEP 1: Middleware receives request                 │
│  pathname = "/location-velo-paris"                   │
└──────────────────────┬───────────────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────────────┐
│  STEP 2: Check if pathname has locale prefix         │
│  Does "/location-velo-paris" start with              │
│  /en/, /fr/, /de/, /nl/, or /es/?                    │
│  → NO                                                 │
└──────────────────────┬───────────────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────────────┐
│  STEP 3: Search in routes configuration              │
│                                                       │
│  FOR each route in routes:                           │
│    Check if pathname matches any locale:             │
│                                                       │
│    routes.home[*]  = "/"                             │
│    ❌ No match                                        │
│                                                       │
│    routes.tours[*] = "/...-tour-paris"               │
│    ❌ No match                                        │
│                                                       │
│    routes.rent[*]  = "/...-rental-paris"             │
│    ├─ routes.rent.en = "/bike-rental-paris"         │
│    │  ❌ No match                                     │
│    ├─ routes.rent.fr = "/location-velo-paris"       │
│    │  ✅ MATCH!                                       │
│    │                                                  │
│    └─► Found: locale=fr, filePath=/rent              │
└──────────────────────┬───────────────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────────────┐
│  STEP 4: URL Rewrite                                 │
│  Original URL: /location-velo-paris                  │
│  Internal URL: /fr/rent                              │
│  Cookie: Set NEXT_LOCALE=fr                          │
└──────────────────────┬───────────────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────────────┐
│  STEP 5: Next.js renders page                        │
│  File: app/[locale]/rent/page.tsx                    │
│  Params: { locale: "fr" }                            │
│  Result: French rental page                          │
└──────────────────────────────────────────────────────┘
```

## 🧩 File Structure with Data Flow

```
src/
├── middleware.ts ━━━━━━━━━━━━━━━━━━┓
│   (Intercepts all requests)       ┃
│   Uses: config/i18n.ts             ┃
│   Uses: config/routes.ts           ┃
│                                    ┃
├── config/                          ┃
│   ├── i18n.ts ◄────────────────────╋─── Central locale config
│   │   Exports: locales, default    ┃
│   │                                 ┃
│   ├── routes.ts ◄──────────────────╋─── URL mappings
│   │   Exports: routes, helpers     ┃
│   │                                 ┃
│   └── navigation.ts                ┃
│       Exports: getNavItems()       ┃
│                                    ┃
├── app/                              ┃
│   └── [locale]/ ◄──────────────────╋─── Receives rewritten URL
│       ├── layout.tsx               ┃     Params: { locale }
│       │   Validates locale         ┃
│       │   Loads translations       ┃
│       │                             ┃
│       ├── page.tsx                 ┃
│       ├── tours/                   ┃
│       ├── rent/                    ┃
│       └── blog/                    ┃
│                                    ┃
├── hooks/                            ┃
│   └── use-localized-routes.ts ◄────╋─── Client-side routing
│       Uses: config/routes.ts       ┃
│       Uses: lib/utils/navigation   ┃
│                                    ┃
├── lib/utils/                        ┃
│   ├── navigation.ts ◄───────────────╋─── Helper functions
│   │   createLocalizedLink()        ┃
│   │   getAlternateLanguageUrl()    ┃
│   │                                 ┃
│   ├── hreflang.ts                  ┃
│   │   generatePageMetadata() ┃
│   │                                 ┃
│   └── metadata.ts                  ┃
│       generatePageMetadata()       ┃
│                                    ┃
├── i18n/                             ┃
│   ├── request.ts ◄──────────────────╋─── next-intl config
│   │   Loads translation files      ┃
│   │                                 ┃
│   └── [locale].json ◄───────────────┛
│       Translation content
│       (Currently underutilized)
```

## 🎯 Key Concepts Summary

### URL Rewriting (not Redirecting)

```
❌ REDIRECT (301/302) - Bad for UX
User sees: /location-velo-paris
↓ 302 Redirect
Browser changes to: /fr/rent
User sees URL change ⚠️

✅ REWRITE - Good for UX
User sees: /location-velo-paris
↓ Internal rewrite
Server serves: /fr/rent
User still sees: /location-velo-paris ✓
```

### Locale Detection Priority

```
1st Priority: Cookie (NEXT_LOCALE)
└─ Persistent across visits (1 year)
└─ Set on every navigation

2nd Priority: Accept-Language Header
└─ Browser's language preference
└─ Example: "fr-FR,fr;q=0.9,en;q=0.8"
└─ Uses first language code: "fr"

3rd Priority: Default (fr)
└─ Fallback if nothing else matches
```

### Route Matching Logic

```
routes = {
  tours: {
    en: "/guided-bike-tour-paris",
    fr: "/visite-guidee-de-paris-a-velo",
    filePath: "/tours"
  }
}

Input: "/visite-guidee-de-paris-a-velo"
Process:
  1. Loop through all routes
  2. Loop through all locales for each route
  3. Find match: routes.tours.fr === input
  4. Extract: locale=fr, filePath=/tours
  5. Rewrite: /fr/tours
```

---

## 📝 Quick Reference

**Adding a new page?**

1. Create: `app/[locale]/newpage/page.tsx`
2. Add to: `config/routes.ts`
   ```typescript
   newpage: {
     en: "/english-url",
     fr: "/url-francais",
     de: "/deutsche-url",
     nl: "/nederlandse-url",
     es: "/url-espanol",
     filePath: "/newpage",
   }
   ```
3. Add navigation label (optional): `config/navigation.ts`

**Creating localized links?**

```typescript
const { createLink } = useLocalizedRoutes();
<Link href={createLink("tours")}>Tours</Link>;
```

**Switching languages?**

```typescript
const { getLanguageSwitchUrl } = useLocalizedRoutes();
const newUrl = getLanguageSwitchUrl("en");
router.push(newUrl);
```

---

For full details, see `I18N_COMPREHENSIVE_GUIDE.md`
