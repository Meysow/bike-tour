import Louvre from "../../../public/images/hero/louvre.jpg";
import Palais from "../../../public/images/hero/palais-royal.jpg";
import Prive from "../../../public/images/hero/prive.jpg";

export const tourImages = {
  louvre: Louvre,
  palais: Palais,
  prive: Prive,
} as const;

export type TourImageKey = keyof typeof tourImages;
