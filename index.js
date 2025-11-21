// index.js
// Main server file for Assignment Tracker

// Load environment variables from .env
require('dotenv').config();

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const assignmentRoutes = require('./routes/assignments');

const app = express();

// ====== Connect to MongoDB ======
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });

// ====== Middleware ======

// Parse URL-encoded form data (from HTML forms)
app.use(express.urlencoded({ extended: false }));

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ====== Routes ======

// Home page (splash page)
app.get('/', (req, res) => {
  // Render views/index.ejs
  res.render('index', { title: 'Home' });
});

// Use assignment routes for any URL starting with /assignments
app.use('/assignments', assignmentRoutes);

// ====== Start Server ======
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
