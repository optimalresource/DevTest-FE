import Link from "next/link";
import React, { Fragment } from "react";

const AccountComponent = () => {
  return (
    <Fragment>
      <p>This is the account section</p>
      <Link href="/user/gigs">
        <a>Click here to go to Gigs</a>
      </Link>
    </Fragment>
  );
};

export default AccountComponent;
