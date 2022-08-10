import React from "react";
import DashboardLayout from "components/layout/DashboardLayout";
import GigsComponent from "components/user/gigs";

export default function Gigs() {
  return <GigsComponent />;
}

Gigs.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
