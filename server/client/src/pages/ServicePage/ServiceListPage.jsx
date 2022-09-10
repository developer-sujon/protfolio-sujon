//External lib imports
import React, { lazy, Suspense } from "react";

//Internal lib imports
import LazyLoader from "../../components/Common/LazyLoader";

const ServiceList = lazy(() =>
  import("../../components/Service/ServiceList"),
);
const MasterLayout = lazy(() =>
  import("../../components/MasterLayout/MasterLayout"),
);

const ServiceListPage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <MasterLayout title="Service List Page">
        <ServiceList />
      </MasterLayout>
    </Suspense>
  );
};

export default ServiceListPage;
