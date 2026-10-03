import Button from "../../ui/Button";
import styles from "./Order.module.css";

function Order() {
  const orders = JSON.parse(localStorage.getItem("orders"));
  return (
    <ul className={styles.listMain}>
      {orders.map((receipt) => (
        <li className={styles.list}>
          <p className={styles.text}>
            <span className={styles.title}>ID:</span> {receipt.id.slice(0, 9)}
            ...
          </p>
          <p className={styles.text}>
            <span className={styles.title}>Items:</span> {receipt.totalItems}
          </p>
          <p className={styles.text}>
            <span className={styles.title}>Total:</span> ${receipt.totalPrice}
          </p>
          <Button className={styles.btnView} to={`/orders/${receipt.id}`}>
            View Receipt
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Order;
