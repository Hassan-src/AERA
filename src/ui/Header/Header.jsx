import HeaderBtns from "./HeaderBtns";
import Button from "../Button";

import styles from "./Header.module.css";

import logo from "../../assets/svgs/logoHeader.svg";
import HamburgerBtn from "./HamburgerBtn";
import { useState } from "react";
import HamburgerModal from "./HamburgerModal";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <Button to={"./"}>
          <img className={styles.logo} src={logo} alt="aera" />
        </Button>
      </div>
      <HeaderBtns />
      <HamburgerBtn />
    </header>
  );
}

export default Header;
