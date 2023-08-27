const { jewellery_Service } = require("../services");;

/* CREATE JEWELLERY */
const create_jewellery = async (req,res) => {
    try {
        const reqbody = req.body;
        const jewellery_exist = await jewellery_Service.get_jewellery_by_name(reqbody.jewellery_name);
        if(jewellery_exist){
            throw new Error("Jewellery from this jewellery name already exist -!-");
        }
        const jewellery = await jewellery_Service.create_jewellery(reqbody);
        if(!jewellery){
            throw new Error("Something went wrong -!-");
        }
        res.status(200).json({
            success:true,
            message:"Jewellery created successfully ^-^ ",
            data: reqbody
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}

/* LIST JEWELLERY */
const get_jewellery_list = async(req,res) => {
    try {
        const jewellery_list = await jewellery_Service.get_jewellery_list();
        if(!jewellery_list){
            throw new Error("Jewellery list data not found -!- ");
        }
        res.status(200).json({
            success:true,
            message:"Jewellery list dispatch successfully ^-^ ",
            data: jewellery_list
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message
        })
    }
}

/* DELETE JEWELLERY */
const delete_jewellery = async(req,res) => {
    try {
        const jewellery_id = req.params.jewelleryId;
        const jewellery_exist = await jewellery_Service.get_jewellery_by_id(jewellery_id);
        if(!jewellery_exist){
          throw new Error("Jewellery does not exist -!- ");
        }
        await jewellery_Service.delete_jewellery(jewellery_id);
        res.status(200).json({
          success:true,
          message:"Jewellery deleted successfully ^-^ ",
        });
      } catch (error) {
        res.status(400).json({
          success:false,
          message:error.message,
        });
      }
}
module.exports = {
    create_jewellery,
    get_jewellery_list,
    delete_jewellery
}
