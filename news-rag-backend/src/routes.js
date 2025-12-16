const express = require("express");
const { queryNews } = require("./ragService");

const router = express.Router();

router.post("/query", async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: "Question is required" });
  }

  const answer = await queryNews(question);
  res.json({ answer });
});

module.exports = router;
