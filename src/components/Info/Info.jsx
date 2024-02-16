import s from "./info.module.css";
import star from "../../images/star.png";

const Info = ({ name, date }) => {
  return (
    <div className={s.container}>
      <div className={s.circle}></div>
      <div className={s.info}>
        <p className={s.name}>{name}</p>
        <ul className={s.list}>
          <li className={s.item}>
            <img src={star} alt="star" className={s.star} />
          </li>
          <li className={s.item}>
            <img src={star} alt="star" className={s.star} />
          </li>
          <li className={s.item}>
            <img src={star} alt="star" className={s.star} />
          </li>
          <li className={s.item}>
            <img src={star} alt="star" className={s.star} />
          </li>
          <li className={s.item}>
            <img src={star} alt="star" className={s.star} />
          </li>
        </ul>
        <p className={s.date}>{date}</p>
      </div>
    </div>
  );
};

export default Info;
