import Button from "../../ui/Button";
import styles from "./CraftsmanShip.module.css";
function CraftsmanShip() {
  return (
    <div className={styles.main}>
      <Button className={styles.backBtn} to={"/"}>
        &larr; Back
      </Button>
      <h1 className={styles.header}>CraftsmanShip</h1>
      <p className={styles.text}>
        At <b>AERA Furniture</b>, we believe exceptional furniture is more than
        something you place in a room — it is part of the atmosphere you create,
        the memories you make, and the way you experience your everyday space.
      </p>
      <br />
      <p className={styles.text}>
        Our story is rooted in a passion for timeless design, thoughtful
        craftsmanship, and the belief that true luxury comes from simplicity. We
        create furniture that brings together refined forms, natural materials,
        and lasting comfort, designed to complement contemporary interiors while
        maintaining a sense of warmth and character.
      </p>
      <br />
      <p className={styles.text}>
        Every piece begins with attention to detail. From carefully considered
        proportions and elegant silhouettes to the textures and finishes that
        bring each design to life, we believe that the smallest details can make
        the greatest difference. Our approach is to create pieces that feel
        sophisticated without being excessive — furniture that quietly stands
        out and remains beautiful for years to come.
      </p>
      <br />
      <blockquote className={styles.quote}>
        <q>
          We believe the most beautiful spaces are not simply furnished — they
          are thoughtfully composed, lived in, and made timeless.
        </q>
      </blockquote>
      <br />
      <p className={styles.text}>
        Inspired by architecture, nature, and the spaces people call home. This
        inspiration shapes our collections and encourages us to design furniture
        that feels balanced, inviting, and effortless. Whether it becomes the
        centerpiece of a living room or a subtle addition to a carefully curated
        space, every AERA piece is created with purpose.
      </p>
      <br />
      <p className={styles.text}>
        <b>
          Discover the story behind AERA — where thoughtful design,
          craftsmanship, and timeless living come together.
        </b>
      </p>
    </div>
  );
}

export default CraftsmanShip;
