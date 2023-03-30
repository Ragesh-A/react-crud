const jwt = require('jsonwebtoken')

 const verifyToken = (req, res, next)=>{
  try {
    const token = req.headers.authorization
  if(!token) return res.json({err : "you are not authenticated"})

  jwt.verify(token, process.env.JWT_KEY, (err, user)=>{
    if(err) return res.json({err : "Token is not valid"})

    req.user = user;
    next()
  })
  } catch (error) {
    res.json({err: "token missing"})
  }

}
module.exports = {verifyToken};