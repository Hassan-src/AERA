import styles from "./ProfileInfo.module.css";
function ProfileInfo({ user }) {
  return (
    <div className={styles.userInfoDetails}>
      <p>
        <span className={styles.infoTitle}>Name:</span> {user.name}
      </p>
      <p>
        <span className={styles.infoTitle}>Last Name:</span>
        {user.lastName}
      </p>
      <p>
        <span className={styles.infoTitle}>Phone Number:</span>
        {user.phoneNumber}
      </p>
      <p>
        <span className={styles.infoTitle}>Address:</span> {user.address}
      </p>
    </div>
  );
}

export default ProfileInfo;
