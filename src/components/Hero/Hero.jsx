import s from "./hero.module.css";
import star from "../../images/star.png";

const Hero = () => {
  return (
    <div className={s.container} id="main">
      <h1 className={s.title}>
        Where style <br></br> speaks louder!
      </h1>
      <ul className={s.list}>
        <li className={s.item}>
          <p className={s.text}>Facebook</p>
          <ul className={s.stars}>
            <li className={s.itemStar}>
              <img className={s.star} src={star} alt="star" />
            </li>
            <li className={s.itemStar}>
              <img className={s.star} src={star} alt="star" />
            </li>
            <li className={s.itemStar}>
              <img className={s.star} src={star} alt="star" />
            </li>
            <li className={s.itemStar}>
              <img className={s.star} src={star} alt="star" />
            </li>
            <li className={s.itemStar}>
              <img className={s.star} src={star} alt="star" />
            </li>
          </ul>
          <p className={s.description}>128 Reviews</p>
        </li>
        <li className={s.item}>
          <p className={s.text}>260+</p>
          <p className={s.description}>haircuts</p>
        </li>
        <li className={s.item}>
          <p className={s.text}>60+</p>
          <p className={s.description}>clients</p>
        </li>
        <li className={s.item}>
          <p className={s.text}>5+</p>
          <p className={s.description}>years</p>
        </li>
      </ul>
      <p className={s.textSecond}>
        Discover a blend of tradition and style at our barbershop. Expert cuts,
        timeless grooming, and personalized service for a confident, refined
        look. Your best style starts here.
      </p>
      <div className={s.buttons}>
        <button type="button" className={s.buttonBook}>
          Book now!
        </button>
        <button type="button" className={s.buttonExplore}>
          Explore services
        </button>
      </div>
    </div>
  );
};

export default Hero;
