const SummeryService = async (Request, DataModel) => {
  const UserEmail = Request.Email;

  const QueryObject = {};
  QueryObject.UserEmail = UserEmail;

  const data = await DataModel.aggregate([
    {
      $match: QueryObject,
    },
    { $count: "Total" },
  ]);
  return data;
};

module.exports = SummeryService;
