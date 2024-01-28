import { Request, Response } from "express";

import MainService from "../interfaces/MainService";

export default class MainController {
  private service: MainService;

  constructor(service: MainService) {
    this.service = service;
  }

  getDefaultPathMessage = (req: Request, res: Response) => {
    return res.json(this.service.getMessage());
  };
}
