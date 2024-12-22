import { Router } from 'express';

import authRouter from './auth/index.js';

export default Router().use('/auth', authRouter);
