// Path: apps/cart/src/server.ts
const express = require('express');
const cors = require('cors');
const { store } = require('./store/store');
const { addItem } = require('./store/cartSlice');

// Create Express app
const app = express();

// Configure CORS
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Add item to cart endpoint
app.post('/api/cart/add', (req, res) => {
  try {
    const item = req.body;
    
    // Validate required fields
    if (!item.id || !item.name || typeof item.price !== 'number' || !item.image) {
      return res.status(400).json({ 
        error: 'Invalid item data. Required fields: id, name, price, image' 
      });
    }

    // Ensure quantity is a positive number
    const quantity = Math.max(1, item.quantity || 1);
    const normalizedItem = { ...item, quantity };

    // Dispatch the action to add the item to the cart
    store.dispatch(addItem(normalizedItem));
    
    res.status(200).json({ 
      message: 'Item added to cart successfully',
      item: normalizedItem
    });
  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).json({ error: 'Failed to add item to cart' });
  }
});

// Start the server
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Cart API server running on port ${PORT}`);
});