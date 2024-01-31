import { Request, Response } from "express";

import BooksService from "../interfaces/booksService";

interface QueryParams {
  id: number;
}

export default class BooksController {
  private service: BooksService;

  constructor(service: BooksService) {
    this.service = service;
  }

  getBookById = (req: Request<QueryParams>, res: Response) => {
    const { id } = req.params;
    return res.json(this.service.getBookById(id));
  };
}
