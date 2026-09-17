import Button from "../../ui/Button";
import styles from "./FAQ.module.css";
function FAQ() {
  return (
    <div className={styles.main}>
      <Button className={styles.backBtn} to={"/"}>
        &larr; Back
      </Button>
      <details className={styles.questionBox}>
        <summary className={styles.question}>
          What makes AERA different?
        </summary>
        <p className={styles.text}>
          Timeless design, considered materials, and craftsmanship focused on
          lasting quality.
        </p>
      </details>
      <details className={styles.questionBox}>
        <summary className={styles.question}>
          Are your pieces made to last?
        </summary>
        <p className={styles.text}>
          Every piece is designed with durability, comfort, and longevity in
          mind.
        </p>
      </details>
      <details className={styles.questionBox}>
        <summary className={styles.question}>
          Can I customize my furniture?
        </summary>
        <p className={styles.text}>
          Selected pieces may offer customization options. Contact our team to
          explore what is available.
        </p>
      </details>
      <details className={styles.questionBox}>
        <summary className={styles.question}>
          How do I care for my furniture?
        </summary>
        <p className={styles.text}>
          Care instructions depend on the materials used and are provided with
          each piece.
        </p>
      </details>
      <details className={styles.questionBox}>
        <summary className={styles.question}>
          How long does delivery take?
        </summary>
        <p className={styles.text}>
          Delivery times vary by product and destination. Estimated timing is
          provided with your order.
        </p>
      </details>
      <details className={styles.questionBox}>
        <summary className={styles.question}>
          Do you ship internationally?
        </summary>
        <p className={styles.text}>
          International delivery is available for selected destinations. Contact
          us for details.
        </p>
      </details>
      <details className={styles.questionBox}>
        <summary className={styles.question}>How can I contact you?</summary>
        <p className={styles.text}>
          Our team is available through the Contact page to assist with any
          questions.
        </p>
      </details>
    </div>
  );
}

export default FAQ;
