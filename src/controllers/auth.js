import Usuario from '../models/Users.js';
import bcryptjs from 'bcryptjs';
import { generateToken } from '../helpers/jwt.js';

const createUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await Usuario.findOne({ email });
    if (user) {
      return res.status(400).json({ ok: false, msg: 'User already exists' });
    }

    user = new Usuario(req.body);

    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);
    await user.save();
    const token = generateToken(user.id, user.name);
    res.status(201).json({ ok: true, msg: 'created', id: user._id, name: user.name, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: 'error' });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Usuario.findOne({ email });
    if (!user) {
      return res.status(400).json({ ok: false, msg: 'User not exists' });
    }

    const validPassword = bcryptjs.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ ok: false, msg: 'Password incorrect' });
    }

    const token = generateToken(user.id, user.name);
    res.status(200).json({ ok: true, uid: user.id, name: user.email, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: 'error' });
  }
};

const renewToken = (req, res) => {
  const { uid, name } = req;
  const token = generateToken(uid, name);
  res.json({ ok: true, token });
};

export { createUser, loginUser, renewToken };
