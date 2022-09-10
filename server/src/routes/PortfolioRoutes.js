//External Import
const PortfolioRoutes = require("express").Router();
const PortfolioControllers = require("../controller/Portfolio/PortfolioControllers");
const { UserAuth } = require("../middleware/CheckAuthLogin");
const { imageUpload, resizeImg } = require("../middleware/multer/uploadPhoto");

//Portfolio Create
PortfolioRoutes.post(
  "/PortfolioCreate",
  UserAuth,
  imageUpload.single("Image"),
  resizeImg,
  PortfolioControllers.PortfolioCreate,
);

//Portfolio List
PortfolioRoutes.get(
  "/PortfolioList/:pageNumber/:perPage/:searchKeyword",
  UserAuth,
  PortfolioControllers.PortfolioList,
);

//Portfolio List
PortfolioRoutes.get(
  "/PortfolioDropDown",
  PortfolioControllers.PortfolioDropDown,
);

//Portfolio Single
PortfolioRoutes.get(
  "/PortfolioSingle/:id",
  UserAuth,
  PortfolioControllers.PortfolioSingle,
);

//Portfolio Update
PortfolioRoutes.patch(
  "/PortfolioUpdate/:id",
  UserAuth,
  imageUpload.single("Image"),
  resizeImg,
  PortfolioControllers.PortfolioUpdate,
);

//Portfolio Delete
PortfolioRoutes.delete(
  "/PortfolioDelete/:id",
  UserAuth,
  PortfolioControllers.PortfolioDelete,
);

module.exports = PortfolioRoutes;
