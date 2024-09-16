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

app.use(cors({
    origin: '*' // Adjust as needed
}));

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/requests', requestRoutes);
app.use('/api/materials', materialRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Backend is running');
});

module.exports = app;
