const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

//Register
router.post('/register', async (req, res) => {
  const { username, password, email } = req.body;
  if (!username | !password | !email) {
    res.status(400);
    throw new Error('All fileds are mandatory');
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error('User already register');
  }
  // hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ username, password: hashedPassword, email });
  if (user) {
    console.log(user);
    res.status(201).json({ _id: user._id, email: user.email });
  } else {
    res.status(400);
    throw new Error('User data is not valid');
  }
});

//Login

router.post('/login', async (req, res) => {
  console.log('Entrando login');
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json('Wrong credentials!');

    if (user && (await bcrypt.compare(req.body.password, user.password))) {
      const accessToken = jwt.sign(
        {
          id: user._id,
          isAdmin: user.isAdmin,
        },
        process.env.JWT_SEC,
        { expiresIn: '3d' }
      );
      res.status(200).json({
        accessToken,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(401);
      throw new Error('Data is not valid');
    }
    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
