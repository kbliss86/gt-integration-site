const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

//Login Page
router.get('/login', (req, req) => {
    res.render('login');
});

//Handle Login Post
router.post('/login', authController.login);

//Handle Register Post (Admin Only)
router.post

module.exports = router;