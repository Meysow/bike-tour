# Recommandations et Plan d'Implémentation - RentaTour

## Vue d'ensemble

Ce document présente les recommandations d'amélioration et le plan d'implémentation détaillé pour l'application RentaTour, basé sur l'architecture frontend-only avec intégration Lokki.

## Recommandations Prioritaires

### 1. Configuration et Infrastructure

#### 1.1 Configuration Next.js Optimisée

```typescript
// next.config.mjs
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@radix-ui/react-icons", "lucide-react"],
  },
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  httpAgentOptions: {
    keepAlive: true,
  },
};
```

#### 1.2 Variables d'Environnement Sécurisées

```typescript
// env.mjs
export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().url(),
    NEXT_PUBLIC_GA_ID: z.string().optional(),
    NEXT_PUBLIC_LOKKI_ENV: z.enum(["sandbox", "production"]),
  },
  runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
    NEXT_PUBLIC_LOKKI_ENV: process.env.NEXT_PUBLIC_LOKKI_ENV,
    NODE_ENV: process.env.NODE_ENV,
  },
});
```

#### 1.3 Middleware de Sécurité

```typescript
// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Security headers
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );

  // CORS headers
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
```

### 2. Performance et Optimisation

#### 2.1 Optimisation des Images

```typescript
// lib/image-optimization.ts
export const imageLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

// Utilisation dans les composants
import Image from "next/image";

<Image
  src="/images/bike.jpg"
  alt="Bike"
  width={400}
  height={300}
  loader={imageLoader}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
/>;
```

#### 2.2 Mise en Cache Intelligente

```typescript
// lib/cache.ts
export const cacheConfig = {
  // ISR pour les pages statiques
  revalidate: 3600, // 1 heure

  // Cache des données statiques
  staticDataCache: {
    bikes: 86400, // 24 heures
    tours: 86400, // 24 heures
    testimonials: 604800, // 7 jours
  },
};

// Utilisation dans les pages
export const revalidate = cacheConfig.revalidate;
```

#### 2.3 Optimisation des Polices

```typescript
// config/fonts.ts
import { Inter, Urbanist } from "next/font/google";

export const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const fontUrbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
  preload: true,
});
```

### 3. SEO et Accessibilité

#### 3.1 Métadonnées Dynamiques

