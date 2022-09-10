//external lib imports
import React, { Suspense, lazy } from "react";

//Internal Lib Import
import LazyLoader from "../../../components/Common/LazyLoader";
const AppNavigation = lazy(() =>
  import("../../../components/AppNavigation/AppNavigation"),
);
const RegisterUser = lazy(() =>
  import("../../../components/Auth/RegisterUser/RegisterUser"),
);

const RegisterPage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <AppNavigation title="Register Page" />
      <RegisterUser />
    </Suspense>
  );
};

export default RegisterPage;
