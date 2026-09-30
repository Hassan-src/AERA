import { Form, useActionData } from "react-router-dom";
import Button from "../../ui/Button";
import styles from "./CreateAccount.module.css";

function CreateAccount() {
  const formErrors = useActionData();
  return (
    <div className={styles.main}>
      <div className={styles.mainBox}>
        <div className={styles.leftSide}>
          <h1 className={styles.header}>Create Account</h1>
        </div>
        <div className={styles.rightSide}>
          <Form method="POST" className={styles.profileForm}>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor="name">
                first name:
              </label>
              <input
                className={styles.inputBox}
                type="text"
                name="name"
                id="name"
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor="lastName">
                last name:
              </label>
              <input
                className={styles.inputBox}
                type="text"
                name="lastName"
                id="lastName"
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor="phoneNumber">
                Phone number:
              </label>
              <input
                className={`${styles.inputBox} ${formErrors?.phoneNumber ? styles.inputError : ""}`}
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                required
              />
              {formErrors?.phoneNumber && (
                <p className={styles.errorMessage}>*{formErrors.phoneNumber}</p>
              )}
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor="address">
                address:
              </label>
              <input
                className={styles.inputBox}
                type="text"
                name="address"
                id="address"
                required
              />
            </div>
            <Button className={styles.submitBtn}>Submit</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
