const { user_Service, category_Service, product_Service } = require("../services");

const get_all_list = async(req,res) => {
    try {
        const userlist = await user_Service.get_user_list();
        if(!userlist){
          throw new Error("No user data found -!- ");
        }
        const categorylist = await category_Service.get_category_list();
        if(!categorylist){
          throw new Error("No Category data not found -!- ");
        }
        const productlist = await product_Service.get_product_list();
        if(!productlist){
          throw new Error("No Product data not found -!- ");
        }
        res.status(200).json({
            success:true,
            message:"All data dispatch successfully ^-^ ",
            user_data: userlist,
            category_data: categorylist,
            product_data: productlist,
        });
    } catch (error) {
        res.status(400).json({
            success:false,
            message: error.message,
        });
    }
}

module.exports = {
    get_all_list
}