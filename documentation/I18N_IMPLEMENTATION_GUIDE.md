# Internationalization Implementation Guide

## Overview

This guide documents the internationalization (i18n) implementation for the RentaBikeParis website. We've successfully implemented a custom i18n solution that works with the existing architecture and follows the project's best practices.

## 🏗️ Architecture

### Key Components

1. **Existing i18n JSON files** (`src/i18n/*.json`) - Store all translations
2. **Custom hooks** (`src/hooks/use-localized-routes.ts`) - Handle locale detection and routing
3. **i18n-loader utility** (`src/lib/utils/i18n-loader.ts`) - Type-safe translation loading
4. **HighlightText component** (`src/lib/utils/highlight.tsx`) - Render text with highlighting
5. **Custom middleware** - Handles SEO-friendly localized routes

### ⚠️ Important Notes

- **DO NOT** use `useTranslations()` from next-intl (plugin is disabled)
- **DO NOT** create separate translation files for components
- **USE** existing i18n JSON files in `src/i18n/`
- **USE** static translations in components following the patterns below

## 📁 File Structure

```
src/
├── i18n/
│   ├── en.json          # English translations
│   ├── fr.json          # French translations
│   ├── de.json          # German translations
│   ├── es.json          # Spanish translations
│   └── nl.json          # Dutch translations
├── hooks/
│   └── use-localized-routes.ts  # Custom locale hook
├── lib/utils/
│   ├── i18n-loader.ts   # Type-safe translation loading utility
│   └── highlight.tsx    # Highlighting utility component
└── components/
    └── sections/
        └── hero-section.tsx  # Example implementation
```

## 🛠️ Implementation Patterns

### Pattern 1: Dynamic Translation Loading from JSON (Recommended)

This is the current pattern we use. Loads translations dynamically from the existing i18n JSON files with full type safety.

```typescript
"use client";

import { useLocalizedRoutes } from "@/hooks/use-localized-routes";
import { getSectionTranslations } from "@/lib/utils/i18n-loader";
import { HighlightText } from "@/lib/utils/highlight";

export function MyComponent() {
  const { locale } = useLocalizedRoutes();
  const t = getSectionTranslations(locale, "hero"); // Type-safe!

  return (
    <div>
      <h1>
        <HighlightText gradient={true}>{t.title}</HighlightText>
      </h1>
      <p>
        <HighlightText gradient={false} className="text-foreground">
          {t.subtitle}
        </HighlightText>
      </p>
    </div>
  );
}
```

**Benefits:**

- ✅ **Type Safety** - Full TypeScript support with autocomplete
- ✅ **Single Source of Truth** - All translations in JSON files
- ✅ **Runtime Safety** - Prevents accessing non-existent sections
- ✅ **Easy Maintenance** - Update translations in JSON files only

### Pattern 2: Static Translations in Component (Legacy)

This was our previous pattern. Still valid but not recommended for new components.

```typescript
"use client";

import { useLocalizedRoutes } from "@/hooks/use-localized-routes";
import { HighlightText } from "@/lib/utils/highlight";

// Define translations directly in component
const COMPONENT_TRANSLATIONS = {
  fr: {
    title: "Mon Titre",
    subtitle: "Ma <highlight>description</highlight>",
  },
  en: {
    title: "My Title",
    subtitle: "My <highlight>description</highlight>",
  },
  de: {
    title: "Mein Titel",
    subtitle: "Meine <highlight>Beschreibung</highlight>",
  },
  es: {
    title: "Mi Título",
    subtitle: "Mi <highlight>descripción</highlight>",
  },
  nl: {
    title: "Mijn Titel",
    subtitle: "Mijn <highlight>beschrijving</highlight>",
  },
} as const;

export function MyComponent() {
  const { locale } = useLocalizedRoutes();
  const t = COMPONENT_TRANSLATIONS[locale] || COMPONENT_TRANSLATIONS.fr;

  return (
    <div>
      <h1>
        <HighlightText gradient={true}>{t.title}</HighlightText>
      </h1>
      <p>
        <HighlightText gradient={false} className="text-foreground">
          {t.subtitle}
        </HighlightText>
      </p>
    </div>
  );
}
```

### Pattern 3: Shared Translation Utilities (For Complex Components)

For components with many translations or shared translations across components.

