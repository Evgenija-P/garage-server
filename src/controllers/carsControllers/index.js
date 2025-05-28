const {getAll} = require("./getAll");
const removeCarById = require("./removeCarById");
const {getById} = require("./getCarById");
const addCar = require("./addCar");
const updateById = require("./updateById");

module.exports = {
  getAll,
  getById,
  addCar,
  updateById,
  removeCarById
};