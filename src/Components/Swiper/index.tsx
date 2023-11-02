import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

export const SwiperComponnet = ({ dataApi }: any) => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 10,
        modifier: 100,
        slideShadows: false,
      }}
      pagination={{
        el: ".swiper-pagination",
        clickable: true,
      }}
      style={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
    >
      {dataApi.map((item: any, index: number) => {
        return (
          <SwiperSlide
          key={index}
          className="flex items-center justify-center"
          >
            <img
              src={item.url}
              alt="new"
              style={{borderRadius: 7}}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