```typescript
// lib/translations/shared.ts
import { type Locale } from "@/config/i18n";

export interface SharedTranslations {
  buttons: {
    submit: string;
    cancel: string;
  };
  messages: {
    success: string;
    error: string;
  };
}

export const sharedTranslations: Record<Locale, SharedTranslations> = {
  fr: {
    buttons: {
      submit: "Envoyer",
      cancel: "Annuler",
    },
    messages: {
      success: "Succès !",
      error: "Erreur !",
    },
  },
  en: {
    buttons: {
      submit: "Submit",
      cancel: "Cancel",
    },
    messages: {
      success: "Success!",
      error: "Error!",
    },
  },
  // ... other languages
} as const;

export function getSharedTranslations(locale: Locale): SharedTranslations {
  return sharedTranslations[locale] || sharedTranslations.fr;
}

// Usage in component
import { useLocalizedRoutes } from "@/hooks/use-localized-routes";
import { getSharedTranslations } from "@/lib/translations/shared";

export function MyComponent() {
  const { locale } = useLocalizedRoutes();
  const t = getSharedTranslations(locale);

  return <button>{t.buttons.submit}</button>;
}
```

## 🔧 i18n-loader Utility

### getSectionTranslations Function

The `getSectionTranslations` function provides type-safe access to translations from JSON files.

```typescript
import { getSectionTranslations } from "@/lib/utils/i18n-loader";
import { useLocalizedRoutes } from "@/hooks/use-localized-routes";

export function MyComponent() {
  const { locale } = useLocalizedRoutes();

  // Type-safe translation loading
  const heroTranslations = getSectionTranslations(locale, "hero");
  const toursTranslations = getSectionTranslations(locale, "tours");

  // Full TypeScript support:
  // heroTranslations.title is typed as string
  // heroTranslations.subtitle is typed as string
  // etc.

  return (
    <div>
      <h1>{heroTranslations.title}</h1>
      <p>{toursTranslations.subtitle}</p>
    </div>
  );
}
```

### Type Safety Features

- **Autocomplete**: Full IntelliSense support for translation keys
- **Type Checking**: Prevents accessing non-existent sections or keys
- **Runtime Safety**: Graceful fallback if section doesn't exist
- **Generic Support**: Works with any section defined in your JSON files

### Available Sections

Currently available sections in the JSON files:

- `"hero"` - Hero section translations
- `"tours"` - Tours section translations
- Add more sections as needed in your JSON files

## 🎨 Text Highlighting

### HighlightText Component

The `HighlightText` component allows you to highlight specific words in your translations using `<highlight>` tags.

```typescript
import { HighlightText } from "@/lib/utils/highlight";

// In your translations
const translations = {
  fr: {
    title: "Découvrez <highlight>Paris</highlight> Comme un Vrai Parisien !",
  },
  en: {
    title: "Discover <highlight>Paris</highlight> Like a True Parisian!",
  },
};

// In your component
<HighlightText gradient={true}>{t.title}</HighlightText>;
```

### Highlighting Options

- `gradient={true}` - Beautiful gradient styling (for titles)
- `gradient={false}` - Bold text with normal color (for subtitles)
- `className` - Additional custom styling

## 📝 Translation File Structure

### JSON Structure

```json
{
  "navigation": {
    "tours": "Guided Tours",
    "rent": "Bike Rentals",
    "blog": "Blog",
    "about": "About Us"
  },
  "hero": {
    "title": "Discover <highlight>Paris</highlight> Like a True Parisian! 🚴‍♂️",
    "subtitle": "Get ready for an <highlight>unforgettable adventure</highlight> through the City of Light!",
    "ctaTours": "Book Your Tour!",
    "ctaRent": "Rent Your Bike!"
  },
  "common": {
    "learnMore": "Learn More",
    "bookNow": "Book Now",
    "contact": "Contact",
    "readMore": "Read More"
  }
}
```

### Adding New Translations

1. **Add to all language files** (`en.json`, `fr.json`, `de.json`, `es.json`, `nl.json`)
2. **Use consistent structure** across all languages
3. **Include highlighting tags** when needed: `<highlight>text</highlight>`
4. **Test all languages** to ensure proper display

## 🌍 Supported Languages

- **French (fr)** - Default language
- **English (en)**
- **German (de)**
- **Spanish (es)**
- **Dutch (nl)**

