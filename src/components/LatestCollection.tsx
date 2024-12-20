import React from 'react';
import { ArrowRight } from 'lucide-react';

const LatestCollection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Latest Collection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Summer Collection"
              className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Summer Collection
                </h3>
                <a
                  href="/shop?collection=summer"
                  className="inline-flex items-center text-white hover:underline"
                >
                  Shop Collection <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src="https://www.shutterstock.com/image-photo/handsome-men-beautiful-women-modern-600nw-2167465123.jpg"
              alt="Casual Wear"
              className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Casual Collection
                </h3>
                <a
                  href="/shop?collection=casual"
                  className="inline-flex items-center text-white hover:underline"
                >
                  Shop Collection <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src="https://st5.depositphotos.com/15601592/76946/i/450/depositphotos_769460150-stock-photo-happy-family-holding-hands-smiling.jpg"
              alt="Casual Wear"
              className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Winter Collection
                </h3>
                <a
                  href="/shop?collection=casual"
                  className="inline-flex items-center text-white hover:underline"
                >
                  Shop Collection <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestCollection;
