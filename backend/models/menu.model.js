const mongoose = require(`mongoose`);

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  src: { type: String, required: true },
  order: { type: Number, required: true },
});

module.exports = mongoose.model(`Menu`, menuSchema);
