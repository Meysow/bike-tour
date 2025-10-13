import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  testMatch: [
    "**/src/__tests__/**/*.[jt]s?(x)",
    "**/src/**/?(*.)+(spec|test).[jt]s?(x)",
  ],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/.next/",
    "/.vscode/",
    "/.cursor/",
    "/Documents/WebDev/product-trial/",
    "/Documents/WebDev/tailortune/",
    "/src/__tests__/utils/test-utils.tsx",
  ],
  transformIgnorePatterns: [
    "node_modules/(?!(remark|remark-html|unified|bail|is-plain-obj|trough|vfile|vfile-message|unist-.*|mdast-.*|micromark.*|decode-named-character-reference|character-entities|hast-.*)/)",
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@t3-oss/env-nextjs$":
      "<rootDir>/node_modules/@t3-oss/env-nextjs/dist/index.js",
  },
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/*.stories.{js,jsx,ts,tsx}",
    "!src/app/**",
    "!src/types/**",
    "!src/styles/**",
  ],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
