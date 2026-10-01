import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";

import styles from "./CartItem.module.css";

import trashBin from "../../assets/svgs/trash.svg";
import { clearCart, deleteItem, getCart } from "../../features/Cart/cartSlice";

function CartItem() {
  const item = useSelector(getCart);
  const dispatch = useDispatch();
  return (
    <div className={styles.shopList}>
      <div className={styles.optionBox}>
        <Button
          className={styles.btnDeleteAll}
          onClick={() => dispatch(clearCart())}
        >
          Delete All
        </Button>
      </div>
      <ul className={styles.itemsList}>
        {item.map((product) => (
          <li className={styles.item} key={product.id}>
            <img
              className={styles.itemImage}
              src={product.imageMain}
              alt={product.name}
            />
            <h3 className={styles.itemName}>{product.name}</h3>
            <span className={styles.itemCategory}>{product.category}</span>
            <span className={styles.itemPrice}>${product.price}</span>
            <Button
              className={styles.btnDelete}
              onClick={() => dispatch(deleteItem(product.id))}
            >
              <img className={styles.btnDeleteImage} src={trashBin} alt="" />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartItem;
