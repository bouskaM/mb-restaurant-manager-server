const express = require('express');
const router = express.Router();

// POST /api/login (set in app.js)
router.post('/', (req, res) => {
  const { username, password } = req.body;

  // Check if username or password is missing (bad request)
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  // Check credentials (hardcoded for the purpose of this assignment)
  // In a real application, there would be a database check here and password hashing
  if (username === 'merim' && password === 'P@ssw0rd') {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

module.exports = router;
