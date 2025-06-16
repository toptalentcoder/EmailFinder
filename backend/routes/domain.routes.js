const express = require('express');
const router = express.Router();
const controller = require('../controllers/domain.controller');

router.get('/search', controller.searchByKeyword);
router.post('/details', controller.getCompanyDetails);
router.post('/person-details', controller.getPersonDetails);

module.exports = router;
