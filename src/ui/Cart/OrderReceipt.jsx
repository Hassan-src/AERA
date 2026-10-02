import { useNavigate, useParams } from "react-router-dom";

import styles from "./OrderReceipt.module.css";
import Button from "../Button";

function OrderReceipt() {
  const navigate = useNavigate();
  const { id } = useParams();
  const orders = JSON.parse(localStorage.getItem("orders"));
  const order = orders.find((order) => order.id === id);
  return (
    <div className={styles.main}>
      <div className={styles.contentBox}>
        <Button className={styles.backBtn} onClick={() => navigate(-1)}>
          &larr; Back
        </Button>
        <div className={styles.infoBox}>
          <span className={styles.title}>ID:</span>
          <span className={styles.info}>{order.id}</span>
        </div>
        <div className={styles.infoBox}>
          <span className={styles.title}>Order Date:</span>
          <span className={styles.info}>{order.date.slice(0, 10)}</span>
        </div>
        <div className={styles.infoBox}>
          <span className={styles.title}>totalItems:</span>
          <span className={styles.info}>{order.totalItems}</span>
        </div>
        <div className={styles.infoBox}>
          <span className={styles.title}>totalPrice:</span>
          <span className={styles.info}>${order.totalPrice}</span>
        </div>
        <div className={styles.infoBox}>
          <span className={styles.title}>products:</span>
          <p className={styles.products}>{order.name}</p>
        </div>
        <div className={styles.infoBox}>
          <span className={styles.title}>Shipping time:</span>
          <p className={styles.shipment}>
            Shipment can take <b>1-4 weeks</b> depending on where you live!
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderReceipt;
