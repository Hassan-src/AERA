import { Link } from "react-router-dom";
import styles from "./ShopTheRoom.module.css";

function ShopTheRoom() {
  return (
    <div className={styles.main}>
      <div className={styles.aside}>
        <span className={styles.asideNumber}>03</span>
        <div className={styles.asideImageBox}>
          {/* <img
            className={styles.asideImage}
            src={asideImage}
            alt="ChaiseLoungeSofa"
          /> */}
        </div>
        <span className={styles.asideName}>Ottoman</span>
      </div>
      <div className={styles.mapSection}>
        <div className={styles.windsor}>
          <Link className={styles.windsorLink} to="">
            Windsor
          </Link>
        </div>
        <div className={styles.ottomans}>
          <Link className={styles.ottomansLink} to="">
            Ottoman
          </Link>
        </div>
        <div className={styles.barcelona}>
          <Link className={styles.barcelonaLink} to="">
            Barcelona
          </Link>
        </div>
        <div className={styles.palmer}>
          <Link className={styles.palmerLink} to="">
            Palmer
          </Link>
        </div>
        <div className={styles.arco}>
          <Link className={styles.arcoLink} to="">
            Arco
          </Link>
        </div>
        <div className={styles.tessa}>
          <Link className={styles.tessaLink} to="">
            Tessa
          </Link>
        </div>
        <div className={styles.aurelia}>
          <Link className={styles.aureliaLink} to="">
            Aurelia
          </Link>
        </div>
        <div className={styles.nora}>
          <Link className={styles.noraLink} to="">
            Nora
          </Link>
        </div>
        <div className={styles.cove}>
          <Link className={styles.coveLink} to="">
            Cove
          </Link>
        </div>
        <div className={styles.atelier}>
          <Link className={styles.atelierLink} to="">
            Atelier
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ShopTheRoom;
