const express = require('express');
const cors = require('cors');
const chatRoute = require('./chat');
const imageRoute = require('./image');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/chat', chatRoute);
app.use('/api/image', imageRoute);

app.listen(process.env.PORT || 3000, () => {
  console.log('Server running...');
});
