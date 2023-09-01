const { student_Service } = require("../services");

/** CREATE STUDENT*/
const create_student = async(req,res) => {
    try {
        const reqbody = req.body;
        const student_exist = await student_Service.get_student_by_email(reqbody.student_email);
        if(student_exist){
            throw new Error("Student by this email already exist -!- ");
        }
        const student = await student_Service.create_student(reqbody);
        if(!student){
            throw new Error("Something went wrong -!- ");
        }
        res.status(200).json({
            success: true,
            message: "Student created successfully ^-^ ",
            data : student
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

/** LIST STUDENT */
const get_student_list = async(req,res) => {
    try {
        const student_list = await student_Service.get_student_list();
        if(!student_list){
            throw new Error("Student list data not found -!- ");
        }
        res.status(200).json({
            success: true,
            message: "Student list data dispatch successfully ^-^ ",
            data : student_list
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

/** DELETE STUDENT*/
const delete_student = async(req,res) => {
    try {
        const student_id = req.params.deleteId;
        console.log(student_id);
        const student_exist = await student_Service.get_student_by_id(student_id);
        if(!student_exist){
            throw new Error("Student does not exist -!- ");
        }
        await student_Service.delete_student(student_id);
        res.status(200).json({
            success: true,
            message: "Student deleted successfully ^-^ ",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

module.exports = {
    create_student,
    get_student_list,
    delete_student
}