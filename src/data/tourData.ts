import { Tour } from "@/types";
import Burren from "../../public/images/hero/burren.jpg";
import Leophil from "../../public/images/hero/leophil.jpg";
import Louvre from "../../public/images/hero/louvre.jpg";
import Palais from "../../public/images/hero/palais-royal.jpg";

//TODO Next: modifier ce fichier pour matcher le typing
//TODO: Voir si on conserve ce fichier, et si oui, faire le lien avec la section tours-section de la landing page
export const tours: Tour[] = [
  {
    id: "1",
    title: "All around Paris by Bike",
    description: "Full tour",
    details:
      "Starting in the heart of Paris 💫 we will take you to our most beautiful spots around the city 🚴🏻‍♂️ The tour is a good mix in between our touch, typical Parisian streets, and emblematic monuments of the city.",
    startingSpot: "20 rue Greneta, 75002 Paris",
    duration: "3-hours ride around Paris",
    break: "A nice break in between to get to know each other",
    price: "€45",
    image: Louvre,
  },
  {
    id: "2",
    title: "Experience the Magic of Paris Under the Lights",
    description: "Evening Lights Tour",
    details:
      "Join us for a nighttime adventure as Paris lights up. See the Eiffel Tower, Champs-Elysées, and the Seine in all their illuminated glory.",
    startingSpot: "15 avenue Montaigne, 75008 Paris",
    duration: "2-hour ride through iconic night views",
    break: "A stop for hot drinks and conversation under the stars",
    price: "€45",
    image: Palais,
  },
  {
    id: "3",
    title: "Discover Parisian Secrets Off the Beaten Path",
    description: "Hidden Gems of Paris",
    details:
      "Venture beyond the tourist trails to discover lesser-known Parisian neighborhoods, hidden alleys, and secret courtyards with local charm.",
    startingSpot: "10 rue Oberkampf, 75011 Paris",
    duration: "3.5-hour exploration of Paris's hidden gems",
    break: "Includes a stop at a local café for refreshments",
    price: "€45",
    image: Burren,
  },
  {
    id: "4",
    title: "Explore the Artistic Soul of Paris",
    description: "Art and Architecture",
    details:
      "Perfect for art lovers, this tour covers famous art spots, from the Louvre to local galleries, and architectural highlights around Paris.",
    startingSpot: "40 rue de Richelieu, 75001 Paris",
    duration: "4-hour in-depth art and architecture tour",
    break: "Pause at the Jardin des Tuileries for photos and relaxation",
    price: "€45",
    image: Leophil,
  },
];
