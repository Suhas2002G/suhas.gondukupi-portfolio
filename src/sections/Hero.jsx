
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, MapPin, Phone, Calendar, Award, TrendingUp } from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "Full Stack Developer",
    "Python & FastAPI Specialist", 
    "Scalable Backend Architect",
    "React & Django Expert",
    "Python & FastAPI Specialist",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 pt-20">
      {/* Advanced Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-purple-500/10"></div>
        
        {/* Floating Elements */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500/30 rounded-full blur-sm"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute top-1/3 right-1/4 w-6 h-6 bg-purple-500/20 rounded-full blur-sm"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 4 }}
          className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-indigo-500/25 rounded-full blur-sm"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white mb-4 leading-tight">
              SUHAS
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                GONDUKUPI
              </span>
            </h1>
            
            {/* Animated Role */}
            <div className="h-12 flex items-center justify-center">
              <motion.h2
                key={currentRole}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl font-semibold text-gray-600 dark:text-gray-400"
              >
                {roles[currentRole]}
              </motion.h2>
            </div>
          </motion.div>

          {/* Professional Summary */}
          <motion.div
            variants={itemVariants}
            className="max-w-3xl mx-auto mb-8"
          >
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-light text-center">
              Building <span className="font-semibold text-blue-600 dark:text-blue-400">enterprise-grade applications</span> with 
              cutting-edge technologies. Specialized in creating <span className="font-semibold">scalable backend systems</span> and 
              <span className="font-semibold"> intuitive user experiences</span> that drive business growth.
            </p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <div className="text-center">
              <div className="flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white">
                <TrendingUp className="w-5 h-5 text-green-500" />
                70%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">5+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Tech Stacks</div>
            </div>
            {/* <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
            </div> */}
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">∞</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Scalability</div>
            </div>
          </motion.div>

          {/* Contact Info Bar */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-6 mb-12 shadow-xl border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <MapPin className="w-5 h-5 text-blue-500" />
              <span className="font-medium">Pune, Maharashtra</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <Phone className="w-5 h-5 text-green-500" />
              <span className="font-medium">+91 7755994279</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <Mail className="w-5 h-5 text-purple-500" />
              <span className="font-medium">suhas8838@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <Calendar className="w-5 h-5 text-orange-500" />
              <span className="font-medium">Available Immediately</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className=" flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              href="/Suhas_Resume.pdf"
              download
              className="group relative flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <Download className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Download Resume</span>
            </motion.a>
            
            <motion.a
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgb(59 130 246)",
                color: "white"
              }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="flex items-center gap-3 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 hover:text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg backdrop-blur-sm"
            >
              <Mail className="w-5 h-5" />
              Start Conversation
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            {/* <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
              Trusted by Industry Leaders
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              <div className="text-gray-700 dark:text-gray-300 font-semibold">FASTAPI</div>
              <div className="text-gray-700 dark:text-gray-300 font-semibold">DJANGO</div>
              <div className="text-gray-700 dark:text-gray-300 font-semibold">REACT</div>
              <div className="text-gray-700 dark:text-gray-300 font-semibold">AWS</div>
              <div className="text-gray-700 dark:text-gray-300 font-semibold">DOCKER</div>
            </div> */}
          </motion.div>


        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400"
        >
          <span className="text-sm font-medium">Explore More</span>
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;