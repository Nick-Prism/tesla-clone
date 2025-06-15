import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Menu, X, User } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, signOut, loading } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Orders', href: '/orders' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="text-white font-bold text-xl"
            whileHover={{ scale: 1.05 }}
          >
            <a href="/">
              <img src="/tesla-logo.png" alt="Tesla" className="h-6" />
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-white hover:text-gray-300 transition-colors duration-200"
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {!loading && user ? (
              <div className="relative group">
                <button className="text-white p-2 rounded-full hover:bg-white/20">
                  <User size={20} />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-black/90 backdrop-blur-sm text-white rounded-lg shadow-lg z-50 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm mb-2">
                    Hello, {user.user_metadata?.full_name || user.email}
                  </p>
                  <hr className="border-gray-600 mb-2" />
                  <button
                    onClick={signOut}
                    className="text-left w-full text-sm hover:text-red-400"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : !loading && (
              <Button
                variant="outline"
                size="sm"
                className="text-white border-white hover:bg-white hover:text-black rounded-full"
              >
                <a href="/auth">Sign In</a>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-black/95 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-white hover:text-gray-300 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              {!loading && user ? (
                <div className="pt-4 border-t border-gray-700">
                  <div className="text-white text-sm mb-2">
                    {user.user_metadata?.full_name || user.email}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      signOut();
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-white border-white hover:bg-white hover:text-black rounded-full"
                  >
                    Sign Out
                  </Button>
                </div>
              ) : !loading && (
                <div className="pt-4 border-t border-gray-700">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-white border-white hover:bg-white hover:text-black rounded-full"
                  >
                    <a href="/auth">Sign In</a>
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
