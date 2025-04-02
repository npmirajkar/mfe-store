import React from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { RootState } from '../store/store';
import { ProductCard } from '../../../shell/src/components/molecules/ProductCard';
import StoreProvider from '../components/StoreProvider';

const CategoryPageContent: React.FC = () => {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category');
  const { products, categories } = useSelector((state: RootState) => state.products);

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category.toLowerCase() === selectedCategory)
    : products;

  const category = categories.find((c) => c.id === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          {category ? category.name : 'All Products'}
        </h1>
        <p className="text-gray-600">
          {filteredProducts.length} products available
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
};

const CategoryPage: React.FC = () => (
  <StoreProvider>
    <CategoryPageContent />
  </StoreProvider>
);

export default CategoryPage;