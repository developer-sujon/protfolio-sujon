//External import
const { model, Schema } = require("mongoose");

const CommentsSchema = new Schema(
  {
    UserEmail: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: (prop) => `Invalid Email Address: ${prop.value}`,
      },
    },
    BlogId: {
      type: Schema.Types.ObjectId,
      ref: "Blog",
      required: true,
    },
    UserName: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    Status: {
      type: String,
      enum: ["Deactive", "Active"],
      default: "Deactive",
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

const CommentsModel = new model("Comment", CommentsSchema);
module.exports = CommentsModel;
