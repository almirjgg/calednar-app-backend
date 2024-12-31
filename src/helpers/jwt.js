import jwt from 'jsonwebtoken';

export const generateToken = (uid, name) => {
  const payload = { uid, name };
  try {
    const tolken = jwt.sign(payload, process.env.SECRET_JWT_SEED, { expiresIn: '2h' });
    return tolken;
  } catch (error) {
    console.log(error);
    return null;
  }
};
