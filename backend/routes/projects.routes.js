const express = require(`express`);

const router = express.Router();

const Project = require(`../models/project.model`);

router.get(`/projects`, async (req, res) => {
  try {
    const result = await Project.find().sort({ order: 1 });
    if (!result) res.status(404).json({ project: `Not found` });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
