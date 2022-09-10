//External Import
const ExperienceRoutes = require("express").Router();
const ExperienceControllers = require("../controller/Experience/ExperienceControllers");
const { UserAuth } = require("../middleware/CheckAuthLogin");
const { imageUpload, resizeImg } = require("../middleware/multer/uploadPhoto");

//Experience Create
ExperienceRoutes.post(
  "/ExperienceCreate",
  UserAuth,
  ExperienceControllers.ExperienceCreate,
);

//Experience List
ExperienceRoutes.get(
  "/ExperienceList/:pageNumber/:perPage/:searchKeyword",
  UserAuth,
  ExperienceControllers.ExperienceList,
);

//Experience List
ExperienceRoutes.get(
  "/ExperienceDropDown",
  ExperienceControllers.ExperienceDropDown,
);

//Experience Single
ExperienceRoutes.get(
  "/ExperienceSingle/:id",
  UserAuth,
  ExperienceControllers.ExperienceSingle,
);

//Experience Update
ExperienceRoutes.patch(
  "/ExperienceUpdate/:id",
  UserAuth,
  ExperienceControllers.ExperienceUpdate,
);

//Experience Delete
ExperienceRoutes.delete(
  "/ExperienceDelete/:id",
  UserAuth,
  ExperienceControllers.ExperienceDelete,
);

module.exports = ExperienceRoutes;
