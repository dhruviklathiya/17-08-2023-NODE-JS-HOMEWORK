const { categoryService } = require("../services");

const create_category = async (req, res) => {
    try {
      const reqBody = req.body;
      const category = await categoryService.create_category(reqBody);
      if(!category){
        throw new Error("Something went wrong!!!");
      }
      res.status(200).json({
        success: true,
        message: "Category create successfully!",
        data: { category },
      });
    } catch (error) {
      res.status(400).json({ success: false, message:  error.message});
    }
};

const category_list = async (req,res) => {
    try {
        const categorylist = await categoryService.get_category_list();
        if(!categorylist){
          throw new Error("Data not found!!!");
        }
        res.status(200).json({
          success: true,
          message: "Category list dispatch successfully!",
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