const mongoose = require('mongoose');
const { handleMongooseError } = require('../helpers/apiHelpers');
const Joi = require('joi');
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const car = new Schema(
  {
    custom_id: {
      type: Number,
      unique: true,
    },
    condition: {
      type: String,
      default: '',
    },
    drive_unit: {
      type: String,
      default: '',
    },
    engine_capacity: {
      type: String,
      default: '',
    },
    fuel_type: {
      type: String,
      default: '',
    },
    gearbox: {
      type: String,
      default: '',
    },
    location: {
      type: String,
      default: '',
    },
    make: {
      type: String,
      default: '',
    },
    mileage: {
      type: Number,
    },
    model: {
      type: String,
      required: true,
    },
    photo_urls: {
      type: [String],
      default: '',
    },
    price: {
      type: Number,
      required: true,
    },
    primary_photo_url: {
      type: String,
      default:
        'https://res.cloudinary.com/doinkhfhu/image/upload/v1704806380/kr21qu0r53xkkxdurhvj.jpg',
    },
    year: {
      type: Number,
      default: '',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

car.post('save', handleMongooseError);

const addSchema = Joi.object({
  custom_id: Joi.number().required(),
  condition: Joi.string(),
  drive_unit: Joi.string(),
  engine_capacity: Joi.string(),
  fuel_type: Joi.string(),
  gearbox: Joi.string(),
  location: Joi.string(),
  make: Joi.string(),
  mileage: Joi.number(),
  model: Joi.string().required(),
  photo_urls: Joi.array().items(Joi.string()),
  price: Joi.number().required(),
  primary_photo_url: Joi.string(),
  year: Joi.number(),
});

const Car = mongoose.model('car', car);

module.exports = { Car, addSchema };
