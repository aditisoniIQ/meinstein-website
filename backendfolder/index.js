import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { error } from "console";
import route from "./Routes/portfolioRoutes.js";

const app = express();

app.use(bodyParser.json());

dotenv.config();
const PORT = process.env.PORT;
const MONGOURL = process.env.MONGOURL;


mongoose.connect(MONGOURL).then((req,res)=>{
    app.listen(PORT,()=>{
        console.log("database connected at port ", PORT);
    })
}).catch((error)=>{
   console.log("Error is genrating ", error);
});

app.use("/portfolio",route);
