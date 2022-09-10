//External Import
const ObjectId = require("mongoose").Types.ObjectId;
const fs = require("fs");

//External import
const TestimonialsModel = require("../../model/Testimonials/TestimonialsModel");
const { CreateError } = require("../../helper/ErrorHandler");

const CreateService = require("../../services/Common/CreateService");
const ListService = require("../../services/Common/ListService");
const UpdateService = require("../../services/Common/UpdateService");
const DeleteService = require("../../services/Common/DeleteService");
const FindService = require("../../services/Common/FindService");

const {
  cloudinaryUpload,
  cloudinaryDelete,
} = require("../../utility/cloudinary");
const DropDownService = require("../../services/Common/DropDownService");

/**
 * @desc Testimonial Create
 * @access private
 * @route /api/v1/Testimonial/TestimonialCreate
 * @methud POST
 */

const TestimonialCreate = async (req, res, next) => {
  try {
    const localPath = `public/images/${req.file.filename}`;
    const imgUploaded = await cloudinaryUpload(localPath);

    req.body.Image = imgUploaded?.url;
    req.body.public_id = imgUploaded?.public_id;
    fs.unlinkSync(localPath);

    const result = await CreateService(req, TestimonialsModel);
    res.status(201).json({ message: "Testimonial Create Successfull" });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Testimonial List
 * @access private
 * @route /api/v1/Testimonial/TestimonialList/:pageNumber/:perPage/:searchKeyword
 * @methud GET
 */

const TestimonialList = async (req, res, next) => {
  const searchKeyword = req.params.searchKeyword;
  let SearchRgx = { $regex: searchKeyword, $options: "i" };
  let SearchArray = [{ Title: SearchRgx }, { Description: SearchRgx }];

  try {
    const result = await ListService(req, TestimonialsModel, SearchArray);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Testimonial DropDown
 * @access public
 * @route /api/v1/Testimonial/TestimonialDropDown
 * @methud GET
 */

const TestimonialDropDown = async (req, res, next) => {
  try {
    const result = await DropDownService(req, TestimonialsModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Testimonial Single
 * @access private
 * @route /api/v1/Testimonial/TestimonialSingle/:id
 * @methud GET
 */

const TestimonialSingle = async (req, res, next) => {
  try {
    const result = await FindService(req, TestimonialsModel);

    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Testimonial Update
 * @access private
 * @route /api/v1/Testimonial/TestimonialUpdate/:id
 * @methud PATCH
 */

const TestimonialUpdate = async (req, res, next) => {
  try {
    if (req?.file?.filename) {
      const Testimonial = await FindService(req, TestimonialsModel);
      await cloudinaryDelete(Testimonial?.[0]?.public_id);

      const localPath = `public/images/${req.file.filename}`;
      const imgUploaded = await cloudinaryUpload(localPath);
      req.body.Image = imgUploaded?.url;
      req.body.public_id = imgUploaded?.public_id;
      fs.unlinkSync(localPath);
    }

    const result = await UpdateService(req, TestimonialsModel);
    res.json({ message: "Testimonial Update Successfull" });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Testimonial  Delete
 * @access private
 * @route /api/v1/Testimonial/TestimonialDelete/:id
 * @methud DELETE
 */

const TestimonialDelete = async (req, res, next) => {
  try {
    const Testimonial = await FindService(req, TestimonialsModel);
    await cloudinaryDelete(Testimonial?.[0]?.public_id);
    const result = await DeleteService(req, TestimonialsModel);
    res.json({ message: "Testimonial Delete Successfull" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  TestimonialCreate,
  TestimonialList,
  TestimonialDropDown,
  TestimonialSingle,
  TestimonialUpdate,
  TestimonialDelete,
};
