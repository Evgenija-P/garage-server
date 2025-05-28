const {Car} = require("../../models/car")

const removeCarById = async(req, res, next) => {
    const {id} = req.params;
    const carItem = await Car.findById(id);

    if (!carItem) {
        return res.status(404).json({ status: 404, message: `Car with id: ${id} not found` });
    }

    await Car.findByIdAndDelete(id)
    res.status(200).json({carItem, message: "Delete success"})
}

module.exports = removeCarById