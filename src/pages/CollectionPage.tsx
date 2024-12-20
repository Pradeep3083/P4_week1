import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

interface CollectionPageProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const CollectionPage: React.FC<CollectionPageProps> = ({ products, onAddToCart }) => {
  const { category } = useParams();
  const navigate = useNavigate();
  
  const filteredProducts = products.filter(
    product => product.category.toLowerCase() === category?.toLowerCase()
  );

  const categoryTitles: { [key: string]: string } = {
    men: "Men's Collection",
    women: "Women's Collection",
    kids: "Kids' Collection"
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/categories')}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Categories
        </button>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          {categoryTitles[category?.toLowerCase() || ''] || 'Collection'}
        </h1>
        
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No products found in this collection.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CollectionPage;