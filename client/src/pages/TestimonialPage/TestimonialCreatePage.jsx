//External lib imports
import React, { lazy, Suspense } from "react";

//Internal lib imports
import LazyLoader from "../../components/Common/LazyLoader";

const TestimonialCreate = lazy(() =>
  import("../../components/Testimonial/TestimonialCreate"),
);
const MasterLayout = lazy(() =>
  import("../../components/MasterLayout/MasterLayout"),
);

const TestimonialCreatePage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <MasterLayout title="Testimonial Create Page">
        <TestimonialCreate />
      </MasterLayout>
    </Suspense>
  );
};

export default TestimonialCreatePage;
