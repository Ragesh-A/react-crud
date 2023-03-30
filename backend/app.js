const express = require('express') ;
const env = require('dotenv')
const path = require('path')
const mongoose = require('mongoose') 
const userRouter = require('./routes/user') 
const adminRouter = require('./routes/admin') 
const cookieParser = require('cookie-parser')
const cors = require('cors')
env.config()
const PORT = process.env.PORT;
const URL = process.env.DATABASE_URL;
const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded())
app.use(express.static(path.join(__dirname, '/public')));
app.use('/', userRouter)
app.use('/admin', adminRouter)
app.use((err,req,res,next)=>{
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Something went wrong"
  return res.status(errorStatus).json(errorMessage)
})



const connect = async ()=>{
  mongoose.connect(URL).then(()=>{
    app.listen(PORT, ()=>{
      console.log(`server running on port ${PORT}`);
    })
  }).catch((err)=>{
    console.log(err);
    connect()
  })
}
 
connect();