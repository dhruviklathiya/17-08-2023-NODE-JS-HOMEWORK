const { userService, emailService } = require("../services");
/** create user */
const create_user = async (req, res) => {
  try {
    const reqBody = req.body;

    const userExists = await userService.get_user_by_email(reqBody.email);
    if (userExists) {
      throw new Error("User already created by this email!");
    }

    const user = await userService.create_user(reqBody);
    if (!user) {
      throw new Error("Something went wrong, please try again or later!");
    }

    //  this
    res.status(200).json({
      success: true,
      message: "User create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
  // till this
};

/** Get user list */
const get_user_list = async (req, res) => {
  try {
    // this2
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }
    // till this2
    const getList = await userService.get_user_list(filter, options);

    res.status(200).json({
      success: true,
      message: "Get user list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get user details by id */
const getUserDetails = async (req, res) => {
  try {
    const getDetails = await userService.get_user_by_id(req.params.userId);
    if (!getDetails) {
      throw new Error("User not found!");
    }

    res.status(200).json({
      success: true,
      message: "User details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** user details update by id */
const updateDetails = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userExists = await userService.get_user_by_id(userId);
    if (!userExists) {
      throw new Error("User not found!");
    }

    await userService.update_details(userId, req.body);

    res.status(200).json({
      success: true,
      message: "User details update successfully!"
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete user */
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userExists = await userService.get_user_by_id(userId);
    if (!userExists) {
      throw new Error("User not found!");
    }

    await userService.delete_user(userId);

    res.status(200).json({
      success: true,
      message: "User delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Send mail to reqested email */
const sendMail = async (req, res) => {
  try {
    const reqBody = req.body;
    const sendEmail = await emailService.sendMail(
      reqBody.email,
      reqBody.subject,
      reqBody.text
    );
    if (!sendEmail) {
      throw new Error("Something went wrong, please try again or later.");
    }

    res
      .status(200)
      .json({ success: true, message: "Email send successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
module.exports = {
  create_user,
  get_user_list,
  getUserDetails,
  updateDetails,
  deleteUser,
  sendMail,
};
