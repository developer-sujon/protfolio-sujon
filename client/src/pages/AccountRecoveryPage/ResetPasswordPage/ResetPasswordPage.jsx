//External Lib Import
import React, { lazy, Suspense } from "react";

//Internal Lib Import
import LazyLoader from "../../../components/Common/LazyLoader";
const ResetPassword = lazy(() =>
  import("../../../components/AccountRecovery/ResetPassword/ResetPassword"),
);
const AppNavigation = lazy(() =>
  import("../../../components/AppNavigation/AppNavigation"),
);

const ResetPasswordPage = () => {
  return (
    <>
      <Suspense fallback={<LazyLoader />}>
        <AppNavigation title="Reset Password Page" />
        <ResetPassword />
      </Suspense>
    </>
  );
};

export default ResetPasswordPage;
