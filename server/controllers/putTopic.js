'use strict';

const Topics = require('../models');


async function putTopic (req, res) {
  try {
    const { topicId, dir } = req.params;

    let quantity = 0;
    if (dir === 'up') quantity = 1;
    else if (dir === 'down') quantity = -1;

    await Topics.findByIdAndUpdate(topicId, { $inc: {score: quantity }});
    res.status(200);
    res.send('Topic successfully updated!');
  } catch (err) {
    console.error(err);
    res.status(500);
    res.send(err);
  }
}

module.exports = putTopic;
