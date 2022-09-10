//External Import
const ObjectId = require("mongoose").Types.ObjectId;
const Filter = require("bad-words");

//Internal Import
const CreateService = require("../../services/common/CreateService");
const EmailsModel = require("../../model/Emails/EmailsModel");
const { CreateError } = require("../../helper/ErrorHandler");

/**
 * @desc Email Create
 * @access public
 * @route /api/v1/Email/EmailCreate
 * @methud POST
 */

const EmailCreate = async (req, res, next) => {
  let { Message, Name } = req.body;

  const filter = new Filter();
  const isProfane = filter.isProfane(Message, Name);

  try {
    if (isProfane) {
      throw CreateError(
        "Send Mail Failure Because it Contains Profane Words",
        400,
      );
    }

    const result = await CreateService(req, EmailsModel);
    res.status(201).json({ message: "Email Send Successfull" });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Email List
 * @access private
 * @route /api/v1/Email/EmailList/:pageNumber/:perPage/:searchKeyword
 * @methud GET
 */

const EmailList = async (req, res, next) => {
  const searchKeyword = req.params.searchKeyword;
  const pageNumber = +req.params.pageNumber;
  const perPage = +req.params.perPage;
  const skipRow = (pageNumber - 1) * perPage;

  let SearchRgx = { $regex: searchKeyword, $options: "i" };
  let SearchArray = [
    { To: SearchRgx },
    { Name: SearchRgx },
    { Message: SearchRgx },
  ];

  let data;

  try {
    if (searchKeyword !== "0") {
      data = await EmailsModel.aggregate([
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
      data = await EmailsModel.aggregate([
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
 * @desc Email Single
 * @access private
 * @route /api/v1/Email/EmailSingle/:id
 * @methud GET
 */

const EmailSingle = async (req, res, next) => {
  try {
    const result = await EmailsModel.aggregate([
      {
        $match: { _id: ObjectId(req.params.id) },
      },
    ]);

    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Email  Delete
 * @access private
 * @route /api/v1/Email/EmailDelete/:id
 * @methud DELETE
 */

const EmailDelete = async (req, res, next) => {
  try {
    await EmailsModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Email Delete Successfull" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  EmailCreate,
  EmailList,
  EmailSingle,
  EmailDelete,
};
