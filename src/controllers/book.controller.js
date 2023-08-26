const { book_Service } = require("../services");

const create_book = async (req, res) => {
  try {
    const reqBody = req.body;
    const book_exist = await book_Service.get_book_by_name(reqBody.book_name);
    if(book_exist){
      throw new Error("Book by this name already exist!!!!");
    }
    const book = await book_Service.create_book(reqBody);

    res.status(200).json({
      success: true,
      message: "Book create successfully!",
      data: { book },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

const get_book_list = async (req,res) => {
  try {
    const book_list = await book_Service.get_book_list();
    if(!book_list){
      throw new Error("No data founbd!!!");
    }
    res.status(200).json({
      success: true,
      message: "Book dispatch list successfully!",
      data: book_list,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
    create_book,
    get_book_list
}