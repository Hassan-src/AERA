import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  getCart,
  getTotalPrice,
  getTotalQuantity,
} from "../../features/Cart/cartSlice";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";

import styles from "./CartCheckOut.module.css";

function CartCheckOut() {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const totalItems = useSelector(getTotalQuantity);
  const totalPrice = useSelector(getTotalPrice);
  const navigate = useNavigate();
  function handleCheckOut() {
    const orders = {
      id: crypto.randomUUID(),
      name: cart.map((product) => product.name),
      totalItems,
      totalPrice,
      date: new Date().toISOString(),
    };
    const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    localStorage.setItem("orders", JSON.stringify([...existingOrders, orders]));
    dispatch(clearCart());
    navigate("/profile");
  }
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
        <Button onClick={handleCheckOut}>Check Out</Button>
      </div>
    </div>
  );
}

export default CartCheckOut;
