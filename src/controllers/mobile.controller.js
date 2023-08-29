const { mobile_Service } = require("../services");

const create_mobile = async(req,res) => {
    try {
        const reqbody = req.body;
        const mobile_exist = await mobile_Service.get_mobile_by_name(reqbody.mobile_name);
        if(mobile_exist){
            throw new Error("Mobile by this name already exist -!- ");
        }
        const mobile = await mobile_Service.create_mobile(reqbody);
        if(!mobile){
            throw new Error("Something went wrong -!- ");
        }
        res.status(200).json({
            success:true,
            message: "Mobile created successfully ^-^ ",
            data: mobile
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message
        });
    }
}

const get_mobile_list = async(req,res) => {
    try {
        const mobile_list = await mobile_Service.get_mobile_list();
        if(!mobile_list){
            throw new Error("Mobile list data not found -!- ");
        }
        res.status(200).json({
            success:true,
            message: "Mobile created successfully ^-^ ",
            data: mobile_list
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message
        });
    }
}


module.exports = {
    create_mobile,
    get_mobile_list
}