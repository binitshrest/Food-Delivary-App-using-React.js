import useTopRestro from "../utils/useTopRestro";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

import React, { useRef, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
// Direct React component imports
import { Swiper, SwiperSlide } from "swiper/swiper-react.mjs";

// Styles must use direct files imports
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation.scss"; // Navigation module
import "swiper/modules/pagination.scss"; // Pagination module

const TopRestaurantCarousel = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 12 }).map((_, index) => `Slide ${index + 1}`)
  );
  const topRestro = useTopRestro();
  return (
    <>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={2}
        centeredSlides={false}
        spaceBetween={10}
        breakpoints={{
          1525: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1499: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1369: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1000: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          500: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
        // pagination={{
        //   type: "fraction",
        // }}
        navigation={true}
        virtual
      >
        {topRestro?.map((restaurant, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <RestaurantCard resData={restaurant} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TopRestaurantCarousel;
