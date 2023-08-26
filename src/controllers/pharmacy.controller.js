const { pharmacy_Service } = require("../services");

const create_pharmacy = async (req,res) => {
    try {
        const reqbody = req.body;
        const pharmacy_exist = await pharmacy_Service.get_pharma_by_name(reqbody.pharmacy_name);
        if(pharmacy_exist){
            throw new Error("Pharmacy by this name already exist!!_!_!_!_!_!_!");
        }
        const pharmacy = await pharmacy_Service.create_pharmacy(reqbody);
        if(!pharmacy){
            throw new Error("Something went wrong!!___!__!__!__!_!")
        }
        res.status(200).json({
            success:true,
            message:"Pharamacy created successfully!!!!!!",
            data : reqbody
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message,
        });
    }
};

const get_pharmacy_list = async(req,res) => {
    try {
        const pharmacy_list = await pharmacy_Service.get_pharmacy_list();
        if(!pharmacy_list){
            throw new Error("No data found!!!!!!")
        }
        res.status(200).json({
            success:true,
            message:"Pharamacy list dispatch successfully!!!!!!",
            data : pharmacy_list
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}

const delete_pharmacy = async(req,res) => {
    try {
        const pharmacy_id = req.params.pharmacyId;
        const pharmacy_exist = await pharmacy_Service.get_pharmacy_by_id(pharmacy_id);
        if(!pharmacy_exist){
          throw new Error("Pharmacy not found!!!");
        }
        await pharmacy_Service.delete_pharmacy(pharmacy_id);
        res.status(200).json({
          success:true,
          message:"Pharmacy deleted successfully!!!",
        });
      } catch (error) {
        res.status(400).json({
          success:false,
          message:error.message,
        });
      }
}

module.exports = {
    create_pharmacy,
    get_pharmacy_list,
    delete_pharmacy
}