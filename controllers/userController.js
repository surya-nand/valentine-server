const valentineUser = require("../models/userModel");

const createUser = async (req, res) => {
  try {
    const { name, pageColor, pickupLine } = req.body;
    const newUser = new valentineUser({
      name,
      pageColor,
      pickupLine,
    });
    await newUser
      .save()
      .then((newUser) => {
        res.send({
          message: "New user saved successful",
          details: newUser._id,
        });
      })
      .catch((error) => {
        res.status(400).send({
          message: "New user details failed to create",
          error: error.message,
        });
      });
  } catch(error) {
    res.status(500).send({
      message: "Internal server error",
      error: error.message,
    });
  }
};

const fetchUser = async(req,res) => {
  try {
    const { userId } = req.params;
    const user = await valentineUser.findById(userId);
    if (!user) {
      return res.status(404).send({
        message: "User not found",
      });
    }
    res.status(200).send({
      message: "User fetched successfully",
      details: user,
    });
  } catch (error) {
    res.status(500).send({
      message: "Failed to fetch user",
      error: error,
    });
  }
}

module.exports = {createUser, fetchUser}