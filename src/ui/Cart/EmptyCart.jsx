import Button from "../Button";
import styles from "./EmptyCart.module.css";
import empty from "../../assets/svgs/emptyghost.svg";
function EmptyCart() {
  return (
    <div className={styles.main}>
      <object
        className={styles.emptyAnimation}
        data={empty}
        type="image/svg+xml"
      ></object>
      <p className={styles.message}>
        Your cart is <span className={styles.emptyText}>empty</span>
      </p>
      <p className={styles.messageText}>
        Looks like you have not added anything to your cart yet. Go ahead and
        explore our categories.
      </p>
      <Button className={styles.btn} to={"/collection/allProducts"}>
        Explore our Collection &rarr;
      </Button>
    </div>
  );
}

export default EmptyCart;
