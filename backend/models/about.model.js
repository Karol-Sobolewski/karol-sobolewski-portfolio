const mongoose = require(`mongoose`);

const aboutSchema = new mongoose.Schema({
  type: { type: String, required: true },
  content: { type: mongoose.Schema.Types.Mixed },
  order: { type: Number, required: true },
});

module.exports = mongoose.model(`About`, aboutSchema);
