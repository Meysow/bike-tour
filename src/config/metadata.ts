/**
 * Configuration centralisée des metadata pour toutes les pages
 * Permet de gérer facilement les titres, descriptions et mots-clés multilingues
 */

import { type Locale } from "./i18n";

export interface PageMetadata {
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  keywords?: string[];
  ogImage?: string;
}

/**
 * Metadata pour la page d'accueil
 */
export const homeMetadata: PageMetadata = {
  title: {
    en: "Bike Tours & Rental Paris | RentaBike - Explore Paris on Two Wheels",
    fr: "Visites Guidées & Location Vélo Paris | RentaBike - Explorez Paris à Vélo",
    de: "Fahrradtouren & Verleih Paris | RentaBike - Entdecken Sie Paris auf Zwei Rädern",
    nl: "Fietstours & Verhuur Parijs | RentaBike - Verken Parijs op Twee Wielen",
    es: "Tours en Bici & Alquiler París | RentaBike - Explora París en Dos Ruedas",
  },
  description: {
    en: "Discover Paris with our guided bike tours and quality bike rentals. Electric bikes, city bikes, and more from €15/day. Book your Paris cycling adventure today!",
    fr: "Découvrez Paris avec nos visites guidées à vélo et locations de vélos de qualité. Vélos électriques, vélos de ville, et plus dès 15€/jour. Réservez votre aventure cycliste à Paris !",
    de: "Entdecken Sie Paris mit unseren geführten Fahrradtouren und hochwertigen Fahrradverleihen. E-Bikes, Stadträder und mehr ab 15€/Tag. Buchen Sie Ihr Pariser Radsport-Abenteuer!",
    nl: "Ontdek Parijs met onze begeleide fietstours en kwaliteitsfietsverhuur. E-bikes, stadsfietsen en meer vanaf €15/dag. Boek je Parijse fietsavontuur vandaag nog!",
    es: "Descubre París con nuestros tours guiados en bicicleta y alquiler de bicicletas de calidad. Bicicletas eléctricas, bicicletas urbanas y más desde 15€/día. ¡Reserva tu aventura ciclista en París!",
  },
  keywords: [
    "bike tours Paris",
    "visites guidées vélo Paris",
    "bike rental Paris",
    "location vélo Paris",
    "Paris cycling",
    "electric bike rental",
  ],
  ogImage: "/images/hero/louvre.jpg",
};

/**
 * Metadata pour la page de location (Rent)
 */
export const rentMetadata: PageMetadata = {
  title: {
    en: "Bike Rental Paris - Rent Quality Bikes from €15/day",
    fr: "Location Vélo Paris - Louez des Vélos de Qualité dès 15€/jour",
    de: "Fahrradverleih Paris - Mieten Sie Qualitätsräder ab 15€/Tag",
    nl: "Fietsverhuur Parijs - Huur Kwaliteitsfietsen vanaf €15/dag",
    es: "Alquiler Bicicletas París - Alquila Bicis de Calidad desde 15€/día",
  },
  description: {
    en: "Rent a bike in Paris and explore the city at your own pace. Choose from city bikes, electric bikes, and accessories. Best prices from €15/day with 10% discount for 4+ days.",
    fr: "Louez un vélo à Paris et explorez la ville à votre rythme. Choisissez parmi des vélos de ville, vélos électriques et accessoires. Meilleurs prix dès 15€/jour avec 10% de réduction dès 4 jours.",
    de: "Mieten Sie ein Fahrrad in Paris und erkunden Sie die Stadt in Ihrem eigenen Tempo. Wählen Sie aus Stadträdern, Elektrofahrrädern und Zubehör. Beste Preise ab 15€/Tag mit 10% Rabatt ab 4 Tagen.",
    nl: "Huur een fiets in Parijs en verken de stad op je eigen tempo. Kies uit stadsfietsen, elektrische fietsen en accessoires. Beste prijzen vanaf €15/dag met 10% korting bij 4+ dagen.",
    es: "Alquila una bicicleta en París y explora la ciudad a tu ritmo. Elige entre bicicletas urbanas, bicicletas eléctricas y accesorios. Mejores precios desde 15€/día con 10% descuento por 4+ días.",
  },
  keywords: [
    "bike rental Paris",
    "location vélo Paris",
    "Fahrradverleih Paris",
    "fietsverhuur Parijs",
    "alquiler bicicletas París",
    "electric bike rental",
    "location vélo électrique",
    "Paris bike rental",
    "rent a bike Paris",
    "bicycle rental",
    "city bike",
    "e-bike rental",
  ],
  ogImage: "/images/bikes/ebike.webp",
};

/**
 * Metadata pour la page des tours
 */
