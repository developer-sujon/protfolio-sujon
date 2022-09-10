//External lib imports
import React, { lazy, Suspense } from "react";

//Internal lib imports
import LazyLoader from "../../components/Common/LazyLoader";

const CommentsList = lazy(() =>
  import("../../components/Comments/CommentsList"),
);
const MasterLayout = lazy(() =>
  import("../../components/MasterLayout/MasterLayout"),
);

const CommentsListPage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <MasterLayout title="Comments List Page">
        <CommentsList />
      </MasterLayout>
    </Suspense>
  );
};

export default CommentsListPage;
