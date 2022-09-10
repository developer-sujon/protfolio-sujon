//External lib imports
import React, { lazy, Suspense } from "react";

//Internal lib imports
import LazyLoader from "../../components/Common/LazyLoader";

const TestimonialList = lazy(() =>
  import("../../components/Testimonial/TestimonialList"),
);
const MasterLayout = lazy(() =>
  import("../../components/MasterLayout/MasterLayout"),
);

const TestimonialListPage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <MasterLayout title="Testimonial List Page">
        <TestimonialList />
      </MasterLayout>
    </Suspense>
  );
};

export default TestimonialListPage;
