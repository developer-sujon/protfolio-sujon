//External import
const { model, Schema } = require("mongoose");

const SkillsSchema = new Schema(
  {
    UserEmail: {
      type: String,
      required: true,
    },
    Name: {
      type: String,
      required: true,
    },
    Percentage: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

const SkillsModel = new model("Skill", SkillsSchema);
module.exports = SkillsModel;
