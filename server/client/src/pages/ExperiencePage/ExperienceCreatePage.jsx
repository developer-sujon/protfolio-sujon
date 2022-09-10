//External lib imports
import React, { lazy, Suspense } from "react";

//Internal lib imports
import LazyLoader from "../../components/Common/LazyLoader";

const ExperienceCreate = lazy(() =>
  import("../../components/Experience/ExperienceCreate"),
);
const MasterLayout = lazy(() =>
  import("../../components/MasterLayout/MasterLayout"),
);

const ExperienceCreatePage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <MasterLayout title="Experience Create Page">
        <ExperienceCreate />
      </MasterLayout>
    </Suspense>
  );
};

export default ExperienceCreatePage;
