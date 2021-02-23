const mongoose = require(`mongoose`);

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  live: { type: String },
  git: { type: String },
  description: { type: String, required: true },
  tech: { type: Array },
  order: { type: Number, required: true },
});

module.exports = mongoose.model(`Project`, projectSchema);
