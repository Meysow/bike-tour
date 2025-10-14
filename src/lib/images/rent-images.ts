import deluxe7Image from "../../../public/images/bikes/deluxe7.webp";
import childrenBikeImage from "../../../public/images/bikes/ebike.webp";
import ebikeImage from "../../../public/images/bikes/ebike2.webp";

export const rentImages = {
  deluxe7: deluxe7Image,
  children: childrenBikeImage,
  ebike: ebikeImage,
} as const;

export type RentImageKey = keyof typeof rentImages;
