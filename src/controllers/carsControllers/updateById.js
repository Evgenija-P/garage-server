const { Car } = require("../../models/car");

const updateById = async (req, res) => {
  const { id } = req.params;
  const result = await Car.findByIdAndUpdate(id, req.body, {new: true});
  if (!result) {
    return res.status(400).json({ status: 400, message: "Not found" })
  }
  res.status(200).json({ result, status: 200, message: "operation successful" });
};

module.exports = updateById;