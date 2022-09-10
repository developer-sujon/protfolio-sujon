//External import
const SummeryService = require("../../services/Summery/SummeryService");
const BlogsModel = require("../../model/Blogs/BlogsModel");
const ClientsModel = require("../../model/Clients/ClientsModel");
const PortfoliosModel = require("../../model/Portfolios/PortfoliosModel");
const TestimonialsModel = require("../../model/Testimonials/TestimonialsModel");
const ServicesModel = require("../../model/Services/ServicesModel");
const EducationsModel = require("../../model/Educations/EducationsModel");
const ExperiencesModel = require("../../model/Experiences/ExperiencesModel");
const SkillsModel = require("../../model/Skills/SkillsModel");
const EmailsModel = require("../../model/Emails/EmailsModel");
const CommentsModel = require("../../model/Comments/CommentsModel");

/**
 * @desc Blog Summery
 * @access private
 * @route /api/v1/Summery/BlogSummery
 * @methud GET
 */

const BlogSummery = async (req, res, next) => {
  try {
    const result = await SummeryService(req, BlogsModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Portfolio Summery
 * @access private
 * @route /api/v1/Summery/PortfolioSummery
 * @methud GET
 */

const PortfolioSummery = async (req, res, next) => {
  try {
    const result = await SummeryService(req, PortfoliosModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Testimonial Summery
 * @access private
 * @route /api/v1/Summery/TestimonialSummery
 * @methud GET
 */

const TestimonialSummery = async (req, res, next) => {
  try {
    const result = await SummeryService(req, TestimonialsModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Client Summery
 * @access private
 * @route /api/v1/Summery/ClientSummery
 * @methud GET
 */

const ClientSummery = async (req, res, next) => {
  try {
    const result = await SummeryService(req, ClientsModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Service Summery
 * @access private
 * @route /api/v1/Service/ServiceSummery
 * @methud GET
 */

const ServiceSummery = async (req, res, next) => {
  try {
    const result = await SummeryService(req, ServicesModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Education Summery
 * @access private
 * @route /api/v1/Summery/EducationSummery
 * @methud GET
 */

const EducationSummery = async (req, res, next) => {
  try {
    const result = await SummeryService(req, EducationsModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Experience Summery
 * @access private
 * @route /api/v1/Summery/ExperienceSummery
 * @methud GET
 */

const ExperienceSummery = async (req, res, next) => {
  try {
    const result = await SummeryService(req, ExperiencesModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Skill Summery
 * @access private
 * @route /api/v1/Summery/SkillSummery
 * @methud GET
 */

const SkillSummery = async (req, res, next) => {
  try {
    const result = await SummeryService(req, SkillsModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Email Summery
 * @access private
 * @route /api/v1/Summery/EmailSummery
 * @methud GET
 */

const EmailSummery = async (req, res, next) => {
  try {
    const result = await EmailsModel.aggregate([{ $count: "Total" }]);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Comment Summery
 * @access private
 * @route /api/v1/Summery/CommentSummery
 * @methud GET
 */

const CommentSummery = async (req, res, next) => {
  try {
    const result = await CommentsModel.aggregate([{ $count: "Total" }]);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  BlogSummery,
  PortfolioSummery,
  TestimonialSummery,
  ClientSummery,
  ServiceSummery,
  EducationSummery,
  ExperienceSummery,
  SkillSummery,
  EmailSummery,
  CommentSummery,
};