## 🎯 Content Writing Guidelines

### Léo's Writing Style

When writing translations, follow Léo's authentic voice:

- **Friendly & Conversational** - Write as if speaking to a friend
- **Enthusiastic & Inviting** - Show genuine excitement about cycling and Paris
- **Warm & Personal** - Use first-person when appropriate
- **Authentic & Passionate** - Convey real love for cycling and Paris

### Language Features

- **Emojis** - Use strategically (2-3 per section maximum) 🚴‍♂️
- **Exclamation marks** - Use liberally to convey enthusiasm!
- **Short sentences** - Mix short, punchy sentences with longer ones
- **Action words** - Start with "Discover...", "Get ready to...", "Book your..."

### Key Messaging Points

Always mention:

- **Safety & Quality** - High-quality equipment and maintenance
- **Local Expertise** - Léo's local knowledge and passion
- **Flexibility** - Various options for different needs
- **Partnership** - Swapfiets partnership (when relevant)

## 🔧 Available Hooks

### useLocalizedRoutes()

```typescript
import { useLocalizedRoutes } from "@/hooks/use-localized-routes";

const { locale, createLink, getLanguageSwitchUrl } = useLocalizedRoutes();

// Get current locale
const currentLocale = locale; // "fr" | "en" | "de" | "es" | "nl"

// Create localized links
const toursLink = createLink("tours"); // "/visite-guidee-de-paris-a-velo" (if FR)

// Get language switch URLs
const switchToEN = getLanguageSwitchUrl("en"); // "/guided-bike-tour-paris"
```

## 📋 Implementation Checklist

When implementing i18n for a new component:

### For New Components (Recommended Pattern):

- [ ] Add translations to JSON files in `src/i18n/` for all 5 languages
- [ ] Use `getSectionTranslations(locale, "sectionName")` to load translations
- [ ] Import `useLocalizedRoutes()` hook to get locale
- [ ] Use `HighlightText` component for highlighting with `<highlight>` tags
- [ ] Test all languages to ensure proper display
- [ ] Follow Léo's writing style guidelines
- [ ] Include safety/quality messaging when relevant
- [ ] Use appropriate emojis and exclamation marks
- [ ] Ensure buttons are sized appropriately for longer text

### For Existing Components (Migration):

- [ ] Move static translations from component to JSON files
- [ ] Replace static translation objects with `getSectionTranslations()`
- [ ] Remove hardcoded translation objects from component files
- [ ] Test all languages after migration
- [ ] Update any missing translations in JSON files

## 🚨 Common Mistakes to Avoid

- ❌ **Don't use `useTranslations()` from next-intl** (plugin is disabled)
- ❌ **Don't create separate translation files for components** (use JSON files)
- ❌ **Don't forget to include all 5 languages** in JSON files
- ❌ **Don't use generic, corporate language** (follow Léo's style)
- ❌ **Don't forget to import `getSectionTranslations`** for type safety
- ❌ **Don't access translation keys that don't exist** in JSON files
- ❌ **Don't make buttons too small for longer text**
- ❌ **Don't forget to test all languages** after changes

## 🎯 Next Steps

To continue implementing i18n across the website:

1. **Identify components** that need translation
2. **Create translation objects** following the patterns above
3. **Apply highlighting** where appropriate
4. **Test all languages** for proper display
5. **Follow Léo's style** for authentic voice
6. **Update existing components** one by one

## 📚 Example: Hero Section Implementation

See `src/components/sections/hero-section.tsx` and `src/components/sections/tours-section.tsx` for complete working examples of:

- **Dynamic translation loading** using `getSectionTranslations()`
- **Type-safe translation access** with full TypeScript support
- **HighlightText usage** with different styling modes (gradient vs bold)
- **Proper button sizing** for international text
- **JSON-based translations** in `src/i18n/*.json` files
- **Léo's authentic writing style** with highlighting tags

### Key Implementation Details:

```typescript
// Type-safe translation loading
const t = getSectionTranslations(locale, "hero");

// Highlighted text with gradient styling
<HighlightText gradient={true}>{t.title}</HighlightText>

// Highlighted text with bold styling
<HighlightText gradient={false} className="text-foreground">
  {t.subtitle}
</HighlightText>
```

This implementation serves as the template for all future i18n work on the website.
