//External import
const { model, Schema } = require("mongoose");

const PortfoliosSchema = new Schema(
  {
    UserEmail: {
      type: String,
      required: true,
    },
    Category: {
      type: String,
      required: true,
    },
    Title: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    Image: {
      type: String,
      required: true,
    },
    Url: {
      type: String,
      required: true,
    },
    public_id: {
      type: String,
    },
    View: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true, versionKey: false },
);

const PortfoliosModel = new model("Portfolio", PortfoliosSchema);
module.exports = PortfoliosModel;
