//External Import
const EducationRoutes = require("express").Router();
const EducationControllers = require("../controller/Education/EducationControllers");
const { UserAuth } = require("../middleware/CheckAuthLogin");
const { imageUpload, resizeImg } = require("../middleware/multer/uploadPhoto");

//Education Create
EducationRoutes.post(
  "/EducationCreate",
  UserAuth,
  EducationControllers.EducationCreate,
);

//Education List
EducationRoutes.get(
  "/EducationList/:pageNumber/:perPage/:searchKeyword",
  UserAuth,
  EducationControllers.EducationList,
);

//Education List
EducationRoutes.get(
  "/EducationDropDown",
  EducationControllers.EducationDropDown,
);

//Education Single
EducationRoutes.get(
  "/EducationSingle/:id",
  UserAuth,
  EducationControllers.EducationSingle,
);

//Education Update
EducationRoutes.patch(
  "/EducationUpdate/:id",
  UserAuth,
  EducationControllers.EducationUpdate,
);

//Education Delete
EducationRoutes.delete(
  "/EducationDelete/:id",
  UserAuth,
  EducationControllers.EducationDelete,
);

module.exports = EducationRoutes;
