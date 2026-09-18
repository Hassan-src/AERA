import Button from "../../ui/Button";
import styles from "./ContactUs.module.css";
function ContactUs() {
  return (
    <div className={styles.main}>
      <Button className={styles.backBtn} to={"/"}>
        &larr; Back
      </Button>
      <h1 className={styles.header}>Contact Us</h1>
      <h2 className={styles.h2}>We're Here to Help</h2>
      <p className={styles.text}>
        Whether you have a question about a piece of furniture, need help with
        an order, or simply want to learn more about AERA, our team is here to
        assist.
      </p>
      <br />
      <p className={styles.text}>
        We believe choosing furniture should feel personal and considered. If
        you need guidance with materials, dimensions, care, delivery, or
        anything else, don't hesitate to reach out.
      </p>
      <br />
      <h2 className={styles.h2}>How Can We Help?</h2>
      <h3 className={styles.h3}>Product Questions</h3>
      <p className={styles.text}>
        Looking for more information about a particular piece? Ask us about
        dimensions, materials, finishes, availability, or product details.
      </p>
      <br />
      <h3 className={styles.h3}>Orders & Delivery</h3>
      <p className={styles.text}>
        Need an update on an existing order or have a question about delivery?
        Send us your order information and our team will assist.
      </p>
      <br />
      <h3 className={styles.h3}>Care & Warranty</h3>
      <p className={styles.text}>
        Not sure how to care for your furniture or whether an issue is covered
        by warranty? We're happy to help.
      </p>
      <br />
      <div className={styles.linkToPagesBox}>
        <Button className={styles.linkToPages} to={"/Care Instructions"}>
          Care Instructions Page
        </Button>
        <Button className={styles.linkToPages} to={"/Warranty"}>
          Warranty Page
        </Button>
      </div>
      <br />
      <h3 className={styles.h3}>Custom Requests</h3>
      <p className={styles.text}>
        Not sure how to care for your furniture or whether an issue is covered
        by warranty? We're happy to help.
      </p>
      <br />
      <h2 className={styles.h2}>Get in Touch</h2>
      <span>
        <b>Email:</b>{" "}
        <a className={`${styles.linkToPages} ${styles.email}`} href="">
          support@aera.com
        </a>
      </span>
      <br />
      <span>
        <b>Customer Service:</b> <span>Monday – Friday</span>{" "}
        <span>9:00 AM – 6:00 PM</span>
      </span>
      <br />
      <h3 className={styles.h3}>Response Time</h3>
      <p className={styles.text}>
        We aim to respond to inquiries within 1–2 business days.
      </p>
      <br />
      <blockquote className={styles.quote}>
        <q>
          Every space is different. We're here to help you find the pieces that
          make yours feel right.
        </q>
      </blockquote>
      <br />
    </div>
  );
}

export default ContactUs;
