import React from 'react';

const AboutPage = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About StyleHub</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-6">
              Welcome to StyleHub, your premier destination for fashionable clothing for the whole family. 
              Founded with a passion for style and quality, we've grown to become one of the most trusted 
              online fashion retailers.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At StyleHub, we believe that everyone deserves to look and feel their best. We're committed 
              to providing high-quality, trendy clothing at accessible prices, ensuring that fashion is 
              never out of reach.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Curated Fashion Collections</li>
              <li>Quality Materials</li>
              <li>Inclusive Sizing</li>
              <li>Sustainable Practices</li>
              <li>Fast Fashion-Forward Shipping</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              Have questions about our collections or need styling advice? Our fashion experts are here to help! 
              Reach out to our customer service team at support@stylehub.com or call us at 1-800-STYLEHUB.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;