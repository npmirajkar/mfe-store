import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export const useAddToCart = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const addToCart = async (item: CartItem) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await fetch('/api/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to add item to cart');
      }

      // Navigate to cart page after successful addition
      navigate('/cart');
    } catch (error) {
      console.error('Error adding item to cart:', error);
      setError(error instanceof Error ? error.message : 'Failed to add item to cart');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { addToCart, isLoading, error };
};