import User from "../models/User.js";

//name sweta
export const getUsers = async (req, res) => {
  try {
    const { name } = req.query;

    let filter = {};

    
    if (name) {
      filter.name = { $regex: name, $options: "i" }; // case-insensitive search
    }

    const users = await User.find(filter);

    res.status(200).json({
      success: true,
      count: users.length,
      users
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};