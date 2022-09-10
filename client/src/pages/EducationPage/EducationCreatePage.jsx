//External lib imports
import React, { lazy, Suspense } from "react";

//Internal lib imports
import LazyLoader from "../../components/Common/LazyLoader";

const EducationCreate = lazy(() =>
  import("../../components/Education/EducationCreate"),
);
const MasterLayout = lazy(() =>
  import("../../components/MasterLayout/MasterLayout"),
);

const EducationCreatePage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <MasterLayout title="Education Create Page">
        <EducationCreate />
      </MasterLayout>
    </Suspense>
  );
};

export default EducationCreatePage;
