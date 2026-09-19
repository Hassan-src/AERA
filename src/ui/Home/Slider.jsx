import styles from "./Slider.module.css";

function Slider() {
  return (
    <div className={styles.main}>
      <div className={styles.slideTrack}>
        <ul className={styles.sliderList}>
          <li className={styles.listedTexts}>TIMELESS BY DESIGN</li>
          <li className={styles.listedTexts}>CRAFTED WITH PURPOSE</li>
          <li className={styles.listedTexts}>MADE FOR EVERYDAY LIVING</li>
          <li className={styles.listedTexts}>DESIGNED TO BELONG</li>
          <li className={styles.listedTexts}>THE ART OF REFINED LIVING</li>
          <li className={styles.listedTexts}>QUALITY IN EVERY DETAIL</li>
          <li className={styles.listedTexts}>FORM MEETS FUNCTION</li>
          <li className={styles.listedTexts}>BUILT TO LAST</li>
          <li className={styles.listedTexts}>EFFORTLESSLY ELEGANT</li>
          <li className={styles.listedTexts}>FURNITURE WITH CHARACTER</li>
          <li className={styles.listedTexts}>DESIGNED FOR YOUR SPACE</li>
        </ul>
        <ul className={styles.sliderList}>
          <li className={styles.listedTexts}>TIMELESS BY DESIGN</li>
          <li className={styles.listedTexts}>CRAFTED WITH PURPOSE</li>
          <li className={styles.listedTexts}>MADE FOR EVERYDAY LIVING</li>
          <li className={styles.listedTexts}>DESIGNED TO BELONG</li>
          <li className={styles.listedTexts}>THE ART OF REFINED LIVING</li>
          <li className={styles.listedTexts}>QUALITY IN EVERY DETAIL</li>
          <li className={styles.listedTexts}>FORM MEETS FUNCTION</li>
          <li className={styles.listedTexts}>BUILT TO LAST</li>
          <li className={styles.listedTexts}>EFFORTLESSLY ELEGANT</li>
          <li className={styles.listedTexts}>FURNITURE WITH CHARACTER</li>
          <li className={styles.listedTexts}>DESIGNED FOR YOUR SPACE</li>
        </ul>
      </div>
    </div>
  );
}

export default Slider;
