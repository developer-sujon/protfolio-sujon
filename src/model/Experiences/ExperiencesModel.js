//External import
const { model, Schema } = require("mongoose");

const ExperiencesSchema = new Schema(
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

const ExperiencesModel = new model("Experience", ExperiencesSchema);
module.exports = ExperiencesModel;
