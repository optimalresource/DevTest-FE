import React from "react";
import DashboardLayout from "components/layout/DashboardLayout";
import CompanyComponent from "components/user/company";

export default function Company() {
  return <CompanyComponent />;
}

Company.getLayout = function getLayout(page) {
  return (
    <DashboardLayout title="Company" showMiddleButton={false}>
      {page}
    </DashboardLayout>
  );
};
