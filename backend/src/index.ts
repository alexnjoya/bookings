import express from "express"
import { Request, Response } from "express"
import cors from "cors"
import "dotenv/config"
import mongoose from "mongoose"


// Database connection
mongoose.connect(process.env.MONGODB_URI as string)
// initiazing express app
const app = express()

// converting the body into json format
app.use(express.json())
//  securityy 
app.use(express.urlencoded({extended: true}))
app.use(cors())
// Http request
app.get("get/test", async(req:Request, res:Response)=>{
    res.json({message: "hello from express endpoint!"});
})


app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})