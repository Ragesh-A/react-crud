const path = require('path')
const multer = require('multer')

const profileDestination = path.join(__dirname, '../public/images')

const profileStorage = multer.diskStorage({
  destination: (req, file, cb)=>{
    cb(null, profileDestination)
  },
  filename: (req, file, cb)=>{
    cb(null, `${req.user.id}-${file.originalname}`)
  }
})

const uploadProfile = multer({storage : profileStorage})

module.exports = uploadProfile;