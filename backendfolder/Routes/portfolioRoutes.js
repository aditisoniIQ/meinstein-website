
import express  from "express";
import { create,fetchData,fetchBySearch } from "../Controller/portfolioControler.js";

const route = express();

route.post("/create", create);

route.get("/fetch",fetchData);

route.get("/fetchBySearch",fetchBySearch);
export default route;
