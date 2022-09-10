//External lib imports
import React, { lazy, Suspense } from "react";

//Internal lib imports
import LazyLoader from "../../components/Common/LazyLoader";

const EducationList = lazy(() =>
  import("../../components/Education/EducationList"),
);
const MasterLayout = lazy(() =>
  import("../../components/MasterLayout/MasterLayout"),
);

const EducationListPage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <MasterLayout title="Education List Page">
        <EducationList />
      </MasterLayout>
    </Suspense>
  );
};

export default EducationListPage;
