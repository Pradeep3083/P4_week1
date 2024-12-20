import React from 'react';
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import FeaturedProducts from '../components/FeaturedProducts';
import { Product } from '../types';

interface HomePageProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const HomePage: React.FC<HomePageProps> = ({ products, onAddToCart }) => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <FeaturedProducts products={products} onAddToCart={onAddToCart} />
    </div>
  );
};

export default HomePage;