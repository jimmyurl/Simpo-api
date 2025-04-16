// app.js

const express = require('express');
const app = express();
const dotenv = require('dotenv');
const recipesRoutes = require('./routes/recipes'); // Import routes

// Load environment variables from .env file
dotenv.config();

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/api/recipes', recipesRoutes); // Use recipes routes

// Home route
app.get('/', (req, res) => {
    res.send('Ugali Kitimoto');
});

// Port Setup
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app; // Export app for testing if needed
