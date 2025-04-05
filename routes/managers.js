const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const router = express.Router();

// Open the database (read-only)
const db = new sqlite3.Database('data.db');

// GET /api/managers – (set in app.js) return all managers
router.get('/', (req, res) => {
  const query = 'SELECT id, name FROM managers ORDER BY id ASC';

  db.all(query, [], (err, rows) => {
    if (err) {
      console.error('Database error:', err.message);
      return res.status(500).json({ message: 'Internal server error' });
    }

    // Simulate a random delay between 500ms and 3000ms
    const delay = Math.random() * (3000 - 500) + 500;
    setTimeout(() => {
      res.json(rows);
    }, delay);
  });
});

module.exports = router;
