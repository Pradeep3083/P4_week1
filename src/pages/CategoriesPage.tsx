import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'men',
    name: "Men's Collection",
    image: 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    description: 'Stylish and comfortable clothing for men'
  },
  {
    id: 'women',
    name: "Women's Collection",
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    description: 'Trendy and elegant fashion for women'
  },
  {
    id: 'kids',
    name: "Kids' Collection",
    image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    description: 'Comfortable and fun clothing for children'
  }
];

const CategoriesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map(category => (
            <div 
              key={category.id}
              onClick={() => navigate(`/collection/${category.id}`)}
              className="relative group overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                <p className="text-gray-200 mb-4">{category.description}</p>
                <span className="inline-flex items-center text-white group-hover:underline">
                  View Collection <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;