import styles from "./Aside.module.css";
function Aside({ asideNumber, src, asideName }) {
  return (
    <aside className={styles.aside}>
      <span className={styles.asideNumber}>{asideNumber}</span>
      <img className={styles.asideImage} src={src} alt="MiloClubChair" />
      <span className={styles.asideName}>{asideName}</span>
    </aside>
  );
}

export default Aside;
