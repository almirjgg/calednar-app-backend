import { Router } from 'express';

const authRouter = Router();

authRouter.get('/login', (req, res) => {
  res.render('login');
});

export default authRouter;
