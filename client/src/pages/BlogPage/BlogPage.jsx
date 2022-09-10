//External Import
import React, { lazy, Suspense } from "react";

//Internal Import
import LazyLoad from "../../components/Common/LazyLoad";
const Blog = lazy(() => import("../../components/Blog/Blog"));
const Navigation = lazy(() => import("../../components/Navigation/Navigation"));

const BlogPage = () => {
  return (
    <Suspense fallback={<LazyLoad />}>
      <Navigation title="Blog Page" />
      <Blog />
    </Suspense>
  );
};

export default BlogPage;
