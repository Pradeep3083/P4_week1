import React from 'react';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';

interface ShopPageProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ShopPage: React.FC<ShopPageProps> = ({ products, onAddToCart }) => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Shop All Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;