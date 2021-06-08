const mongoose = require(`mongoose`);

const usesSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  setup: [
    {
      heading: String,
      gear: String,
    },
  ],
});

module.exports = mongoose.model(`Uses`, usesSchema);
