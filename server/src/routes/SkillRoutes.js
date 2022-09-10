//External Import
const SkillRoutes = require("express").Router();
const SkillControllers = require("../controller/Skill/SkillControllers");
const { UserAuth } = require("../middleware/CheckAuthLogin");
const { imageUpload, resizeImg } = require("../middleware/multer/uploadPhoto");

//Skill Create
SkillRoutes.post("/SkillCreate", UserAuth, SkillControllers.SkillCreate);

//Skill List
SkillRoutes.get(
  "/SkillList/:pageNumber/:perPage/:searchKeyword",
  UserAuth,
  SkillControllers.SkillList,
);

//Skill List
SkillRoutes.get("/SkillDropDown", SkillControllers.SkillDropDown);

//Skill Single
SkillRoutes.get("/SkillSingle/:id", UserAuth, SkillControllers.SkillSingle);

//Skill Update
SkillRoutes.patch("/SkillUpdate/:id", UserAuth, SkillControllers.SkillUpdate);

//Skill Delete
SkillRoutes.delete("/SkillDelete/:id", UserAuth, SkillControllers.SkillDelete);

module.exports = SkillRoutes;
