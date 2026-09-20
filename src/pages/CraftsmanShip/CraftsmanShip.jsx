import Button from "../../ui/Button";
import styles from "./CraftsmanShip.module.css";
function CraftsmanShip() {
  return (
    <div className={styles.main}>
      <Button className={styles.backBtn} to={"/"}>
        &larr; Back
      </Button>
      <h1 className={styles.header}>CraftsmanShip</h1>
      <h2 className={styles.h2}>Made With Purpose</h2>
      <p className={styles.text}>
        Behind every AERA piece is a deep appreciation for craftsmanship. We
        believe exceptional furniture is defined by the details — the precision
        of its construction, the balance of its proportions, the feel of its
        materials, and the care that goes into bringing an idea to life.
      </p>
      <br />
      <p className={styles.text}>
        Our designs combine contemporary aesthetics with traditional attention
        to detail. Every curve, joint, surface, and finish is considered to
        create furniture that feels refined while remaining comfortable and
        functional.
      </p>
      <br />
      <blockquote className={styles.quote}>
        <q>
          Good design catches the eye. Great craftsmanship keeps you looking.
        </q>
      </blockquote>
      <br />
      <p className={styles.text}>
        From the first concept to the final finish, we believe furniture should
        be made with patience, precision, and purpose. The result is a
        collection designed not simply to fill a space, but to become part of
        it.
      </p>
    </div>
  );
}

export default CraftsmanShip;
