import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';

// import orderRouter from "../routes/order";
import categoryRoute from '../routes/Categori';
import productRoute from '../routes/product';
import userRoute from '../routes/user'
import newsRoute from '../routes/news';
import contactRoute from "../routes/contact";
import sizeRoute from "../routes/size";
const app = express();

const URL = 'mongodb+srv://duynguyen:Adu113210@cluster0.fh8cjz8.mongodb.net/?retryWrites=true&w=majority';
// middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json())

// route
app.use("/api",categoryRoute);
app.use("/api",sizeRoute);
app.use("/api", contactRoute);
app.use("/api",newsRoute)
app.use("/api",productRoute);
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