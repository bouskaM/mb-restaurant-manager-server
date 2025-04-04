const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const restaurantRoutes = require('./routes/restaurants');
const managerRoutes = require('./routes/managers');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/login', authRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/managers', managerRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
