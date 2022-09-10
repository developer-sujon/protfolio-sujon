//External lib imports
import React, { lazy, Suspense } from "react";

//Internal lib imports
import LazyLoader from "../../components/Common/LazyLoader";

const PortfolioList = lazy(() =>
  import("../../components/Portfolio/PortfolioList"),
);
const MasterLayout = lazy(() =>
  import("../../components/MasterLayout/MasterLayout"),
);

const PortfolioListPage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <MasterLayout title="Portfolio List Page">
        <PortfolioList />
      </MasterLayout>
    </Suspense>
  );
};

export default PortfolioListPage;
