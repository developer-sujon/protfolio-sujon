//External import
const { model, Schema } = require("mongoose");

const EmailsScheama = new Schema(
  {
    To: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: (prop) => `Invalid Email Address: ${prop.value}`,
      },
    },
    Name: {
      type: String,
      required: true,
    },
    Message: {
      type: String,
      required: true,
    },
    IsRead: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, versionKey: false },
);

const EmailsModel = model("Email", EmailsScheama);

module.exports = EmailsModel;
