import React, { Fragment } from "react";
import { GigToggles } from "data/gig-toggles";
import ButtonComponent from "components/utilities/ButtonComponent";
import styles from "./Gigs.module.css";

const GigsComponent = () => {
  return (
    <Fragment>
      <div className={styles.container}>
        <section className={styles.toggles}>
          {GigToggles.map((toggle, index) => {
            return (
              <ButtonComponent
                variant={toggle?.variant}
                label={toggle?.label}
                onClick={() => {}}
                surface={toggle?.surface}
                className={toggle?.className}
                leftIcon={toggle?.leftIcon}
                rightIcon={toggle?.rightIcon}
                minWidth={toggle?.minWidth}
                colorButton={toggle?.colorButton}
                key={index}
                size="medium"
              />
            );
          })}
        </section>
        <section className={styles.toggledData}>
          This is where the data loads..
        </section>
      </div>
    </Fragment>
  );
};

export default GigsComponent;
