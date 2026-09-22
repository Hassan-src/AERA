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
          <div className={styles.dekstopLinkActive}>
            <div className={styles.windsor}>
              <Button
                className={`${styles.windsorLink} ${styles.linkUni}`}
                to=""
              >
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
              <Button
                className={`${styles.palmerLink} ${styles.linkUni}`}
                to=""
              >
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
              <Button
                className={`${styles.aureliaLink} ${styles.linkUni}`}
                to=""
              >
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
              <Button
                className={`${styles.atelierLink} ${styles.linkUni}`}
                to=""
              >
                Atelier
              </Button>
            </div>
          </div>
        </div>
        <div className={`${styles.mobileSize} ${styles.mobileActive}`}>
          <Button className={styles.linkMobile} to="">
            1.windsorLink
          </Button>
          <Button className={styles.linkMobile} to="">
            2.ottomans
          </Button>
          <Button className={styles.linkMobile} to="">
            3.barcelona
          </Button>
          <Button className={styles.linkMobile} to="">
            4.palmer
          </Button>
          <Button className={styles.linkMobile} to="">
            5.arco
          </Button>
          <Button className={styles.linkMobile} to="">
            6.tessa
          </Button>
          <Button className={styles.linkMobile} to="">
            7.aurelia
          </Button>
          <Button className={styles.linkMobile} to="">
            8.nora
          </Button>
          <Button className={styles.linkMobile} to="">
            9.cove
          </Button>
          <Button className={styles.linkMobile} to="">
            10.atelier
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ShopTheRoom;
