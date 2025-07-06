// components/Metrics/Metric.js
import React from "react";
import styles from "./MetricSection.module.css"; // Optional: Use a separate CSS if needed

const Metric = ({ value, label }) => (
  <div className={styles.metric}>
    <div className={styles.metricNumberContainer}>
      <h2 className={styles.metricNumber}>{String(value).padStart(2, "0")}</h2>
      <span className={styles.metricAppend}>+</span>
    </div>
    <p className={styles.metricLabel}>{label}</p>
  </div>
);

export default Metric;
