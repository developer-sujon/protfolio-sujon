//External import
const { model, Schema } = require("mongoose");

const EducationsSchema = new Schema(
  {
    UserEmail: {
      type: String,
      required: true,
    },
    Name: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    Date: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

const EducationsModel = new model("Education", EducationsSchema);
module.exports = EducationsModel;
