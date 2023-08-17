const { options } = require("joi");
const { categoryService } = require("../services");

const createCategory = async (req, res) => {
    try {
      const reqBody = req.body;

      const category = await categoryService.createCategory(reqBody);

      res.status(200).json({
        success: true,
        message: "Category create successfully!",
        data: { category },
      });
    } catch (error) {
      res.status(400).json({ success: false, message:  error.message});
    }
};

const categoryList = async (req,res) => {
    try {
    const { search, ...options } = req.query;
    let filter = {};
        const categorylist = await categoryService.getCategoryList(filter,options);
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
    createCategory,
    categoryList
}