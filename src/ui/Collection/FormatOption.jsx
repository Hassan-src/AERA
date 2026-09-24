import { useState } from "react";
import Button from "../Button";

import styles from "./FormatOption.module.css";

import arrow from "../../assets/svgs/Arrow-right.svg";

function FormatOption({ arrayName, setSelectorValue }) {
  const [selectorMenu, setSelectorMenu] = useState(false);
  const [selectorLabel, setSelectorLabel] = useState("Select");

  function handleFormSelect(e) {
    const value = e.currentTarget.dataset.value;
    const label = e.currentTarget.innerText;
    setSelectorValue(value);
    setSelectorLabel(label);
    setSelectorMenu(false);
  }
  return (
    <div className={styles.selectorBox}>
      <Button
        className={`${styles.selectorListOpener} ${selectorMenu ? styles.isActive : ""}`}
        onClick={() => setSelectorMenu((menu) => !menu)}
      >
        {selectorLabel}
        <img className={styles.selectorListOpenerImage} src={arrow} alt="" />
      </Button>
      {selectorMenu && (
        <ul className={styles.selector}>
          {arrayName.map((option) => (
            <li
              onClick={(e) => handleFormSelect(e)}
              data-value={option.value}
              className={styles.selectorOptions}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FormatOption;
