const express = require("express")
const ctrl = require("../../controllers/carsControllers")
const { tryCatchWrapper } = require("../../helpers")
const { validateBody } = require("../../middlewares/validateBody")
const { addSchema } = require("../../models/car")
const { isValidId, auth } = require("../../middlewares")
const { authMiddleware } = require("../../middlewares/auth")
const fileUploadMiddleware = require("../../middlewares/upload")

const router = new express.Router()

router.get("/", ctrl.getAll)

router.get(
    "/:id",
    isValidId,
     ctrl.getById)

// router.post(
//     "/", 
//     authMiddleware,
//     fileUploadMiddleware.array("photo", 10),
//     validateBody(addSchema),
//     tryCatchWrapper(ctrl.addCar))

router.post("/", (req, res, next) => {
    console.log("Маршрут отриманий");
    next();
  }, authMiddleware, fileUploadMiddleware.array("photo", 10), (req, res, next) => {
    console.log("req.files:", req.files);
    next();
  }, validateBody(addSchema), tryCatchWrapper(ctrl.addCar));

router.put(
    "/:id",
    authMiddleware,
    isValidId,
    validateBody(addSchema),
    ctrl.updateById)

router.delete(
    "/:id",
    authMiddleware,
    isValidId,
     ctrl.removeCarById
)

    module.exports = {carsRouter: router};