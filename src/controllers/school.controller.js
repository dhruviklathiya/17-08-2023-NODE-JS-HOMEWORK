const { school_Service } = require("../services")

const create_school = async(req,res) => {
    try {
        const reqbody = req.body;
        const school_exist = await school_Service.get_school_by_name(reqbody.school_name);
        if(school_exist){
            throw new Error("School already exist!!!!!");
        }
        const school = await school_Service.create_school(reqbody);
        res.status(200).json({
            success:true,
            message:"School created successfully with this data!!!!",
            data: school
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message
        });
    }
}

const get_school_list = async(req,res) => {
    try {
        const reqbody = req.body;
        const school_exist = await school_Service.get_school_by_name(reqbody.school_name);
        if(school_exist){
            throw new Error("School by thius name already exist!!!");
        }
        const school_list = await school_Service.get_school_list();
        if(!school_list){
            throw new Error("Something went wrong!!!");
        }
        res.status(200).json({
            success:true,
            message: "School list data dispatch successfully!!!",
            data: school_list
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message
        });
    }
}

const delete_school = async(req,res) => {
    try {
        const school_id = req.params.schoolId;
        const school_exist = await school_Service.get_school_by_id(school_id);
        if(!school_exist){
          throw new Error("School not found!!!");
        }
        await school_Service.delete_school(school_id);
        res.status(200).json({
          success:true,
          message:"School deleted successfully!!!",
        });
      } catch (error) {
        res.status(400).json({
          success:false,
          message:error.message,
        });
      }
}

module.exports = {
    create_school,
    get_school_list,
    delete_school
}