import express from "express";
import cors from "cors";
import chatRouter from "./routes/chat.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("BotFusion backend running");
});

app.use("/api/chat", chatRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
