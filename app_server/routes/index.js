var express = require('express');
var router = express.Router();
var ctrlLocation = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

/* GET location */
router.get('/', ctrlLocation.homelist);
router.get('/locations', ctrlLocation.homelist);
router.get('/location-info', ctrlLocation.locationInfo);
router.get('/review-new', ctrlLocation.addReview);

/* GET Others */
router.get('/about-us', ctrlOthers.genericPages);
router.get('/terms-and-conditions', ctrlOthers.genericPages);

module.exports = router;
