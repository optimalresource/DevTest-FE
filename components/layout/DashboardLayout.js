import React from "react";
import LeftSection from "./dashboard-left-section";
import RightSection from "./dashboard-right-section";
import BodySection from "./dashboard-body-section";
import styles from "./DashboardLayout.module.css";
import Head from "next/head";

const DashboardLayout = (props) => {
  return (
    <>
      <Head>
        <title>{`Dev Test - ${props?.title}`}</title>
        <meta name="description" content="Dev Test Gig Dashboard" />
        <link rel="icon" href="/images/svg/icon.svg" />
      </Head>
      <div className={styles.container}>
        <LeftSection></LeftSection>
        <RightSection
          title={props?.title}
          middleChildren={props?.middleChildren}
          showMiddleButton={props?.showMiddleButton}
          buttonVariant={props?.buttonVariant}
          buttonLabel={props?.buttonLabel}
          buttonUrl={props?.buttonUrl}
          buttonSurface={props?.buttonSurface}
          buttonClassNames={props?.buttonClassNames}
          buttonLeftIcon={props?.buttonLeftIcon}
          buttonRightIcon={props?.buttonRightIcon}
        >
          <BodySection>{props.children}</BodySection>
        </RightSection>
      </div>
    </>
  );
};

export default DashboardLayout;
