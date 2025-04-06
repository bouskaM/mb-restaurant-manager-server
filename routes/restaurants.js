const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const router = express.Router();

const db = new sqlite3.Database('data.db');

/**
 * Toggle this to true to simulate 401 Unauthorized responses for testing.
 */
const TEST_UNAUTHORIZED = false;

// GET /api/restaurants – returns ALL restaurants at once
router.get('/', (req, res) => {
  // Simulate unauthorized access
  if (TEST_UNAUTHORIZED) {
    return res.status(401).json({ message: 'Unauthorized (simulated)' });
  }

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

    // Simulate a delay between 500ms and 3000ms
    const delay = Math.random() * (3000 - 500) + 500;
    setTimeout(() => {
      res.json(rows);
    }, delay);
  });
});

module.exports = router;
