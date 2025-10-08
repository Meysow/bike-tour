# 🧪 URLs à Tester

## URLs Anglaises (English)

### Page d'accueil

- ✅ http://localhost:3000/
  - Doit afficher la version anglaise

### Visites Guidées

- ✅ http://localhost:3000/guided-tours-paris
  - Titre : "Guided Tours"
  - Langue détectée : EN

### Location de Vélos

- ✅ http://localhost:3000/bike-rental-paris
  - Titre : "Rent our Awesome Bikes"
  - Langue détectée : EN

### Blog

- ✅ http://localhost:3000/blog
  - Langue détectée : EN

### À Propos

- ✅ http://localhost:3000/about-us
  - Langue détectée : EN

---

## URLs Françaises (French)

### Visites Guidées

- ✅ http://localhost:3000/visites-guidees-paris
  - Titre : "Visites Guidées"
  - Langue détectée : FR
  - Changement de langue → `/guided-tours-paris`

### Location de Vélos

- ✅ http://localhost:3000/location-velo-paris
  - Titre : "Louez nos Super Vélos" (ou équivalent)
  - Langue détectée : FR
  - Changement de langue → `/bike-rental-paris`

### À Propos

- ✅ http://localhost:3000/a-propos
  - Langue détectée : FR
  - Changement de langue → `/about-us`

---

## Tests de Navigation

### 1. Test du sélecteur de langue

1. Visitez `/location-velo-paris` (FR)
2. Ouvrez le sélecteur de langue (drapeau 🇫🇷)
3. Cliquez sur "English" (🇺🇸)
4. **Résultat attendu :** Redirection vers `/bike-rental-paris`

### 2. Test de la navigation

1. Visitez `/`
2. Cliquez sur "Bike Rentals" dans la navigation
3. **Résultat attendu :** Redirection vers `/bike-rental-paris`
4. Changez pour le français
5. La navigation doit afficher "Location de Vélos"
6. Cliquez dessus
7. **Résultat attendu :** Vous restez sur `/location-velo-paris`

### 3. Test des liens internes

1. Créez un lien dans votre code :

```tsx
import { useLocalizedRoutes } from "@/hooks/use-localized-routes";

function MyComponent() {
  const { createLink } = useLocalizedRoutes();
  return <Link href={createLink("rent")}>Location</Link>;
}
```

2. **Résultat attendu :** Le lien pointe vers l'URL traduite correcte

---

## Vérification des Métadonnées SEO

### Inspectez le HTML

1. Visitez `/location-velo-paris`
2. Ouvrez les DevTools → Elements
3. Cherchez dans le `<head>` :

**Balises attendues :**

```html
<link rel="canonical" href="https://rentatour.com/location-velo-paris" />
<link
  rel="alternate"
  hreflang="en"
  href="https://rentatour.com/bike-rental-paris"
/>
<link
  rel="alternate"
  hreflang="fr"
  href="https://rentatour.com/location-velo-paris"
/>
<link
  rel="alternate"
  hreflang="x-default"
  href="https://rentatour.com/bike-rental-paris"
/>
```

---

## Checklist de Validation

- [ ] Toutes les URLs anglaises fonctionnent
- [ ] Toutes les URLs françaises fonctionnent
- [ ] Le changement de langue préserve la page (ex: location → rental)
- [ ] La navigation affiche les bons labels selon la langue
- [ ] Les URLs traduites sont visibles dans la barre d'adresse
- [ ] Pas d'erreur 404
- [ ] Les balises hreflang sont présentes (si métadonnées ajoutées)

---

## En cas d'erreur

### Erreur 404

- Vérifiez que le serveur est démarré : `npm run dev`
- Vérifiez que le fichier existe : `src/app/[locale]/rent/page.tsx`
- Vérifiez que `filePath` correspond dans `routes.ts`

### Navigation ne fonctionne pas

- Vérifiez les labels dans `src/config/navigation.ts`
- Vérifiez que le composant utilise `useLocalizedRoutes`

### Changement de langue ne fonctionne pas

- Vérifiez que les deux URLs sont définies dans `routes.ts`
- Vérifiez la fonction `getAlternateLanguageUrl` dans `navigation.ts`
