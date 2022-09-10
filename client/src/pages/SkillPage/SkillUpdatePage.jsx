//External lib imports
import React, { lazy, Suspense } from "react";

//Internal lib imports
import LazyLoader from "../../components/Common/LazyLoader";

const SkillUpdate = lazy(() =>
  import("../../components/Skill/SkillUpdate"),
);
const MasterLayout = lazy(() =>
  import("../../components/MasterLayout/MasterLayout"),
);

const SkillUpdatePage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <MasterLayout title="Skill Update Page">
        <SkillUpdate />
      </MasterLayout>
    </Suspense>
  );
};

export default SkillUpdatePage;
