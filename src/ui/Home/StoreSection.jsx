import { products } from "../../data/products";

import styles from "./StoreSection.module.css";

import asideImage from "../../assets/LuxuryOttomanTableTransparent.avif";
import cart from "../../assets/cart.svg";
import arrow from "../../assets/Arrow-right.svg";
function StoreSection() {
  const storeData = [
    products.find((data) => data.category === "Sofa"),
    products.find((data) => data.category === "Table"),
    products.find((data) => data.category === "Chair"),
  ];
  return (
    <div className={styles.main}>
      <div className={styles.aside}>
        <span className={styles.asideNumber}>02</span>
        <div className={styles.asideImageBox}>
          <img
            className={styles.asideImage}
            src={asideImage}
            alt="ChaiseLoungeSofa"
          />
        </div>
        <span className={styles.asideName}>Ottoman</span>
      </div>
      <div className={styles.mainContent}>
        {storeData.map((data) => (
          <div className={styles.merches} key={data.id}>
            <div className={styles.merchImageBox}>
              <img
                className={styles.merchImage}
                src={data.imageTransparent}
                alt={data.type}
              />
            </div>
            <div className={styles.merchDescription}>
              <span className={styles.merchTypeName}>{data.type}</span>
              <div className={styles.merchNamePriceBox}>
                <h3 className={styles.merchName}>{data.name}</h3>
                <span className={styles.merchPrice}>
                  ${data.price}
                  <span className={styles.merchPriceOnTop}>.99</span>
                </span>
              </div>
            </div>
            <button className={styles.buyNowBtn}>
              <img className={styles.buyNowBtnImage} src={cart} alt="cart" />
            </button>
            <button className={styles.categoryBtn}>
              {data.category} category
              <img
                className={styles.categoryBtnArrow}
                src={arrow}
                alt="arrow"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StoreSection;
