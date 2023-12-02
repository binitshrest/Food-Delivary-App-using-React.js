import React, { useRef, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
// Direct React component imports
import { Swiper, SwiperSlide } from "swiper/swiper-react.mjs";

// Styles must use direct files imports
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation.scss"; // Navigation module
import "swiper/modules/pagination.scss"; // Pagination module
import useBanner from "../utils/useBanner";
import BannerCard from "./BannerCard";

//import './styles.css';

export default function Corousels() {
  const [swiperRef, setSwiperRef] = useState(null);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 12 }).map((_, index) => `Slide ${index + 1}`)
  );

  const bannerInfo = useBanner();
  return (
    <>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={false}
        spaceBetween={30}
        // pagination={{
        //   type: "fraction",
        // }}
        navigation={true}
        virtual
      >
        {bannerInfo?.map((info, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <BannerCard imageId={info.imageId} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
