export const chatHandler = (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message required" });
  }

  res.json({
    reply: `🤖 BotFusion says: ${message}`
  });
};