```typescript
// lib/seo.ts
export function generateMetadata({
  title,
  description,
  image,
  url,
}: {
  title: string;
  description: string;
  image?: string;
  url?: string;
}): Metadata {
  return {
    title: `${title} | RentaTour`,
    description,
    openGraph: {
      title: `${title} | RentaTour`,
      description,
      url: url || "https://rentatour.com",
      siteName: "RentaTour",
      images: [
        {
          url: image || "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "fr_FR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | RentaTour`,
      description,
      images: [image || "/og-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
```

#### 3.2 Sitemap et Robots.txt

```typescript
// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rentatour.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/tours`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/rent`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
```

#### 3.3 Accessibilité

```typescript
// lib/accessibility.ts
export const accessibilityConfig = {
  // Focus management
  focusVisible: "focus-visible:outline-2 focus-visible:outline-blue-500",

  // ARIA labels
  ariaLabels: {
    navigation: "Navigation principale",
    mobileMenu: "Menu mobile",
    closeMenu: "Fermer le menu",
    openMenu: "Ouvrir le menu",
  },

  // Skip links
  skipLinks: [
    { href: "#main", text: "Aller au contenu principal" },
    { href: "#navigation", text: "Aller à la navigation" },
  ],
};
```

### 4. Tests et Qualité

#### 4.1 Configuration Jest

```javascript
// jest.config.js
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapping: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/*.stories.{js,jsx,ts,tsx}",
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};

module.exports = createJestConfig(customJestConfig);
```

#### 4.2 Tests de Composants

```typescript
// __tests__/components/lokki-redirect-button.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { LokkiRedirectButton } from "@/components/lokki-redirect-button";

// Mock window.open
const mockOpen = jest.fn();
Object.defineProperty(window, "open", {
  value: mockOpen,
  writable: true,
});

describe("LokkiRedirectButton", () => {
  beforeEach(() => {
    mockOpen.mockClear();
  });

  it("should open Lokki URL in new tab when clicked", () => {
    render(
      <LokkiRedirectButton type="bike-rental">Rent a Bike</LokkiRedirectButton>
    );

    const button = screen.getByRole("button", { name: /rent a bike/i });
    fireEvent.click(button);

    expect(mockOpen).toHaveBeenCalledWith(
      expect.stringContaining("rentabikeparis.lokki.com"),
      "_blank"
    );
  });
});
```

#### 4.3 Tests E2E avec Playwright

```typescript
// tests/e2e/redirection.spec.ts
import { test, expect } from "@playwright/test";

test("should redirect to Lokki when clicking rent button", async ({ page }) => {
  await page.goto("/rent");

  const rentButton = page.getByRole("button", { name: /rent now/i });

  const [newPage] = await Promise.all([
    page.waitForEvent("popup"),
    rentButton.click(),
  ]);

  await expect(newPage).toHaveURL(/rentabikeparis\.lokki\.com/);
});
```

### 5. Monitoring et Analytics

#### 5.1 Configuration Sentry

```typescript
// lib/sentry.ts
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  integrations: [
    new Sentry.Replay({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
});
```

#### 5.2 Analytics Avancés

```typescript
// lib/analytics.ts
export function trackPageView(url: string) {
  if (typeof gtag !== "undefined") {
    gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    });
  }
}

export function trackEvent(action: string, category: string, label?: string) {
  if (typeof gtag !== "undefined") {
    gtag("event", action, {
      event_category: category,
      event_label: label,
    });
  }
}

export function trackLokkiRedirect(type: string, action: string) {
  trackEvent("lokki_redirect", "engagement", `${type}_${action}`);
}
```

## Plan d'Implémentation

### Phase 1: Fondations (1-2 semaines)

#### Semaine 1

- [ ] Configuration Next.js optimisée
- [ ] Variables d'environnement sécurisées
- [ ] Middleware de sécurité
- [ ] Configuration des polices

#### Semaine 2

- [ ] Configuration Lokki complète
- [ ] Hooks de redirection
- [ ] Composants de base
- [ ] Tests unitaires de base

### Phase 2: Fonctionnalités (2-3 semaines)

#### Semaine 3

- [ ] Optimisation des images
- [ ] Mise en cache intelligente
- [ ] Métadonnées SEO dynamiques
- [ ] Sitemap et robots.txt

#### Semaine 4

- [ ] Amélioration de l'accessibilité
- [ ] Tests de composants complets
- [ ] Configuration des analytics
- [ ] Tests E2E avec Playwright

#### Semaine 5

- [ ] Optimisation des performances
- [ ] Tests de charge
- [ ] Configuration du monitoring
- [ ] Documentation technique

### Phase 3: Déploiement (1 semaine)

#### Semaine 6

- [ ] Configuration CI/CD
- [ ] Déploiement en production
- [ ] Tests de régression
- [ ] Monitoring en production

## Métriques de Succès

### Performance

- **Lighthouse Score**: > 90 pour toutes les catégories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

### SEO

- **Core Web Vitals**: Tous les indicateurs verts
- **Mobile Usability**: 100%
- **Accessibility**: Score > 95

### Business

- **Taux de conversion**: > 3% (visiteurs vers Lokki)
- **Temps sur site**: > 2 minutes
- **Taux de rebond**: < 60%

## Maintenance Continue

### Hebdomadaire

- [ ] Vérification des métriques de performance
- [ ] Analyse des erreurs Sentry
- [ ] Mise à jour des dépendances mineures

### Mensuel

- [ ] Audit de sécurité
- [ ] Analyse des analytics
- [ ] Optimisation du contenu
- [ ] Mise à jour des dépendances majeures

### Trimestriel

- [ ] Audit SEO complet
- [ ] Tests de charge
- [ ] Révision de l'architecture
- [ ] Planification des nouvelles fonctionnalités

---

_Document de recommandations - Version 1.0_
