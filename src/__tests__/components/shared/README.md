# SafeHtmlRenderer Tests

## Overview

Comprehensive test suite for the `SafeHtmlRenderer` component that safely renders FAQ answers with links.

## Test Coverage

### ✅ Plain Text Rendering

- Renders plain text without links
- Handles emojis correctly

### ✅ Internal Links

- Converts internal links to Next.js `<Link>` components
- Handles anchor links (#contact-section)
- Applies orange styling (text-orange-500)

### ✅ External Links

- Renders external links with `<a>` tags
- Preserves `target="_blank"` and `rel="noopener noreferrer"` attributes
- Applies consistent orange styling

### ✅ Mixed Content

- Handles multiple links in one string
- Mixes internal and external links correctly
- Preserves text between links

### ✅ Security

- Does NOT execute arbitrary HTML/JavaScript
- Ignores event handlers (onclick, etc.)
- Only parses `<a>` tags - prevents XSS attacks
- Handles malformed HTML gracefully

### ✅ Edge Cases

- Empty content
- Whitespace only
- Links at start/end of content
- Consecutive links without text between

### ✅ Real-world FAQ Examples

- Bike rental prices link
- Contact us link
- Geovelo external link
- Paris Info external link

## Running Tests

To run the tests, first install the required dependencies:

```bash
pnpm add -D jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom
```

Then run:

```bash
# Run all tests
pnpm test

# Run only SafeHtmlRenderer tests
pnpm test safe-html-renderer

# Run with coverage
pnpm test:coverage

# Run in watch mode
pnpm test:watch
```

## Test File Location

`src/__tests__/components/shared/safe-html-renderer.test.tsx`

## What the Tests Verify

1. **Functionality**: Links work correctly (internal vs external)
2. **Security**: No XSS vulnerabilities
3. **Styling**: Orange links with proper hover states
4. **Accessibility**: Proper link roles and attributes
5. **Edge Cases**: Handles all possible input scenarios

## Test Statistics

- **Total Tests**: 28
- **Test Suites**: 8 (grouped by functionality)
- **Security Tests**: 3 (critical for preventing XSS)
- **Real-world Examples**: 4 (actual FAQ content)
