const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  const { prompt } = req.body;
  // Generate image using OpenAI or another API
  res.json({ url: 'https://via.placeholder.com/400x200.png?text=Image' });
});

module.exports = router;
