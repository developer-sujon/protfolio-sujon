//External Import
const TestimonialRoutes = require("express").Router();
const TestimonialControllers = require("../controller/Testimonial/TestimonialControllers");
const { UserAuth } = require("../middleware/CheckAuthLogin");
const { imageUpload, resizeImg } = require("../middleware/multer/uploadPhoto");

//Testimonial Create
TestimonialRoutes.post(
  "/TestimonialCreate",
  UserAuth,
  imageUpload.single("Image"),
  resizeImg,
  TestimonialControllers.TestimonialCreate,
);

//Testimonial List
TestimonialRoutes.get(
  "/TestimonialList/:pageNumber/:perPage/:searchKeyword",
  UserAuth,
  TestimonialControllers.TestimonialList,
);

//Testimonial List
TestimonialRoutes.get(
  "/TestimonialDropDown",
  TestimonialControllers.TestimonialDropDown,
);

//Testimonial Single
TestimonialRoutes.get(
  "/TestimonialSingle/:id",
  UserAuth,
  TestimonialControllers.TestimonialSingle,
);

//Testimonial Update
TestimonialRoutes.patch(
  "/TestimonialUpdate/:id",
  UserAuth,
  imageUpload.single("Image"),
  resizeImg,
  TestimonialControllers.TestimonialUpdate,
);

//Testimonial Delete
TestimonialRoutes.delete(
  "/TestimonialDelete/:id",
  UserAuth,
  TestimonialControllers.TestimonialDelete,
);

module.exports = TestimonialRoutes;
