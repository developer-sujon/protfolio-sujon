//External lib imports
import React, { lazy, Suspense } from "react";

//Internal lib imports
import LazyLoader from "../../components/Common/LazyLoader";

const BlogUpdate = lazy(() =>
  import("../../components/Blog/BlogUpdate"),
);
const MasterLayout = lazy(() =>
  import("../../components/MasterLayout/MasterLayout"),
);

const BlogUpdatePage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <MasterLayout title="Blog Update Page">
        <BlogUpdate />
      </MasterLayout>
    </Suspense>
  );
};

export default BlogUpdatePage;
