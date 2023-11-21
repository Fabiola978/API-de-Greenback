import { Router } from "express";
import userRouter from "./user";
import movementRouter from "./movement"
import accountRouter from "./account";

const mainRouter = Router();

mainRouter.get('/', (req, res) => res.json({ server: 'runing' }));

mainRouter.use('/users/movements', movementRouter);
mainRouter.use('/users', userRouter);
mainRouter.use('/accounts', accountRouter);

mainRouter.use('*', (req, res) => res.json({ error: 'Not found' }));

export default mainRouter;

