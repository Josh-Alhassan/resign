import React from "react";
import styles from "./MetricSection.module.css";
import Metric from "./Metric";

import { metricsGroups } from "../constant";

const MetricSection = () => {
  return (
    <section className={styles.metricsSection}>
      <div className={styles.metrics}>
        {metricsGroups.map((group, groupIndex) => (
          <div key={groupIndex} className={styles.metricsContent}>
            {group.map((metric, index) => (
              <Metric key={index} value={metric.value} label={metric.label} />
            ))}
          </div>
        ))}
      </div>

      <div className={styles.mazeContainer}>Helooo</div>
    </section>
  );
};

export default MetricSection;
