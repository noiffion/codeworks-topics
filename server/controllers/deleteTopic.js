'use strict';

const Topics = require('../models');


async function deleteTopic (req, res) {
  try {
    const { topicId } = req.params;
    await Topics.findByIdAndDelete(topicId);
    res.status(200);
    res.send('Topic successfully deleted!');
  } catch (err) {
    console.error(err);
    res.status(500);
    res.send(err);
  }
}

module.exports = deleteTopic;
