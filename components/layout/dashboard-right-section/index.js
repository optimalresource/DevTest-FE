import React from "react";
import TopSection from "./top-section";
import styles from "./RightSection.module.css";
import MiddleSection from "./middle-section";

const RightSection = (props) => {
  return (
    <div className={styles.container}>
      <TopSection></TopSection>
      <MiddleSection
        title={props?.title}
        showMiddleButton={props?.showMiddleButton}
        buttonVariant={props?.buttonVariant}
        buttonLabel={props?.buttonLabel}
        buttonUrl={props?.buttonUrl}
        buttonSurface={props?.buttonSurface}
        buttonClassNames={props?.buttonClassNames}
        buttonLeftIcon={props?.buttonLeftIcon}
        buttonRightIcon={props?.buttonRightIcon}
      >
        {props?.middleChildren}
      </MiddleSection>
      {props?.children}
    </div>
  );
};

export default RightSection;
