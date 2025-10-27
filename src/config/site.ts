import { env } from "@/env.mjs";

//TODO : reprendre complétement ce component

const links = {
  facebook: "https://www.facebook.com/rentabikeparis",
  instagram: "https://www.instagram.com/rentabikeparis",
  googleReviews: "https://g.page/r/CZW5O-on8XABEBM/review",
  tripadvisor:
    "https://www.tripadvisor.com/Attraction_Review-g187147-d26877237-Reviews-Rentabike_Paris_Locations_de_velos_et_tours_guides_a_Paris-Paris_Ile_de_France.html",
  rentalBooking: "https://rentabikeparis.lokki.rent/",
  tourBooking: "https://rentabikeparis.lokki.rent/en/events",
  authorsWebsite: "https://tdportfolio-self.vercel.app/",
  authorsGitHub: "https://github.com/meysow",
  openGraphImage: `${env.NEXT_PUBLIC_APP_URL}/images/ogImage/og_image2.png`,
};

export const siteConfig = {
  name: "RentaTour",
  description:
    "Experience Paris like never before with our tailored bike tours and rental services. We provide everything you need for a memorable ride through the city's iconic landmarks and hidden gems, ensuring a smooth, hassle-free adventure. Whether you're planning a leisurely tour or just need a bike for the day, we've got you covered.",
  links,
  url: env.NEXT_PUBLIC_APP_URL,
  ogImage: links.openGraphImage,
  author: "Meyso",
  hostingRegion: "fra1",
  // Company information
  company: {
    name: "Bike Adventures",
    address: "18 Ter Rue Delizy, 93500 Pantin",
    location: "20 rue Greneta, 75002 Paris",
    phone: "+33 6 95 96 47 47",
    whatsapp: "+33695964747", // Format international sans espaces pour WhatsApp
    email: "contact@rentabikeparis.fr",
    website: "https://rentabikeparis.fr/",
  },
  // Hosting information
  hosting: {
    company: "Hostinger",
    address: "143 rue emile julien 34070 Montpellier",
    phone: "0892977093",
  },
  // Legal information
  legal: {
    effectiveDate: "5/15/2023",
    cguTitle: "Conditions générales d'utilisation",
    privacyTitle: "Politique de Confidentialité",
  },
  keywords: [
    "Bike Tours",
    "Bike Rentals",
    "Paris Tours",
    "City Biking",
    "Adventure Tours",
    "Bike Hire",
    "Explore Paris",
    "Cycling Experiences",
    "Sightseeing by Bike",
    "Paris Bike Routes",
  ],
};
