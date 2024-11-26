import React, { useState } from "react";
import styles from "./Checkbox.module.css";

export function Checkbox({ label, checked = false, onTaskUpdate, content }) {
  const [isChecked, setIsChecked] = useState(checked);

  function handleToggle() {
    const newCheckedStatus = !isChecked;
    setIsChecked(newCheckedStatus);

    if (onTaskUpdate) {
      onTaskUpdate(newCheckedStatus);
    }
  }

  return (
    <div className={styles.checkboxContainer} onClick={handleToggle}>
      <div className={`${styles.checkbox} ${isChecked ? styles.checked : ""}`}>
        {isChecked && <span className={styles.checkmark}>✔</span>}
      </div>
      {label && (
        <span
          className={`${styles.label} ${isChecked ? styles.strikethrough : ""}`}
        >
          {label}
        </span>
      )}
    </div>
  );
}
