const express = require(`express`);

const router = express.Router();

const Contact = require(`../models/contact.model`);

router.get(`/contact`, async (req, res) => {
  try {
    const result = await Contact.find();
    if (!result) res.status(404).json({ contact: `Not found` });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
