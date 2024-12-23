import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";





const ImageSlider = () => {
  const images = [
    "/meuble1.jpg",
    "/vini1.jpg",
    "/etu1.jpg",
    "/cuisi.jpg",
    "deme1.jpg",
    "/meuble.jpg",
    "/courrier.jpg",
    "/vini.jpg",
  ];

  return (
    <div className="bg-stone-400 w-full max-w-4xl mx-auto py-[3rem]">
      <Swiper
      modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        className="rounded-lg shadow-lg"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
