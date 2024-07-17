import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"

const app = express()
app.use(cors())
app.use(express.json());
dotenv.config()

const port =process.env.PORT || 8000
const URI=process.env.MONGODB_URI;

//database connection(connect to mongodb)
try {
    mongoose.connect(URI)
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ",error);
}

//defining routes

app.use('/book',bookRoute);
app.use('/user',userRoute);

app.listen(port, () => {
  console.log(`Server is  listening on port ${port}`)
})

