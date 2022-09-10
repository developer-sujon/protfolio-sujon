//External lib imports
import React, { lazy, Suspense } from "react";

//Internal lib imports
import LazyLoader from "../../components/Common/LazyLoader";

const TestimonialUpdate = lazy(() =>
  import("../../components/Testimonial/TestimonialUpdate"),
);
const MasterLayout = lazy(() =>
  import("../../components/MasterLayout/MasterLayout"),
);

const TestimonialUpdatePage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <MasterLayout title="Testimonial Update Page">
        <TestimonialUpdate />
      </MasterLayout>
    </Suspense>
  );
};

export default TestimonialUpdatePage;
