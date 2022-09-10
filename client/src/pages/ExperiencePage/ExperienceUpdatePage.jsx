//External lib imports
import React, { lazy, Suspense } from "react";

//Internal lib imports
import LazyLoader from "../../components/Common/LazyLoader";

const ExperienceUpdate = lazy(() =>
  import("../../components/Experience/ExperienceUpdate"),
);
const MasterLayout = lazy(() =>
  import("../../components/MasterLayout/MasterLayout"),
);

const ExperienceUpdatePage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <MasterLayout title="Experience Update Page">
        <ExperienceUpdate />
      </MasterLayout>
    </Suspense>
  );
};

export default ExperienceUpdatePage;
