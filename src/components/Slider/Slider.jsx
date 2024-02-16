import s from "./slider.module.css";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { useState } from "react";
import NavBtn from "./NavBtn";
const Slider = () => {
  const [swiperActiveIndex, setSwiperActiveIndex] = useState(2);
  const data = [
    { id: 0, title: "Haircut", content: "image" },
    { id: 1, title: "kid’s Haircut", content: "image" },
    { id: 2, title: "haircut", content: "image" },
    { id: 3, title: "beard trim", content: "image" },
    { id: 4, title: "beard trim", content: "image" },
    { id: 5, title: "kid’s Haircut", content: "image" },
    { id: 6, title: "beard trim", content: "image" },
  ];

  return (
    <div className={s.slider} id="services">
      <h2 className={s.title}>Services</h2>
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView="5"
        onSlideChange={(swiper) => setSwiperActiveIndex(swiper.activeIndex + 2)}
      >
        {data.map(({ id, title, content }, idx) => (
          <SwiperSlide key={id}>
            <div
              className={`${s.item} ${idx === swiperActiveIndex && s.active}`}
            >
              <div className={s.swiperContent}>{content}</div>
              <p className={s.swiperTitle}>{title}</p>
            </div>
          </SwiperSlide>
        ))}
        <NavBtn />
      </Swiper>
    </div>
  );
};

export default Slider;
