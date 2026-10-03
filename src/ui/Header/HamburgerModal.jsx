import Button from "../Button";

import styles from "./HamburgerModal.module.css";

import cart from "../../assets/svgs/cart.svg";
import profile from "../../assets/svgs/profile.svg";

function HamburgerModal() {
  return (
    <div className={styles.modal}>
      <Button className={`${styles.btns} ${styles.btnLink}`} to={"/profile"}>
        <img className={styles.btnImage} src={profile} alt="profile" />
        Profile
      </Button>
      <Button className={`${styles.btns} ${styles.btnLink}`} to={"/cart"}>
        <img className={styles.btnImage} src={cart} alt="cart" />
        Cart
      </Button>
    </div>
  );
}

export default HamburgerModal;
