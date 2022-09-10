//External Import
const ObjectId = require("mongoose").Types.ObjectId;
const fs = require("fs");
const Filter = require("bad-words");

//External import
const CommentsModel = require("../../model/Comments/CommentsModel");
const { CreateError } = require("../../helper/ErrorHandler");

const CreateService = require("../../services/Common/CreateService");
const ListService = require("../../services/Common/ListService");
const UpdateService = require("../../services/Common/UpdateService");
const DeleteService = require("../../services/Common/DeleteService");
const FindService = require("../../services/Common/FindService");

const DropDownService = require("../../services/Common/DropDownService");

/**
 * @desc Comment Create
 * @access private
 * @route /api/v1/Comment/CommentCreate
 * @methud POST
 */

const CommentCreate = async (req, res, next) => {
  let { Description } = req.body;

  const filter = new Filter();
  const isProfane = filter.isProfane(Description);

  try {
    if (isProfane) {
      throw CreateError(
        "Create Comment Failure Because it Contains Profane Words",
        400,
      );
    }

    const data = new CommentsModel(req.body);
    await data.save();
    res.status(201).json({ message: "Comment Create Successfull and Pending" });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Comment List
 * @access private
 * @route /api/v1/Comment/CommentList/:pageNumber/:perPage/:searchKeyword
 * @methud GET
 */

const CommentList = async (req, res, next) => {
  const searchKeyword = req.params.searchKeyword;
  const pageNumber = +req.params.pageNumber;
  const perPage = +req.params.perPage;
  const skipRow = (pageNumber - 1) * perPage;

  let SearchRgx = { $regex: searchKeyword, $options: "i" };
  let SearchArray = [
    { Status: SearchRgx },
    { UserName: SearchRgx },
    { Description: SearchRgx },
  ];

  let data;

  try {
    if (searchKeyword !== "0") {
      data = await CommentsModel.aggregate([
        {
          $match: { $or: SearchArray },
        },
        {
          $facet: {
            Total: [{ $count: "count" }],
            Data: [{ $skip: skipRow }, { $limit: perPage }],
          },
        },
      ]);

      res.json(data);
    } else {
      data = await CommentsModel.aggregate([
        {
          $facet: {
            Total: [{ $count: "count" }],
            Data: [{ $skip: skipRow }, { $limit: perPage }],
          },
        },
      ]);

      res.json(data);
    }
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Comment DropDown
 * @access public
 * @route /api/v1/Comment/CommentDropDown/:id
 * @methud GET
 */

const CommentDropDown = async (req, res, next) => {
  try {
    const result = await CommentsModel.aggregate([
      { $match: { BlogId: ObjectId(req.params.id), Status: "Active" } },
      { $sort: { _id: -1 } },
    ]);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Comment Update
 * @access public
 * @route /api/v1/Comment/CommentUpdate/:id
 * @methud PUT
 */

const CommentUpdate = async (req, res, next) => {
  try {
    const result = await CommentsModel.update(
      { _id: req.params.id },
      { Status: req.body.Status },
      { new: true },
    );
    res.json({ message: "Comment Status Successfull" });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Comment  Delete
 * @access private
 * @route /api/v1/Comment/CommentDelete/:id
 * @methud DELETE
 */

const CommentDelete = async (req, res, next) => {
  try {
    await CommentsModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Comment Delete Successfull" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  CommentCreate,
  CommentList,
  CommentDropDown,
  CommentUpdate,
  CommentDelete,
};
