import express from 'express'
import dotenv  from 'dotenv'
import router from './routes/router.js'
const app=express()
dotenv.config()
const port=process.env.PORT
// console.log(process.env);

app.use(express.json())
app.use('/enquiry',router )
// app.get('/',(req,res)=>{
//     res.send("hery")
// })

app.listen(port,()=>{
    console.log("Server is running at",port);
    
})