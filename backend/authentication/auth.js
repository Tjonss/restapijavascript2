const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.TOKEN_KEY;

exports.generateToken = (user) => {

  return jwt.sign({
    firstname:  user.firstname,
    lastname:   user.lastname,
    id:         user._id,
    email:      user.email
  }, secretKey)
}

exports.verifyToken = (req, res, next) => {

  try {
    const token = req.headers.authorization.split(' ')[1];
    req.user = jwt.verify(token, secretKey)
    next()
  } catch {
    res.status(401).json({
      statusCode: 401,
      status: false,
      message: 'Access restricted, please login!'
    })
  }
}