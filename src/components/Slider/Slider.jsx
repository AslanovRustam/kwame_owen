import s from "./slider.module.css";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { useState } from "react";
import NavBtn from "./NavBtn";
import image1 from "../../images/slider/Image1.png";
import image2 from "../../images/slider/Image2.png";
import image3 from "../../images/slider/Image3.png";
import image4 from "../../images/slider/Image4.png";
import image5 from "../../images/slider/Image5.png";

const Slider = () => {
  const [swiperActiveIndex, setSwiperActiveIndex] = useState(2);
  const data = [
    { id: 0, title: "beard trim", content: image1 },
    { id: 1, title: "kid’s Haircut", content: image2 },
    { id: 2, title: "Haircut", content: image3 },
    { id: 3, title: "beard trim", content: image4 },
    { id: 4, title: "Haircut", content: image5 },
    { id: 5, title: "beard trim", content: image1 },
    { id: 6, title: "kid’s Haircut", content: image2 },
    { id: 7, title: "Haircut", content: image3 },
    { id: 8, title: "beard trim", content: image4 },
    { id: 9, title: "Haircut", content: image5 },
  ];

  return (
    <div className={s.slider} id="services">
      <h2 className={s.title}>Services</h2>
      <div className={s.sliderWrapper}>
        <Swiper
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView="5.1"
          onSlideChange={(swiper) =>
            setSwiperActiveIndex(swiper.activeIndex + 2)
          }
        >
          {data.map(({ id, title, content }, idx) => (
            <SwiperSlide key={id}>
              <div
                className={`${s.item} ${idx === swiperActiveIndex && s.active}`}
              >
                <div
                  className={s.swiperContent}
                  style={{ backgroundImage: `url(${content})` }}
                ></div>
                <p className={s.swiperTitle}>{title}</p>
              </div>
            </SwiperSlide>
          ))}
          <NavBtn />
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
