import Button from "../Button.jsx";
import { products } from "../../data/products.js";

import styles from "./ProductCard.module.css";

function ProductCard({ categoriesValue, pricingValue }) {
  const category = products.filter((data) => data.category === categoriesValue);
  let selectedCategoryProducts =
    categoriesValue === "allProducts" ? products : category;
  if (pricingValue === "expensive")
    selectedCategoryProducts = [...selectedCategoryProducts].sort(
      (a, b) => b.price - a.price,
    );
  if (pricingValue === "cheap")
    selectedCategoryProducts = [...selectedCategoryProducts].sort(
      (a, b) => a.price - b.price,
    );
  return (
    <>
      {selectedCategoryProducts.map((data) => (
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
                <span className={styles.productPrice}>${data.price}</span>
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
