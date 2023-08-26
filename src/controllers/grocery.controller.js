const { grocery_Service } = require("../services");

const create_grocery = async(req,res) => {
    try {
        const reqbody = req.body;
        const grocery_exist = await grocery_Service.get_grocery_by_name(reqbody.grocery_name);
        if(grocery_exist){
            throw new Error("Grocery item from this name already exists!_!_!_!_!")
        }
        const grocery = await grocery_Service.create_grocery(reqbody);
        if(!grocery){
            throw new Error("Something wentr wrong!!!!")
        }
        res.status(200).json({
            success:true,
            message:"grocery added successfully!!!!!!!!",
            data: reqbody
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}

const get_grocery_list = async(req,res) => {
    try {
        const grocery_list = await grocery_Service.get_grocery_list();
        if(!grocery_list){
            throw new Error("Data not found!!!!!");
        }
        res.status(200).json({
            success:true,
            message:"Grocery added successfully!!!!!",
            data:grocery_list
        });
    } catch (error) {
        res.status(400).json({
            success:true,
            message: error.message,
        });
    }
}

const delete_grocey = async(req,res) => {
    try {
        const grocery_id = req.params.groceryId;
        const grocery_exist = await grocery_Service.get_grocery_by_id(grocery_id);
        if(!grocery_exist){
          throw new Error("Grocery not found!!!");
        }
        await grocery_Service.delete_grocery(grocery_id);
        res.status(200).json({
          success:true,
          message:"Grocery deleted successfully!!!",
        });
      } catch (error) {
        res.status(400).json({
          success:false,
          message:error.message,
        });
      }
}

module.exports = {
    create_grocery,
    get_grocery_list,
    delete_grocey
}