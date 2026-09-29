import { Form } from "react-router-dom";
import Button from "../../ui/Button";
import styles from "./CreateAccount.module.css";

function CreateAccount() {
  return (
    <div className={styles.main}>
      <div className={styles.mainBox}>
        <div className={styles.leftSide}>
          <h1 className={styles.header}>Create Account</h1>
        </div>
        <div className={styles.rightSide}>
          <Form method="POST" className={styles.profileForm}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">first name:</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="lastName">last name:</label>
              <input type="text" name="lastName" id="lastName" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="phoneNumber">Phone number:</label>
              <input type="tel" name="phoneNumber" id="phoneNumber" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="address">address:</label>
              <input type="text" name="address" id="address" required />
            </div>
            <Button className={styles.submitBtn}>Submit</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
