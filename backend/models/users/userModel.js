const bcrypt = require('bcryptjs/dist/bcrypt');
const User = require('./userSchema');
const auth = require('../../authentication/auth');


exports.registerUser = (req, res) => {

  User.exists({ email: req.body.email }, (err, result) => {

    if(err) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: 'You made a bad request.',
        err
      })
    }

    if(result) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: 'The email address is already taken.',
      })
    }

    const salt = bcrypt.genSaltSync(10);
    
    bcrypt.hash(req.body.password, salt, (err, hash) => {

      if(err) {
        return res.status(500).json({
          statusCode: 500,
          status: false,
          message: 'Failed when encrypting password.',
          err
        })
      }

      User.create({
        firstname:      req.body.firstname,
        lastname:       req.body.lastname,
        email:          req.body.email,
        passwordHash:   hash
      })
      .then(user => {
        res.status(201).json({
          statusCode: 201,
          status: true,
          message: 'User created.',
          token: auth.generateToken(user)
        })
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({
          statusCode: 500,
          status: false,
          message: "Failed to create user",
          err
        })
      })
    })
  })

}


exports.loginUser = (req, res) => {

  User.findOne({ email: req.body.email }, (err, user) => {

    if(err) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: 'Bad request',
      })
    }
    // Email
    if(!user){
      return res.status(401).json({
        statusCode: 401,
        status: false,
        message: 'Incorrect email or password'
      })
    }

    bcrypt.compare(req.body.password, user.passwordHash, (err, result) => {

      if(err) {
        return res.status(500).json({
          statusCode: 500,
          status: false,
          message: 'Something went wrong when decrypting password.'
        })
      }
      
      // Lösenord
      if(!result) {
        return res.status(401).json({
          statusCode: 401,
          status: false,
          message: 'Incorrect email or password'
        })
      }
      res.status(200).json({
        statusCode: 200,
        status: true,
        message: 'Authentication was succesful',
        token: auth.generateToken(user)
      })
    })
  })
}