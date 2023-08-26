const { hotel_Service } = require("../services")

/** create user */
const create_hotel = async (req, res) => {
  try {
    const reqBody = req.body;

    const hotelExists = await hotel_Service.get_hotel_by_name(reqBody.hotel_name);
    if (hotelExists) {
      throw new Error("Hotel already created by this name!");
    }

    const hotel = await hotel_Service.create_hotel(reqBody);
    if (!hotel) {
      throw new Error("Something went wrong, please try again or later!");
    }
    res.status(200).json({
      success: true,
      message: "Hotel create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

const get_hotel_list = async(req,res) => {
    try {

        const { search, ...options } = req.query;
        const getList = await hotel_Service.get_hotel_list();
        if(!getList){
          throw new Error("Data not found!!!");
        }
        res.status(200).json({
          success: true,
          message: "Get Hotel list successfully!",
          data: getList,
        });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
}

/** Delete hotel */
const delete_hotel = async (req, res) => {
  try {
    const hotelID = req.params.hotelId;
    const hotel_exist = await hotel_Service.get_hotel_by_id(hotelID);
    if (!hotel_exist) {
      throw new Error("Hotel not found!");
    }

    await hotel_Service.delete_hotel(hotelID);

    res.status(200).json({
      success: true,
      message: "Hotel delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
    create_hotel,
    get_hotel_list,
    delete_hotel
}