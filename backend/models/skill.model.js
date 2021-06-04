const mongoose = require(`mongoose`);

const skillSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  skills: { type: Array },
});

module.exports = mongoose.model(`Skill`, skillSchema);
