import React from "react";
import styles from "./Navigation.module.css";

import burgerMenu from "../assets/menu-icon.svg";
import energyIcon from "../assets/lightening.svg";
import lightMode from "../assets/light-mode.svg";

function Navigation() {
  return (
    <nav className={styles.navigationContainer}>
      <div className={styles.navigationIcons}>
        <img
          className={styles.navigationIcon}
          src={burgerMenu}
          alt="Burger Icon"
        />
        <img
          className={styles.navigationIcon}
          src={energyIcon}
          alt="Energy Icon"
        />
        <img
          className={styles.navigationIcon}
          src={lightMode}
          alt="Light mode Icon"
        />
      </div>

      <div className={styles.navigationCtas}>
        <span className={styles.enrollmentText}>Enrollment Closing Soon</span>
        <button className={styles.navigationBtn}>Join Now</button>
      </div>
    </nav>
  );
}

export default Navigation;
