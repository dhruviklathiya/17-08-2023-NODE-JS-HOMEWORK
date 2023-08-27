const { book_Service } = require("../services");

/* CREATE BOOK */
const create_book = async (req, res) => {
  try {
    const reqBody = req.body;
    const book_exist = await book_Service.get_book_by_name(reqBody.book_name);
    if(book_exist){
      throw new Error("Book by this name already exist -!- ");
    }
    const book = await book_Service.create_book(reqBody);
    if(!book){
      throw new Error("Something went wrong -!- ");
    }
    res.status(200).json({
      success: true,
      message: "Book created successfully ^-^ ",
      data: reqBody,
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/* BOOK LIST */
const get_book_list = async (req,res) => {
  try {
    const book_list = await book_Service.get_book_list();
    if(!book_list){
      throw new Error("No Book data found -!- ");
    }
    res.status(200).json({
      success: true,
      message: "Book list dispatch successfully ^-^ ",
      data: book_list,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/* DELETE BOOK */
const delete_book = async(req,res) => {
  try {
    const book_id = req.params.bookId;
    const book_exist = await book_Service.get_book_by_id(book_id);
    if(!book_exist){
      throw new Error("Book not found -!- ");
    }
    await book_Service.delete_book(book_id);
    res.status(200).json({
      success: true,
      message: "Book deleted successfully ^-^ ",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

module.exports = {
    create_book,
    get_book_list,
    delete_book
}