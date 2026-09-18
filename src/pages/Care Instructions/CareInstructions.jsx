import Button from "../../ui/Button";
import styles from "./CareInstructions.module.css";

function CareInstructions() {
  return (
    <div className={styles.main}>
      <Button className={styles.backBtn} to={"/"}>
        &larr; Back
      </Button>
      <h1 className={styles.header}>Care Instructions</h1>
      <h2 className={styles.h2}>Preserve the Beauty</h2>
      <p className={styles.text}>
        At <b>AERA Furniture</b>, every piece is designed to become part of your
        space for years to come. Proper care helps preserve the character,
        comfort, and finish of your furniture while allowing its materials to
        age naturally and beautifully.
      </p>
      <br />
      <p className={styles.text}>
        Because each piece may use different materials and finishes, always
        refer to the care information provided with your specific product.
      </p>
      <br />
      <h2 className={styles.h2}>General Care</h2>
      <ul className={styles.unorderedList}>
        <li>Scheduled delivery appointments</li>
        <li>Careful handling and transportation</li>
        <li>Room-of-choice delivery where available</li>
        <li>Packaging removal where applicable</li>
      </ul>
      <br />
      <h2 className={styles.h2}>Wood & Natural Materials</h2>
      <p className={styles.text}>
        Natural wood and other organic materials have their own unique grain,
        tone, and character. Slight variations in color and texture are natural
        and should be expected.
      </p>
      <br />
      <p className={styles.text}>
        Clean wooden surfaces gently with a soft, slightly damp cloth when
        necessary, followed by a dry cloth. Avoid excessive moisture and allow
        the surface to dry naturally.
      </p>
      <br />
      <h2 className={styles.h2}>Upholstery & Fabric</h2>
      <p className={styles.text}>
        Vacuum upholstered surfaces regularly using a suitable upholstery
        attachment. Address spills as soon as possible by gently blotting the
        affected area rather than rubbing it.
      </p>
      <br />
      <p className={styles.text}>
        For deeper cleaning, we recommend using a professional upholstery
        cleaning service when appropriate for the fabric.
      </p>
      <br />
      <blockquote className={styles.quote}>
        <q>
          Good care doesn't preserve furniture from time — it allows it to age
          beautifully with it..
        </q>
      </blockquote>
      <br />
      <h2 className={styles.h2}>Need Help With Care?</h2>
      <p className={styles.text}>
        If you're unsure how to care for a particular material or finish,
        contact our team before applying a cleaning product. We're happy to help
        you find the appropriate care method for your AERA piece.
      </p>
      <br />
      <Button className={styles.linkToPages} to={"/ContactUs"}>
        Contact Us
      </Button>
      <br />
    </div>
  );
}

export default CareInstructions;
