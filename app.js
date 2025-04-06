const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const restaurantRoutes = require('./routes/restaurants');
const managerRoutes = require('./routes/managers');
const initDatabase = require('./db/init');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/login', authRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/managers', managerRoutes);

async function startServer() {
  try {
    await initDatabase();

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error('Failed to initialize database or start server:', error);
  }
}

startServer();