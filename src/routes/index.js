import { Router } from 'express';

import authRouter from './auth/index.js';
import eventRouter from './events/index.js';
import { validatorJwt } from '../middlewares/validator-jwt.js';

const apiRouter = Router();
apiRouter.use('/auth', authRouter);
apiRouter.use('/events', validatorJwt, eventRouter);

export default apiRouter;
