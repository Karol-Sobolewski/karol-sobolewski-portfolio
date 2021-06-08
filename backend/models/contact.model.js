const mongoose = require(`mongoose`);

const contactSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  content: [
    {
      icon: {
        src: String,
        alt: String,
      },
      linkType: String,
      text: String,
      link: String,
    },
  ],
});

module.exports = mongoose.model(`Contact`, contactSchema);
