import React from "react";
import s from "./header.module.css";
import Navlinks from "../Navlinks/Navlinks";

const Header = () => {
  return (
    <header className={s.header}>
      <p className={s.logo}>
        <a href="#">Trimmed</a>
      </p>
      <Navlinks />
    </header>
  );
};

export default Header;
