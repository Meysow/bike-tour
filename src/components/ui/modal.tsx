//TODO : voir si on conserve ce component:

// import { type Accessories } from "@/types";
// import Image from "next/image";
// import { useEffect } from "react";

// interface ModalProps {
//   feature: Accessories;
//   onClose: () => void;
// }

// export function Modal({ feature, onClose }: ModalProps) {
//   // Close modal on `Escape` key press
//   useEffect(() => {
//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (event.key === "Escape") {
//         onClose();
//       }
//     };
//     document.addEventListener("keydown", handleKeyDown);
//     return () => document.removeEventListener("keydown", handleKeyDown);
//   }, [onClose]);

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="relative w-11/12 max-w-lg p-6 bg-white rounded-lg shadow-lg">
//         <button
//           className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
//           onClick={onClose}
//         >
//           ✕
//         </button>
//         <Image
//           src={feature.image}
//           alt={feature.title}
//           width={400}
//           height={300}
//           className="w-full h-48 object-cover rounded-lg mb-4"
//         />
//         <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
//         <p className="text-gray-700 mb-4">{feature.description}</p>
//         <button
//           onClick={onClose}
//           className="w-full py-2 mt-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition duration-200"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// }
