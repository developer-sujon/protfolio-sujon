//External lib imports
import React, { lazy, Suspense } from "react";

//Internal lib imports
import LazyLoader from "../../components/Common/LazyLoader";

const ServiceCreate = lazy(() =>
  import("../../components/Service/ServiceCreate"),
);
const MasterLayout = lazy(() =>
  import("../../components/MasterLayout/MasterLayout"),
);

const ServiceCreatePage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <MasterLayout title="Service Create Page">
        <ServiceCreate />
      </MasterLayout>
    </Suspense>
  );
};

export default ServiceCreatePage;
