const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const materialRoutes = require('./routes/materialRoutes');
const requestRoutes = require('./routes/requestRoutes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
connectDB();

const app = express();

// Configure CORS to allow requests from specific origins
app.use(cors({
    origin: 'https://issuanceportalapp.vercel.app', // Replace with your frontend domain
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
  }));

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/requests', requestRoutes);
app.use('/api/materials', materialRoutes);
app.use('/api/users', userRoutes);

// Health check endpoint
app.get('/', (req, res) => {
    res.send('Backend is running');
});

// Export the app for Vercel
module.exports = (req, res) => {
    app(req, res);
};
