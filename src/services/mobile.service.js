const { Mobile } = require("../models");

const get_mobile_by_name = async(mobile_name) => {
    return Mobile.findOne({mobile_name});
}

const create_mobile = async(reqbody) => {
    return Mobile.create(reqbody);
}

const get_mobile_list = async() => {
    return Mobile.find();
}
module.exports = {
    get_mobile_by_name,
    create_mobile,
    get_mobile_list
}