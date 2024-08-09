import UserModels from "../models/User.js";
const Creatuser = async (req, res) => {
  try {
    const { name, fathername, email, phone } = req.body;
    const NewUser = new UserModels({
      name,
      fathername,
      email,
      phone,
    });
    await NewUser.save();
    res
      .status(200)
      .json({ success: true, Message: "user created successfully", NewUser });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, Message: "user is not created", NewUser });
  }
};

//read api
const GetUser = async (req, res) => {
  try {
    const user = await UserModels.find();
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "user not found" });
    }
    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "internal server error" });
  }
};

//update api
const UpdateUser = async (req, res) => {
  try {
    const UserId = req.params.id;
    const updatedUser = await UserModels.findByIdAndUpdate(UserId, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res
        .status(404)
        .json({ success: false, message: "user not updated" });
    }
    res.status(200).json({
      success: true,
      message: "user updated successfully",
      updatedUser,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "internal server error" });
  }
};

//delet user
const DeletUser = async (req, res) => {
  try {
    const UserId = req.params.id;
    const deletedUser = await UserModels.findByIdAndDelete(UserId);
    if (!deletedUser) {
      return res
        .status(404)
        .json({ success: false, message: "user not found" });
    }
    res.status(200).json({
      success: true,
      message: "user deleted",
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "internal server error" });
  }
};

export { Creatuser, GetUser, UpdateUser, DeletUser };
