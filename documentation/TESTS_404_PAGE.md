# 404 Page Tests Documentation

## Overview

This document describes the comprehensive test suite created for the 404 Not Found page and the enhanced locale detection system.

## Test Files Created

### 1. `src/__tests__/hooks/use-localized-routes.test.tsx` (Updated)

Enhanced the existing hook tests with comprehensive coverage of the new locale detection priorities.

#### Test Suites:

##### Priority 1: Locale from URL params

- Validates locale from Next.js params
- Tests all supported locales (en, fr, de, nl, es)
- Rejects invalid locale values

##### Priority 2: Locale from pathname segments

- Extracts locale from URL segments like `/en/tours`
- Tests all supported locales

##### Priority 3: Locale from localized route paths

- Detects locale from SEO-friendly URLs
- Tests French, German, Dutch, Spanish, and English routes

##### Priority 4: Locale from cookie ⭐ NEW

- Returns locale from `NEXT_LOCALE` cookie on 404 pages
- Handles multiple cookies correctly
- Validates cookie values
- Has lower priority than URL-based detection

##### Priority 5: Locale from browser language ⭐ NEW

- Detects user's browser language preference
- Extracts language code from browser locale (e.g., `en-US` → `en`)
- Validates browser language
- Has lower priority than cookie

##### Priority 6: Default fallback

- Falls back to French when no valid locale is found
- Handles unsupported languages gracefully

**Total Tests: 40+ test cases**

---

### 2. `src/__tests__/config/navigation.test.ts` ⭐ NEW

Tests the navigation configuration and the new fallback mechanism.

#### Test Suites:

##### navigationConfig

- Verifies all locales are defined
- Checks all navigation labels exist
- Validates correct translations for each language

##### getNavItems with valid locales

- Returns correct navigation items for English
- Returns correct navigation items for French
- Returns correct navigation items for German
- Returns correct navigation items for Dutch
- Returns correct navigation items for Spanish
- Verifies correct href values for each locale

##### getNavItems with invalid locale fallback ⭐ NEW

- Falls back to French for invalid locale values
- Handles undefined locale gracefully
- Handles null locale gracefully
- Does not throw errors for invalid input

##### Consistency checks

- Ensures same number of items across all locales
- Verifies all items have valid href values
- Verifies all items have valid title values

**Total Tests: 20+ test cases**

---

### 3. `src/__tests__/app/not-found.test.tsx` ⭐ NEW

Comprehensive tests for the 404 Not Found page component.

#### Test Suites:

##### Layout and Structure

- Renders without crashing
- Includes Header component
- Includes Footer component
- Includes WhatsApp button
- Displays 404 number prominently

##### English Content

- Displays English title ("Oops! You took a wrong turn")
- Displays English error code
- Displays English subtitle and description
- Shows English navigation buttons
- Verifies correct English URLs

##### French Content

- Displays French title ("Oups ! Vous avez pris un mauvais virage")
- Displays French error code
- Displays French subtitle and description
- Shows French navigation buttons
- Verifies correct French URLs

##### German Content

- Displays German title and translations
- Shows German navigation buttons
- Verifies correct German URLs

##### Spanish Content

- Displays Spanish title and translations
- Shows Spanish navigation buttons
- Verifies correct Spanish URLs

##### Dutch Content

- Displays Dutch title and translations
- Shows Dutch navigation buttons
- Verifies correct Dutch URLs

##### Locale Detection Priority ⭐ NEW

- Uses cookie locale when available
- Uses browser language when no cookie
- Defaults to French when no locale detected
- Cookie has higher priority than browser language

##### Bike Theme Elements

- Includes bike emoji (🚴‍♂️)
- Contains bike-themed SVG icons

##### Accessibility

- Has proper heading hierarchy
- Contains navigation links
- Uses descriptive link text

**Total Tests: 30+ test cases**

---

## Key Features Tested

### 1. Cookie-Based Locale Detection ⭐

The 404 page now respects the user's language preference stored in the `NEXT_LOCALE` cookie. This ensures that when users visit a non-existent URL, they see the 404 page in their previously selected language.

### 2. Browser Language Detection ⭐

For first-time visitors with no cookie, the system detects the browser's language preference (`navigator.language`) and displays the appropriate translation.

### 3. Navigation Fallback Protection ⭐

The `getNavItems()` function includes a safety check that prevents errors when an invalid locale is passed, automatically falling back to French.

### 4. Multi-Language Support

All content is fully translated across 5 languages:

- 🇺🇸 English
- 🇫🇷 French
- 🇩🇪 German
- 🇳🇱 Dutch
- 🇪🇸 Spanish

### 5. Complete Layout Integration

The 404 page includes the full site layout (Header, Footer, WhatsApp button), making it feel like a natural part of the site rather than an error page.

---

## Running the Tests

### Run all tests:

\`\`\`bash
pnpm test
\`\`\`

### Run specific test file:

\`\`\`bash
pnpm test src/**tests**/hooks/use-localized-routes.test.tsx
pnpm test src/**tests**/config/navigation.test.ts
pnpm test src/**tests**/app/not-found.test.tsx
\`\`\`

### Run tests in watch mode:

\`\`\`bash
pnpm test --watch
\`\`\`

### Run tests with coverage:

\`\`\`bash
pnpm test --coverage
\`\`\`

---

## Test Coverage

The test suite provides comprehensive coverage for:

- ✅ Locale detection from 6 different sources
- ✅ All 5 supported languages
- ✅ Navigation configuration and fallbacks
- ✅ 404 page rendering in all languages
- ✅ Proper link generation for localized routes
- ✅ Cookie and browser language detection
- ✅ Error handling and invalid input
- ✅ Accessibility features
- ✅ Component integration (Header, Footer, WhatsApp)

---

## Mocking Strategy

### Navigation Mocks

\`\`\`typescript
jest.mock("next/navigation", () => ({
useParams: () => mockUseParams(),
usePathname: () => mockUsePathname(),
useRouter: () => ({ /_ router methods _/ }),
}));
\`\`\`

### Component Mocks

\`\`\`typescript
jest.mock("@/components/nav/header", () => ({
Header: () => <div data-testid="header">Header</div>,
}));
\`\`\`

### Cookie Mocking

\`\`\`typescript
Object.defineProperty(document, "cookie", {
writable: true,
value: "NEXT_LOCALE=en",
});
\`\`\`

### Browser Language Mocking

\`\`\`typescript
Object.defineProperty(navigator, "language", {
writable: true,
configurable: true,
value: "de-DE",
});
\`\`\`

---

## Continuous Integration

These tests are designed to run in CI/CD pipelines and will:

- Catch regressions in locale detection
- Ensure translations are complete
- Verify the 404 page displays correctly
- Validate navigation links work across all languages
- Confirm fallback mechanisms function properly

---

## Future Enhancements

Potential additions to the test suite:

- E2E tests for actual 404 navigation
- Visual regression tests for the 404 page design
- Performance tests for locale detection
- Integration tests with the middleware
- Screenshot tests for each language variant

---

## Related Documentation

- [I18N Architecture](./I18N_COMPREHENSIVE_GUIDE.md)
- [Localized Routes](./LOCALIZED_ROUTES.md)
- [Testing Guide](./TESTING.md)
- [Architecture Overview](./ARCHITECTURE.md)
