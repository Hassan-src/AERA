import CartItem from "./CartItem";
import CartCheckOut from "./CartCheckOut";
import { useSelector } from "react-redux";

import styles from "./Cart.module.css";
import EmptyCart from "../../ui/Cart/EmptyCart";
import { getCart } from "../../features/Cart/cartSlice";

function Cart() {
  const item = useSelector(getCart);
  return (
    <div className={styles.main}>
      {item.length > 0 ? (
        <>
          <CartItem />
          <CartCheckOut />
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

export default Cart;
