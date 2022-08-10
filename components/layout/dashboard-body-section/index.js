import React from "react";
import styles from "./BodySection.module.css";

const BodySection = (props) => {
  return <section className={styles.container}>{props.children}</section>;
};

export default BodySection;
