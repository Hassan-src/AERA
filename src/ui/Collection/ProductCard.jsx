import Button from "../Button.jsx";
import styles from "./ProductCard.module.css";
import { products } from "../../data/products.js";
function ProductCard() {
  return (
    <>
      {products.map((data) => (
        <div className={styles.main} key={data.id}>
          <div className={styles.productImageBox}>
            <img
              className={styles.productImage}
              src={data.imageMain}
              alt={data.name}
            />
          </div>
          <div className={styles.productInfoBox}>
            <span className={styles.productCategoryName}>{data.category}</span>
            <div className={styles.productInfo}>
              <h4 className={styles.productName}>{data.name}</h4>
              <div className={styles.priceBtnBox}>
                <span className={styles.productPrice}>
                  ${data.price}
                  <span className={styles.productPriceOnTop}>.99</span>
                </span>
                <Button className={styles.btnOpen} to={`/product/${data.id}`}>
                  view product &rarr;
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProductCard;
