import React from "react";
import styles from "./Navigation.module.css";

import burgerMenu from "../assets/menu-icon.svg";
import energyIcon from "../assets/lightening.svg";
import lightMode from "../assets/light-mode.svg";

function Navigation() {
  return (
    <div className={styles.navigationContainer}>
      <div className={styles.navigationIcons}>
        <img src={burgerMenu} alt="Burger Icon" />
        <img src={energyIcon} alt="Energy Icon" />
        <img src={lightMode} alt="Light mode Icon" />
      </div>

      <div className={styles.navigationCtas}>
        <span className={styles.enrollmentText}>Enrollment Closing Soon</span>
        <button className={styles.navigationBtn}>Join Now</button>
      </div>
    </div>
  );
}

export default Navigation;
