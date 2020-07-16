'use strict';

const Topics = require('../models');


async function getTopics (req, res) {
  try {
    const topics = await Topics.find();
    res.status(200);
    res.send(topics);
  } catch (err) {
    console.error(err);
    res.status(500);
    res.send(err);
  }
}

module.exports = getTopics;
