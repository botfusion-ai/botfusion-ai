import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  // Allow only POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are BotFusion AI, a professional, intelligent, helpful assistant.",
        },
        {
          role: "user",
          content: message,
        },
      ],
      temperature: 0.7,
    });

    res.status(200).json({
      reply: response.choices[0].message.content,
    });
  } catch (error) {
    console.error("BotFusion Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
