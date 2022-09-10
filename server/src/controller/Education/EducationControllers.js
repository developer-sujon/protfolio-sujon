//External Import
const ObjectId = require("mongoose").Types.ObjectId;
const fs = require("fs");

//External import
const EducationsModel = require("../../model/Educations/EducationsModel");
const { CreateError } = require("../../helper/ErrorHandler");

const ListService = require("../../services/Common/ListService");
const UpdateService = require("../../services/Common/UpdateService");
const DeleteService = require("../../services/Common/DeleteService");
const FindService = require("../../services/Common/FindService");
const CreateService = require("../../services/Common/CreateService");

const {
  cloudinaryUpload,
  cloudinaryDelete,
} = require("../../utility/cloudinary");
const DropDownService = require("../../services/Common/DropDownService");

/**
 * @desc Education Create
 * @access private
 * @route /api/v1/Education/EducationCreate
 * @methud POST
 */

const EducationCreate = async (req, res, next) => {
  try {
    const result = await CreateService(req, EducationsModel);
    res.status(201).json({ message: "Education Create Successfull" });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Education List
 * @access private
 * @route /api/v1/Education/EducationList/:pageNumber/:perPage/:searchKeyword
 * @methud GET
 */

const EducationList = async (req, res, next) => {
  const searchKeyword = req.params.searchKeyword;
  let SearchRgx = { $regex: searchKeyword, $options: "i" };
  let SearchArray = [
    { Name: SearchRgx },
    { Description: SearchRgx },
    { Date: SearchRgx },
  ];

  try {
    const result = await ListService(req, EducationsModel, SearchArray);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Education DropDown
 * @access public
 * @route /api/v1/Education/EducationDropDown
 * @methud GET
 */

const EducationDropDown = async (req, res, next) => {
  try {
    const result = await DropDownService(req, EducationsModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Education Single
 * @access private
 * @route /api/v1/Education/EducationSingle/:id
 * @methud GET
 */

const EducationSingle = async (req, res, next) => {
  try {
    const result = await FindService(req, EducationsModel);

    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Education Update
 * @access private
 * @route /api/v1/Education/EducationUpdate/:id
 * @methud PATCH
 */

const EducationUpdate = async (req, res, next) => {
  try {
    const result = await UpdateService(req, EducationsModel);
    res.json({ message: "Education Update Successfull" });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Education  Delete
 * @access private
 * @route /api/v1/Education/EducationDelete/:id
 * @methud DELETE
 */

const EducationDelete = async (req, res, next) => {
  try {
    const result = await DeleteService(req, EducationsModel);
    res.json({ message: "Education Delete Successfull" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  EducationCreate,
  EducationList,
  EducationDropDown,
  EducationSingle,
  EducationUpdate,
  EducationDelete,
};
