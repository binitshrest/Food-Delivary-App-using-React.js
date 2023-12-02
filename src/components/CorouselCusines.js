import useCusines from "../utils/useCusines";
import React, { useRef, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
// Direct React component imports
import { Swiper, SwiperSlide } from "swiper/swiper-react.mjs";

// Styles must use direct files imports
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation.scss"; // Navigation module
import "swiper/modules/pagination.scss"; // Pagination module

import useCusines from "../utils/useCusines";
import CusinesCard from "./CusinesCard";

const CorouselCusines = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 12 }).map((_, index) => `Slide ${index + 1}`)
  );

  const cusinesInfo = useCusines();
  console.log(cusinesInfo);
  return (
    <>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={6}
        centeredSlides={false}
        spaceBetween={0}
        // pagination={{
        //   type: "fraction",
        // }}
        navigation={true}
        virtual
      >
        {cusinesInfo?.map((info, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <CusinesCard imageId={info.imageId} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CorouselCusines;
