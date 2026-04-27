import express from "express";
import {  readAllUsers } from "./controllers/UserController";
import { createCalcado } from "./controllers/calcadosController";


const routes = express.Router();

routes.get("/users", readAllUsers);

routes.post("/calcado", createCalcado);

export default routes;
