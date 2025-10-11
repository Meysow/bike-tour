# Documentation Index

Welcome to the Bike Tour Paris project documentation! This directory contains comprehensive guides for understanding and working with the project.

## 📚 Documentation Overview

### Internationalization (i18n)

The project uses a custom hybrid i18n approach combining custom routing with next-intl. Here's where to find what you need:

#### 🎯 Start Here

- **[I18N_COMPREHENSIVE_GUIDE.md](./I18N_COMPREHENSIVE_GUIDE.md)** ⭐
  - **Best for**: Understanding the complete i18n system
  - **Contains**: How it works, pros/cons, alternatives, improvements
  - **Read if**: You're new to the project or need deep understanding
  - **Time**: 30-45 minutes

#### 📊 Quick References

- **[I18N_ARCHITECTURE_DIAGRAM.md](./I18N_ARCHITECTURE_DIAGRAM.md)**

  - **Best for**: Visual learners, quick understanding of flow
  - **Contains**: Diagrams, flowcharts, visual explanations
  - **Read if**: You want to understand the flow quickly
  - **Time**: 10-15 minutes

- **[I18N_COMPARISON_TABLE.md](./I18N_COMPARISON_TABLE.md)**
  - **Best for**: Decision making, comparing approaches
  - **Contains**: Feature comparisons, cost-benefit analysis
  - **Read if**: You're evaluating if changes are needed
  - **Time**: 15-20 minutes

#### 📖 Historical/Specific Topics

- **[I18N_IMPROVEMENTS.md](./I18N_IMPROVEMENTS.md)**

  - Recent improvements made to the system
  - Changes to centralized configuration
  - Hreflang implementation details

- **[LOCALIZED_ROUTES.md](./LOCALIZED_ROUTES.md)**

  - Original documentation on localized routing
  - How SEO-friendly URLs work
  - Route configuration patterns

- **[QUICK_START_LOCALIZED_URLS.md](./QUICK_START_LOCALIZED_URLS.md)**
  - Quick start guide for working with localized URLs
  - Common patterns and examples

### Architecture & Code Quality

- **[ARCHITECTURE.md](./ARCHITECTURE.md)**

  - Project structure overview
  - Component organization
  - Design patterns used

- **[DRY_IMPROVEMENTS.md](./DRY_IMPROVEMENTS.md)**
  - DRY principle implementations
  - Code refactoring done
  - Reusable utilities

### Testing

- **[TESTING.md](./TESTING.md)**

  - Testing strategy and guidelines
  - How to run tests
  - Writing new tests

- **[TEST_URLS.md](./TEST_URLS.md)**
  - URL testing scenarios
  - Test cases for localized routes
  - Expected behaviors

### Recommendations

- **[RECOMMENDATIONS.md](./RECOMMENDATIONS.md)**
  - Best practices for the project
  - Coding standards
  - Performance tips

---

## 🚀 Quick Navigation by Task

### I Want To...

#### Understand the i18n System

1. Read [I18N_COMPREHENSIVE_GUIDE.md](./I18N_COMPREHENSIVE_GUIDE.md) - Complete overview
2. Refer to [I18N_ARCHITECTURE_DIAGRAM.md](./I18N_ARCHITECTURE_DIAGRAM.md) - Visual understanding
3. Check [LOCALIZED_ROUTES.md](./LOCALIZED_ROUTES.md) - Routing specifics

#### Add a New Page

1. Read the "Adding a new page" section in [I18N_ARCHITECTURE_DIAGRAM.md](./I18N_ARCHITECTURE_DIAGRAM.md)
2. Follow patterns in [LOCALIZED_ROUTES.md](./LOCALIZED_ROUTES.md)
3. Add tests as per [TESTING.md](./TESTING.md)

#### Evaluate if We Should Change Approaches

1. Read [I18N_COMPARISON_TABLE.md](./I18N_COMPARISON_TABLE.md) - Compare options
2. Review "Alternative Approaches" in [I18N_COMPREHENSIVE_GUIDE.md](./I18N_COMPREHENSIVE_GUIDE.md)
3. Consider "Potential Improvements" section for incremental changes

#### Debug a Routing Issue

1. Check [I18N_ARCHITECTURE_DIAGRAM.md](./I18N_ARCHITECTURE_DIAGRAM.md) - Understand flow
2. Review [TEST_URLS.md](./TEST_URLS.md) - Test cases
3. Run tests from [TESTING.md](./TESTING.md)

#### Onboard a New Developer

**Recommended Reading Order:**

1. [ARCHITECTURE.md](./ARCHITECTURE.md) - Project overview
2. [I18N_ARCHITECTURE_DIAGRAM.md](./I18N_ARCHITECTURE_DIAGRAM.md) - Visual i18n flow (15 min)
3. [LOCALIZED_ROUTES.md](./LOCALIZED_ROUTES.md) - How to work with routes (20 min)
4. [TESTING.md](./TESTING.md) - How to test (15 min)
5. [RECOMMENDATIONS.md](./RECOMMENDATIONS.md) - Best practices (10 min)

**Total Time**: ~1 hour for core understanding

#### Make Improvements to i18n

1. Read "Potential Improvements" in [I18N_COMPREHENSIVE_GUIDE.md](./I18N_COMPREHENSIVE_GUIDE.md)
2. Review "Migration Path" section for strategies
3. Check [DRY_IMPROVEMENTS.md](./DRY_IMPROVEMENTS.md) for patterns to follow

---

## 📖 Documentation by Audience

### For New Developers

**Priority Order:**

