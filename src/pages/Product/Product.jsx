import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import Button from "../../ui/Button";

import styles from "./Product.module.css";

import cart from "../../assets/svgs/cart.svg";

function Product() {
  const { id } = useParams();
  const product = products.find((product) => product.id === Number(id));
  return (
    <div className={styles.main}>
      <div className={styles.imageSide}>
        <img
          className={styles.mainImage}
          src={product.imageMain}
          alt={product.name}
          loading="lazy"
        />
      </div>
      <div className={styles.productInfoSide}>
        <h1 className={styles.productName}>{product.name}</h1>
        <span className={styles.productType}>{product.type}</span>
        <p className={styles.productDescription}>{product.description}</p>
        <span className={styles.productPrice}>
          ${product.price}
          <span className={styles.productPriceOnTop}>.99</span>
        </span>
        <Button className={styles.addToCartBtn}>
          <img className={styles.addToCartBtnImage} src={cart} alt="" />
          Add to cart
        </Button>
      </div>
    </div>
  );
}

export default Product;
