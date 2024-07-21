import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartroute.js"
import orderRouter from "./routes/orderRoute.js"


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
app.use('/api/user',userRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)


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