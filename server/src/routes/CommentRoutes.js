//External Import
const CommentRoutes = require("express").Router();
const CommentControllers = require("../controller/Comment/CommentControllers");
const { UserAuth } = require("../middleware/CheckAuthLogin");

//Comment Create
CommentRoutes.post("/CommentCreate", CommentControllers.CommentCreate);

//Comment List
CommentRoutes.get(
  "/CommentList/:pageNumber/:perPage/:searchKeyword",
  UserAuth,
  CommentControllers.CommentList,
);

//Comment List
CommentRoutes.get("/CommentDropDown/:id", CommentControllers.CommentDropDown);

//Comment Update
CommentRoutes.patch(
  "/CommentUpdate/:id",
  UserAuth,
  CommentControllers.CommentUpdate,
);

//Comment Delete
CommentRoutes.delete(
  "/CommentDelete/:id",
  UserAuth,
  CommentControllers.CommentDelete,
);

module.exports = CommentRoutes;
