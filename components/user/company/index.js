import Link from "next/link";
import React, { Fragment } from "react";

const CompanyComponent = () => {
  return (
    <Fragment>
      <p>This is the company section</p>
      <Link href="/user/gigs">
        <a>Click here to go to Gigs</a>
      </Link>
    </Fragment>
  );
};

export default CompanyComponent;
