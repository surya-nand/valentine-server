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

module.exports = {createUser}