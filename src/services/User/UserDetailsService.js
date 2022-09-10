const UserDetailsService = async (Request, DataModel) => {
  const { Email } = Request;

  const User = await DataModel.aggregate([
    { $match: { Email: Email } },
    {
      $project: {
        Password: 0,
      },
    },
  ]);

  return User;
};
module.exports = UserDetailsService;
