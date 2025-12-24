export default function handler(req, res) {
  res.status(200).json({
    status: "ok",
    message: "BotFusion backend is running 🚀"
  });
}
const express = require('express');
const app = express();
const cors = require('cors');

const chatRoute = require('./chat');
const imageRoute = require('./image');

app.use(cors());
app.use(express.json());
app.use('/api/chat', chatRoute);
app.use('/api/image', imageRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
