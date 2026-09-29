import Button from "../Button";
import styles from "./EmptyOrder.module.css";

function EmptyOrder() {
  return (
    <div className={styles.main}>
      <p className={styles.message}>No order yet!</p>
      <Button className={styles.btn} to={"/collection"}>
        Explore our Collection &rarr;
      </Button>
    </div>
  );
}

export default EmptyOrder;
