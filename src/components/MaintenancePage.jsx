// src/components/MaintenancePage.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Wrench, 
  Clock, 
  Mail, 
  Heart, 
  Sparkles, 
  Server, 
  Code2, 
  Cloud,
  Zap,
  Cpu,
  Shield
} from 'lucide-react';

const MaintenancePage = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const progressSteps = [
    { icon: Server, label: "Server Optimization", progress: 85 },
    { icon: Code2, label: "Code Updates", progress: 70 },
    { icon: Shield, label: "Security Enhancements", progress: 90 },
    { icon: Cloud, label: "Cloud Migration", progress: 60 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/2 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl"></div>
        
        {/* Floating Icons */}
        <motion.div className="absolute top-20 left-20" animate={floatingAnimation}>
          <Cpu className="w-8 h-8 text-blue-400/30" />
        </motion.div>
        <motion.div className="absolute top-40 right-32" animate={{ ...floatingAnimation, delay: 1 }}>
          <Zap className="w-6 h-6 text-purple-400/30" />
        </motion.div>
        <motion.div className="absolute bottom-32 left-32" animate={{ ...floatingAnimation, delay: 2 }}>
          <Cloud className="w-10 h-10 text-cyan-400/30" />
        </motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12 min-h-screen flex flex-col justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
              className="inline-flex items-center justify-center w-24 h-24 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 mb-6"
            >
              <Wrench className="w-12 h-12 text-yellow-400" />
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent"
            >
              We'll Be Back Soon!
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 mb-4 font-light"
            >
              Our website is currently undergoing scheduled maintenance
            </motion.p>
          </motion.div>

          {/* Current Time */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20 mb-12"
          >
            <Clock className="w-6 h-6 text-green-400" />
            <span className="text-lg font-mono font-semibold">
              {time.toLocaleTimeString()} • {time.toLocaleDateString()}
            </span>
          </motion.div>

          {/* Progress Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center justify-center gap-3">
              <Sparkles className="w-8 h-8 text-yellow-400" />
              Maintenance Progress
              <Sparkles className="w-8 h-8 text-yellow-400" />
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {progressSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={step.label}
                    variants={itemVariants}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-white/10 rounded-xl">
                        <IconComponent className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="text-left flex-1">
                        <h3 className="font-semibold text-lg">{step.label}</h3>
                        <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${step.progress}%` }}
                            transition={{ duration: 2, delay: index * 0.3 }}
                            className="bg-gradient-to-r from-green-400 to-cyan-400 h-2 rounded-full"
                          />
                        </div>
                        <span className="text-sm text-gray-400 mt-1">{step.progress}% Complete</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Estimated Time */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30 mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <Clock className="w-8 h-8 text-orange-400" />
              <h3 className="text-2xl font-bold">Estimated Completion Time</h3>
            </div>
            <p className="text-xl text-orange-200 mb-2">2-3 Hours</p>
            <p className="text-gray-300">We're working hard to bring you an improved experience</p>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Need Immediate Assistance?</h3>
            <motion.a
              href="mailto:suhas8838@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20 transition-all duration-300 group"
            >
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="text-lg font-semibold">suhas8838@gmail.com</span>
            </motion.a>
          </motion.div>

          {/* Footer */}
          <motion.div variants={itemVariants} className="text-gray-400">
            <p className="flex items-center justify-center gap-2 text-sm">
              Made with <Heart className="w-4 h-4 text-red-400 fill-current" /> by Suhas G
            </p>
            <p className="text-xs mt-2">Full Stack Developer</p>
          </motion.div>

          {/* Live Status Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            className="fixed bottom-6 right-6 flex items-center gap-2 bg-green-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-green-400/30"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold">Live Status</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default MaintenancePage;