const express = require('express');
const router = express.Router();
const user = require('../controller/User');
const verify = require('../controller/auth');
const token = require('../controller/verifyToken');

router.get('/',token.verifyToken, verify.adminMiddleWare,(req, res)=> res.json({message: "success"}));

router.get(
  '/users',
  token.verifyToken,
  verify.adminMiddleWare,
  user.getAllUsers
);
router.post('/user', token.verifyToken, verify.adminMiddleWare, verify.newUser)

//USER MANAGEMENT
router
  .route('/user/:id')
  .get(token.verifyToken, verify.adminMiddleWare, user.getUser)
  .put(token.verifyToken, verify.adminMiddleWare, user.updateUser)
  .delete(token.verifyToken, verify.adminMiddleWare, user.deleteUser);

module.exports = router;
