// import { NextPage } from "next";
// import Image from "next/image";

// import { useState } from "react";

// import SwiperCore, { Navigation } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";

// import dishArr from "@/pages/api/api";
// import { DishType } from "./DishType";

// SwiperCore.use([Navigation]);

// const Slider: NextPage = () => {
//   const [selectedImage, setSelectedImage] = useState<string>("");
//   const [selectedDish, setSelectedDish] = useState<string>("");
//   const [selectedPrice, setSelectedPrice] = useState<string | undefined>("");

//   const handleImageClick = (
//     image: string,
//     dish: string,
//     price: string | undefined
//   ) => {
//     setSelectedImage(image);
//     setSelectedDish(dish);
//     setSelectedPrice(price);
//   };

//   const handleCloseModal = () => {
//     setSelectedImage("");
//   };
//   const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
//     if (event.target === event.currentTarget) {
//       setSelectedImage("");
//     }
//   };

//   return (
//     <div className="flex flex-col">
//       <div className="w-20 ml-auto">
//         <button className="custom-swiper-button-prev mr-[23px]">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
//             />
//           </svg>
//         </button>
//         <button className="custom-swiper-button-next">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke-width="1.5"
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
//             />
//           </svg>
//         </button>
//       </div>
//       <div>
//         <Swiper
//           className="w-full max-w-[1200px] z-0 mt-8"
//           spaceBetween={50}
//           navigation={{
//             nextEl: ".custom-swiper-button-next",
//             prevEl: ".custom-swiper-button-prev",
//           }}
//           breakpoints={{
//             320: {
//               slidesPerView: 1,
//             },
//             768: {
//               slidesPerView: 2,
//             },
//             1280: {
//               slidesPerView: 3,
//             },
//           }}
//         >
//           {dishArr.map(({ id, to, dish, price }: DishType) => (
//             <SwiperSlide
//               key={id}
//               onClick={() => handleImageClick(`/images/${to}.jpg`, dish, price)}
//             >
//               <div className="max-w-[250px] min-h-[250px]">
//                 <Image
//                   className="w-full h-full object-cover"
//                   src={`/images/${to}.jpg`}
//                   alt={dish}
//                   fill={true}
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };
// export default Slider;

// import { NextPage } from "next";
// import Image from "next/image";

// import { useState } from "react";

// import SwiperCore, { Navigation } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";

// import dishArr from "@/pages/api/api";
// import { DishType } from "./DishType";

// SwiperCore.use([Navigation]);

// const Slider: NextPage = () => {
//   const [selectedImage, setSelectedImage] = useState<string>("");
//   const [selectedDish, setSelectedDish] = useState<string>("");
//   const [selectedPrice, setSelectedPrice] = useState<string | undefined>("");

//   const handleImageClick = (
//     image: string,
//     dish: string,
//     price: string | undefined
//   ) => {
//     setSelectedImage(image);
//     setSelectedDish(dish);
//     setSelectedPrice(price);
//   };

//   const handleCloseModal = () => {
//     setSelectedImage("");
//   };
//   const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
//     if (event.target === event.currentTarget) {
//       setSelectedImage("");
//     }
//   };

//   return (
//     <div className="flex flex-col">
//       <style jsx>{`
//         .custom-swiper-button-prev[disabled],
//         .custom-swiper-button-next[disabled] {
//           color: green;
//         }
//       `}</style>
//       <div className="w-20 ml-auto">
//         <button className="custom-swiper-button-prev mr-[23px]">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
//             />
//           </svg>
//         </button>
//         <button className="custom-swiper-button-next">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke-width="1.5"
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
//             />
//           </svg>
//         </button>
//       </div>
//       <div>
//         <Swiper
//           className="w-full max-w-[1200px] z-0 mt-8"
//           spaceBetween={50}
//           navigation={{
//             nextEl: ".custom-swiper-button-next",
//             prevEl: ".custom-swiper-button-prev",
//           }}
//           breakpoints={{
//             320: {
//               slidesPerView: 1,
//             },
//             768: {
//               slidesPerView: 2,
//             },
//             1280: {
//               slidesPerView: 3,
//             },
//           }}
//         >
//           {dishArr.map(({ id, to, dish, price }: DishType) => (
//             <SwiperSlide
//               key={id}
//               onClick={() => handleImageClick(`/images/${to}.jpg`, dish, price)}
//             >
//               <div className="max-w-[250px] min-h-[250px]">
//                 <Image
//                   className="w-full h-full object-cover"
//                   src={`/images/${to}.jpg`}
//                   alt={dish}
//                   fill={true}
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };
// export default Slider;

import { NextPage } from "next";
import Image from "next/image";

import { useState } from "react";

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import dishArr from "@/pages/api/api";
import { DishType } from "./DishType";

SwiperCore.use([Navigation]);

const Slider: NextPage = () => {
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [selectedDish, setSelectedDish] = useState<string>("");
  const [selectedPrice, setSelectedPrice] = useState<string | undefined>("");

  const handleImageClick = (
    image: string,
    dish: string,
    price: string | undefined
  ) => {
    setSelectedImage(image);
    setSelectedDish(dish);
    setSelectedPrice(price);
  };

  const handleCloseModal = () => {
    setSelectedImage("");
  };
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setSelectedImage("");
    }
  };

  return (
    <div className="flex flex-col">
      <div className="relative">
        <Swiper
          className="w-full max-w-[1200px] z-0 mt-8"
          spaceBetween={50}
          navigation={{
            nextEl: ".custom-swiper-button-next",
            prevEl: ".custom-swiper-button-prev",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
        >
          {dishArr.map(({ id, to, dish, price }: DishType) => (
            <SwiperSlide
              key={id}
              onClick={() => handleImageClick(`/images/${to}.jpg`, dish, price)}
            >
              <div className="max-w-[250px] min-h-[250px]">
                <Image
                  className="w-full h-full object-cover"
                  src={`/images/${to}.jpg`}
                  alt={dish}
                  fill={true}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute top-0 right-0">
          <button className="custom-swiper-button-prev mr-[23px] disabled:text-green-500 focus:disabled:text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button className="custom-swiper-button-next disabled:text-green-500 focus:disabled:text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
