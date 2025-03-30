import express from "express"
import { Request, Response } from "express"
import cors from "cors"
import "dotenv/config"
import mongoose from "mongoose"



mongoose.connect(process.env.MONGODB_URI as string)
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get("get/test", async(req:Request, res:Response)=>{
    res.json({message: "hello from express endpoint!"});
})


app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})