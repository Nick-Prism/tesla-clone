import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const carousel = [
  { id: 1, bg: '/assets/hero-1.jpg', model: 'Model S', subtitle: 'Order Online for Touchless Delivery' },
  { id: 2, bg: '/assets/hero-2.jpg', model: 'Model 3', subtitle: 'Experience Instant Torque & Tech' },
  { id: 3, bg: '/assets/hero-3.jpg', model: 'Solar Panels', subtitle: 'Power Your Home Sustainably' }
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % carousel.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProducts = () => {
    const section = document.getElementById('products');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const current = carousel[index];

  return (
    <section className="relative h-screen w-full overflow-hidden font-sans">
      {/* Background Image Carousel */}
      <AnimatePresence>
        <motion.img
          key={current.id}
          src={current.bg}
          alt={current.model}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between items-center text-center text-white">
        {/* Titles */}
        <div className="pt-40">
          <motion.h1
            className="text-5xl md:text-7xl font-semibold mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {current.model}
          </motion.h1>

          <motion.h2
            className="text-lg md:text-2xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {current.subtitle}
          </motion.h2>
        </div>

        {/* Buttons */}
        <motion.div
          className="mb-20 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Button className="bg-black/70 text-white hover:bg-white hover:text-black border border-white px-8 py-4 text-lg rounded-full transition-all font-medium">
            Custom Order
          </Button>
          <Button
          variant="outline"
          className="bg-white/10 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg rounded-full font-medium transition-colors duration-300"
          >
            Learn More
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          onClick={scrollToProducts}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
