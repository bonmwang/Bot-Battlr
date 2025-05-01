const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 8001;

// Middleware
app.use(cors());
app.use(express.json());

// Helper function to read/write db.json
const readData = () => {
  return JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json')));
};

const writeData = (data) => {
  fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify(data, null, 2));
};

// GET all bots
app.get('/bots', (req, res) => {
  const data = readData();
  res.json(data.bots);
});

// DELETE a bot
app.delete('/bots/:id', (req, res) => {
  const botId = parseInt(req.params.id);
  const data = readData();
  
  const updatedBots = data.bots.filter(bot => bot.id !== botId);
  writeData({ bots: updatedBots });
  
  res.status(200).json({ message: 'Bot discharged!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Bot Battlr API running on http://localhost:${PORT}`);
});