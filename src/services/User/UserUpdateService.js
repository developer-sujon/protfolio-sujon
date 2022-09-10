const UserUpdateService = async (Request, DataModel) => {
  const { Email } = Request;
  const { Name, Phone, Image } = Request.body;

  await DataModel.updateOne({ Email: Email }, Request.body, { new: true });

  return { message: "User Update Successfull" };
};
module.exports = UserUpdateService;
