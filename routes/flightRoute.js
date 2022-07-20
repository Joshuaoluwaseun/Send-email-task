const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/', controller.getFlight)

    .get('/:id', controller.getOneFlight)

    .post('/', controller.postFlight)

router.put('/:id', controller.updateFlight)

router.delete('/:id', controller.deleteFlight)

module.exports = router;

