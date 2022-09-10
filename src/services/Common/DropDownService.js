const DropDownService = async (Request, DataModel) => {
  const data = DataModel.aggregate([{ $project: { public_id: 0 } }]);
  return data;
};

module.exports = DropDownService;
