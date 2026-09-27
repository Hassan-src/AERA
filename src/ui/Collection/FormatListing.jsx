import styles from "./FormatListing.module.css";

function FormatListing({ children }) {
  return (
    <div className={styles.main}>
      <form
        className={styles.selectorsForm}
        action=""
        onSubmit={(e) => e.preventDefault()}
      >
        {children}
      </form>
    </div>
  );
}

export default FormatListing;
