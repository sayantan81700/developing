import express from "express";

import {
  Creatuser,
  GetUser,
  UpdateUser,
  DeletUser,
} from "../controller/UserController.js";

const routers = express.Router();

routers.post("/create", Creatuser);
routers.get("/get", GetUser);
routers.put("/update/:id", UpdateUser);
routers.delete("/delet/:id", DeletUser);
export default routers;
