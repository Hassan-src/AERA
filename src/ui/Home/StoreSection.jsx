import { products } from "../../data/products";
import Button from "../Button";

import styles from "./StoreSection.module.css";

import cart from "../../assets/svgs/cart-white.svg";
import arrow from "../../assets/svgs/Arrow-right.svg";
function StoreSection() {
  const storeData = [
    products.find((data) => data.category === "Sofa"),
    products.find((data) => data.category === "Table"),
    products.find((data) => data.category === "Chair"),
  ];
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.headerCategories}>categories</span>
          <h2 className={styles.headerText}>Selected Pieces</h2>
        </div>
        <div className={styles.merchesMainBox}>
          {storeData.map((data) => (
            <div
              className={`${styles.merches} ${data.category === "Table" ? styles.table : ""}`}
              key={data.id}
            >
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
              <Button className={styles.buyNowBtn}>
                <img className={styles.buyNowBtnImage} src={cart} alt="cart" />
              </Button>
              <Button className={styles.categoryBtn}>
                {data.category} category
                <img
                  className={styles.categoryBtnArrow}
                  src={arrow}
                  alt="arrow"
                />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StoreSection;
