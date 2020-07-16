'use strict';

const getTopics = require('./getTopics');
const postTopic = require('./postTopic');
const putTopic = require('./putTopic');
const deleteTopic = require('./deleteTopic');


module.exports = {
  getTopics,
  postTopic,
  putTopic,
  deleteTopic,
}
