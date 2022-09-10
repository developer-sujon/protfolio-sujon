//External lib imports
import React, { lazy, Suspense } from "react";

//Internal lib imports
import LazyLoader from "../../components/Common/LazyLoader";

const BlogList = lazy(() =>
  import("../../components/Blog/BlogList"),
);
const MasterLayout = lazy(() =>
  import("../../components/MasterLayout/MasterLayout"),
);

const BlogListPage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <MasterLayout title="Blog List Page">
        <BlogList />
      </MasterLayout>
    </Suspense>
  );
};

export default BlogListPage;
