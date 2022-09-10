//External lib imports
import React, { lazy, Suspense } from "react";

//Internal lib imports
import LazyLoader from "../../components/Common/LazyLoader";

const ServiceUpdate = lazy(() =>
  import("../../components/Service/ServiceUpdate"),
);
const MasterLayout = lazy(() =>
  import("../../components/MasterLayout/MasterLayout"),
);

const ServiceUpdatePage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <MasterLayout title="Service Update Page">
        <ServiceUpdate />
      </MasterLayout>
    </Suspense>
  );
};

export default ServiceUpdatePage;
