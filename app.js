const express = require('express');
const app = express();

// PORT (use 5000 to avoid conflicts)
const PORT = 5000;

// Middleware to allow frontend requests
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

// Test route
app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'Azar International Backend is running 🚀'
  });
});

// Example API route (for future use)
app.get('/api/collections', (req, res) => {
  res.json([
    { id: 1, name: 'Luxury Rugs', material: 'Wool' },
    { id: 2, name: 'Modern Carpets', material: 'Silk' }
  ]);
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});




