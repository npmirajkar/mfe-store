// Path: apps/cart/src/api/cartApi.ts
import * as expressModule from 'express';
import * as corsModule from 'cors';
import { store } from '../store/store';
import { addItem } from '../store/cartSlice';

// Create a new instance of the express application
const expressApp = expressModule.default || expressModule;
const corsMiddleware = corsModule.default || corsModule;
const app = expressApp();

// Configure CORS to allow requests from all origins during development
app.use(corsMiddleware({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(expressApp.json());

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

export { app };