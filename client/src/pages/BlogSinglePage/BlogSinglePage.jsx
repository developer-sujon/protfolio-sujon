//External Import
import React, { lazy, Suspense } from "react";

//Internal Import
import LazyLoad from "../../components/Common/LazyLoad";
const BlogSingle = lazy(() => import("../../components/BlogSingle/BlogSingle"));
const Navigation = lazy(() => import("../../components/Navigation/Navigation"));

const BlogSinglePage = () => {
  return (
    <Suspense fallback={<LazyLoad />}>
      <Navigation title="Single Blog Page" />
      <BlogSingle />
    </Suspense>
  );
};

export default BlogSinglePage;
