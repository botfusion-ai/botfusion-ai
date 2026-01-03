import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoute from "./chat.js";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// ✅ CONNECT CHAT ROUTE
app.use("/api/chat", chatRoute);

// health check
app.get("/api/health", (req, res) => {
  res.json({ status: "OK" });
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
