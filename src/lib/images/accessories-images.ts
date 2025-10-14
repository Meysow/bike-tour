import basket from "../../../public/images/accessories/basket.jpg";
import childSeat from "../../../public/images/accessories/child-seat.png";
import helmet from "../../../public/images/accessories/helmet.png";
import lock from "../../../public/images/accessories/lock.png";
import phoneMount from "../../../public/images/accessories/phone-mount.png";

export const accessoriesImages = {
  helmet: helmet,
  basket: basket,
  "phone-mount": phoneMount,
  "child-seat": childSeat,
  lock: lock,
} as const;

export type AccessoriesImageKey = keyof typeof accessoriesImages;

