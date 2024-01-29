import express from "express";

import MainController from "@/controllers/mainController";
import DefaultMainService from "@/services/defaultMainService";

const mainRouter = express.Router();

const controller = new MainController(new DefaultMainService());

mainRouter.get("/", (req, res) => controller.getDefaultPathMessage(req, res));

export default mainRouter;
