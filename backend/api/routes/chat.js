import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  const { message } = req.body;

  res.json({
    reply: `You said: ${message}`,
  });
});

export default router;
