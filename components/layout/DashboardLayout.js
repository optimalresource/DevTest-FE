import React from "react";
import LeftSection from "./dashboard-left-section";
import RightSection from "./dashboard-right-section";
import BodySection from "./dashboard-body-section";
import styles from "./DashboardLayout.module.css";

const DashboardLayout = (props) => {
  return (
    <div className={styles.container}>
      <LeftSection></LeftSection>
      <RightSection>
        <BodySection>{props.children}</BodySection>
      </RightSection>
    </div>
  );
};

export default DashboardLayout;
