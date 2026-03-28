import express from "express";
import cors from "cors";
import db from "./config/db.js";
import { configDotenv } from "dotenv";
import userRouter from "./routes/user.routes.js";

configDotenv();
db(); 
const app = express()
  
app.use(cors());
app.use(express.json());

app.use("/user",userRouter)

const PORT = process.env.PORT||5000;
app.listen( PORT,()=>{
console.log(`server is running on port ${PORT}`)
});


