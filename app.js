const express = require("express");
const logger = require("morgan")
const cors = require("cors")
const path = require("path");

const {carsRouter} = require("./src/routers/api/carsRouter");
const { authRouter } = require("./src/routers/api/auth");
const { mailRouter } = require("./src/routers/api/mail");

const app = express();

const formatLogger = app.get("env") === "development" ? 'dev' : "short"

app.use(logger(formatLogger))
app.use(cors())
app.use(express.json());
app.use("/images/cars", express.static(path.join(__dirname, "public/images/cars")));

app.use("/api/auth", authRouter)
app.use("/api/cars", carsRouter)
app.use("/api/mail", mailRouter)

app.use((req, res) => {
    res.status(404).json({
        message: "Not found"
    })
})

app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
  });

module.exports = app;