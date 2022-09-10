//External Import
const ClientRoutes = require("express").Router();
const ClientControllers = require("../controller/Client/ClientControllers");
const { UserAuth } = require("../middleware/CheckAuthLogin");
const { imageUpload, resizeImg } = require("../middleware/multer/uploadPhoto");

//Client Create
ClientRoutes.post(
  "/ClientCreate",
  UserAuth,
  imageUpload.single("Image"),
  resizeImg,
  ClientControllers.ClientCreate,
);

//Client List
ClientRoutes.get(
  "/ClientList/:pageNumber/:perPage/:searchKeyword",
  UserAuth,
  ClientControllers.ClientList,
);

//Client List
ClientRoutes.get("/ClientDropDown", ClientControllers.ClientDropDown);

//Client Single
ClientRoutes.get("/ClientSingle/:id", UserAuth, ClientControllers.ClientSingle);

//Client Update
ClientRoutes.patch(
  "/ClientUpdate/:id",
  UserAuth,
  imageUpload.single("Image"),
  resizeImg,
  ClientControllers.ClientUpdate,
);

//Client Delete
ClientRoutes.delete(
  "/ClientDelete/:id",
  UserAuth,
  ClientControllers.ClientDelete,
);

module.exports = ClientRoutes;
