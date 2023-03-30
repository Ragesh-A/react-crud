const User = require('../models/userSchema');



const getProfile = async (req, res,next) => {
  try {
    const id = req.user.id;
    const user = await User.findOne({ _id: id }, { password: 0 });
    if (!user) return res.status(400).json({ user });
    res.status(200).json({ user });
  } catch (error) {
    next(error)
  }
};



const getUser = async (req, res,next) => {
  try {
    const id = req.params.id;
    const user = await User.findOne({ _id: id },{password : 0});
    if (!user) return res.json({ err: 'user not found' });
    res.status(200).json(user);
  } catch (error) {
    next(error)
  }
};
const getAllUsers = async (req, res,next) => {
  try {

    const users = await User.find({isAdmin : false},{password: 0})
    if (!users) return res.json({ message: 'users not found' });
    res.status(200).json(users);

  } catch (error) {
    next(error)
  }
};
const updateUser = async (req, res,next) => {
  try {
    const id = req.params.id
    const user = await User.updateOne({_id: id}, req.body,{new: true})
    if (!user) return res.json({ message: 'user not found' });
    res.status(200).json(user);
  } catch (error) {
    next(error)
  }
};
const deleteUser = async (req, res,next) => {
  try {
    const id = req.params.id
    const user = await User.deleteOne({_id: id})
    if (!user) return res.json({ message: 'user not found' });
    res.status(200).json({message: "user deleted successful"});
  } catch (error) {
    next(error)
  }
};

module.exports = {
  getProfile,
  getUser,
  getAllUsers,
  updateUser,
  deleteUser,
};
