const { Mobile } = require("../models");
/**GET MOBILE BY NAME */
const get_mobile_by_name = async(mobile_name) => {
    return Mobile.findOne({mobile_name});
}
/**CREATE MOBILE */
const create_mobile = async(reqbody) => {
    return Mobile.create(reqbody);
}
/**GET MOBILE LIST */
const get_mobile_list = async() => {
    return Mobile.find();
}
/**GET MOBILE BY ID */
const get_mobile_by_id = async(mobile_id) => {
    return Mobile.findById(mobile_id);
}
/**PROVIDES STATUS IN CONTROLLER */
const get_mobile_status = async(mobile_id) => {
    const mobile_detail = Mobile.findById(mobile_id);
    return mobile_detail;
}
/**UPDATE MOBILE STATE */
const update_mobile_status = async(mobile_id,mobile_status) => {
    if(mobile_status){
        return Mobile.findByIdAndUpdate(mobile_id,{$set: {is_active:false}});
    }
    return Mobile.findByIdAndUpdate(mobile_id,{$set: {is_active:true}});
}
/**UPDATE MOBILE DETAILS */
const update_mobile = async(mobile_id,reqbody) => {
    return Mobile.findByIdAndUpdate(mobile_id,{$set: reqbody});
}
/**DELETE MOBILE BY ID */
const delete_mobile = async(mobile_id) => {
    return Mobile.findByIdAndDelete(mobile_id);
}

module.exports = {
    get_mobile_by_name,
    create_mobile,
    get_mobile_list,
    get_mobile_by_id,
    get_mobile_status,
    update_mobile_status,
    delete_mobile,
    update_mobile
}