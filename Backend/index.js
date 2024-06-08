import express  from "express";
import mongoose from "mongoose";
import  dotenv  from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";

const app = express()
app.use(cors());
dotenv.config();

const port = process.env.PORT||4000
const URI=process.env.MONGODB_URI;

//connect to mogodb
 ( async()=>{
  try {
  await  mongoose.connect(`${URI}/Bookstore`);
  app.on("error",()=>{
    console.log("Error:",error);
    
  })
  console.log("connected to mongodb");
  
  } catch (error) {
    console.error("Mongodb connection failed: ",error)
  }
 })()

 //defining routes
 app.use("/book",bookRoute)

app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})