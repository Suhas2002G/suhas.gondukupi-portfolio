// src/sections/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Briefcase, Calendar, Star, ExternalLink, Trophy, Zap } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const experiences = [
    {
      type: 'work',
      title: 'Python Full Stack Developer',
      company: 'AYC Analytics Pvt Ltd',
      period: 'April 2025 – Present',
      description: 'Leading the development of enterprise-scale data automation platforms, architecting robust backend systems with FastAPI and creating intuitive frontend interfaces with React. Specializing in building scalable solutions that handle complex data workflows and real-time processing.',
      achievements: [
        'Engineered SUVI Data Automation Platform reducing manual data processing time by 70%',
        'Architected secure authentication system handling 10,000+ monthly transactions',
        'Implemented real-time validation APIs improving data accuracy by 85%',
        'Optimized database queries reducing response time from 2s to 200ms'
      ],
      icon: Briefcase,
      color: 'blue'
    },
    {
      type: 'achievement',
      title: '🏆 Champion - Jingle Byte Coding Competition 2025',
      company: 'Top 1 among 78 Elite Developers',
      period: 'December 2025',
      description: 'Dominating performance in competitive programming arena, solving complex algorithmic challenges under time constraints. Demonstrated exceptional problem-solving skills and technical expertise.',
      achievements: [
        'Secured 1st position among 78 highly competitive developers',
        'Solved 8/8 complex algorithmic problems with optimal solutions',
        'Achieved perfect score in system design and optimization rounds'
      ],
      icon: Trophy,
      color: 'yellow',
      linkedin: 'https://linkedin.com/posts/yourprofile/jingle-byte-champion-activity-123456789' // Replace with actual LinkedIn post URL
    },
    {
      type: 'achievement',
      title: '🥇 1st Prize - Thunder Bytes Monsoon Hackathon',
      company: 'Innovation Excellence Award',
      period: 'August 2024',
      description: 'Led a cross-functional team to develop an AI-powered logistics optimization platform, showcasing cutting-edge technical skills and innovative problem-solving approach.',
      achievements: [
        'Developed real-time route optimization algorithm reducing delivery time by 25%',
        'Built predictive analytics dashboard with 95% accuracy in ETA predictions',
        'Implemented secure OTP-based delivery verification system'
      ],
      icon: Zap,
      color: 'purple',
      linkedin: 'https://linkedin.com/posts/yourprofile/thunder-bytes-winner-activity-123456789' // Replace with actual LinkedIn post URL
    }
  ];

  const certifications = [
    {
      name: 'Python for Web Development',
      issuer: 'IBM',
      badge: '🎓',
      verified: true
    },
    {
      name: 'Full Stack Web Development with Python',
      issuer: 'Itvedant Education Pvt Ltd',
      badge: '🚀',
      verified: true
    },
    {
      name: 'Intermediate SQL',
      issuer: 'HackerRank',
      badge: '🏅',
      verified: true,
      score: 'Top 10%'
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
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="experience" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900/20"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
              Career <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Professional growth through impactful work experiences and competitive achievements
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Experience Timeline */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {experiences.map((exp, index) => {
                  const IconComponent = exp.icon;
                  return (
                    <motion.div
                      key={`${exp.title}-${index}`}
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                      className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700 hover:shadow-3xl transition-all duration-500"
                    >
                      <div className="flex items-start gap-6">
                        {/* Icon */}
                        <div className={`p-4 rounded-2xl bg-gradient-to-r ${
                          exp.color === 'blue' ? 'from-blue-500 to-blue-600' :
                          exp.color === 'yellow' ? 'from-yellow-500 to-orange-500' :
                          exp.color === 'purple' ? 'from-purple-500 to-pink-500' :
                          'from-gray-500 to-gray-600'
                        } text-white shadow-lg`}>
                          <IconComponent size={28} />
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          {/* Header */}
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <div>
                              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-1">
                                {exp.title}
                              </h3>
                              <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
                                {exp.company}
                              </p>
                            </div>
                            <div className="flex items-center gap-2 mt-2 sm:mt-0">
                              <Calendar className="w-4 h-4 text-gray-400" />
                              <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                                {exp.period}
                              </span>
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

                          {/* LinkedIn Link for Achievements */}
                          {exp.linkedin && (
                            <motion.a
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              href={exp.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-semibold transition-all duration-300 shadow-lg"
                            >
                              <ExternalLink size={16} />
                              View LinkedIn Post
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Certifications & Skills Sidebar */}
            <motion.div variants={itemVariants} className="lg:col-span-1 space-y-8">
              {/* Certifications */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700 sticky top-8">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <Trophy className="w-6 h-6 text-yellow-500" />
                  Certifications
                </h3>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-start gap-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-blue-900/20 rounded-2xl border border-gray-200 dark:border-gray-600"
                    >
                      <div className="text-2xl">{cert.badge}</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                          {cert.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">
                          {cert.issuer}
                        </p>
                        {cert.score && (
                          <div className="mt-2">
                            <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded-full font-medium">
                              {cert.score}
                            </span>
                          </div>
                        )}
                      </div>
                      {cert.verified && (
                        <div className="text-green-500" title="Verified">
                          ✓
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              {/* <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-xl font-black mb-6">Career Highlights</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Projects Delivered</span>
                    <span className="font-black text-lg">15+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Hackathon Wins</span>
                    <span className="font-black text-lg">2x</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Tech Stack</span>
                    <span className="font-black text-lg">20+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-100">Experience</span>
                    <span className="font-black text-lg">2+ Years</span>
                  </div>
                </div>
              </div> */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;