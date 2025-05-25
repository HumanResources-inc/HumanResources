/* you cant skid this its public lmaoooo and its just a fucking visit counter that updates every 10 seconds */

// server.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

let visitorCount = 0;

// Endpoint to increment visitor count and return it
app.get('/visit', (req, res) => {
  visitorCount++;
  res.json({ count: visitorCount });
});

// Endpoint to just get the current visitor count without incrementing
app.get('/count', (req, res) => {
  res.json({ count: visitorCount });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Visitor count server running on port ${PORT}`);
});
