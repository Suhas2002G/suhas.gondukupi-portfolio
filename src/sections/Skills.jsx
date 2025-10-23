// src/sections/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  // All skills in a single array for continuous scrolling
  const allSkills = [
    
    
    // Front-End Technology
    { name: 'HTML', logo: '/HTML5.png' },
    { name: 'CSS', logo: '/CSS3.png' },
    { name: 'JavaScript', logo: '/js.png' },
    { name: 'React.js', logo: '/React.png' },
    { name: 'Bootstrap', logo: '/Bootstrap.png' },
    { name: 'Tailwind CSS', logo: '/Tailwind CSS.png' },
    

    // Back-End Technology
    { name: 'Python', logo: '/Python.png' },
    { name: 'FastAPI', logo: '/FastAPI.png' },
    { name: 'Django', logo: '/Django.png' },
    { name: 'Flask', logo: '/Flask.png' },


    // Databases
    { name: 'MySQL', logo: '/MySQL.png' },
    { name: 'PostgreSQL', logo: '/PostgresSQL.png' },
    { name: 'SQLite', logo: '/SQLite.png' },
    { name: 'Redis', logo: '/Redis.png' },
    { name: 'SQL Server', logo: '/Microsoft SQL Server.png' },
    
    // Library and Packages
    { name: 'Numpy', logo: '/NumPy.png' },
    { name: 'Pandas', logo: '/Pandas.png' },
    { name: 'SQLAlchemy', logo: '/SQLAlchemy.png' },


    
    // Tools
    { name: 'Docker', logo: '/Docker.png' },
    { name: 'AWS', logo: '/AWS.png' },
    { name: 'Git', logo: '/Git.png' },
    { name: 'Github', logo: '/GitHub.png' },
    { name: 'Postman', logo: '/Postman.png' },

    
    { name: 'Python', logo: '/Python.png' },
    { name: 'FastAPI', logo: '/FastAPI.png' },
    { name: 'Django', logo: '/Django.png' },
    { name: 'Flask', logo: '/Flask.png' },
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedSkills = [...allSkills, ...allSkills, ...allSkills];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const skillItemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section id="skills" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
              Tech <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Stack</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Mastered technologies that power modern, scalable applications
            </p>
          </motion.div>

          {/* Single Row - Infinite Scroll */}
          <motion.div
            variants={itemVariants}
            className="relative -mt-10 -mb-6"
          >
            {/* Gradient Overlays */}
            {/* <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent z-10"></div> */}
            {/* <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent z-10"></div> */}
            
            {/* Scrolling Container */}
            <div className="flex space-x-8 py-8 animate-scroll-smooth">
              {duplicatedSkills.map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  variants={skillItemVariants}
                  whileHover={{ 
                    scale: 1.15,
                    y: -8,
                    transition: { 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 10 
                    }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-shrink-0 flex flex-col items-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-default group min-w-[120px] border border-white/20 dark:border-gray-700/50"
                >
                  {/* Logo Container - Clean & Elegant */}
                  <div className="relative mb-4">
                    <div className="w-20 h-20 flex items-center justify-center p-3 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 shadow-inner group-hover:shadow-lg transition-all duration-500">
                      <img 
                        src={skill.logo} 
                        alt={`${skill.name} logo`}
                        className="w-12 h-12 object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 filter group-hover:brightness-110"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          const fallback = document.createElement('div');
                          fallback.className = 'w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-lg';
                          fallback.textContent = skill.name.charAt(0);
                          e.target.parentNode.appendChild(fallback);
                        }}
                      />
                    </div>
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500 blur-sm -z-10"></div>
                  </div>
                  
                  {/* Skill Name */}
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center leading-tight group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 tracking-wide">
                    {skill.name}
                  </span>
                  
                  {/* Subtle Accent Line */}
                  <div className="w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3 transition-all duration-500 group-hover:w-8"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-20 text-center"
          >
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20 dark:border-gray-700/50">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Full Stack Mastery
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-6">
                End-to-end expertise in modern development stacks, from scalable backend architectures 
                to responsive frontend experiences and cloud deployment.
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-gray-700 dark:text-gray-300">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {/* {allSkills.length}+ */}
                    20+
                  </div>
                  <div className="text-sm">Technologies</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    100%
                  </div>
                  <div className="text-sm">Proficiency</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll-smooth {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-120px * ${allSkills.length} - 2rem * ${allSkills.length}));
          }
        }

        .animate-scroll-smooth {
          animation: scroll-smooth 60s linear infinite;
        }

        /* Pause animation on hover */
        .animate-scroll-smooth:hover {
          animation-play-state: paused;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .animate-scroll-smooth {
            animation-duration: 45s;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;