//External Import
const ObjectId = require("mongoose").Types.ObjectId;
const fs = require("fs");

//External import
const ServicesModel = require("../../model/Services/ServicesModel");
const { CreateError } = require("../../helper/ErrorHandler");

const CreateService = require("../../services/common/CreateService");
const ListService = require("../../services/common/ListService");
const UpdateService = require("../../services/common/UpdateService");
const DeleteService = require("../../services/Common/DeleteService");
const FindService = require("../../services/Common/FindService");

const {
  cloudinaryUpload,
  cloudinaryDelete,
} = require("../../utility/cloudinary");
const DropDownService = require("../../services/Common/DropDownService");

/**
 * @desc Service Create
 * @access private
 * @route /api/v1/Service/ServiceCreate
 * @methud POST
 */

const ServiceCreate = async (req, res, next) => {
  try {
    const localPath = `public/images/${req.file.filename}`;
    const imgUploaded = await cloudinaryUpload(localPath);

    req.body.Image = imgUploaded?.url;
    req.body.public_id = imgUploaded?.public_id;
    fs.unlinkSync(localPath);

    const result = await CreateService(req, ServicesModel);
    res.status(201).json({ message: "Service Create Successfull" });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Service List
 * @access private
 * @route /api/v1/Service/ServiceList/:pageNumber/:perPage/:searchKeyword
 * @methud GET
 */

const ServiceList = async (req, res, next) => {
  const searchKeyword = req.params.searchKeyword;
  let SearchRgx = { $regex: searchKeyword, $options: "i" };
  let SearchArray = [{ Title: SearchRgx }, { Description: SearchRgx }];

  try {
    const result = await ListService(req, ServicesModel, SearchArray);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Service DropDown
 * @access public
 * @route /api/v1/Service/ServiceDropDown
 * @methud GET
 */

const ServiceDropDown = async (req, res, next) => {
  try {
    const result = await DropDownService(req, ServicesModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Service Single
 * @access private
 * @route /api/v1/Service/ServiceSingle/:id
 * @methud GET
 */

const ServiceSingle = async (req, res, next) => {
  try {
    const result = await FindService(req, ServicesModel);

    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Service Update
 * @access private
 * @route /api/v1/Service/ServiceUpdate/:id
 * @methud PATCH
 */

const ServiceUpdate = async (req, res, next) => {
  try {
    if (req?.file?.filename) {
      const Service = await FindService(req, ServicesModel);
      await cloudinaryDelete(Service?.[0]?.public_id);

      const localPath = `public/images/${req.file.filename}`;
      const imgUploaded = await cloudinaryUpload(localPath);
      req.body.Image = imgUploaded?.url;
      req.body.public_id = imgUploaded?.public_id;
      fs.unlinkSync(localPath);
    }

    const result = await UpdateService(req, ServicesModel);
    res.json({ message: "Service Update Successfull" });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Service  Delete
 * @access private
 * @route /api/v1/Service/ServiceDelete/:id
 * @methud DELETE
 */

const ServiceDelete = async (req, res, next) => {
  try {
    const Service = await FindService(req, ServicesModel);
    await cloudinaryDelete(Service?.[0]?.public_id);
    const result = await DeleteService(req, ServicesModel);
    res.json({ message: "Service Delete Successfull" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  ServiceCreate,
  ServiceList,
  ServiceDropDown,
  ServiceSingle,
  ServiceUpdate,
  ServiceDelete,
};
