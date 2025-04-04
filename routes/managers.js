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

    res.json(rows);
  });
});

module.exports = router;
