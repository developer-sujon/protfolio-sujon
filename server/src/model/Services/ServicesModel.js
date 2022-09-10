//External import
const { model, Schema } = require("mongoose");

const ServicesSchema = new Schema(
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
    Image: {
      type: String,
      required: true,
    },
    public_id: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false },
);

const ServicesModel = new model("Service", ServicesSchema);
module.exports = ServicesModel;
