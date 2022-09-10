//External Import
const ObjectId = require("mongoose").Types.ObjectId;
const fs = require("fs");

//External import
const ExperiencesModel = require("../../model/Experiences/ExperiencesModel");
const { CreateError } = require("../../helper/ErrorHandler");

const ListService = require("../../services/Common/ListService");
const UpdateService = require("../../services/Common/UpdateService");
const DeleteService = require("../../services/Common/DeleteService");
const FindService = require("../../services/Common/FindService");
const CreateService = require("../../services/common/CreateService");

const {
  cloudinaryUpload,
  cloudinaryDelete,
} = require("../../utility/cloudinary");
const DropDownService = require("../../services/Common/DropDownService");

/**
 * @desc Experience Create
 * @access private
 * @route /api/v1/Experience/ExperienceCreate
 * @methud POST
 */

const ExperienceCreate = async (req, res, next) => {
  try {
    const result = await CreateService(req, ExperiencesModel);
    res.status(201).json({ message: "Experience Create Successfull" });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Experience List
 * @access private
 * @route /api/v1/Experience/ExperienceList/:pageNumber/:perPage/:searchKeyword
 * @methud GET
 */

const ExperienceList = async (req, res, next) => {
  const searchKeyword = req.params.searchKeyword;
  let SearchRgx = { $regex: searchKeyword, $options: "i" };
  let SearchArray = [
    { Name: SearchRgx },
    { Description: SearchRgx },
    { Date: SearchRgx },
  ];

  try {
    const result = await ListService(req, ExperiencesModel, SearchArray);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Experience DropDown
 * @access public
 * @route /api/v1/Experience/ExperienceDropDown
 * @methud GET
 */

const ExperienceDropDown = async (req, res, next) => {
  try {
    const result = await DropDownService(req, ExperiencesModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Experience Single
 * @access private
 * @route /api/v1/Experience/ExperienceSingle/:id
 * @methud GET
 */

const ExperienceSingle = async (req, res, next) => {
  try {
    const result = await FindService(req, ExperiencesModel);

    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Experience Update
 * @access private
 * @route /api/v1/Experience/ExperienceUpdate/:id
 * @methud PATCH
 */

const ExperienceUpdate = async (req, res, next) => {
  try {
    const result = await UpdateService(req, ExperiencesModel);
    res.json({ message: "Experience Update Successfull" });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Experience  Delete
 * @access private
 * @route /api/v1/Experience/ExperienceDelete/:id
 * @methud DELETE
 */

const ExperienceDelete = async (req, res, next) => {
  try {
    const result = await DeleteService(req, ExperiencesModel);
    res.json({ message: "Experience Delete Successfull" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  ExperienceCreate,
  ExperienceList,
  ExperienceDropDown,
  ExperienceSingle,
  ExperienceUpdate,
  ExperienceDelete,
};
