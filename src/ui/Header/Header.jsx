import Button from "../Button";

import styles from "./Header.module.css";

import logo from "../../assets/svgs/logo.svg";
import cart from "../../assets/svgs/cart.svg";
import search from "../../assets/svgs/search.svg";
import profile from "../../assets/svgs/profile.svg";
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <Button to={"./"}>
          <img className={styles.logo} src={logo} alt="aera" />
        </Button>
      </div>
      <ul className={styles.linksList}>
        <li>
          <a href="#hero">hero</a>
        </li>
        <li>
          <a href="#storeSection">StoreSection</a>
        </li>
        <li>
          <a href="#shopTheRoom">ShopTheRoom</a>
        </li>
        <li>
          <a href="#ourStory">ourStory</a>
        </li>
        <li>
          <a href="#joinUs">joinUs</a>
        </li>
      </ul>
      <div className={styles.btnBox}>
        <Button className={styles.btns}>
          <img className={styles.btnImage} src={search} alt="search" />
        </Button>
        <Button className={styles.btns}>
          <img className={styles.btnImage} src={profile} alt="profile" />
        </Button>
        <Button className={styles.btns}>
          <img className={styles.btnImage} src={cart} alt="cart" />
        </Button>
      </div>
    </header>
  );
}

export default Header;
