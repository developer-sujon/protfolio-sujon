//External lib imports
import React, { lazy, Suspense } from "react";

//Internal lib imports
import LazyLoader from "../../components/Common/LazyLoader";

const ClientCreate = lazy(() =>
  import("../../components/Client/ClientCreate"),
);
const MasterLayout = lazy(() =>
  import("../../components/MasterLayout/MasterLayout"),
);

const ClientCreatePage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <MasterLayout title="Client Create Page">
        <ClientCreate />
      </MasterLayout>
    </Suspense>
  );
};

export default ClientCreatePage;