export const toursMetadata: PageMetadata = {
  title: {
    en: "Guided Bike Tours Paris - Discover Paris on Two Wheels",
    fr: "Visites Guidées à Vélo Paris - Découvrez Paris sur Deux Roues",
    de: "Geführte Fahrradtouren Paris - Entdecken Sie Paris auf Zwei Rädern",
    nl: "Begeleide Fietstours Parijs - Ontdek Parijs op Twee Wielen",
    es: "Tours Guiados en Bicicleta París - Descubre París en Dos Ruedas",
  },
  description: {
    en: "Join our guided bike tours and explore Paris's iconic landmarks with expert local guides. 3-hour tours from €45 including bike, helmet, and unforgettable memories.",
    fr: "Rejoignez nos visites guidées à vélo et explorez les monuments emblématiques de Paris avec des guides locaux experts. Tours de 3h dès 45€ incluant vélo, casque et souvenirs inoubliables.",
    de: "Nehmen Sie an unseren geführten Fahrradtouren teil und erkunden Sie die ikonischen Sehenswürdigkeiten von Paris mit erfahrenen lokalen Guides. 3-Stunden-Touren ab 45€ inklusive Fahrrad, Helm und unvergessliche Erinnerungen.",
    nl: "Doe mee met onze begeleide fietstours en verken de iconische bezienswaardigheden van Parijs met ervaren lokale gidsen. 3-uurs tours vanaf €45 inclusief fiets, helm en onvergetelijke herinneringen.",
    es: "Únete a nuestros tours guiados en bicicleta y explora los monumentos icónicos de París con guías locales expertos. Tours de 3 horas desde 45€ incluyendo bicicleta, casco y recuerdos inolvidables.",
  },
  keywords: [
    "bike tours Paris",
    "visites guidées vélo Paris",
    "guided bike tours",
    "Paris cycling tours",
    "Fahrradtouren Paris",
    "fietstours Parijs",
    "tours en bici París",
    "Paris sightseeing",
  ],
  ogImage: "/images/hero/palais-royal.jpg",
};

/**
 * Metadata pour la page À propos
 */
export const aboutMetadata: PageMetadata = {
  title: {
    en: "About Us - RentaBike Paris | Your Local Bike Experts",
    fr: "À Propos - RentaBike Paris | Vos Experts Vélo Locaux",
    de: "Über Uns - RentaBike Paris | Ihre Lokalen Fahrrad-Experten",
    nl: "Over Ons - RentaBike Parijs | Uw Lokale Fiets Experts",
    es: "Sobre Nosotros - RentaBike París | Tus Expertos Locales en Bicicletas",
  },
  description: {
    en: "Learn about RentaBike Paris, your trusted partner for exploring Paris by bike. Local expertise, quality bikes, and passionate guides since 2020.",
    fr: "Découvrez RentaBike Paris, votre partenaire de confiance pour explorer Paris à vélo. Expertise locale, vélos de qualité et guides passionnés depuis 2020.",
    de: "Erfahren Sie mehr über RentaBike Paris, Ihren vertrauenswürdigen Partner für die Erkundung von Paris mit dem Fahrrad. Lokale Expertise, hochwertige Fahrräder und leidenschaftliche Guides seit 2020.",
    nl: "Leer over RentaBike Parijs, uw betrouwbare partner voor het verkennen van Parijs per fiets. Lokale expertise, kwaliteitsfietsen en gepassioneerde gidsen sinds 2020.",
    es: "Conoce RentaBike París, tu socio de confianza para explorar París en bicicleta. Experiencia local, bicicletas de calidad y guías apasionados desde 2020.",
  },
  keywords: [
    "about RentaBike Paris",
    "Paris bike tours company",
    "bike rental Paris team",
    "local bike guides Paris",
  ],
  ogImage: "/images/hero/leophil.jpg",
};

/**
 * Metadata pour la page Blog
 */
export const blogMetadata: PageMetadata = {
  title: {
    en: "Blog - Cycling Tips & Paris Travel Guide | RentaBike",
    fr: "Blog - Conseils Vélo & Guide Voyage Paris | RentaBike",
    de: "Blog - Radfahrtipps & Paris Reiseführer | RentaBike",
    nl: "Blog - Fietstips & Parijs Reisgids | RentaBike",
    es: "Blog - Consejos de Ciclismo y Guía de Viaje París | RentaBike",
  },
  description: {
    en: "Discover tips for cycling in Paris, hidden gems, safety advice, and travel guides. Everything you need to know for the perfect bike adventure in the City of Light.",
    fr: "Découvrez des conseils pour faire du vélo à Paris, des endroits cachés, des conseils de sécurité et des guides de voyage. Tout ce qu'il faut savoir pour une aventure vélo parfaite dans la Ville Lumière.",
    de: "Entdecken Sie Tipps zum Radfahren in Paris, versteckte Juwelen, Sicherheitsratschläge und Reiseführer. Alles, was Sie für das perfekte Fahrradabenteuer in der Stadt der Lichter wissen müssen.",
    nl: "Ontdek tips voor fietsen in Parijs, verborgen pareltjes, veiligheidsadvies en reisgidsen. Alles wat je moet weten voor het perfecte fietsavontuur in de Lichtstad.",
    es: "Descubre consejos para andar en bicicleta en París, gemas ocultas, consejos de seguridad y guías de viaje. Todo lo que necesitas saber para la aventura perfecta en bicicleta en la Ciudad de la Luz.",
  },
  keywords: [
    "Paris cycling blog",
    "bike tips Paris",
    "cycling in Paris",
    "Paris travel guide",
    "vélo Paris conseils",
  ],
  ogImage: "/images/hero/louvre.jpg",
};

