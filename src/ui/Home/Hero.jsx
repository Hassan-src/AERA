import Button from "../Button";

import styles from "./Hero.module.css";

import heroImage from "../../assets/pics/HeroBackGroundImage.avif";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.textSide}>
        <div className={styles.textsBox}>
          <span className={styles.luxuryText}>Luxury</span>
          <h1 className={styles.heroHeader}>furniture</h1>
          <div className={styles.showRoom}>
            <p className={styles.showRoomText}>
              Our furniture is an excellent symbol of the owner's great taste.
              Buy from us and emphasize your originality
            </p>
            <Button className={styles.showRoomBtn}>showroom</Button>
          </div>
        </div>
      </div>
      <div className={styles.imageSide}>
        <img
          className={styles.imageSidePic}
          src={heroImage}
          alt="Compact2-seater"
        />
      </div>
    </div>
  );
}

export default Hero;
