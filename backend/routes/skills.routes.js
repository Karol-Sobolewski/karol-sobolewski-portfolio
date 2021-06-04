const express = require(`express`);

const router = express.Router();

const Skill = require(`../models/skill.model`);

router.get(`/skills`, async (req, res) => {
  try {
    const result = await Skill.find();
    if (!result) res.status(404).json({ skill: `Not found` });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
