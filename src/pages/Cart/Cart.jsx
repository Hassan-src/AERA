import { useSelector } from "react-redux";
import styles from "./Cart.module.css";
function Cart() {
  const item = useSelector((state) => state.cart);
  console.log(item);
  return <div></div>;
}

export default Cart;
