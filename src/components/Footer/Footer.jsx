import Navlinks from "../Navlinks/Navlinks";
import s from "./footer.module.css";
import { ReactComponent as Facebook } from "../../images/facebook.svg";
import { ReactComponent as Instagram } from "../../images/instagram.svg";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.info}>
        <p className={s.logo}>
          <a href="#">Trimmed</a>
        </p>
        <Navlinks />
        <div className={s.socials}>
          <p className={s.text}>Follow Us on:</p>
          <div className={s.links}>
            <a target="_blank" href="https://www.instagram.com/">
              <Instagram className={s.socialIconInst} />
            </a>
            <a target="_blank" href="https://www.facebook.com/">
              <Facebook className={s.socialIcon} />
            </a>
          </div>
        </div>
      </div>
      <div>
        <a href="mailto: trimmed@example.com">Email: trimmed@example.com</a>
      </div>
      <div>
        <a href="tel:1(326)695-7912">Phone: 1 (326) 695-7912</a>
      </div>
    </footer>
  );
};

export default Footer;
