//External Import
const BlogRoutes = require("express").Router();
const BlogControllers = require("../controller/Blog/BlogControllers");
const { UserAuth } = require("../middleware/CheckAuthLogin");
const { imageUpload, resizeImg } = require("../middleware/multer/uploadPhoto");

//Blog Create
BlogRoutes.post(
  "/BlogCreate",
  UserAuth,
  imageUpload.single("Image"),
  resizeImg,
  BlogControllers.BlogCreate,
);

//Blog List
BlogRoutes.get(
  "/BlogList/:pageNumber/:perPage/:searchKeyword",
  UserAuth,
  BlogControllers.BlogList,
);

//Blog List
BlogRoutes.get("/BlogDropDown", BlogControllers.BlogDropDown);

//Blog Single
BlogRoutes.get("/BlogSingle/:id", BlogControllers.BlogSingle);

//Blog Update
BlogRoutes.patch(
  "/BlogUpdate/:id",
  UserAuth,
  imageUpload.single("Image"),
  resizeImg,
  BlogControllers.BlogUpdate,
);

//Blog Delete
BlogRoutes.delete("/BlogDelete/:id", UserAuth, BlogControllers.BlogDelete);

module.exports = BlogRoutes;
