//External lib imports
import React, { lazy, Suspense } from "react";

//Internal lib imports
import LazyLoader from "../../components/Common/LazyLoader";

const PortfolioUpdate = lazy(() =>
  import("../../components/Portfolio/PortfolioUpdate"),
);
const MasterLayout = lazy(() =>
  import("../../components/MasterLayout/MasterLayout"),
);

const PortfolioUpdatePage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <MasterLayout title="Portfolio Update Page">
        <PortfolioUpdate />
      </MasterLayout>
    </Suspense>
  );
};

export default PortfolioUpdatePage;
