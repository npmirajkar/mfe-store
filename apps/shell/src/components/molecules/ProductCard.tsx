import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  category
}) => {
  return (
    <div className="group relative">
      <Link to={`/product/${id}`} className="block">
        <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">{name}</h3>
            <p className="mt-1 text-sm text-gray-500">{category}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium text-gray-900">${price}</p>
            <button className="p-1 rounded-full hover:bg-gray-100">
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};