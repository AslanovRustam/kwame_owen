import { useSwiper } from "swiper/react";
import { ReactComponent as Arrow } from "../../images/arrow.svg";
import s from "./slider.module.css";

export default function NavBtn() {
  const swiper = useSwiper();
  return (
    <div className={s.swiperBtns}>
      <div className={s.btnPrev} onClick={() => swiper.slidePrev()}>
        <Arrow className={s.arrow} />
      </div>
      <div className={s.btnNext} onClick={() => swiper.slideNext()}>
        <Arrow className={s.arrow} />
      </div>
    </div>
  );
}