1. ⭐ [ARCHITECTURE.md](./ARCHITECTURE.md)
2. ⭐ [I18N_ARCHITECTURE_DIAGRAM.md](./I18N_ARCHITECTURE_DIAGRAM.md)
3. [LOCALIZED_ROUTES.md](./LOCALIZED_ROUTES.md)
4. [QUICK_START_LOCALIZED_URLS.md](./QUICK_START_LOCALIZED_URLS.md)

### For Product/Business

**Priority Order:**

1. ⭐ [I18N_COMPARISON_TABLE.md](./I18N_COMPARISON_TABLE.md) - Cost-benefit analysis
2. [I18N_COMPREHENSIVE_GUIDE.md](./I18N_COMPREHENSIVE_GUIDE.md) - Sections: "Why This Approach" and "Potential Improvements"

### For Tech Leads/Architects

**Priority Order:**

1. ⭐ [I18N_COMPREHENSIVE_GUIDE.md](./I18N_COMPREHENSIVE_GUIDE.md) - Complete technical overview
2. ⭐ [I18N_COMPARISON_TABLE.md](./I18N_COMPARISON_TABLE.md) - Decision matrix
3. [ARCHITECTURE.md](./ARCHITECTURE.md) - Overall system design
4. [TESTING.md](./TESTING.md) - Quality strategy

### For Content Editors/Translators

**Priority Order:**

1. [LOCALIZED_ROUTES.md](./LOCALIZED_ROUTES.md) - How URLs work
2. [I18N_COMPREHENSIVE_GUIDE.md](./I18N_COMPREHENSIVE_GUIDE.md) - Section: "Translation System"

---

## 🔄 Document Maintenance

### When to Update

| Document                         | Update When                                   |
| -------------------------------- | --------------------------------------------- |
| **I18N_COMPREHENSIVE_GUIDE.md**  | Major i18n changes, new approaches considered |
| **I18N_ARCHITECTURE_DIAGRAM.md** | Flow changes, new components added            |
| **I18N_COMPARISON_TABLE.md**     | New alternatives emerge, metrics change       |
| **ARCHITECTURE.md**              | Major structural changes                      |
| **TESTING.md**                   | Testing strategy changes                      |
| **RECOMMENDATIONS.md**           | New best practices identified                 |

### Document Owners

- **i18n Documentation**: Lead Developer
- **Architecture**: Tech Lead
- **Testing**: QA Lead
- **Recommendations**: Team (collective)

---

## 🎯 Common Questions

### "Which document should I read first?"

**If you're new**: Start with [I18N_ARCHITECTURE_DIAGRAM.md](./I18N_ARCHITECTURE_DIAGRAM.md) for a quick visual overview (15 min)

**If you need depth**: Read [I18N_COMPREHENSIVE_GUIDE.md](./I18N_COMPREHENSIVE_GUIDE.md) (45 min)

**If you're evaluating**: Go to [I18N_COMPARISON_TABLE.md](./I18N_COMPARISON_TABLE.md) (20 min)

### "How do I add a new language?"

See [I18N_COMPREHENSIVE_GUIDE.md](./I18N_COMPREHENSIVE_GUIDE.md) - "Maintenance Burden" section and [LOCALIZED_ROUTES.md](./LOCALIZED_ROUTES.md)

### "Should we migrate to a different i18n approach?"

Read [I18N_COMPARISON_TABLE.md](./I18N_COMPARISON_TABLE.md) - "Decision Matrix" section

### "How do localized URLs work?"

See [I18N_ARCHITECTURE_DIAGRAM.md](./I18N_ARCHITECTURE_DIAGRAM.md) - "Route Resolution Example"

### "Where are translations stored?"

Current implementation: Most content is hardcoded in components. Translation files exist in `src/i18n/*.json` but are underutilized. See [I18N_COMPREHENSIVE_GUIDE.md](./I18N_COMPREHENSIVE_GUIDE.md) - "Translation System" section.

### "What's the SEO benefit of current approach?"

See [I18N_COMPREHENSIVE_GUIDE.md](./I18N_COMPREHENSIVE_GUIDE.md) - "Why This Approach" section

---

## 📝 Contributing to Documentation

### Adding New Documentation

1. **Create the file** in `/documentation`
2. **Add entry** to this README
3. **Link from related docs**
4. **Update "Document Maintenance" section**

### Documentation Standards

- Use Markdown
- Include table of contents for long docs
- Add examples and code snippets
- Use emojis for visual scanning
- Keep diagrams in ASCII/text when possible
- Add "Last Updated" date to major docs

### Improving Existing Docs

- Fix typos/errors immediately
- For major changes, create a PR
- Update related docs if affected
- Notify team of significant changes

---

## 🔗 External Resources

### Next.js

- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [Next.js Middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware)

### i18n Libraries

- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [next-i18next (Pages Router)](https://github.com/i18next/next-i18next)
- [Paraglide.js](https://inlang.com/m/gerre34r/library-inlang-paraglideJs)

### SEO & Localization

- [Google: Multi-regional and multilingual sites](https://developers.google.com/search/docs/specialty/international/localized-versions)
- [Hreflang Tags Guide](https://developers.google.com/search/docs/specialty/international/localized-versions#html)

---

## 📊 Documentation Stats

- **Total Documents**: 11
- **i18n Focused**: 6
- **General Architecture**: 5
- **Total Pages**: ~50+ pages
- **Estimated Read Time**: ~3 hours for everything

---

## 🤝 Need Help?

If you can't find what you're looking for:

1. **Check the table of contents** in individual documents
2. **Use search** (Ctrl+F) within documents
3. **Ask the team** in development channel
4. **Create an issue** if documentation is unclear or missing

---

**Last Updated**: October 2024

**Maintained By**: Development Team
