import React, { Fragment, useState } from "react";
import styles from "./MiddleSectionToggles.module.css";

const MiddleSectionToggles = () => {
  const [toggle, setToggle] = useState("all gigs");
  return (
    <Fragment>
      <div className={styles.container}>
        <div
          className={`${styles.box} ${
            toggle === "all gigs" ? styles.active : ""
          }`}
          onClick={() => setToggle("all gigs")}
        >
          All gigs
          <span>3404</span>
        </div>
        <div
          className={`${styles.box} ${
            toggle === "my gigs" ? styles.active : ""
          }`}
          onClick={() => setToggle("my gigs")}
        >
          My gigs
          <span>1200</span>
        </div>
        <div
          className={`${styles.box} ${
            toggle === "rejected gigs" ? styles.active : ""
          }`}
          onClick={() => setToggle("rejected gigs")}
        >
          Rejected gigs
          <span>100</span>
        </div>
      </div>
    </Fragment>
  );
};

export default MiddleSectionToggles;
