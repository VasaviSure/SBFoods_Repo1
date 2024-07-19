import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
// const e=require('express')
// const mongoose=require('mongoose')
// const UserRouter=require('./routes/userroutes')
// const cors=require('cors')
// const app=e()

//App config
const app=express()
const PORT=5100

//Middleware
app.use(express.json())
app.use(cors())

//Db connection
connectDB();

//API End point
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
// app.use(
//     cors({
//         origin:'http://localhost:3000'
        
//     })
// )
// mongoose.connect('mongodb://localhost:27017/demo_vit')

// .then(()=>{
//     console.log('Connection established')
// })
// .catch((err)=>{
//     console.log(`Error is being listened on ${PORT}`,err.message)
// })

// const userSchema = new mongoose.Schema({
//     name: String,
//     age :Number
// })

// const user=mongoose.model("users",userSchema)

app.get('',(req,res)=>{
    // user.find({}).then((Data1)=>{
        res.send("API Working")

    // }).catch((err)=>{
    //    console.log(err)
    // })
})

// CONNECTION-STRING:mongodb+srv://SBFoods-user:<password>@sbfoods.fyzxgi5.mongodb.net/?
// retryWrites=true&w=majority&appName=SBFoods

app.listen(PORT,()=>{
    console.log(`Sever started on https://localhost:${PORT}`)
})