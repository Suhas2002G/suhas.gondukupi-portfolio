// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Coffee, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">


        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
        >
          {/* Copyright */}
          <div className="text-gray-500 text-center md:text-left">
            © {currentYear} Suhas Gondukupi. All rights reserved.
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-3 text-gray-500">
            <div className="flex items-center gap-2">
              <Code size={14} className="text-blue-400" />
              <span>with</span>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart size={14} className="text-red-400" fill="currentColor" />
              </motion.div>
              <span>&</span>
              <Coffee size={14} className="text-amber-500" />
            </div>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 text-green-400">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs font-medium">Available for new opportunities</span>
          </div>
        </motion.div>

        
      </div>
    </footer>
  );
};

export default Footer;