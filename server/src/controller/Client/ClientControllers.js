//External Import
const ObjectId = require("mongoose").Types.ObjectId;
const fs = require("fs");

//External import
const ClientsModel = require("../../model/Clients/ClientsModel");
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
 * @desc Client Create
 * @access private
 * @route /api/v1/Client/ClientCreate
 * @methud POST
 */

const ClientCreate = async (req, res, next) => {
  try {
    const localPath = `public/images/${req.file.filename}`;
    const imgUploaded = await cloudinaryUpload(localPath);

    req.body.Image = imgUploaded?.url;
    req.body.public_id = imgUploaded?.public_id;
    fs.unlinkSync(localPath);

    const result = await CreateService(req, ClientsModel);
    res.status(201).json({ message: "Client Create Successfull" });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Client List
 * @access private
 * @route /api/v1/Client/ClientList/:pageNumber/:perPage/:searchKeyword
 * @methud GET
 */

const ClientList = async (req, res, next) => {
  const searchKeyword = req.params.searchKeyword;
  let SearchRgx = { $regex: searchKeyword, $options: "i" };
  let SearchArray = [{ Title: SearchRgx }, { Description: SearchRgx }];

  try {
    const result = await ListService(req, ClientsModel, SearchArray);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Client DropDown
 * @access public
 * @route /api/v1/Client/ClientDropDown
 * @methud GET
 */

const ClientDropDown = async (req, res, next) => {
  try {
    const result = await DropDownService(req, ClientsModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Client Single
 * @access private
 * @route /api/v1/Client/ClientSingle/:id
 * @methud GET
 */

const ClientSingle = async (req, res, next) => {
  try {
    const result = await FindService(req, ClientsModel);

    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Client Update
 * @access private
 * @route /api/v1/Client/ClientUpdate/:id
 * @methud PATCH
 */

const ClientUpdate = async (req, res, next) => {
  try {
    if (req?.file?.filename) {
      const Client = await FindService(req, ClientsModel);
      await cloudinaryDelete(Client?.[0]?.public_id);

      const localPath = `public/images/${req.file.filename}`;
      const imgUploaded = await cloudinaryUpload(localPath);
      req.body.Image = imgUploaded?.url;
      req.body.public_id = imgUploaded?.public_id;
      fs.unlinkSync(localPath);
    }

    const result = await UpdateService(req, ClientsModel);
    res.json({ message: "Client Update Successfull" });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Client  Delete
 * @access private
 * @route /api/v1/Client/ClientDelete/:id
 * @methud DELETE
 */

const ClientDelete = async (req, res, next) => {
  try {
    const Client = await FindService(req, ClientsModel);
    await cloudinaryDelete(Client?.[0]?.public_id);
    const result = await DeleteService(req, ClientsModel);
    res.json({ message: "Client Delete Successfull" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  ClientCreate,
  ClientList,
  ClientDropDown,
  ClientSingle,
  ClientUpdate,
  ClientDelete,
};
