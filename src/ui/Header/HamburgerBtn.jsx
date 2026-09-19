import { useState } from "react";
import Button from "../Button";

import styles from "./HamburgerBtn.module.css";
import HamburgerModal from "./HamburgerModal";

function HamburgerBtn() {
  const [hamOpener, setHamOpener] = useState(false);
  console.log(hamOpener);
  return (
    <>
      <Button
        className={`${styles.hamburgerBtn} ${hamOpener ? styles.hamOpen : ""}`}
        aria-label="Toggle menu"
        onClick={() => setHamOpener((open) => !open)}
        aria-expanded={hamOpener}
      >
        <span className={styles.hamburger}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </span>
      </Button>
      {hamOpener && <HamburgerModal />}
    </>
  );
}

export default HamburgerBtn;
