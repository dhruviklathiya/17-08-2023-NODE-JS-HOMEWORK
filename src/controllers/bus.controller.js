const { bus_Service } = require("../services")

/* CREATE BUS */
const create_bus = async(req,res) => {
    try {
        const reqBody = req.body;
        const bus_exist = await bus_Service.get_bus_by_name(reqBody.bus_name);
        if(bus_exist){
          throw new Error("Bus by this name already exist -!- ");
        }
        const bus = await bus_Service.create_bus(reqBody);
        if(!bus){
          throw new Error("Something went wrong -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Bus created successfully ^-^ ",
          data: reqBody,
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          message: error.message
        });
      }
}

/* BUS LIST */
const get_bus_list = async (req, res) => {
  try {
    const bus_list = await bus_Service.get_bus_list();
    if(!bus_list){
      throw new Error("Bus list data not found -!- ");
    }
    res.status(200).json({
      success: true,
      message: "Get user list successfully!",
      data: bus_list,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

/* DELETE BUS */
const delete_bus = async (req,res) => {
  try {
    const bus_id = req.params.busId;
    const bus_exist = await bus_Service.get_bus_by_id(bus_id);
    if(!bus_exist){
      throw new Error("Bus not found -!- ");
    }
    await bus_Service.delete_bus(bus_id);
    res.status(200).json({
      success:true,
      message:"Bus deleted successfully ^-^ ",
    });
  } catch (error) {
    res.status(400).json({
      success:false,
      message:error.message,
    });
  }
}

module.exports = {
  create_bus,
  get_bus_list,
  delete_bus
}