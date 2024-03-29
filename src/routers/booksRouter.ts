import express, { Request } from "express";

import BooksController from "../controllers/booksController";
import ExternalBookService from "../services/externalBookService";

const booksRouter = express.Router();

const controller = new BooksController(new ExternalBookService());

booksRouter.get("/books/:id", controller.getBookById);

export default booksRouter;
