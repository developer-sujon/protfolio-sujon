//External lib imports
import React, { lazy, Suspense } from "react";

//Internal lib imports
import LazyLoader from "../../components/Common/LazyLoader";

const SkillCreate = lazy(() => import("../../components/Skill/SkillCreate"));
const MasterLayout = lazy(() =>
  import("../../components/MasterLayout/MasterLayout"),
);

const SkillCreatePage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <MasterLayout title="Skill Create Page">
        <SkillCreate />
      </MasterLayout>
    </Suspense>
  );
};

export default SkillCreatePage;
