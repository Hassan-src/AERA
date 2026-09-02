import styles from "./StoreSection.module.css";
import { products } from "../../data/products";
function StoreSection() {
  const storeData = products.slice(0, 3);
  const image = storeData.map((data) => data.image);
  console.log(image.map((i) => i.imageTransparent));
  return (
    <div className={styles.main}>
      <div className={styles.aside}>
        <span className={styles.asideNumber}>02</span>
        <div className={styles.asideImageBox}>
          {/* <img
            className={styles.heroAsideImage}
            src={asideImage}
            alt="MiloClubChair"
          /> */}
        </div>
        <span className={styles.asideName}>milo club</span>
      </div>
      <div className={styles.mainContent}>
        {storeData.map((data) => (
          <div className={styles.merches}>
            <img
              className={styles.merchImage}
              src={data.image.imageTransparent}
              alt={data.type}
            />
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
            <button className={styles.buyNowBtn}>DS</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StoreSection;
