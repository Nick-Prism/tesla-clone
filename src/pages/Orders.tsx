
import React from 'react';
import { motion } from 'framer-motion';
import { useOrders } from '@/hooks/useOrders';
import { useAuth } from '@/hooks/useAuth';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Orders = () => {
  const { data: orders, isLoading, error } = useOrders();
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Please sign in to view your orders</div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading orders...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-red-500 text-xl">Error loading orders</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              Your Orders
            </h1>
            <p className="text-xl text-gray-400">
              Track your vehicle orders and delivery status
            </p>
          </motion.div>

          {orders && orders.length > 0 ? (
            <div className="space-y-6">
              {orders.map((order: any, index: number) => (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-gray-900 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-white flex justify-between items-center">
                        <span>Order #{order.id.slice(0, 8)}</span>
                        <span className="text-sm bg-blue-600 text-white px-3 py-1 rounded-full">
                          {order.status}
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">
                            {order.products?.name}
                          </h3>
                          <p className="text-gray-400 mb-4">{order.products?.type}</p>
                          
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-gray-400">Color:</span>
                              <span className="text-white">{order.configuration?.color}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Wheels:</span>
                              <span className="text-white">{order.configuration?.wheels}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Interior:</span>
                              <span className="text-white">{order.configuration?.interior}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-3xl font-bold text-white mb-2">
                            ${order.total_price.toLocaleString()}
                          </div>
                          <div className="text-gray-400 text-sm">
                            Ordered on {new Date(order.created_at).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <div className="text-gray-400 text-xl mb-4">No orders found</div>
              <a href="/products" className="text-blue-400 hover:text-blue-300">
                Browse our products to place your first order
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;
