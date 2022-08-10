import React from "react";
import DashboardLayout from "components/layout/DashboardLayout";
import GigsComponent from "components/user/gigs";
import MiddleSectionToggles from "components/user/gigs/middle-section-toggles";
import { Icon } from "@iconify/react";

const middleChildren = <MiddleSectionToggles></MiddleSectionToggles>;

export default function Gigs() {
  return <GigsComponent />;
}

Gigs.getLayout = function getLayout(page) {
  return (
    <DashboardLayout
      title="Gigs"
      middleChildren={middleChildren}
      showMiddleButton={true}
      buttonVariant="devTest-Gigs"
      buttonLabel="New Gig"
      buttonUrl="/users/gigs/add"
      buttonSurface="borderAndFilled"
      buttonClassNames="primary-round"
      buttonLeftIcon=""
      buttonRightIcon={<Icon icon="akar-icons:plus" />}
    >
      {page}
    </DashboardLayout>
  );
};
