import Button from "../Button";

import styles from "./ShopTheRoom.module.css";

import backGround from "../../assets/pics/PickYourFurniture.avif";

function ShopTheRoom() {
  return (
    <div className={styles.main}>
      <div className={styles.mainBox}>
        <h2 className={styles.header}>Shop the room</h2>
        <div className={styles.mapSection}>
          <img
            className={styles.mapSectionBackGround}
            src={backGround}
            alt="ShopTheRoom"
          />
          <div className={styles.windsor}>
            <Button className={`${styles.windsorLink} ${styles.linkUni}`} to="">
              Windsor
            </Button>
          </div>
          <div className={styles.ottomans}>
            <Button
              className={`${styles.ottomansLink} ${styles.linkUni}`}
              to=""
            >
              Ottoman
            </Button>
          </div>
          <div className={styles.barcelona}>
            <Button
              className={`${styles.barcelonaLink} ${styles.linkUni}`}
              to=""
            >
              Barcelona
            </Button>
          </div>
          <div className={styles.palmer}>
            <Button className={`${styles.palmerLink} ${styles.linkUni}`} to="">
              Palmer
            </Button>
          </div>
          <div className={styles.arco}>
            <Button className={`${styles.arcoLink} ${styles.linkUni}`} to="">
              Arco
            </Button>
          </div>
          <div className={styles.tessa}>
            <Button className={`${styles.tessaLink} ${styles.linkUni}`} to="">
              Tessa
            </Button>
          </div>
          <div className={styles.aurelia}>
            <Button className={`${styles.aureliaLink} ${styles.linkUni}`} to="">
              Aurelia
            </Button>
          </div>
          <div className={styles.nora}>
            <Button className={`${styles.noraLink} ${styles.linkUni}`} to="">
              Nora
            </Button>
          </div>
          <div className={styles.cove}>
            <Button className={`${styles.coveLink} ${styles.linkUni}`} to="">
              Cove
            </Button>
          </div>
          <div className={styles.atelier}>
            <Button className={`${styles.atelierLink} ${styles.linkUni}`} to="">
              Atelier
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopTheRoom;
