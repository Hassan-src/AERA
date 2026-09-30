import Button from "../Button";

import styles from "./HeaderBtns.module.css";

import cart from "../../assets/svgs/cart.svg";
import search from "../../assets/svgs/search.svg";
import profile from "../../assets/svgs/profile.svg";

function HeaderBtns() {
  const name = JSON.parse(localStorage.getItem("user") || null)?.name;
  return (
    <div className={styles.btnBox}>
      <Button className={styles.btns}>
        <img className={styles.btnImage} src={search} alt="search" />
      </Button>
      <Button className={`${styles.btns} ${styles.btnLink}`} to={"/profile"}>
        <img className={styles.btnImage} src={profile} alt="profile" />
        <span>{name}</span>
      </Button>
      <Button className={`${styles.btns} ${styles.btnLink}`} to={"/cart"}>
        <img className={styles.btnImage} src={cart} alt="cart" />
      </Button>
    </div>
  );
}

export default HeaderBtns;
