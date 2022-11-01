import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';

// import orderRouter from "../routes/order";
import categoryRoute from '../routes/Categori';
<<<<<<< HEAD
import productRoute from '../routes/product';
=======
import bannerRoute from '../routes/Banner';
>>>>>>> bc3bcb4b656be2435ef028eb0c06314a6a5f743c
import userRoute from '../routes/user'

const app = express();

const URL = 'mongodb+srv://duynguyen:Adu113210@cluster0.fh8cjz8.mongodb.net/?retryWrites=true&w=majority';
// middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json())

// route
app.use("/api",categoryRoute);
<<<<<<< HEAD
app.use("/api",productRoute);
=======
app.use("/api",bannerRoute);
>>>>>>> bc3bcb4b656be2435ef028eb0c06314a6a5f743c
app.use("/api",userRoute)
// app.use("/api", orderRouter);


// connnect database
mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(() => console.log("Kết nối db thành công"))
    .catch((error) => console.log(error));
    
// connection
const PORT = 8000;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
})