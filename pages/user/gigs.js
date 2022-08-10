import React from "react";
import DashboardLayout from "components/layout/DashboardLayout";
import GigsComponent from "components/user/gigs";

const middleChildren = <div>This is not funny</div>;

export default function Gigs() {
  return <GigsComponent />;
}

Gigs.getLayout = function getLayout(page) {
  return (
    <DashboardLayout title="Gigs" middleChildren={middleChildren}>
      {page}
    </DashboardLayout>
  );
};
