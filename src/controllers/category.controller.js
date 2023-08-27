const { category_Service } = require("../services");

const create_category = async (req, res) => {
    try {
      const reqBody = req.body;
      const category_exist = await category_Service.get_category_by_name(reqBody.category_name);
      if(category_exist){
        throw new Error("Category by this name already exist -!- ");
      }
      const category = await category_Service.create_category(reqBody);
      if(!category){
        throw new Error("Something went wrong -!- ");
      }
      res.status(200).json({
        success: true,
        message: "Category create successfully ^-^ ",
        data: { category },
      });
    } catch (error) {
      res.status(400).json({ success: false, message:  error.message});
    }
};

const category_list = async (req,res) => {
    try {
        const categorylist = await category_Service.get_category_list();
        if(!categorylist){
          throw new Error("Data not found -!- ");
        }
        res.status(200).json({
          success: true,
          message: "Category list dispatch successfully ^-^ ",
          data:categorylist
        });
    } catch (error) {
      res.status(400).json({ success: false, message:  error.message});
    }
}
module.exports = {
    create_category,
    category_list
}