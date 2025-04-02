import { app } from './api/cartApi';

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
  console.log(`Cart API server running on port ${PORT}`);
});