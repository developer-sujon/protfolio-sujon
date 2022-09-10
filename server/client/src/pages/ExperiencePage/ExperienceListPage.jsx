//External lib imports
import React, { lazy, Suspense } from "react";

//Internal lib imports
import LazyLoader from "../../components/Common/LazyLoader";

const ExperienceList = lazy(() =>
  import("../../components/Experience/ExperienceList"),
);
const MasterLayout = lazy(() =>
  import("../../components/MasterLayout/MasterLayout"),
);

const ExperienceListPage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <MasterLayout title="Experience List Page">
        <ExperienceList />
      </MasterLayout>
    </Suspense>
  );
};

export default ExperienceListPage;
