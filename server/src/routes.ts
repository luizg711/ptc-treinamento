import express from "express";
import {  readAllUsers } from "./controllers/UserController";
import { createCalcado, readAllCalcados, updateCalcados } from "./controllers/calcadosController";


const routes = express.Router();

routes.get("/users", readAllUsers);

routes.post("/calcados", createCalcado);

routes.get("/calcados", readAllCalcados);

routes.patch("/calcados/:id", updateCalcados);


export default routes;
