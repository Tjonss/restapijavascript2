const router = require('express').Router();
const userModel = require('../models/users/userModel');
// const auth = require('../authentication/auth')



router.post('/register', userModel.registerUser);


router.post('/login', userModel.loginUser);


// // HÄR ÄR DU
// router.get('/login/orders', auth.verifyToken, userModel.getUserBooks);


module.exports = router;
