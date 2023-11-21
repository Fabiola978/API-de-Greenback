import { Request, Response } from "express";
import AccountModel from "../models/account";

abstract class AccountController {
  static async createNew(req: Request, res: Response) {
  
    const validateData = req.body;
    const response = await AccountModel.createNew(validateData);
    return res.status(201).json(response);

  }
  static async getAll(req: Request, res: Response) {
    const accounts = await AccountModel.getAll();

    return res.json({ accounts });
  }
}


export default AccountController;