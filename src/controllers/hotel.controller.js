const { hotel_Service } = require("../services")

/* CREATE HOTEL */
const create_hotel = async (req, res) => {
  try {
    const reqBody = req.body;
    const hotelExists = await hotel_Service.get_hotel_by_name(reqBody.hotel_name);
    if(hotelExists) {
      throw new Error("Hotel already exist by this name -!- ");
    }
    const hotel = await hotel_Service.create_hotel(reqBody);
    if (!hotel) {
      throw new Error("Something went wrong -!- ");
    }
    res.status(200).json({
      success: true,
      message: "Hotel create successfully ^-^ ",
      data: reqBody
    });
  } catch (error) {
    res.status(400).json({
      success:false,
      message:error.message
    });
  }
};

/* HOTEL LIST */
const get_hotel_list = async(req,res) => {
    try {
        const getList = await hotel_Service.get_hotel_list();
        if(!getList){
          throw new Error("Hotel list data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Get Hotel list dispatch successfully ^-^ ",
          data: getList,
        });
      } catch (error) {
        res.status(400).json({
          success:false,
          message: error.message
        });
      }
}

/* DELETE HOTEL */
const delete_hotel = async (req, res) => {
  try {
    const hotelID = req.params.hotelId;
    const hotel_exist = await hotel_Service.get_hotel_by_id(hotelID);
    if (!hotel_exist) {
      throw new Error("Hotel not found -!- ");
    }
    await hotel_Service.delete_hotel(hotelID);
    res.status(200).json({
      success: true,
      message: "Hotel delete successfully ^-^ ",
    });
  } catch (error) {
    res.status(400).json({
      success:false,
      message: error.message
    });
  }
};
/* UPDATE HOTEL */
const update_hotel = async (req, res) => {
  try {
    const reqbody = req.body;
    const hotelID = req.params.hotelId;
    const hotel_exist = await hotel_Service.get_hotel_by_id(hotelID);
    if (!hotel_exist){
      throw new Error("Hotel not found -!- ");
    }
    await hotel_Service.update_hotel(hotelID,reqbody);
    res.status(200).json({
      success: true,
      message: "Hotel updated successfully ^-^ ",
    });
  } catch (error) {
    res.status(400).json({
      success:false,
      message: error.message
    });
  }
};

module.exports = {
    create_hotel,
    get_hotel_list,
    delete_hotel,
    update_hotel
}