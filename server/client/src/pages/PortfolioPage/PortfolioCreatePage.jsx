//External lib imports
import React, { lazy, Suspense } from "react";

//Internal lib imports
import LazyLoader from "../../components/Common/LazyLoader";

const PortfolioCreate = lazy(() =>
  import("../../components/Portfolio/PortfolioCreate"),
);
const MasterLayout = lazy(() =>
  import("../../components/MasterLayout/MasterLayout"),
);

const PortfolioCreatePage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <MasterLayout title="Portfolio Create Page">
        <PortfolioCreate />
      </MasterLayout>
    </Suspense>
  );
};

export default PortfolioCreatePage;
