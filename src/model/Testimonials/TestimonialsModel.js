//External import
const { model, Schema } = require("mongoose");

const TestimonialsSchema = new Schema(
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

const TestimonialsModel = new model("Testimonial", TestimonialsSchema);
module.exports = TestimonialsModel;
