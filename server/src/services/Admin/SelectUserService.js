const SelectAllUserService = async (Request, UsersModel) => {
  const Email = Request.params.Email;

  const User = await UsersModel.aggregate([
    {
      $match: {
        Email: Email,
      },
    },
  ]);

  return User;
};

module.exports = SelectAllUserService;
