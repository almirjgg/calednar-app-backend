import { Router } from 'express';
import { check } from 'express-validator';
import { validatorFields } from '../../middlewares/validator-fields.js';
import { createUser, loginUser, renewToken } from '../../controllers/auth.js';

const authRouter = Router();

authRouter.get(
  '/',
  [
    check('email', 'email is required').isEmail(),
    check('password', 'password is required').not().isEmpty(),
    check('password', 'password must be at least 6 characters').isLength({ min: 6 }),
    validatorFields,
  ],
  loginUser,
);
authRouter.post(
  '/new',
  [
    check('name', 'name is required').not().isEmpty(),
    check('email', 'email is required').isEmail(),
    check('password', 'password is required').not().isEmpty(),
    check('password', 'password must be at least 6 characters').isLength({ min: 6 }),
    validatorFields,
  ],
  createUser,
);
authRouter.get('/renew', renewToken);

export default authRouter;
