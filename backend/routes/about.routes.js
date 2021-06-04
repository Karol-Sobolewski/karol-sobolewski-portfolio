const express = require(`express`);

const router = express.Router();

const Menu = require(`../models/about.model`);

router.get(`/about`, async (req, res) => {
  try {
    const result = await Menu.find().sort({ order: 1 });
    if (!result) res.status(404).json({ about: `Not found` });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
