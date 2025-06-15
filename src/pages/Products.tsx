import React from 'react';
import { motion } from 'framer-motion';
import { useProducts } from '@/hooks/useProducts';
import Navbar from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Products = () => {
  const { data: products, isLoading, error } = useProducts();

  // Static extras: Solar Panels + Wall Charger
  const extras = [
    {
      id: 'solar',
      name: 'Solar Panels',
      type: 'Energy',
      tagline: 'Power everything with clean solar energy',
      base_price: 9999,
      acceleration: 'N/A',
      top_speed: 'N/A',
      range_miles: 'N/A',
      images: ['/assets/solar-panels.jpg'],
    },
    {
      id: 'charger',
      name: 'Wall Connector',
      type: 'Charger',
      tagline: 'Fast charging made convenient',
      base_price: 450,
      acceleration: 'N/A',
      top_speed: 'N/A',
      range_miles: 'N/A',
      images: ['/assets/wall-connector.jpg'],
    },
  ];

  const allProducts = [...(products ?? []), ...extras];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center font-sans">
        <div className="text-white text-xl">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center font-sans">
        <div className="text-red-500 text-xl">Error loading products</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black font-sans text-white">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl lg:text-6xl font-semibold mb-4">Our Products</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover our lineup of revolutionary electric vehicles and energy solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-gray-900 border border-gray-700 overflow-hidden hover:scale-105 transition-transform duration-300">
                  <div className="relative">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                      onError={(e) => {
                        e.currentTarget.src = '/assets/placeholder.jpg'; // fallback if image fails
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-semibold">{product.name}</h3>
                      <p className="text-sm text-gray-300">{product.type}</p>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <p className="text-gray-400 mb-4">{product.tagline}</p>

                    <div className="grid grid-cols-3 gap-4 text-sm mb-6">
                      <div className="text-center">
                        <div className="text-white font-semibold">{product.acceleration}</div>
                        <div className="text-gray-500">0-60 mph</div>
                      </div>
                      <div className="text-center">
                        <div className="text-white font-semibold">{product.top_speed}</div>
                        <div className="text-gray-500">Top Speed</div>
                      </div>
                      <div className="text-center">
                        <div className="text-white font-semibold">{product.range_miles}</div>
                        <div className="text-gray-500">Range</div>
                      </div>
                    </div>

                    <div className="text-2xl font-bold text-white mb-4">
                      ${product.base_price.toLocaleString()}
                    </div>

                    <Button className="w-full bg-white text-black hover:bg-gray-200 font-medium rounded-full text-lg py-2">
                      <a href={`/product/${product.id}`}>View Details</a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
