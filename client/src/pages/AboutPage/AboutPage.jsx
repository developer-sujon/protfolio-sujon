//External Import
import React, { lazy, Suspense } from "react";

//Internal Import
import LazyLoad from "../../components/Common/LazyLoad";
const About = lazy(() => import("../../components/About/About"));
const Navigation = lazy(() => import("../../components/Navigation/Navigation"));

const AboutPage = () => {
  return (
    <Suspense fallback={<LazyLoad />}>
      <Navigation title="About Page" />
      <About />
    </Suspense>
  );
};

export default AboutPage;
