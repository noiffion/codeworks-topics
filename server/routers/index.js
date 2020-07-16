'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers');


router.get('/topics', controller.getTopics);
router.post('/topics', controller.postTopic);
router.put('/topics/:topicId/:dir', controller.putTopic);
router.delete('/topics/:topicId', controller.deleteTopic);

module.exports = router;
