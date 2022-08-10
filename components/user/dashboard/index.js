import Link from "next/link";
import React, { Fragment } from "react";

const DashboardComponent = () => {
  return (
    <Fragment>
      <p>This is the dashboard section</p>
      <Link href="/user/gigs">
        <a>Click here to go to Gigs</a>
      </Link>
    </Fragment>
  );
};

export default DashboardComponent;
