import Button from "../../ui/Button";
import styles from "./Warranty.module.css";
function Warranty() {
  return (
    <div className={styles.main}>
      <Button className={styles.backBtn} to={"/"}>
        &larr; Back
      </Button>
      <h1 className={styles.header}>Warranty</h1>
      <h2 className={styles.h2}>Our Commitment to Quality</h2>
      <p className={styles.text}>
        At <b>AERA Furniture</b>, we believe quality should extend beyond the
        moment of purchase. Our warranty reflects our commitment to the
        craftsmanship, materials, and construction of our furniture.
      </p>
      <br />
      <p className={styles.text}>
        Each piece is designed and manufactured with careful attention to
        detail, and we stand behind the quality of our products under normal
        residential use.
      </p>
      <br />
      <h2 className={styles.h2}>Warranty Coverage</h2>
      <p className={styles.text}>
        Our warranty covers manufacturing defects in materials and workmanship
        that occur during the applicable warranty period.
      </p>
      <br />
      <p className={styles.text}>
        Depending on the product, this may include issues relating to:
      </p>
      <br />
      <ul className={styles.unorderedList}>
        <li>Structural construction</li>
        <li>Frame integrity</li>
        <li>Manufacturing defects</li>
        <li>Certain hardware or components</li>
        <li>Other defects resulting from the manufacturing process</li>
      </ul>
      <br />
      <h2 className={styles.h2}>What Isn't Covered</h2>
      <p className={styles.text}>
        If you believe your furniture has a manufacturing defect, please contact
        our team with:
      </p>
      <br />
      <ol className={styles.orderedList}>
        <li>Your order number</li>
        <li>A description of the issue</li>
        <li>Photographs showing the affected area</li>
        <li>Any additional information requested by our team</li>
      </ol>
      <br />
      <p className={styles.text}>
        We will review your claim and determine the appropriate next step.
      </p>
      <br />
      <blockquote className={styles.quote}>
        <q>
          Quality is not simply how a piece looks when it arrives — it is how it
          continues to live with you.
        </q>
      </blockquote>
      <br />
      <h2 className={styles.h2}>Important</h2>
      <p className={styles.text}>
        Warranty periods and coverage may vary by product. Please refer to the
        warranty information associated with your specific purchase for the
        applicable terms.
      </p>
      <br />
    </div>
  );
}

export default Warranty;
