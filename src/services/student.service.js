const { Student } = require("../models");

/** GET STUDENT BY EMAIL*/
const get_student_by_email = async(student_email) => {
    return Student.findOne({student_email});
}

/** CREATE STUDENT*/
const create_student = async(reqbody) => {
    return Student.create(reqbody);
}

/** GET STUDENT LIST*/
const get_student_list = async() => {
    return Student.find();
}

/** GET STUDENT BY ID*/
const get_student_by_id = async(student_id) => {
    return Student.findById(student_id);
}

/** DELETE STUDENT*/
const delete_student = async(student_id) => {
    return Student.findByIdAndDelete(student_id);
}
module.exports = {
    get_student_by_email,
    create_student,
    get_student_list,
    get_student_by_id,
    delete_student
}