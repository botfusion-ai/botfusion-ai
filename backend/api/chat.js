const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/", async (req, res) => {
  const { message, userId, language } = req.body;
  if (!message) return res.status(400).json({ reply: "No message provided" });

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4",
        messages: [
          { role: "system", content: "You are a helpful AI assistant." },
          { role: "user", content: message }
        ]
      },
      { headers: { "Authorization": `Bearer ${process.env.OPENAI_API_KEY}` } }
    );

    const reply = response.data.choices[0].message.content;
    res.json({ reply });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ reply: "Error contacting OpenAI API" });
  }
});

module.exports = router;
