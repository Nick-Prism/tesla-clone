import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Product } from '@/hooks/useProducts';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const isEven = index % 2 === 0;

  return (
    <section className="min-h-screen flex items-center py-20 font-sans">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center ${
            isEven ? '' : 'lg:grid-flow-col-dense'
          }`}
        >
          {/* Image */}
          <motion.div
            className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className={`${
              isEven ? 'lg:order-2' : 'lg:order-1'
            } space-y-6 text-white`}
            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-semibold mb-2">{product.name}</h2>
              <p className="text-xl text-blue-400 mb-4">{product.tagline}</p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">{product.description}</p>
            </div>

            {/* Specs */}
            <div className="grid grid-cols-3 gap-4 py-6">
              <div className="text-center">
                <div className="text-2xl font-bold">{product.acceleration}</div>
                <div className="text-gray-400 text-sm">0-60 mph</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{product.top_speed}</div>
                <div className="text-gray-400 text-sm">Top Speed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{product.range_miles}</div>
                <div className="text-gray-400 text-sm">Range</div>
              </div>
            </div>

            {/* Price */}
            <div className="text-3xl font-semibold mb-6">${product.base_price.toLocaleString()}</div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium rounded-full"
              >
                <a href={`/product/${product.id}`}>Order Now</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur px-8 py-4 text-white border border-white hover:bg-white hover:text-black text-lg font-medium rounded-full"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
