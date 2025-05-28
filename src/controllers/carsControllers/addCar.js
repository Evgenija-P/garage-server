const cloudinary = require("cloudinary").v2;
const path = require("path")

const {Car} = require("../../models/car")
const {HttpError} = require("../../helpers/errors");

require("dotenv").config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
  });

  const addCar = async(req,res,next) => {
    try {
      const files = req.files;
  
      const photo_urls = req.files.map(file => {
        return `/cars/${file.filename}`;
      });
      
      const primary_photo_url = photo_urls[0];
      
      const newCar = await Car.create({
        ...req.body,
        photo_urls,
        primary_photo_url
      });
      
  
      res.status(201).json({
        message: "success",
        newCar
      });
    } catch (error) {
      next(error);
    }
  };
  

module.exports = addCar
