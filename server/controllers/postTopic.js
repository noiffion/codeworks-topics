'use strict';

const Topics = require('../models');


async function postTopic (req, res) {
  try {
    const newTopic = await Topics.create(req.body);
    res.status(201);
    res.send(newTopic);
  } catch (err) {
    console.error(err);
    res.status(500);
    res.send(err);
  }
}

module.exports = postTopic;
