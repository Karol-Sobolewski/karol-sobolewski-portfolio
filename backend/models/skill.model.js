const mongoose = require(`mongoose`);

const skillSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  skills: [
    {
      icon: String,
      text: String,
    },
  ],
});

module.exports = mongoose.model(`Skill`, skillSchema);
