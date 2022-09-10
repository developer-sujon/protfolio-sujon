//External lib imports
import React, { lazy, Suspense } from "react";

//Internal lib imports
import LazyLoader from "../../components/Common/LazyLoader";

const EmailList = lazy(() => import("../../components/Email/EmailList"));
const MasterLayout = lazy(() =>
  import("../../components/MasterLayout/MasterLayout"),
);

const EmailListPage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <MasterLayout title="Email List Page">
        <EmailList />
      </MasterLayout>
    </Suspense>
  );
};

export default EmailListPage;
