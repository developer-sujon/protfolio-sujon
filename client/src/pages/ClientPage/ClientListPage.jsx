//External lib imports
import React, { lazy, Suspense } from "react";

//Internal lib imports
import LazyLoader from "../../components/Common/LazyLoader";

const ClientList = lazy(() =>
  import("../../components/Client/ClientList"),
);
const MasterLayout = lazy(() =>
  import("../../components/MasterLayout/MasterLayout"),
);

const ClientListPage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <MasterLayout title="Client List Page">
        <ClientList />
      </MasterLayout>
    </Suspense>
  );
};

export default ClientListPage;
