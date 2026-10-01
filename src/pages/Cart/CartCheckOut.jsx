import { useSelector } from "react-redux";
import { getTotalPrice, getTotalQuantity } from "../../features/Cart/cartSlice";
import Button from "../../ui/Button";

import styles from "./CartCheckOut.module.css";

function CartCheckOut() {
  const totalItems = useSelector(getTotalQuantity);
  const totalPrice = useSelector(getTotalPrice);
  return (
    <div className={styles.cartTotal}>
      <div className={styles.cartCard}>
        <h2 className={styles.cartHeader}>Cart Totals</h2>
        <div className={styles.totals}>
          <div className={styles.totalItems}>
            <span className={styles.totalText}>total items:</span>
            <span className={styles.totalNumber}>{totalItems}</span>
          </div>
          <div className={styles.totalPrice}>
            <span className={styles.totalText}>total price:</span>
            <span className={styles.totalNumber}>${totalPrice}</span>
          </div>
        </div>
        <Button>Check Out</Button>
      </div>
    </div>
  );
}

export default CartCheckOut;
