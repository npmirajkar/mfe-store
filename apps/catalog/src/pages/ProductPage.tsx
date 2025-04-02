import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { Button } from '../../../shell/src/components/atoms/Button';
import { ShoppingCart } from 'lucide-react';
import StoreProvider from '../components/StoreProvider';
import { useAddToCart } from '../hooks/useAddToCart';

const ProductPageContent: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { products } = useSelector((state: RootState) => state.products);
  const { addToCart, isLoading } = useAddToCart();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-xl text-gray-600">Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-square rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.category}</p>
          <p className="text-2xl font-bold mb-6">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-8">{product.description}</p>
          
          <div className="mt-auto">
            <Button
              variant="primary"
              size="lg"
              className="w-full"
              onClick={handleAddToCart}
              disabled={isLoading}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              {isLoading ? 'Adding...' : 'Add to Cart'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductPage: React.FC = () => (
  <StoreProvider>
    <ProductPageContent />
  </StoreProvider>
);

export default ProductPage;