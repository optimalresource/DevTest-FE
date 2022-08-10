import React from "react";
import TopSection from "./top-section";
import styles from "./RightSection.module.css";

const RightSection = (props) => {
  return (
    <div className={styles.container}>
      <TopSection></TopSection>
      {props.children}
    </div>
  );
};

export default RightSection;
