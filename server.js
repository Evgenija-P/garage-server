const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config()

const { MONGO_URL, PORT } = process.env

mongoose.set('strictQuery', true);


mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(PORT);
    console.log("Database connection successful, server running on port", PORT);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
