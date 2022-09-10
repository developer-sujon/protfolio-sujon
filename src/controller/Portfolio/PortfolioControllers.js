//External Import
const ObjectId = require("mongoose").Types.ObjectId;
const fs = require("fs");

//External import
const PortfoliosModel = require("../../model/Portfolios/PortfoliosModel");
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
 * @desc Portfolio Create
 * @access private
 * @route /api/v1/Portfolio/PortfolioCreate
 * @methud POST
 */

const PortfolioCreate = async (req, res, next) => {
  try {
    const localPath = `public/images/${req.file.filename}`;
    const imgUploaded = await cloudinaryUpload(localPath);

    req.body.Image = imgUploaded?.url;
    req.body.public_id = imgUploaded?.public_id;
    fs.unlinkSync(localPath);

    const result = await CreateService(req, PortfoliosModel);
    res.status(201).json({ message: "Portfolio Create Successfull" });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Portfolio List
 * @access private
 * @route /api/v1/Portfolio/PortfolioList/:pageNumber/:perPage/:searchKeyword
 * @methud GET
 */

const PortfolioList = async (req, res, next) => {
  const searchKeyword = req.params.searchKeyword;
  let SearchRgx = { $regex: searchKeyword, $options: "i" };
  let SearchArray = [
    { Category: SearchRgx },
    { Title: SearchRgx },
    { Description: SearchRgx },
  ];

  try {
    const result = await ListService(req, PortfoliosModel, SearchArray);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Portfolio DropDown
 * @access public
 * @route /api/v1/Portfolio/PortfolioDropDown
 * @methud GET
 */

const PortfolioDropDown = async (req, res, next) => {
  try {
    const result = await DropDownService(req, PortfoliosModel);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Portfolio Single
 * @access private
 * @route /api/v1/Portfolio/PortfolioSingle/:id
 * @methud GET
 */

const PortfolioSingle = async (req, res, next) => {
  try {
    const result = await FindService(req, PortfoliosModel);

    await PortfoliosModel.updateOne(
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
 * @desc Portfolio Update
 * @access private
 * @route /api/v1/Portfolio/PortfolioUpdate/:id
 * @methud PATCH
 */

const PortfolioUpdate = async (req, res, next) => {
  try {
    if (req?.file?.filename) {
      const Portfolio = await FindService(req, PortfoliosModel);
      await cloudinaryDelete(Portfolio?.[0]?.public_id);

      const localPath = `public/images/${req.file.filename}`;
      const imgUploaded = await cloudinaryUpload(localPath);
      req.body.Image = imgUploaded?.url;
      req.body.public_id = imgUploaded?.public_id;
      fs.unlinkSync(localPath);
    }

    const result = await UpdateService(req, PortfoliosModel);
    res.json({ message: "Portfolio Update Successfull" });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Portfolio  Delete
 * @access private
 * @route /api/v1/Portfolio/PortfolioDelete/:id
 * @methud DELETE
 */

const PortfolioDelete = async (req, res, next) => {
  try {
    const Portfolio = await FindService(req, PortfoliosModel);
    await cloudinaryDelete(Portfolio?.[0]?.public_id);
    const result = await DeleteService(req, PortfoliosModel);
    res.json({ message: "Portfolio Delete Successfull" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  PortfolioCreate,
  PortfolioList,
  PortfolioDropDown,
  PortfolioSingle,
  PortfolioUpdate,
  PortfolioDelete,
};
