import jwt from 'jsonwebtoken';

const validatorJwt = (req, res, next) => {
  const token = req.headers['x-token'];
  if (!token) {
    return res.status(401).json({ ok: false, msg: 'No token in the request' });
  }
  try {
    const { uid, name } = jwt.verify(token, process.env.SECRET_JWT_SEED);
    req.uid = uid;
    req.name = name;
  } catch (error) {
    console.log(error);
    return res.status(401).json({ ok: false, msg: 'Invalid token' });
  }
  next();
};

export { validatorJwt };
