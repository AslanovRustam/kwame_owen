import Info from "../Info/Info";
import s from "./clients.module.css";
import arrowClients from "../../images/arrowClients.png";

const Clients = () => {
  return (
    <div className={s.container} id="about">
      <h2 className={s.title}>OUR CLIENTS SAID</h2>
      <div className={s.right}>
        <div className={s.firstRow}>
          <div className={s.containerGrey}></div>
          <div className={s.containerText}>
            <p className={s.text}>
              "The barber understood exactly what I wanted and delivered it
              flawlessly. The place exudes professionalism and style."
            </p>
            <Info name="Cameron Williamson" date="31.01.2024" />
          </div>
          <div className={s.containerGrey}>
            <div className={s.innerBtn}>
              <div className={s.wrapperText}>
                <p className={s.text}>More</p>
                <p className={s.text}>about</p>
                <p className={s.text}>us</p>
              </div>
              <img className={s.arrowClients} src={arrowClients} alt="arrow" />
            </div>
          </div>
        </div>
        <div className={s.firstRow}>
          <div className={s.containerGreyHalf}></div>
          <div className={s.containerText}>
            <p className={s.text}>
              "They've taken the time to thoroughly grasp our objectives, target
              audience, and the impact we aspire to achieve."
            </p>
            <Info name="Guy Hawkins" date="04.02.2024" />
          </div>
          <div className={s.containerText}>
            <p className={s.text}>
              "Absolutely stellar experience at this barber shop! The attention
              to detail in the cut was impressive, and the atmosphere was
              friendly and inviting."
            </p>
            <Info name="Robert Fox" date="08.12.2023" />
          </div>
          <div className={s.containerGreyHalf}></div>
        </div>
        <div className={s.firstRow}>
          <div className={s.containerGreyLast}></div>
          <div className={s.containerGreyLast}></div>
          <div className={s.containerGreyLast}></div>
        </div>
      </div>
    </div>
  );
};

export default Clients;

/* <div className={s.containerGreyHalf}></div> */

/* <div className={s.containerGreyLast}></div> */
