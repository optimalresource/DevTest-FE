import React, { Fragment } from "react";
import { GigToggles } from "data/gig-toggles";
import { AllGigs } from "data/all-gigs";
import ButtonComponent from "components/utilities/ButtonComponent";
import styles from "./Gigs.module.css";
import { Icon } from "@iconify/react";

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
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Role</th>
                <th>Company</th>
                <th>
                  <div className="flex flex-row gap-2 items-center">
                    Date{" "}
                    <span>
                      <Icon icon="akar-icons:arrow-up-down" />
                    </span>
                  </div>
                </th>
                <th>
                  <div className="flex flex-row gap-2 items-center">
                    Salary&#40;$&#41;
                    <span>
                      <Icon icon="akar-icons:arrow-up-down" />
                    </span>
                  </div>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {AllGigs.map((gig, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <Icon icon="fluent:checkbox-unchecked-16-regular" />
                    </td>
                    <td>{gig?.role}</td>
                    <td>{gig?.company}</td>
                    <td>{gig?.date}</td>
                    <td>{gig?.salary}</td>
                    <td>
                      <ButtonComponent
                        variant="devTest-Gigs"
                        label="Delete"
                        onClick={() => {}}
                        surface="borderAndFilled"
                        className="primary-round primary-class no-margin"
                        leftIcon=""
                        rightIcon=""
                        minWidth={120}
                        size="medium"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </div>
    </Fragment>
  );
};

export default GigsComponent;
