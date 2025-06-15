import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import { useProducts } from '@/hooks/useProducts';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const FullScreenProductSection: React.FC<{ product: any }> = ({ product }) => {
  const imagePath = `/assets/${product.name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '')
    .replace(/-+/g, '-')}.jpg`;

    const imageSlug = product.name
  .toLowerCase()
  .replace(/\s+/g, '-')
  .replace(/[^\w-]/g, '')
  .replace(/-+/g, '-');

  return (
    <section
      className="h-screen bg-cover bg-center relative snap-start"
      style={{ backgroundImage: `url('${imagePath}')` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex flex-col justify-end h-full px-4 pb-20 text-white items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-medium font-sans mb-4"
        >
          {product.name}
        </motion.h1>

        <div className="flex gap-4 flex-col sm:flex-row">
          <Button className="bg-white text-black hover:bg-gray-200 font-sans rounded-full px-6 py-3">
            <a href={`/product/${product.id}`}>Order Now</a>
          </Button>
          <Button
          variant="outline"
          className="bg-white/10 backdrop-blur px-6 py-3 text-white border border-white hover:bg-white hover:text-black rounded-full font-sans transition-all duration-300"
          >
          Learn More
        </Button>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-red-500 text-xl">Error loading products</div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white scroll-smooth overflow-y-scroll h-screen">
      <Navbar />
      <HeroSection />
      <div id="products" className="snap-y snap-mandatory">
        {products?.map((product) => (
          <FullScreenProductSection key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
