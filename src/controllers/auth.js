import Usuario from '../models/Users.js';
const createUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await Usuario.findOne({ email });
    if (user) {
      return res.status(400).json({ ok: false, msg: 'User already exists' });
    }

    user = new Usuario(req.body);
    await user.save();
    res.status(201).json({ ok: true, msg: 'created', id: user._id, name: user.name });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: 'error' });
  }
};

const loginUser = (req, res) => {
  const { name, email, password } = req.body;

  res.json({ ok: true, msg: 'login' });
};

const renewToken = (req, res) => {
  res.json({ ok: true, msg: 'token' });
};

export { createUser, loginUser, renewToken };
