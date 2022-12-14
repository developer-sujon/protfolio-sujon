//External Import
const AdminRoutes = require("express").Router();

//Internal Import
const { UserAuth, AdminAuth } = require("../middleware/CheckAuthLogin");
const AdminControllers = require("../controller/Admin/AdminControllers");

//Select All User
AdminRoutes.get(
  "/SelectAllUser",
  UserAuth,
  AdminAuth,
  AdminControllers.SelectAllUser,
);

//Select User
AdminRoutes.get("/SelectUser/:Email", AdminControllers.SelectUser);

//Block User
AdminRoutes.put(
  "/BlockUser/:Email",
  UserAuth,
  AdminAuth,
  AdminControllers.BlockUser,
);

//Unblock User
AdminRoutes.put(
  "/UnblockUser/:Email",
  UserAuth,
  AdminAuth,
  AdminControllers.UnblockUser,
);

module.exports = AdminRoutes;
