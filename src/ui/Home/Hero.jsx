import styles from "./Hero.module.css";
import heroImage from "../../assets/Compact2-seater-Transparent.avif";
function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.textSide}>
        <span className={styles.luxuryText}>Luxury</span>
        <h1 className={styles.heroHeader}>furniture</h1>
        <div className={styles.showRoom}>
          <p className={styles.showRoomText}>
            Our furniture is an excellent symbol of the owner's great taste. Buy
            from us and emphasize your originality
          </p>
          <button className={styles.showRoomBtn}>showroom</button>
        </div>
      </div>
      <div className={styles.imageSide}>
        <div className={styles.imageSideBorderGlow}>
          <img
            className={styles.imagSidePic}
            src={heroImage}
            alt="Compact2-seater"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
