import React from "react";
import DashboardLayout from "components/layout/DashboardLayout";
import DashboardComponent from "components/user/dashboard";

export default function Dashboard() {
  return <DashboardComponent />;
}

Dashboard.getLayout = function getLayout(page) {
  return (
    <DashboardLayout title="Dashboard" showMiddleButton={false}>
      {page}
    </DashboardLayout>
  );
};
