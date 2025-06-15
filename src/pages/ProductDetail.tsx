
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useProduct } from '@/hooks/useProducts';
import { useCreateOrder } from '@/hooks/useOrders';
import { useAuth } from '@/hooks/useAuth';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading, error } = useProduct(id!);
  const { mutate: createOrder } = useCreateOrder();
  const { user } = useAuth();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [configuration, setConfiguration] = useState({
    color: 'Pearl White',
    wheels: 'Standard',
    interior: 'Black',
    variant: 'Standard',
  });

  const colorOptions = [
    { name: 'Pearl White', price: 0 },
    { name: 'Midnight Silver', price: 1000 },
    { name: 'Deep Blue', price: 1000 },
    { name: 'Red', price: 2000 },
  ];

  const wheelOptions = [
    { name: 'Standard', price: 0 },
    { name: 'Sport', price: 2500 },
    { name: 'Performance', price: 4500 },
  ];

  const interiorOptions = [
    { name: 'Black', price: 0 },
    { name: 'White', price: 1000 },
    { name: 'Cream', price: 1500 },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading product...</div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-red-500 text-xl">Product not found</div>
      </div>
    );
  }

  const calculateTotalPrice = () => {
    const colorPrice = colorOptions.find(c => c.name === configuration.color)?.price || 0;
    const wheelPrice = wheelOptions.find(w => w.name === configuration.wheels)?.price || 0;
    const interiorPrice = interiorOptions.find(i => i.name === configuration.interior)?.price || 0;
    return product.base_price + colorPrice + wheelPrice + interiorPrice;
  };

  const handleOrder = () => {
    if (!user) {
      window.location.href = '/auth';
      return;
    }

    createOrder({
      product_id: product.id,
      configuration,
      total_price: calculateTotalPrice(),
    });
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Carousel */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  className="w-full h-[500px] object-cover"
                />
                
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>
              
              {/* Image Indicators */}
              {product.images.length > 1 && (
                <div className="flex justify-center mt-4 space-x-2">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full ${
                        index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              )}
            </motion.div>

            {/* Product Info & Customizer */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {product.name}
                </h1>
                <p className="text-xl text-blue-400 mb-4">{product.tagline}</p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{product.acceleration}</div>
                  <div className="text-gray-400 text-sm">0-60 mph</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{product.top_speed}</div>
                  <div className="text-gray-400 text-sm">Top Speed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{product.range_miles}</div>
                  <div className="text-gray-400 text-sm">Range</div>
                </div>
              </div>

              {/* Customization Options */}
              <Card className="bg-gray-900 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Customize Your Vehicle</h3>
                  
                  <div className="space-y-4">
                    {/* Color Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Color
                      </label>
                      <select
                        value={configuration.color}
                        onChange={(e) => setConfiguration(prev => ({ ...prev, color: e.target.value }))}
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {colorOptions.map((color) => (
                          <option key={color.name} value={color.name}>
                            {color.name} {color.price > 0 && `(+$${color.price.toLocaleString()})`}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Wheels Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Wheels
                      </label>
                      <select
                        value={configuration.wheels}
                        onChange={(e) => setConfiguration(prev => ({ ...prev, wheels: e.target.value }))}
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {wheelOptions.map((wheel) => (
                          <option key={wheel.name} value={wheel.name}>
                            {wheel.name} {wheel.price > 0 && `(+$${wheel.price.toLocaleString()})`}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Interior Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Interior
                      </label>
                      <select
                        value={configuration.interior}
                        onChange={(e) => setConfiguration(prev => ({ ...prev, interior: e.target.value }))}
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {interiorOptions.map((interior) => (
                          <option key={interior.name} value={interior.name}>
                            {interior.name} {interior.price > 0 && `(+$${interior.price.toLocaleString()})`}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Price & Order */}
              <div className="text-center space-y-4">
                <div className="text-4xl font-bold text-white">
                  ${calculateTotalPrice().toLocaleString()}
                </div>
                
                <Button
                  size="lg"
                  onClick={handleOrder}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg font-semibold"
                >
                  {user ? 'Order Now' : 'Sign In to Order'}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
