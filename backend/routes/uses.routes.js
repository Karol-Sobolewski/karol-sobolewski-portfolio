const express = require(`express`);

const router = express.Router();

const Uses = require(`../models/uses.model`);

router.get(`/uses`, async (req, res) => {
  try {
    const result = await Uses.find();
    if (!result) res.status(404).json({ uses: `Not found` });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
