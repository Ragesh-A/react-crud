const User = require('../models/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const newUser = async (req, res, next) => {
  try {
    if(req.body.password.length < 5) return res.json({err : "make strong password"})
    if(!req.body.password) return res.json({message: "forget to password ?"})
    const hash = await createHashPassword(req.body.password);
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hash,
    });

    user
      .save()
      .then(async (user) => {
        const token = await createToken(user)
        res.cookie('access_token', token, {httpOnly : true} ).status(200).json({ success: 'account created' });
      })
      .catch((err) => {
        res.status(200).json({ err: "email in use" });
      });
  } catch (error) {
    next(error);
  }
};


const login = async (req, res, next)=>{

  try {
    
    const user = await User.findOne({email : req.body.email})
    if(!user) return res.json({ message : "user not found"})
    if(!req.body.password) return res.json({message : "where is password?"})
    bcrypt.compare(req.body.password, user.password).then(async (result)=>{
      if (result) {
        const token = await createToken(user)
        return res.json({name: user.name, email: user.email, access : token})
      }else {
        return res.json({message: "invalid email or password"})
      }
    })
    
  } catch (error) {
    next(error)
  }

}



const updateProfile = async (req, res, next) => {
  try {
    const id = req.user.id;
    const user = await User.updateOne({ _id: id }, req.body, { new: true });
    if (!user) return res.status(400).json({ user });
    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};

const profileImageUpdate = async (req, res)=>{
  try {
  const user = await User.updateOne({_id : req.user.id}, {$set : {url : `http://localhost:8000/images/${req.file.filename}`}}, {upsert : true})
  if(!user) return res.json({err: "couldn't update image"})
   res.json({url : `http://localhost:8000/images/${req.file.filename}`})
  } catch (error) {
    return res.json({err: "couldn't update image"})
  }
}

const adminMiddleWare = async (req, res, next)=>{
  if(req.user.isAdmin){
    next()
  }else {
    res.status(401).json({err: "un Authorized"})
  }
}


async function createHashPassword(password) {
 try {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
 } catch (error) {
  console.log(error);
 }
}

async function createToken(user){
  const KEY = process.env.JWT_KEY;
  const token = await jwt.sign({id: user._id, isAdmin : user.isAdmin }, KEY)
  return token;
}

module.exports = {
  newUser,
  updateProfile,
  login,
  adminMiddleWare,
  profileImageUpdate,
};
