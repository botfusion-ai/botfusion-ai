const express = require("express");
const router = express.Router();
const OpenAI = require("openai");
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post("/", async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) return res.status(400).json({ error: "No prompt provided." });

  try {
    const result = await openai.images.generate({
      model: "gpt-image-1",
      prompt: prompt,
      size: "512x512"
    });

    res.json({ image_url: result.data[0].url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Image generation failed." });
  }
});

module.exports = router;
