const {Car} = require("../../models/car");


const getAll = async(req, res) => {
    const result = await Car.find({}, "-createdAt -updatedAt")
    const data =  result.map((item) => {
        return {
            id: item._id,
            condition: item.condition,
            drive_unit: item.drive_unit,
            engine_capacity: item.engine_capacity, 
            fuel_type: item.fuel_type,
            gearbox: item.gearbox,
            location: item.location,
            make: item.make,
            mileage: item.mileage,
            model: item.model,  
            photo_urls: item.photo_urls, 
            price: item.price,  
            primary_photo_url: item.primary_photo_url, 
            year: item.year, 
        }}
    );

    res.json(data)
    }

module.exports = {
    getAll
}