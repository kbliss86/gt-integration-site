const express = require('express');
const router = require('express').Router();
const adminController = require('../controllers/adminController');
const roleMiddleware = require('../middleware/roleMiddleware');

//View Admin Page
router.get('/admin', roleMiddleware('admin'), adminController.getAdminPage);

//Add User Admin Page
router.post('/admin/create-user', roleMiddleware('admin'), adminController.createUser);

module.exports = router;