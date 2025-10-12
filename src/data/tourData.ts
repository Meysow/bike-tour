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
    description: "Paris Guided Bike Tour",
    details:
      "With our Paris Guided Bike Tour, discovering the capital becomes child's play! This cycling itinerary is accessible to all levels. We offer a unique mix of our top spots, typical Parisian streets and the city's most emblematic landmarks. Ideal for those who want to discover the heart of Paris and its great monuments. The programme includes discovering both banks of the Seine! Your guide will tell you fascinating and often amusing stories about the history of Paris. The atmosphere is just right. All you have to do is let yourself be guided and enjoy this magnificent bike ride to discover Paris. Get ready for this exciting adventure.",
    startingSpot: "20 Rue Greneta, 75002 Paris",
    duration: "3 Hours - 12 kilometers",
    break: "Available every day - 10:30 am / 2:30 pm departures",
    price: "From €40",
    image: Louvre,
  },
  {
    id: "2",
    title: "Canal Saint-Martin Discovery Tour",
    description: "Authentic Paris Experience",
    details:
      "Get ready to discover my favorite hidden gem in Paris! 🚴‍♂️ This Canal Saint-Martin tour takes you away from the tourist crowds to explore the bohemian heart of the 10th and 11th arrondissements. We'll cruise along the picturesque canal, pass through its iconic locks, and soak up the vibrant local atmosphere that makes this neighborhood so special. I'll share fascinating stories about the area's transformation while we discover hidden cafés and artisan shops. This is Paris as the locals live it! Perfect for those seeking an authentic, off-the-beaten-path adventure. ✨",
    startingSpot: "20 Rue Greneta, 75002 Paris",
    duration: "2.5 Hours - 10 kilometers",
    break: "Available every day - 10:30 am / 2:30 pm departures",
    price: "From €40",
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
