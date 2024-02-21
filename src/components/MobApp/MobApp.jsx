import s from "./mobapp.module.css";
import { ReactComponent as Logo } from "../../images/appleLogo.svg";

const MobApp = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>our app for your easy booking</h2>
      <ul className={s.list}>
        <li className={s.item}>
          <div className={s.wrapper}></div>
          <p className={s.text}>MAKE AN APPOINTMENT</p>
        </li>
        <li className={s.item}>
          <div className={s.wrapper}></div>
          <p className={s.text}>MAKE PAYMENTS</p>
        </li>
        <li className={s.item}>
          <div className={s.wrapper}></div>
          <p className={s.text}>TRACK YOUR BARBER</p>
        </li>
      </ul>
      <div className={s.appDownload}>
        <Logo className={s.logo} />
        <div className={s.infoContainer}>
          <p className={s.down}>Download on the</p>
          <span className={s.from}>App Store</span>
        </div>
      </div>
    </div>
  );
};

export default MobApp;
