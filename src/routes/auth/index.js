import { Router } from 'express';
import { validatorJwt } from '../../middlewares/validator-jwt.js';
import { validateCreateUser, validateLogin } from '../../helpers/valdiators.js';
import { createUser, loginUser, renewToken } from '../../controllers/auth.js';

const authRouter = Router();

authRouter.post('/', validateLogin, loginUser);
authRouter.post('/new', validateCreateUser, createUser);
authRouter.get('/renew', validatorJwt, renewToken);

export default authRouter;
