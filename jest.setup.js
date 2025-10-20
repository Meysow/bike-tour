// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// Mock env.mjs
jest.mock("@/env.mjs", () => ({
  env: {
    NEXT_PUBLIC_APP_URL: "http://localhost:3000",
    NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN: "test-token",
    NODE_ENV: "test",
  },
}));

// Mock Next.js router
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
      pathname: "/fr",
      query: {},
      asPath: "/fr",
    };
  },
  usePathname() {
    return "/fr";
  },
  useParams() {
    return { locale: "en" };
  },
  useSearchParams() {
    return new URLSearchParams();
  },
}));

// Mock next-themes
jest.mock("next-themes", () => ({
  ThemeProvider: ({ children }) => children,
  useTheme: () => ({
    theme: "light",
    setTheme: jest.fn(),
    themes: ["light", "dark"],
  }),
}));

// Mock window.matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};