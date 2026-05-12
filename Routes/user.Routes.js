const express = require('express');

const router = express.Router();

const Usercontroller = require('../Controller/users.Controllers');

router.post('/register', Usercontroller.register);

router.post('/login', Usercontroller.login);

module.exports = router;