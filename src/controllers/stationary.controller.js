const { stationary_Service } = require("../services")

/* CREATE STATIONARY */
const create_stationary = async(req,res) => {
    try{
        const reqbody = req.body;
        const item_exist = await stationary_Service.get_item_by_name(reqbody.item_name)
        if(item_exist){
            throw new Error("Item exist already -!- ");
        }
        const item = stationary_Service.create_stationary(reqbody);
        if(!item){
            throw new Error("Something went wrong -!- ");
        }
        res.status(200).json({
            success: true,
            message: "Item create successfully!",
            data: reqbody,
        });
    }catch(error){
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

/* STATIONARY LIST */
const get_stationary_list = async(req,res) => {
    try {
        const stationary_list = await stationary_Service.get_stationary_list();
        if(!stationary_list){
            throw new Error("Stationary item list data found -!- ");
        }
        res.status(200).json({
            success: true,
            message: "Item List data dispatch successfully ^-^ ",
            data: stationary_list,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

/* DELETE STATIONARY */
const delete_stationary = async(req,res) => {
    try {
        const stationary_id = req.params.stationaryId;
        const item_exist = await stationary_Service.get_item_by_id(stationary_id);
        if(!item_exist){
            throw new Error("Item does not exist -!- ");
        }
        await stationary_Service.delete_item(stationary_id);
        res.status(200).json({
            success:true,
            messgae:"Item deleted successfully ^-^ ",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            messgae: error.message
        });
    }
}

/* UPDATE STATIONARY */
const update_stationary = async(req,res) => {
    try {
        const reqbody = req.body
        const stationary_id = req.params.stationaryId;
        const item_exist = await stationary_Service.get_item_by_id(stationary_id);
        if(!item_exist){
            throw new Error("Item does not exist -!- ");
        }
        await stationary_Service.update_item(stationary_id,reqbody);
        res.status(200).json({
            success:true,
            messgae:"Item updated successfully ^-^ ",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            messgae: error.message
        });
    }
}

module.exports = {
    create_stationary,
    get_stationary_list,
    delete_stationary,
    update_stationary
}