import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import EmptyOrder from "../../ui/Profile/EmptyOrder";

import styles from "./UserAccount.module.css";

import look from "../../assets/svgs/look.svg";
import Order from "./Order";
import ProfileInfo from "../../ui/Profile/ProfileInfo";

function UserAccount({ user }) {
  const navigate = useNavigate();
  const orders = JSON.parse(localStorage.getItem("orders"));
  function handleLogOut() {
    localStorage.clear();
    navigate(-1);
  }
  return (
    <div className={styles.main}>
      <div className={styles.user}>
        <span className={styles.imageWrapper}>
          <img className={styles.userImage} src={look} alt="" />
        </span>
        <h1>Hello, {user.name}</h1>
        <Button className={styles.logOutBtn} onClick={handleLogOut}>
          LogOut
        </Button>
      </div>
      <div className={styles.userDetails}>
        <div className={styles.userInfoBox}>
          <h2 className={styles.userDetailsHeaders}>Your Information</h2>
          <ProfileInfo user={user} />
        </div>
        <div className={styles.userInfoBox}>
          <h2 className={styles.userDetailsHeaders}>Your Orders</h2>
          {orders === null ? <EmptyOrder /> : <Order />}
        </div>
      </div>
    </div>
  );
}

export default UserAccount;
