import styles from "./UserAccount.module.css";
import look from "../../assets/svgs/look.svg";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import EmptyOrder from "../../ui/Profile/EmptyOrder";
function UserAccount({ user }) {
  const navigate = useNavigate();
  function handleLogOut() {
    localStorage.clear("user");
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
          <div className={styles.userInfoDetails}>
            <p>Name: {user.name}</p>
            <p>Last Name: {user.lastName}</p>
            <p>Phone Number: {user.phoneNumber}</p>
            <p>Address: {user.address}</p>
          </div>
        </div>
        <div className={styles.userInfoBox}>
          {/* <h2 className={styles.userDetailsHeaders}>Your Orders</h2> */}
          <EmptyOrder />
        </div>
      </div>
    </div>
  );
}

export default UserAccount;
