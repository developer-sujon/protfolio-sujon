//External Import
const ServiceRoutes = require("express").Router();
const ServiceControllers = require("../controller/Services/ServiceControllers");
const { UserAuth } = require("../middleware/CheckAuthLogin");
const { imageUpload, resizeImg } = require("../middleware/multer/uploadPhoto");

//Service Create
ServiceRoutes.post(
  "/ServiceCreate",
  UserAuth,
  imageUpload.single("Image"),
  resizeImg,
  ServiceControllers.ServiceCreate,
);

//Service List
ServiceRoutes.get(
  "/ServiceList/:pageNumber/:perPage/:searchKeyword",
  UserAuth,
  ServiceControllers.ServiceList,
);

//Service List
ServiceRoutes.get("/ServiceDropDown", ServiceControllers.ServiceDropDown);

//Service Single
ServiceRoutes.get(
  "/ServiceSingle/:id",
  UserAuth,
  ServiceControllers.ServiceSingle,
);

//Service Update
ServiceRoutes.patch(
  "/ServiceUpdate/:id",
  UserAuth,
  imageUpload.single("Image"),
  resizeImg,
  ServiceControllers.ServiceUpdate,
);

//Service Delete
ServiceRoutes.delete(
  "/ServiceDelete/:id",
  UserAuth,
  ServiceControllers.ServiceDelete,
);

module.exports = ServiceRoutes;
