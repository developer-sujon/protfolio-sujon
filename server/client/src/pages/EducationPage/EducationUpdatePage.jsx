//External lib imports
import React, { lazy, Suspense } from "react";

//Internal lib imports
import LazyLoader from "../../components/Common/LazyLoader";

const EducationUpdate = lazy(() =>
  import("../../components/Education/EducationUpdate"),
);
const MasterLayout = lazy(() =>
  import("../../components/MasterLayout/MasterLayout"),
);

const EducationUpdatePage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <MasterLayout title="Education Update Page">
        <EducationUpdate />
      </MasterLayout>
    </Suspense>
  );
};

export default EducationUpdatePage;
