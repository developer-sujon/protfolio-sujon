//External lib imports
import React, { lazy, Suspense } from "react";

//Internal lib imports
import LazyLoader from "../../components/Common/LazyLoader";

const SkillList = lazy(() =>
  import("../../components/Skill/SkillList"),
);
const MasterLayout = lazy(() =>
  import("../../components/MasterLayout/MasterLayout"),
);

const SkillListPage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <MasterLayout title="Skill List Page">
        <SkillList />
      </MasterLayout>
    </Suspense>
  );
};

export default SkillListPage;
