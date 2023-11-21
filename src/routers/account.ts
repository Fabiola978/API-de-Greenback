import { Router } from "express";
import AccountController from "../controllers/account";

const accountRouter = Router();

accountRouter.get('/', AccountController.getAll);
accountRouter.post('/', AccountController.createNew);

accountRouter.use('*', (req,res) => res.status(404).json({ error: 'Resource not found' }));

export default accountRouter;  