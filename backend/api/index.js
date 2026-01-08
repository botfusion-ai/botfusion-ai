import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import chatRoutes from "./routes/chat.js";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 BotFusion API is running");
});

app.use("/api/chat", chatRoutes);

app.listen(PORT, () => {
  console.log(`✅ BotFusion backend running on port ${PORT}`);
});
