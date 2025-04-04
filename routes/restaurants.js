const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const router = express.Router();

const db = new sqlite3.Database('data.db');

// GET /api/restaurants (set in app.js)– returns ALL restaurants at once
router.get('/', (req, res) => {
  const query = `
    SELECT id, managerId, address, inProduction
    FROM restaurants
    ORDER BY id;
  `;

  db.all(query, [], (err, rows) => {
    if (err) {
      console.error('Database error:', err.message);
      return res.status(500).json({ message: 'Internal server error' });
    }

    res.json(rows);
  });
});

module.exports = router;
