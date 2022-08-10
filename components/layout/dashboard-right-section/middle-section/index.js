import ButtonComponent from "components/utilities/ButtonComponent";
import React from "react";
import styles from "./MiddleSection.module.css";

const MiddleSection = (props) => {
  return (
    <div className={styles.container}>
      <section className={styles.titleSection}>
        <h1>{props.title}</h1>
        {props?.showMiddleButton && (
          <ButtonComponent
            variant={props?.buttonVariant}
            label={props?.buttonLabel}
            onClick={() => router.push(props?.buttonUrl)}
            surface={props?.buttonSurface}
            className={props?.buttonClassNames}
            leftIcon={props?.buttonLeftIcon}
            rightIcon={props?.buttonRightIcon}
          />
        )}
      </section>
      {props.children}
    </div>
  );
};

export default MiddleSection;
