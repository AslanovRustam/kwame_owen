import s from "./stylist.module.css";
// import { ReactComponent as Arrow } from "../../images/arrowUP.svg";
import arrow from "../../images/arrowUP.png";

const Stylist = () => {
  return (
    <div className={s.container} id="stylists">
      <h2 className={s.title}>OUR world class Stylists</h2>
      <div className={s.mozaik}>
        <div className={s.mozaikEl1}>
          <ul className={s.list}>
            <li className={s.item}>TOP Barber</li>
            <li className={s.item}>Haircuts</li>
            <li className={s.item}>kid’s haircuts</li>
            <li className={s.item}>beard trim</li>
          </ul>
          <div className={s.buttons}>
            <div className={s.left}>Wade Warren</div>
            <div className={s.right}>
              Book Now <img src={arrow} alt="arrow" className={s.arrow} />
            </div>
          </div>
        </div>
        <div className={s.mozaikEl2}>
          <div className={s.buttomButtons}>
            <div className={s.leftNew}>Esther Howard</div>
            <div className={s.arrowContainer}>
              <img src={arrow} alt="arrow" className={s.arrowNew} />
            </div>
          </div>
        </div>
        <div className={s.mozaikEl3}>
          <div className={s.buttomButtons}>
            <div className={s.leftNew}>Guy Hawkins</div>
            <div className={s.arrowContainer}>
              <img src={arrow} alt="arrow" className={s.arrowNew} />
            </div>
          </div>
        </div>
        <div className={s.mozaikEl4}>
          <div className={s.buttomButtons}>
            <div className={s.leftNew}>Brooklyn Simmons</div>
            <div className={s.arrowContainer}>
              <img src={arrow} alt="arrow" className={s.arrowNew} />
            </div>
          </div>
        </div>
        <div className={s.mozaikEl5}>
          <div className={s.buttomButtons}>
            <div className={s.leftNew}>Jacob Jones</div>
            <div className={s.arrowContainer}>
              <img src={arrow} alt="arrow" className={s.arrowNew} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stylist;
