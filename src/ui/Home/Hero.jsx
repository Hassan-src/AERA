import Button from "../Button";

import styles from "./Hero.module.css";

import Image from "../../assets/pics/HeroBackGroundImage.avif";

function Hero() {
  return (
    <div className={styles.hero}>
      <img className={styles.heroImage} src={Image} alt="" />
      <div className={styles.textsBox}>
        <span className={styles.luxuryText}>Luxury</span>
        <h1 className={styles.heroHeader}>furniture</h1>
        <div className={styles.showRoom}>
          <p className={styles.showRoomText}>
            Timeless forms, refined materials, and thoughtful craftsmanship for
            elevated living.
          </p>
          <Button className={styles.showRoomBtn} to={"/Collection"}>
            explore collection
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
