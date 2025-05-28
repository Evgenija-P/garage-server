const { auth } = require("./auth");
const isValidId = require("./isValidId");
const { validateBody } = require("./validateBody");

module.exports = {
    validateBody,
    isValidId,
    auth
}