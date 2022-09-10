//External Import
import React, { lazy, Suspense } from "react";

//Internal Import
import LazyLoad from "../../components/Common/LazyLoad";
const Portfolio = lazy(() => import("../../components/Portfolio/Portfolio"));
const Navigation = lazy(() => import("../../components/Navigation/Navigation"));

const PortfolioPage = () => {
  return (
    <Suspense fallback={<LazyLoad />}>
      <Navigation title="Portfolio Page"/>
      <Portfolio />
    </Suspense>
  );
};

export default PortfolioPage;
