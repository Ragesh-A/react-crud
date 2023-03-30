const express = require('express');
const router = express.Router();
const Account = require('../controller/User');
const Auth = require('../controller/auth') 
const token = require('../controller/verifyToken');
const uploadProfile = require('../controller/imageHandle');

router.get('/', (req, res,next)=>{
  req.body = {
    name : "ragesh",
    email: "test",
    password : "123"
  }
  next()
},Auth.login);

router.post('/signup', Auth.newUser);
router.post('/login', Auth.login)
router.get('/profile',token.verifyToken, Account.getProfile);
router.put('/profile',token.verifyToken, Auth.updateProfile);
router.post('/updateImage', token.verifyToken, uploadProfile.single('profileImage'),Auth.profileImageUpdate )

module.exports = router;
