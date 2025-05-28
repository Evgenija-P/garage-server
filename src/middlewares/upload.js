require("dotenv").config()

const { UPLOAD_DIR, STORE_IMAGE } = process.env

const multer = require("multer");
const path = require("path");
const fs = require("fs").promises
const uploadDir = path.join(process.cwd(), "public", UPLOAD_DIR)



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log("Saving file to:", uploadDir);
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        console.log("Received file:", file.originalname);
        cb(null, file.originalname);
    }
  })
  
  const fileUploadMiddleware = multer({
    storage: storage,
    limits: {
        fileSize: 5000000
    },
    fileFilter: (req, file, cb) => {
        console.log("File type:", file.mimetype);
        if (file.mimetype.includes('image')) {
            cb(null, true);
            return;
        }
        cb(null, false);
    }
  })

module.exports = fileUploadMiddleware;