import styles from "./ProfileInfo.module.css";
function ProfileInfo({ user }) {
  return (
    <div className={styles.userInfoDetails}>
      <p className={styles.infoText}>
        <span>Name:</span> {user.name}
      </p>
      <p className={styles.infoText}>
        <span className={styles.infoTitle}>Last Name:</span>
        {user.lastName}
      </p>
      <p className={styles.infoText}>
        <span className={styles.infoTitle}>Phone Number:</span>
        {user.phoneNumber}
      </p>
      <p className={styles.infoText}>
        <span className={styles.infoTitle}>Address:</span> {user.address}
      </p>
    </div>
  );
}

export default ProfileInfo;
