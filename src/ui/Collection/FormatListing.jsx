import { useState } from "react";
import Button from "../Button";
import styles from "./FormatListing.module.css";

function FormatListing({ arrayName, children }) {
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
