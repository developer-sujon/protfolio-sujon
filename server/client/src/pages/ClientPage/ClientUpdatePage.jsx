//External lib imports
import React, { lazy, Suspense } from "react";

//Internal lib imports
import LazyLoader from "../../components/Common/LazyLoader";

const ClientUpdate = lazy(() =>
  import("../../components/Client/ClientUpdate"),
);
const MasterLayout = lazy(() =>
  import("../../components/MasterLayout/MasterLayout"),
);

const ClientUpdatePage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <MasterLayout title="Client Update Page">
        <ClientUpdate />
      </MasterLayout>
    </Suspense>
  );
};

export default ClientUpdatePage;
