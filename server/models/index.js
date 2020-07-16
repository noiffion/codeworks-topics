const mongoose = require('mongoose');

const schema = {
  topicName: { type: String, required: true },
  createdDate: { type: String, required: true },
  score: { type: Number },
};

const topicsSchema = new mongoose.Schema(schema);
const Topics = mongoose.model('topics', topicsSchema);


mongoose.connect('mongodb://localhost:27017/topiclist', { useNewUrlParser: true })
  .catch(error => handleError(error));
mongoose.connection.on('connected', () => console.info("Connected!\n\n"));
mongoose.connection.on('error', console.error)


module.exports = Topics;
