const express = require('express');
const router = express.Router();
const integrationController = require('../controllers/integrationController');

//View Integrations Page
router.get('/viewIntegrations', integrationController.viewIntegrations);

//Trigger CTM API Call
router.post('/triggerApiCall', integrationController.triggerApiCall);

module.exports = router;