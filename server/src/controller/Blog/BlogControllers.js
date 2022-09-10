//External Import
const ObjectId = require("mongoose").Types.ObjectId;
const fs = require("fs");

//External import
const BlogsModel = require("../../model/Blogs/BlogsModel");
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
 * @desc Blog Create
 * @access private
 * @route /api/v1/Blog/BlogCreate
 * @methud POST
 */

const BlogCreate = async (req, res, next) => {
  try {
    const localPath = `public/images/${req.file.filename}`;
    const imgUploaded = await cloudinaryUpload(localPath);

    req.body.Image = imgUploaded?.url;
    req.body.public_id = imgUploaded?.public_id;
    fs.unlinkSync(localPath);

    const result = await CreateService(req, BlogsModel);
    res.status(201).json({ message: "Blog Create Successfull" });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Blog List
 * @access private
 * @route /api/v1/Blog/BlogList/:pageNumber/:perPage/:searchKeyword
 * @methud GET
 */

const BlogList = async (req, res, next) => {
  const searchKeyword = req.params.searchKeyword;
  let SearchRgx = { $regex: searchKeyword, $options: "i" };
  let SearchArray = [{ Title: SearchRgx }, { Description: SearchRgx }];

  try {
    const result = await ListService(req, BlogsModel, SearchArray);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Blog DropDown
 * @access public
 * @route /api/v1/Blog/BlogDropDown
 * @methud GET
 */

const BlogDropDown = async (req, res, next) => {
  try {
    const result = await DropDownService(req, BlogsModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Blog Single
 * @access private
 * @route /api/v1/Blog/BlogSingle/:id
 * @methud GET
 */

const BlogSingle = async (req, res, next) => {
  try {
    const result = await FindService(req, BlogsModel);

    await BlogsModel.updateOne(
      { _id: req.params.id },
      { $inc: { View: 1 } },
      { new: true },
    );

    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Blog Update
 * @access private
 * @route /api/v1/Blog/BlogUpdate/:id
 * @methud PATCH
 */

const BlogUpdate = async (req, res, next) => {
  try {
    if (req?.file?.filename) {
      const Blog = await FindService(req, BlogsModel);
      await cloudinaryDelete(Blog?.[0]?.public_id);

      const localPath = `public/images/${req.file.filename}`;
      const imgUploaded = await cloudinaryUpload(localPath);
      req.body.Image = imgUploaded?.url;
      req.body.public_id = imgUploaded?.public_id;
      fs.unlinkSync(localPath);
    }

    const result = await UpdateService(req, BlogsModel);
    res.json({ message: "Blog Update Successfull" });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Blog  Delete
 * @access private
 * @route /api/v1/Blog/BlogDelete/:id
 * @methud DELETE
 */

const BlogDelete = async (req, res, next) => {
  try {
    const Blog = await FindService(req, BlogsModel);
    await cloudinaryDelete(Blog?.[0]?.public_id);
    const result = await DeleteService(req, BlogsModel);
    res.json({ message: "Blog Delete Successfull" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  BlogCreate,
  BlogList,
  BlogDropDown,
  BlogSingle,
  BlogUpdate,
  BlogDelete,
};
