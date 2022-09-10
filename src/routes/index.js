//External import
const routes = require("express").Router();

//Internal Import
const AuthRoutes = require("./AuthRoutes");
const UserRoutes = require("./UserRoutes");
const AdminRoutes = require("./AdminRoutes");
const BlogRoutes = require("./BlogRoutes");
const EmailRoutes = require("./EmailRoutes");
const PortfolioRoutes = require("./PortfolioRoutes");
const TestimonialRoutes = require("./TestimonialRoutes");
const ClientRoutes = require("./ClientRoutes");
const ServiceRoutes = require("./ServicesRoutes");
const EducationRoutes = require("./EducationRoutes");
const ExperienceRoutes = require("./ExperienceRoutes");
const SkillRoutes = require("./SkillRoutes");
const SummeryRoutes = require("./SummeryRoutes");
const CommentRoutes = require("./CommentRoutes");

//Auth Routes
routes.use("/Auth", AuthRoutes);

//User Routes
routes.use("/User", UserRoutes);

//User Routes
routes.use("/Admin", AdminRoutes);

//Blog Routes
routes.use("/Blog", BlogRoutes);

//Brand Routes
routes.use("/Email", EmailRoutes);

//Portfolio Routes
routes.use("/Portfolio", PortfolioRoutes);

//Testimonial Routes
routes.use("/Testimonial", TestimonialRoutes);

//Client Routes
routes.use("/Client", ClientRoutes);

//Service Routes
routes.use("/Service", ServiceRoutes);

//Education Routes
routes.use("/Education", EducationRoutes);

//Experience Routes
routes.use("/Experience", ExperienceRoutes);

//Skill Routes
routes.use("/Skill", SkillRoutes);

//Summery Routes
routes.use("/Summery", SummeryRoutes);

//Comment Routes
routes.use("/Comment", CommentRoutes);

module.exports = routes;
