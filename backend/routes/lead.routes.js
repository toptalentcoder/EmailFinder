const express = require('express');
const router = express.Router();
const controller = require('../controllers/lead.controller');

router.get('/search-leads', controller.searchLead);

module.exports = router;