/**
 * Metadata pour les pages légales (CGU, Privacy)
 */
export const termsMetadata: PageMetadata = {
  title: {
    en: "Terms and Conditions - RentaBike Paris",
    fr: "Conditions Générales d'Utilisation - RentaBike Paris",
    de: "Allgemeine Geschäftsbedingungen - RentaBike Paris",
    nl: "Algemene Voorwaarden - RentaBike Parijs",
    es: "Términos y Condiciones - RentaBike París",
  },
  description: {
    en: "Terms and conditions for bike rental and tours with RentaBike Paris. Read our policies, rental conditions, and user agreements.",
    fr: "Conditions générales pour la location de vélos et les visites avec RentaBike Paris. Consultez nos politiques, conditions de location et accords utilisateur.",
    de: "Allgemeine Geschäftsbedingungen für Fahrradvermietung und Touren bei RentaBike Paris. Lesen Sie unsere Richtlinien, Mietbedingungen und Nutzervereinbarungen.",
    nl: "Algemene voorwaarden voor fietsverhuur en tours bij RentaBike Parijs. Lees ons beleid, huurvoorwaarden en gebruikersovereenkomsten.",
    es: "Términos y condiciones para alquiler de bicicletas y tours con RentaBike París. Lee nuestras políticas, condiciones de alquiler y acuerdos de usuario.",
  },
};

export const privacyMetadata: PageMetadata = {
  title: {
    en: "Privacy Policy - RentaBike Paris",
    fr: "Politique de Confidentialité - RentaBike Paris",
    de: "Datenschutzrichtlinie - RentaBike Paris",
    nl: "Privacybeleid - RentaBike Parijs",
    es: "Política de Privacidad - RentaBike París",
  },
  description: {
    en: "Learn how RentaBike Paris collects, uses, and protects your personal data. Our privacy policy and data protection practices.",
    fr: "Découvrez comment RentaBike Paris collecte, utilise et protège vos données personnelles. Notre politique de confidentialité et pratiques de protection des données.",
    de: "Erfahren Sie, wie RentaBike Paris Ihre persönlichen Daten erfasst, verwendet und schützt. Unsere Datenschutzrichtlinie und Datenschutzpraktiken.",
    nl: "Leer hoe RentaBike Parijs uw persoonlijke gegevens verzamelt, gebruikt en beschermt. Ons privacybeleid en gegevensbeschermingspraktijken.",
    es: "Aprende cómo RentaBike París recopila, usa y protege tus datos personales. Nuestra política de privacidad y prácticas de protección de datos.",
  },
};

/**
 * Metadata pour la page FAQ
 */
export const faqMetadata: PageMetadata = {
  title: {
    en: "Frequently Asked Questions - RentaBike Paris",
    fr: "Questions Fréquentes - RentaBike Paris",
    de: "Häufig Gestellte Fragen - RentaBike Paris",
    nl: "Veelgestelde Vragen - RentaBike Parijs",
    es: "Preguntas Frecuentes - RentaBike París",
  },
  description: {
    en: "Find answers to all your questions about bike rentals and tours in Paris. Opening hours, prices, delivery, deposits, and more. Get all the info you need!",
    fr: "Trouvez des réponses à toutes vos questions sur la location de vélos et les visites à Paris. Horaires, prix, livraison, dépôts et plus. Obtenez toutes les infos dont vous avez besoin !",
    de: "Finden Sie Antworten auf alle Ihre Fragen zu Fahrradverleih und Touren in Paris. Öffnungszeiten, Preise, Lieferung, Kaution und mehr. Holen Sie sich alle Informationen, die Sie brauchen!",
    nl: "Vind antwoorden op al uw vragen over fietsverhuur en tours in Parijs. Openingstijden, prijzen, levering, borg en meer. Krijg alle info die je nodig hebt!",
    es: "Encuentra respuestas a todas tus preguntas sobre alquiler de bicicletas y tours en París. Horarios, precios, entrega, depósitos y más. ¡Obtén toda la información que necesitas!",
  },
  keywords: [
    "FAQ bike rental Paris",
    "questions fréquentes location vélo",
    "Paris bike tour questions",
    "bike rental information",
    "Paris cycling FAQ",
  ],
  ogImage: "/images/hero/louvre.jpg",
};
