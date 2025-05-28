const express = require("express");
const { validateBody, auth } = require("../../middlewares");
const { authSchema } = require("../../models/user");
const registerUser = require("../../controllers/auth/register");
const login = require("../../controllers/auth/login");
const logout = require("../../controllers/auth/logout");
const { authMiddleware } = require("../../middlewares/auth");

const router = express.Router()

router.post("/register", validateBody(authSchema), registerUser)

router.post("/login", validateBody(authSchema), login)

router.post("/logout", authMiddleware, logout);

module.exports = {authRouter: router};