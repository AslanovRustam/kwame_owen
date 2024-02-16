import s from "./navlinks.module.css";

const Navlinks = () => {
  return (
    <nav className={s.navigation}>
      <li className={s.item}>
        <a href="#main">Main</a>
      </li>
      <li className={s.item}>
        <a href="#services">Services</a>
      </li>
      <li className={s.item}>
        <a href="#stylists">Stylists</a>
      </li>
      <li className={s.item}>
        <a href="#about">About Us</a>
      </li>
    </nav>
  );
};

export default Navlinks;
