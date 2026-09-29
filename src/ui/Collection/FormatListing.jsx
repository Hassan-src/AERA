import { useNavigate } from "react-router-dom";
import Button from "../Button";
import styles from "./FormatListing.module.css";

function FormatListing({ children }) {
  const navigate = useNavigate(-1);
  return (
    <div className={styles.main}>
      <Button className={styles.backBtn} onClick={() => navigate(-1)}>
        &larr; Back
      </Button>
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
