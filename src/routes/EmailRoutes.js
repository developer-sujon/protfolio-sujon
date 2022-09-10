//External Import
const EmailRoutes = require("express").Router();
const EmailControllers = require("../controller/Email/EmailControllers");
const { UserAuth } = require("../middleware/CheckAuthLogin");
const { imageUpload, resizeImg } = require("../middleware/multer/uploadPhoto");

//Email Create
EmailRoutes.post("/EmailCreate", EmailControllers.EmailCreate);

//Email List
EmailRoutes.get(
  "/EmailList/:pageNumber/:perPage/:searchKeyword",
  UserAuth,
  EmailControllers.EmailList,
);

//Email Single
EmailRoutes.get("/EmailSingle/:id", UserAuth, EmailControllers.EmailSingle);

//Email Delete
EmailRoutes.delete("/EmailDelete/:id", UserAuth, EmailControllers.EmailDelete);

module.exports = EmailRoutes;
