const fs = require('fs');
const { initDb } = require('./db/init');

// Check if DB exists, if not, initialize
(async () => {
  const dbPath = './data.db';

  if (!fs.existsSync(dbPath)) {
    console.log('No database found. Initializing...');
    await initDb();
  }

  // Start the Express app
  require('./app');
})();
