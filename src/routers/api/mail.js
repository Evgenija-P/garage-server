const express = require("express")
const ctrl = require("../../controllers/contactus")
const { tryCatchWrapper } = require("../../helpers")

const router = new express.Router()

router.post(
    "/",
    tryCatchWrapper(ctrl.addMail))

module.exports = {mailRouter: router};