import Button from "../Button";

import styles from "./OurStory.module.css";

import background from "../../assets/pics/OurStoryBackGroundImage.avif";

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
        <Button className={styles.storyLink} to={"./LearnOurStory"}>
          Learn our story
        </Button>
      </div>
    </div>
  );
}

export default OurStory;
