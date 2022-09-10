//External Import
import React, { lazy, Suspense } from "react";

//Internal Import
import LazyLoad from "../../components/Common/LazyLoad";
const Contact = lazy(() => import("../../components/Contact/Contact"));
const Navigation = lazy(() => import("../../components/Navigation/Navigation"));

const ContactPage = () => {
  return (
    <Suspense fallback={<LazyLoad />}>
      <Navigation title="Contact Page" />
      <Contact />
    </Suspense>
  );
};

export default ContactPage;
