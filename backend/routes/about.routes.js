const express = require(`express`);

const router = express.Router();

const About = require(`../models/about.model`);

router.get(`/about`, async (req, res) => {
  try {
    const result = await About.find().sort({ order: 1 });
    if (!result) res.status(404).json({ about: `Not found` });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
