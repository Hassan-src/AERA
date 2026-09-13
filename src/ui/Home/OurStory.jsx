import styles from "./OurStory.module.css";
import background from "../../assets/OurStoryBackGroundImage.avif";
import { Link } from "react-router-dom";
function OurStory() {
  return (
    <div className={styles.main}>
      <img
        className={styles.backgroundImage}
        src={background}
        alt="woodworker"
      />
      <div className={styles.textBox}>
        <span className={styles.philosophyText}>our philosophy</span>
        <h2 className={styles.header}>made to last</h2>
        <p className={styles.paragraph}>
          Every peice is handcrafted with sustainable materials and traditional
          techniques, designed to age beautifully with you.
        </p>
        <Link className={styles.storyLink}>Learn our story</Link>
      </div>
    </div>
  );
}

export default OurStory;
