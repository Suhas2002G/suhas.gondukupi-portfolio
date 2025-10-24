// src/sections/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Rocket, Zap, Target, Code, Database } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

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

  const stats = [
    { icon: Trophy, value: '2x', label: 'Hackathon Winner', color: 'yellow' },
    { icon: Rocket, value: '70%', label: 'Efficiency Gain', color: 'green' },
    { icon: Zap, value: '100%', label: 'Project Success', color: 'blue' },
    { icon: Target, value: '∞', label: 'Scalability Focus', color: 'purple' },
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900/20"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
              About Me 
              {/* <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span> */}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Transforming complex challenges into elegant, high-performance solutions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-1 gap-12 items-start">
            {/* Main Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Professional Introduction */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <Code className="w-6 h-6 text-blue-500" />
                  Technical Excellence
                </h3>
                
                <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    <strong className="text-blue-600 dark:text-blue-400">Seasoned Full Stack Developer</strong> specializing in 
                    architecting and delivering <strong>high-performance web applications</strong> that drive business growth and 
                    technological innovation.
                  </p>
                  
                  <p>
                    Expert in building <strong>scalable backend architectures</strong> using <strong>FastAPI & Django</strong>, 
                    with a proven track record of optimizing system performance and reducing operational bottlenecks by up to <strong>70%</strong>.
                  </p>
                  
                  <p>
                    Proficient in creating <strong>intuitive user experiences</strong> with modern frontend technologies, 
                    ensuring seamless interaction across all platforms while maintaining <strong>enterprise-grade security standards</strong>.
                  </p>
                </div>
              </div>

              
            </motion.div>

            
          </div>

          {/* Core Competencies */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="bg-gray-900 dark:bg-gray-800 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">Core Competencies</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  'Backend Architecture',
                  'API Development', 
                  'System Optimization',
                  'Database Design',
                  'Performance Tuning',
                  'Security Implementation',
                  'Team Leadership',
                  'Cloud Deployment',
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-center p-3 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors duration-300"
                  >
                    <span className="text-sm font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;