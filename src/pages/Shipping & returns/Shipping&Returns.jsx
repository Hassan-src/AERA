import Button from "../../ui/Button";
import styles from "./Shipping&Returns.module.css";
function ShippingReturns() {
  return (
    <div className={styles.main}>
      <Button className={styles.backBtn} to={"/"}>
        &larr; Back
      </Button>
      <h1 className={styles.header}>Shipping & Returns</h1>
      <h2 className={styles.h2}>Thoughtfully Delivered</h2>
      <br />
      <p className={styles.text}>
        At <b>AERA Furniture</b>, we believe the experience of receiving your
        furniture should be as considered as the piece itself. From careful
        preparation and packaging to delivery, we take every step to help ensure
        your order arrives safely and ready for your space.
      </p>
      <br />
      <hr />
      <br />
      <section id="Shipping">
        <h2 className={styles.h2}>Shipping</h2>
        <br />
        <h3 className={styles.h3}>Order Processing</h3>
        <p className={styles.text}>
          Orders are carefully prepared before leaving our facility. Processing
          times may vary depending on the product, availability, and whether the
          piece is made to order.
        </p>
        <br />
        <p className={styles.text}>
          Once your order has been processed, you will receive confirmation with
          the relevant delivery information.
        </p>
        <br />
        <h3 className={styles.h3}>Delivery Times</h3>
        <p className={styles.text}>
          Estimated delivery times depend on the product and destination.
        </p>
        <br />
        <h4 className={styles.h4}>Typical delivery:</h4>
        <ul className={styles.unorderedList}>
          <li>
            In-stock items: <b>3–7 business days</b>
          </li>
          <li>
            Larger furniture: <b>7–14 business days</b>
          </li>
          <li>
            Made-to-order pieces: <b>4–8 weeks</b>
          </li>
        </ul>
        <br />
        <em className={styles.emText}>
          Delivery estimates may vary during holidays, high-volume periods, or
          for remote destinations.
        </em>
      </section>
      <br />
      <hr />
      <br />
      <section id="FurnitureDelivery">
        <h3 className={styles.h3}>Furniture Delivery</h3>
        <p className={styles.text}>
          Because many AERA pieces are large or delicate, some furniture may
          require specialized delivery.
        </p>
        <br />
        <p className={styles.text}>For larger pieces, delivery may include:</p>
        <br />
        <ul className={styles.unorderedList}>
          <li>Scheduled delivery appointments</li>
          <li>Careful handling and transportation</li>
          <li>Room-of-choice delivery where available</li>
          <li>Packaging removal where applicable</li>
        </ul>
        <br />
        <p className={styles.text}>
          Our delivery team will provide instructions and coordinate with you
          before delivery.
        </p>
      </section>
      <br />
      <hr />
      <br />
      <section id="OrderInspection">
        <h3 className={styles.h3}>Inspect Your Order</h3>
        <p className={styles.text}>
          We recommend inspecting your furniture carefully when it arrives.
        </p>
        <br />
        <p className={styles.text}>If your order arrives damaged:</p>
        <br />
        <ol className={styles.orderedList}>
          <li>Photograph the packaging and furniture.</li>
          <li>Keep the original packaging.</li>
          <li>Contact AERA as soon as possible.</li>
          <li>Provide your order number and photographs of the damage.</li>
        </ol>
        <br />
        <p className={styles.text}>
          Our team will review the situation and work with you toward an
          appropriate solution.
        </p>
      </section>
      <br />
      <hr />
      <br />
      <section id="Returns">
        <h2 className={styles.h2}>Returns</h2>
        <br />
        <h3 className={styles.h3}>Designed for Your Space</h3>
        <p className={styles.text}>
          We want you to be confident in your purchase. If your furniture isn't
          right for your space, you may be eligible to request a return within
          [X days] of delivery.
        </p>
        <br />
        <p className={styles.text}>Returned items must generally be:</p>
        <br />
        <ul className={styles.unorderedList}>
          <li>Unused and in original condition</li>
          <li>Free from stains, damage, or modifications</li>
          <li>Returned with original packaging where possible</li>
          <li>Accompanied by the original order information</li>
        </ul>
        <br />
        <p className={styles.text}>
          <b>Return shipping costs may apply.</b>
        </p>
      </section>
      <br />
      <hr />
      <br />
      <section id="NonReturnable">
        <h3 className={styles.h3}>Non-Returnable Items</h3>
        <p className={styles.text}>
          Certain products may not be eligible for return, including:
        </p>
        <br />
        <ul className={styles.unorderedList}>
          <li>Made-to-order furniture</li>
          <li>Customized or personalized pieces</li>
          <li>Items modified at the customer's request</li>
          <li>Final-sale products</li>
          <li>Products that have been used or damaged after delivery</li>
        </ul>
        <br />
        <p className={styles.text}>
          Please check the product page or contact our team before purchasing if
          you're unsure about an item's return eligibility.
        </p>
      </section>
      <br />
      <hr />
      <br />
      <section id="Exchange">
        <h2 className={styles.h2}>Exchanges</h2>
        <p className={styles.text}>
          If you receive an incorrect or damaged item, please contact us before
          arranging a return.
        </p>
        <br />
        <p className={styles.text}>
          For eligible products, exchanges may be available depending on
          inventory and product availability.
        </p>
      </section>
      <br />
      <hr />
      <br />
      <section id="Refunds">
        <h2 className={styles.h2}>Refunds</h2>
        <p className={styles.text}>
          Once a returned item has been received and inspected, we will notify
          you about the status of your refund.
        </p>
        <br />
        <p className={styles.text}>
          Approved refunds will be issued to the <b>original payment method</b>.
        </p>
        <br />
        <p className={styles.text}>
          Depending on your payment provider, it may take several business days
          for the refund to appear in your account.
        </p>
      </section>
      <br />
      <hr />
      <br />
      <section id="ChangesCancellations">
        <h2 className={styles.h2}>Changes & Cancellations</h2>
        <p className={styles.text}>
          If you need to change or cancel your order, please contact us as soon
          as possible.
        </p>
        <br />
        <p className={styles.text}>
          Once an order has entered production or has been prepared for
          shipment, cancellation or modification may no longer be possible.
        </p>
        <br />
        <p className={styles.text}>
          Made-to-order and customized pieces may have different cancellation
          terms.
        </p>
      </section>
      <br />
      <hr />
      <br />
      <section>
        <h2 className={styles.h2}>Need Help?</h2>
        <p className={styles.text}>
          Have a question about your delivery or return?
        </p>
        <br />
        <p className={styles.text}>
          <b>Our team is here to help</b>.
        </p>
        <br />
        <span className={styles.contactAera}>
          Contact AERA &rarr;{" "}
          <a className={styles.contactEmail} href="">
            support@aera.com
          </a>
        </span>
      </section>
    </div>
  );
}

export default ShippingReturns;
