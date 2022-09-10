//External Import
import React, { lazy, Suspense } from "react";

//Internal Import
import LazyLoad from "../../components/Common/LazyLoad";
const Resume = lazy(() => import("../../components/Resume/Resume"));
const Navigation = lazy(() => import("../../components/Navigation/Navigation"));

const ResumePage = () => {
  return (
    <Suspense fallback={<LazyLoad />}>
      <Navigation title="Resume Page"/>
      <Resume />
    </Suspense>
  );
};

export default ResumePage;
