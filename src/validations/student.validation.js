const Joi = require("joi");

const create_student = {
    body: Joi.object().keys({
        student_name:Joi.string().required().trim(),
        student_course:Joi.string().required().trim(),
        student_dob:Joi.string().required().trim(),
        student_contact:Joi.string().required().trim(),
        student_email:Joi.string().required().trim(),
        guardian_name:Joi.string().required().trim(),
        guardian_contact:Joi.string().required().trim(),
    })
}

module.exports = {
    create_student
}