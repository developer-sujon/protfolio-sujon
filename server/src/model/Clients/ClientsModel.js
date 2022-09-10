//External import
const { model, Schema } = require("mongoose");

const ClientsSchema = new Schema(
  {
    UserEmail: {
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

const ClientsModel = new model("Client", ClientsSchema);
module.exports = ClientsModel;
