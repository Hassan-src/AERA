import { useNavigate, useRouteError } from "react-router-dom";
import styles from "./Error.module.css";
import Button from "../Button";
function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.errorHeader}>Something went wrong!</h1>
      </div>
      <div className={styles.messageBox}>
        <p className={styles.errorMessage}>{error.data || error.message}</p>
        <Button className={styles.goBackBtn} onClick={() => navigate(-1)}>
          &larr;Go back
        </Button>
      </div>
    </div>
  );
}

export default Error;
