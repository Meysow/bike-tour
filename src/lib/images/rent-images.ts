import deluxe7Image from "../../../public/images/bikes/velo-rentabikeparis-deluxe.png";
import childrenBikeImage from "../../../public/images/bikes/velo-rentabikeparis-enfant.png";
import ebikeImage from "../../../public/images/bikes/velo-rentabikeparis-electrique.png";

export const rentImages = {
  deluxe7: deluxe7Image,
  children: childrenBikeImage,
  ebike: ebikeImage,
} as const;

export type RentImageKey = keyof typeof rentImages;
