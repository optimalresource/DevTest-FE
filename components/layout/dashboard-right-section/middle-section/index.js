import React from "react";
import styles from "./MiddleSection.module.css";

const MiddleSection = (props) => {
  return (
    <div className={styles.container}>
      <section className={styles.titleSection}>
        <h1>{props.title}</h1>
        <button>Submit</button>
      </section>
      {props.children}
    </div>
  );
};

export default MiddleSection;
