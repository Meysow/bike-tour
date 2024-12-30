import { type Accessories } from "@/types";
import basket from "../../public/images/accessories/basket.jpg";
import childSeat from "../../public/images/accessories/child-seat.png";
import helmet from "../../public/images/accessories/helmet.png";
import lock from "../../public/images/accessories/lock.png";
import phoneMount from "../../public/images/accessories/phone-mount.png";

export const accessoriesFeatures: Accessories[] = [
  {
    title: "Helmet",
    description:
      "Safety first! Our comfortable and durable helmets come in various sizes and designs to ensure a snug fit and optimal protection during your ride.",
    image: helmet,
  },
  {
    title: "Basket",
    description:
      "Perfect for carrying small items or a picnic on the go, our sturdy baskets attach securely to the front of your bike, keeping your essentials within reach.",
    image: basket,
  },
  {
    title: "Phone Mount",
    description:
      "Stay on track and easily follow your navigation with a secure phone mount. Perfect for exploring new routes while keeping your hands free and safe.",
    image: phoneMount,
  },
  {
    title: "Child Seat",
    description:
      "Bring the little ones along with our comfortable and safe child seats, designed for secure mounting on the back of your bike.",
    image: childSeat,
  },
  {
    title: "Bike Lock",
    description:
      "Keep your bike secure with a heavy-duty bike lock. Essential for safe stops during your city exploration or while enjoying a coffee break.",
    image: lock,
  },
];
