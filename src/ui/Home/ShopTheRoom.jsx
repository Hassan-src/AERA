import Button from "../Button";

import styles from "./ShopTheRoom.module.css";

import backGround from "../../assets/pics/PickYourFurniture.avif";
import { products } from "../../data/products";

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
                to={`/product/${products.find((data) => data.name === "Windsor")?.id}`}
              >
                Windsor
              </Button>
            </div>
            <div className={styles.ottomans}>
              <Button
                className={`${styles.ottomansLink} ${styles.linkUni}`}
                to={`/product/${products.find((data) => data.name === "Solace")?.id}`}
              >
                Ottoman
              </Button>
            </div>
            <div className={styles.barcelona}>
              <Button
                className={`${styles.barcelonaLink} ${styles.linkUni}`}
                to={`/product/${products.find((data) => data.name === "Barcelona")?.id}`}
              >
                Barcelona
              </Button>
            </div>
            <div className={styles.palmer}>
              <Button
                className={`${styles.palmerLink} ${styles.linkUni}`}
                to={`/product/${products.find((data) => data.name === "Palmer")?.id}`}
              >
                Palmer
              </Button>
            </div>
            <div className={styles.arco}>
              <Button
                className={`${styles.arcoLink} ${styles.linkUni}`}
                to={`/product/${products.find((data) => data.name === "Arco")?.id}`}
              >
                Arco
              </Button>
            </div>
            <div className={styles.tessa}>
              <Button
                className={`${styles.tessaLink} ${styles.linkUni}`}
                to={`/product/${products.find((data) => data.name === "Tessa")?.id}`}
              >
                Tessa
              </Button>
            </div>
            <div className={styles.aurelia}>
              <Button
                className={`${styles.aureliaLink} ${styles.linkUni}`}
                to={`/product/${products.find((data) => data.name === "Aurelia")?.id}`}
              >
                Aurelia
              </Button>
            </div>
            <div className={styles.nora}>
              <Button
                className={`${styles.noraLink} ${styles.linkUni}`}
                to={`/product/${products.find((data) => data.name === "Nora")?.id}`}
              >
                Nora
              </Button>
            </div>
            <div className={styles.cove}>
              <Button
                className={`${styles.coveLink} ${styles.linkUni}`}
                to={`/product/${products.find((data) => data.name === "Cove")?.id}`}
              >
                Cove
              </Button>
            </div>
            <div className={styles.atelier}>
              <Button
                className={`${styles.atelierLink} ${styles.linkUni}`}
                to={`/product/${products.find((data) => data.name === "Atelier")?.id}`}
              >
                Atelier
              </Button>
            </div>
          </div>
        </div>
        <div className={`${styles.mobileSize} ${styles.mobileActive}`}>
          <Button
            className={styles.linkMobile}
            to={`/product/${products.find((data) => data.name === "Windsor")?.id}`}
          >
            1.windsorLink
          </Button>
          <Button
            className={styles.linkMobile}
            to={`/product/${products.find((data) => data.name === "Solace")?.id}`}
          >
            2.ottomans
          </Button>
          <Button
            className={styles.linkMobile}
            to={`/product/${products.find((data) => data.name === "Barcelona")?.id}`}
          >
            3.barcelona
          </Button>
          <Button
            className={styles.linkMobile}
            to={`/product/${products.find((data) => data.name === "Palmer")?.id}`}
          >
            4.palmer
          </Button>
          <Button
            className={styles.linkMobile}
            to={`/product/${products.find((data) => data.name === "Arco")?.id}`}
          >
            5.arco
          </Button>
          <Button
            className={styles.linkMobile}
            to={`/product/${products.find((data) => data.name === "Tessa")?.id}`}
          >
            6.tessa
          </Button>
          <Button
            className={styles.linkMobile}
            to={`/product/${products.find((data) => data.name === "Aurelia")?.id}`}
          >
            7.aurelia
          </Button>
          <Button
            className={styles.linkMobile}
            to={`/product/${products.find((data) => data.name === "Nora")?.id}`}
          >
            8.nora
          </Button>
          <Button
            className={styles.linkMobile}
            to={`/product/${products.find((data) => data.name === "Cove")?.id}`}
          >
            9.cove
          </Button>
          <Button
            className={styles.linkMobile}
            to={`/product/${products.find((data) => data.name === "Atelier")?.id}`}
          >
            10.atelier
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ShopTheRoom;
