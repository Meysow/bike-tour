import { StaticImageData } from "next/image";
import Louvre from "../../public/images/hero/louvre.jpg";
import Palais from "../../public/images/hero/palais-royal.jpg";
import Prive from "../../public/images/hero/prive.jpg";

export interface TourData {
  id: string;
  title: string;
  description: string;
  details: string;
  startingSpot?: string;
  duration?: string;
  break?: string;
  price: string;
  image: StaticImageData;
  isPrivate?: boolean;
}
//TODO Next: modifier ce fichier pour matcher le typing de types/index
//TODO: Voir si on conserve ce fichier, et si oui, faire le lien avec la section tours-section de la landing page
export const tours: TourData[] = [
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
    title: "Private Tours, Team Buildings, Events",
    description: "Private Tours",
    details:
      "At Rentabike Paris, we like to adapt and cater to your needs! Whether you're seeking to create a personalized tour, organize a team-building event, or add a special touch to your event, we are open to all possibilities and eagerly await your inquiries!",
    price: "Custom Quote",
    image: Prive,
    isPrivate: true,
  },
];
