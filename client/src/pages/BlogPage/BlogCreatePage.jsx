//External lib imports
import React, { lazy, Suspense } from "react";

//Internal lib imports
import LazyLoader from "../../components/Common/LazyLoader";

const BlogCreate = lazy(() =>
  import("../../components/Blog/BlogCreate"),
);
const MasterLayout = lazy(() =>
  import("../../components/MasterLayout/MasterLayout"),
);

const BlogCreatePage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <MasterLayout title="Blog Create Page">
        <BlogCreate />
      </MasterLayout>
    </Suspense>
  );
};

export default BlogCreatePage;
