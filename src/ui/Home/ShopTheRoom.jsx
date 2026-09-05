import { Link } from "react-router-dom";
import styles from "./ShopTheRoom.module.css";
import asideImage from "../../assets/RelaxingreclinersofaTransparent.avif";
import backGround from "../../assets/PickYourFurniture.avif";
function ShopTheRoom() {
  return (
    <div className={styles.main}>
      <div className={styles.aside}>
        <span className={styles.asideNumber}>03</span>
        <div className={styles.asideImageBox}>
          <img
            className={styles.asideImage}
            src={asideImage}
            alt="ChaiseLoungeSofa"
          />
        </div>
        <span className={styles.asideName}>Oslo</span>
      </div>
      <div className={styles.mapSection}>
        <img
          className={styles.mapSectionBackGround}
          src={backGround}
          alt="ShopTheRoom"
        />
        <div className={styles.windsor}>
          <Link className={`${styles.windsorLink} ${styles.linkUni}`} to="">
            Windsor
          </Link>
        </div>
        <div className={styles.ottomans}>
          <Link className={`${styles.ottomansLink} ${styles.linkUni}`} to="">
            Ottoman
          </Link>
        </div>
        <div className={styles.barcelona}>
          <Link className={`${styles.barcelonaLink} ${styles.linkUni}`} to="">
            Barcelona
          </Link>
        </div>
        <div className={styles.palmer}>
          <Link className={`${styles.palmerLink} ${styles.linkUni}`} to="">
            Palmer
          </Link>
        </div>
        <div className={styles.arco}>
          <Link className={`${styles.arcoLink} ${styles.linkUni}`} to="">
            Arco
          </Link>
        </div>
        <div className={styles.tessa}>
          <Link className={`${styles.tessaLink} ${styles.linkUni}`} to="">
            Tessa
          </Link>
        </div>
        <div className={styles.aurelia}>
          <Link className={`${styles.aureliaLink} ${styles.linkUni}`} to="">
            Aurelia
          </Link>
        </div>
        <div className={styles.nora}>
          <Link className={`${styles.noraLink} ${styles.linkUni}`} to="">
            Nora
          </Link>
        </div>
        <div className={styles.cove}>
          <Link className={`${styles.coveLink} ${styles.linkUni}`} to="">
            Cove
          </Link>
        </div>
        <div className={styles.atelier}>
          <Link className={`${styles.atelierLink} ${styles.linkUni}`} to="">
            Atelier
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ShopTheRoom;
