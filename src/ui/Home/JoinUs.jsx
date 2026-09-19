import Button from "../Button";

import styles from "./JoinUs.module.css";

import sustainable from "../../assets/svgs/sustainable.svg";
import warranty from "../../assets/svgs/warranty.svg";
import truck from "../../assets/svgs/truck.svg";
function JoinUs() {
  return (
    <div className={styles.main}>
      <div className={styles.shipment}>
        <ul className={styles.facilitiesList}>
          <li className={styles.facility}>
            <img
              className={styles.facilityImage}
              src={sustainable}
              alt="sustainability"
            />
            <h3 className={styles.facilityHeader}>Thoughtfully Made</h3>
            <p className={styles.facilityText}>
              FCS-certified wood and eco-friendly textiles source responsibly.
            </p>
          </li>
          <li className={styles.facility}>
            <img
              className={styles.facilityImage}
              src={warranty}
              alt="warranty"
            />
            <h3 className={styles.facilityHeader}>5-year warranty</h3>
            <p className={styles.facilityText}>
              Qualities craftsmanship guaranteed to stand the test of time.
            </p>
          </li>
          <li className={styles.facility}>
            <img className={styles.facilityImage} src={truck} alt="delivery" />
            <h3 className={styles.facilityHeader}>white glove delivery</h3>
            <p className={styles.facilityText}>
              Premium delivery service including assembly and packaging removal.
            </p>
          </li>
        </ul>
      </div>
      <div className={styles.joinUs}>
        <h2 className={styles.joinUsHeader}>Stay in the AERA World</h2>
        <span className={styles.joinUsText}>
          Subscribe for new collections, design stories, and considered pieces
          for your space.
        </span>
        <form
          className={styles.joinUsForm}
          onChange={(e) => e.preventDefault()}
        >
          <input
            className={styles.joinUsInput}
            type="text"
            id="name"
            placeholder="Enter your name"
          />
          <Button className={styles.joinUsBtn}>Subscribe</Button>
        </form>
      </div>
    </div>
  );
}

export default JoinUs;
