import mongoose from "mongoose"

export const connectDB=async()=>{
    await mongoose.connect("mongodb+srv://SBFoods-user:SBFoods-pwd@sbfoods.fyzxgi5.mongodb.net/sbfoods_project").then(()=>console.log("DB connected"))
}