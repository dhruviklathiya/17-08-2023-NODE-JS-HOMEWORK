const Joi = require("joi");

const create_Hotel = {
    body: Joi.object().keys({
        hotel_name: Joi.string().required().trim(),
        hotel_address: Joi.string().required().trim(),
        hotel_location: Joi.string().required().trim(),
        hotel_total_rooms:Joi.number().integer().required()
    })
};

const getDetails = {
    params: Joi.object().keys({
      userId: Joi.string().required().trim(),
    }),
};

const delete_hotel = {
    params: Joi.object().keys({
        hotelId : Joi.string().required().trim(),
    })
}

module.exports = {
    create_Hotel,
    getDetails,
    delete_hotel
}