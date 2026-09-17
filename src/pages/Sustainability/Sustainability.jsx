import Button from "../../ui/Button";
import styles from "./Sustainability.module.css";
function Sustainability() {
  return (
    <div className={styles.main}>
      <Button className={styles.backBtn} to={"/"}>
        &larr; Back
      </Button>
      <h1 className={styles.header}>Sustainability</h1>
      <h2 className={styles.h2}>Designed With a Lighter Footprint</h2>
      <p className={styles.text}>
        At <b>AERA Furniture</b>, we believe thoughtful design should consider
        not only how a piece looks and feels, but also how it exists in the
        world. We strive to make considered choices in our materials,
        production, and design processes, creating furniture that is made to be
        appreciated for years rather than replaced with the seasons.
      </p>
      <br />
      <p className={styles.text}>
        We focus on timeless forms and enduring quality, reducing the desire for
        disposable design. By choosing carefully considered materials and
        creating pieces built for longevity, we aim to bring a more responsible
        approach to modern furniture.
      </p>
      <br />
      <blockquote className={styles.quote}>
        <q>True sustainability begins with creating something worth keeping.</q>
      </blockquote>
      <br />
      <p className={styles.text}>
        Our commitment is simple: design with intention, value quality over
        excess, and create furniture that can remain part of your space for
        years to come.
      </p>
    </div>
  );
}

export default Sustainability;
