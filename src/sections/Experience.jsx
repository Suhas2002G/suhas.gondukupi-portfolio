// src/sections/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, Award, ExternalLink } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const experiences = [
    {
      title: 'Python Full Stack Developer',
      company: 'AYC Analytics Pvt Ltd, Pune',
      period: 'April 2025 – Present',
      description: 'Leading the development of enterprise-scale data automation platforms, architecting robust backend systems with FastAPI and creating intuitive frontend interfaces with React. Specializing in building scalable solutions that handle complex data workflows and real-time processing.',
      achievements: [
        'Engineered SUVI Data Automation Platform reducing manual data processing time by 70%',
        'Architected secure authentication system handling 10,000+ monthly transactions',
        'Implemented real-time validation APIs improving data accuracy by 85%',
        'Optimized database queries reducing response time from 2s to 200ms'
      ],
      logo: '/exp-logos/ayc.jpg',
      website: 'https://aycanalytics.com'
    },
    {
      title: 'Full Stack Developer (Intern)',
      company: 'Vibgyor Advisors Pvt Ltd',
      period: 'Jan 2025 – Mar 2025',
      description: 'Developed and maintained web applications using modern technologies, collaborated with cross-functional teams to deliver high-quality software solutions.',
      achievements: [
        'Built responsive web applications serving 5,000+ monthly users',
        'Implemented RESTful APIs improving data exchange efficiency',
        'Collaborated in agile development environment delivering features on schedule'
      ],
      logo: '/exp-logos/vibgyor.jpeg',
      website: 'https://vibgyoradvisors.com'
    }
  ];

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

  return (
    <section id="experience" ref={ref} className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900/20"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
              Work Experience
              {/* <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span> */}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Professional journey through impactful roles and continuous growth
            </p>
          </motion.div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${index}`}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700 hover:shadow-3xl transition-all duration-500"
              >
                {/* Header with Logo and Company Name */}
                <div className="flex items-start gap-4 mb-6">
                  {/* Company Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 shadow-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center">
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`}
                        className="w-12 h-12 object-contain rounded-lg"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      {/* Fallback icon */}
                      <div className="hidden w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg items-center justify-center text-white">
                        <Briefcase className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  {/* Company Info */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-3">
                          <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
                            {exp.company}
                          </p>
                          {exp.website && (
                            <motion.a
                              href={exp.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              className="text-blue-600 hover:text-blue-700"
                            >
                              <ExternalLink size={16} />
                            </motion.a>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                  {exp.description}
                </p>

                {/* Achievements */}
                {exp.achievements && (
                  <div className="space-y-3">
                    <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <Award className="w-5 h-5 text-green-500" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;