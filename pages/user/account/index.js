import React from "react";
import DashboardLayout from "components/layout/DashboardLayout";
import AccountComponent from "components/user/account";

export default function Account() {
  return <AccountComponent />;
}

Account.getLayout = function getLayout(page) {
  return (
    <DashboardLayout title="Account" showMiddleButton={false}>
      {page}
    </DashboardLayout>
  );
};
