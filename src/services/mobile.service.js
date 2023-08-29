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

const get_mobile_by_id = async(mobile_id) => {
    return Mobile.findById(mobile_id);
}

const get_mobile_status = async(mobile_id) => {
    const mobile__ = Mobile.findById(mobile_id);
    return mobile__;
}

const update_mobile_status = async(mobile_id,mobile_status) => {
    if(mobile_status){
        return Mobile.findByIdAndUpdate(mobile_id,{$set: {is_active:false}});
    }
    return Mobile.findByIdAndUpdate(mobile_id,{$set: {is_active:true}});
}
module.exports = {
    get_mobile_by_name,
    create_mobile,
    get_mobile_list,
    get_mobile_by_id,
    get_mobile_status,
    update_mobile_status
}