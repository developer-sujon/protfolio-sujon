//External Import
const ObjectId = require("mongoose").Types.ObjectId;
const fs = require("fs");

//External import
const SkillsModel = require("../../model/Skills/SkillsModel");
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
 * @desc Skill Create
 * @access private
 * @route /api/v1/Skill/SkillCreate
 * @methud POST
 */

const SkillCreate = async (req, res, next) => {
  try {
    const result = await CreateService(req, SkillsModel);
    res.status(201).json({ message: "Skill Create Successfull" });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Skill List
 * @access private
 * @route /api/v1/Skill/SkillList/:pageNumber/:perPage/:searchKeyword
 * @methud GET
 */

const SkillList = async (req, res, next) => {
  const searchKeyword = req.params.searchKeyword;
  let SearchRgx = { $regex: searchKeyword, $options: "i" };
  let SearchArray = [{ Name: SearchRgx }, { Percentage: SearchRgx }];

  try {
    const result = await ListService(req, SkillsModel, SearchArray);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Skill DropDown
 * @access public
 * @route /api/v1/Skill/SkillDropDown
 * @methud GET
 */

const SkillDropDown = async (req, res, next) => {
  try {
    const result = await DropDownService(req, SkillsModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Skill Single
 * @access private
 * @route /api/v1/Skill/SkillSingle/:id
 * @methud GET
 */

const SkillSingle = async (req, res, next) => {
  try {
    const result = await FindService(req, SkillsModel);

    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Skill Update
 * @access private
 * @route /api/v1/Skill/SkillUpdate/:id
 * @methud PATCH
 */

const SkillUpdate = async (req, res, next) => {
  try {
    const result = await UpdateService(req, SkillsModel);
    res.json({ message: "Skill Update Successfull" });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Skill  Delete
 * @access private
 * @route /api/v1/Skill/SkillDelete/:id
 * @methud DELETE
 */

const SkillDelete = async (req, res, next) => {
  try {
    const result = await DeleteService(req, SkillsModel);
    res.json({ message: "Skill Delete Successfull" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  SkillCreate,
  SkillList,
  SkillDropDown,
  SkillSingle,
  SkillUpdate,
  SkillDelete,
};
