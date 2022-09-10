//External Import
const SummeryRoutes = require("express").Router();
const { UserAuth } = require("../middleware/CheckAuthLogin");
const SummeryControllers = require("../controller/Summery/SummeryControllers");

//Blog Summery
SummeryRoutes.get("/BlogSummery", UserAuth, SummeryControllers.BlogSummery);

//Portfolio Summery
SummeryRoutes.get(
  "/PortfolioSummery",
  UserAuth,
  SummeryControllers.PortfolioSummery,
);

//Testimonial Summery
SummeryRoutes.get(
  "/TestimonialSummery",
  UserAuth,
  SummeryControllers.TestimonialSummery,
);

//Client Summery
SummeryRoutes.get("/ClientSummery", UserAuth, SummeryControllers.ClientSummery);

//Service Summery
SummeryRoutes.get(
  "/ServiceSummery",
  UserAuth,
  SummeryControllers.ServiceSummery,
);

//Education Summery
SummeryRoutes.get(
  "/EducationSummery",
  UserAuth,
  SummeryControllers.EducationSummery,
);

//Experience Summery
SummeryRoutes.get(
  "/ExperienceSummery",
  UserAuth,
  SummeryControllers.ExperienceSummery,
);

//Skill Summery
SummeryRoutes.get("/SkillSummery", UserAuth, SummeryControllers.SkillSummery);

//Email Summery
SummeryRoutes.get("/EmailSummery", UserAuth, SummeryControllers.EmailSummery);

//Comment Summery
SummeryRoutes.get(
  "/CommentSummery",
  UserAuth,
  SummeryControllers.CommentSummery,
);

module.exports = SummeryRoutes;
