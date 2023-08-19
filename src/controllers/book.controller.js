const bookService = require("../services/book.service");

const create_book_controller = async (req,res) => {
    try {
        const reqBody = req.body;

        const book = await bookService.createBook(reqBody);

        res.status(200).json({
          success: true,
          message: "Book create successfully!",
          data: { book },
        });
      } catch (error) {
        res.status(400).json({ success: false, message:  error.message});
      }
};

const get_book_contoller = async (req,res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};
            const categorylist = await bookService.getbooklist(filter,options);
            res.status(200).json({
              success: true,
              message: "Category list dispatch successfully!",
              data:categorylist
            });
        } catch (error) {
          res.status(400).json({ success: false, message:  error.message});
        }
};

module.exports = {
    create_book_controller,
    get_book_contoller
}