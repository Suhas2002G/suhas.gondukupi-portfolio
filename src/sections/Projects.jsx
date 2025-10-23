// src/sections/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, Users, TrendingUp, Shield, Zap, Target, Clock, Award, Building2, Truck } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const projects = [
    {
      title: 'Society-360',
      subtitle: 'Enterprise Society Management Platform',
      description: 'A comprehensive digital transformation solution for residential societies, automating complex administrative workflows, financial management, and enhancing resident engagement through modern technology.',
      linkedinEmbed: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7301115819919368193?collapsed=1',
      tech: ['Django', 'Python', 'React', 'MySQL', 'Razorpay API', 'Redis', 'REST APIs'],
      github: 'https://github.com/Suhas2002G/Society-360',
      demo: '#',
      featured: true,
      metrics: [
        { icon: TrendingUp, value: '80%', label: 'Process Automation', color: 'emerald' },
        { icon: Users, value: '100+', label: 'Active Users', color: 'blue' },
        { icon: Clock, value: '40%', label: 'Faster Response', color: 'purple' },
        { icon: Shield, value: '100%', label: 'Secure Payments', color: 'green' }
      ],
      highlights: [
        'Microservices architecture handling 10,000+ monthly transactions',
        'Real-time notification system reducing communication delays by 60%',
        'Secure payment gateway processing significant maintenance fees',
        'Comprehensive admin dashboard with advanced analytics'
      ],
      impact: 'Transformed manual society operations into a streamlined digital ecosystem, significantly increasing operational efficiency and resident satisfaction.',
      icon: Building2
    },
    {
      title: 'Santa\'s Treasure',
      subtitle: 'Intelligent Logistics Management System',
      description: 'Advanced supply chain optimization platform leveraging AI-driven route planning and real-time tracking to revolutionize last-mile delivery operations and logistics management.',
      linkedinEmbed: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7287851335406735360?collapsed=1',
      tech: ['FastAPI', 'Python', 'JavaScript', 'PostgreSQL', 'Google Maps API', 'Docker'],
      github: 'https://github.com/suhas/santas-treasure',
      demo: '#',
      featured: true,
      metrics: [
        { icon: Zap, value: '25%', label: 'Efficiency Gain', color: 'yellow' },
        { icon: Target, value: '99.9%', label: 'Delivery Accuracy', color: 'red' },
        { icon: Clock, value: '30%', label: 'Time Saved', color: 'blue' },
        { icon: Award, value: '4.9/5', label: 'Customer Rating', color: 'purple' }
      ],
      highlights: [
        'Dynamic route optimization reducing fuel costs by 18%',
        'OTP-based secure delivery system eliminating package theft',
        'Real-time analytics dashboard for performance monitoring',
        'Predictive ETA system with 95% accuracy using ML'
      ],
      impact: 'Optimized logistics operations resulting in significant cost savings and enhanced customer experience through reliable, trackable deliveries.',
      icon: Truck
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
    hidden: { y: 40, opacity: 0 },
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

  const getMetricColor = (color) => {
    const colors = {
      emerald: 'from-emerald-500 to-green-500',
      blue: 'from-blue-500 to-cyan-500',
      purple: 'from-purple-500 to-pink-500',
      green: 'from-green-500 to-emerald-500',
      yellow: 'from-yellow-500 to-orange-500',
      red: 'from-red-500 to-pink-500'
    };
    return colors[color] || 'from-gray-500 to-gray-600';
  };

  return (
    <section id="projects" ref={ref} className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900/20"></div>
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
              Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Enterprise-grade solutions delivering measurable business impact through innovative technology and modern architecture
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-16">
            {projects.map((project, index) => {
              const ProjectIcon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-3xl transition-all duration-500">
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Project Content */}
                      <div className="p-8 lg:p-12">
                        {/* Project Header */}
                        <div className="mb-6">
                          <div className="flex items-center gap-3 mb-4">
                            {project.featured && (
                              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                                🏆 FEATURED
                              </div>
                            )}
                            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                              <ProjectIcon className="w-5 h-5" />
                              <span className="text-sm font-semibold">{project.subtitle}</span>
                            </div>
                          </div>
                          <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-2">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-6">
                            {project.description}
                          </p>
                        </div>

                        

                        {/* Technical Highlights */}
                        <div className="mb-8">
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <Zap className="w-5 h-5 text-yellow-500" />
                            Key Features & Achievements
                          </h4>
                          <ul className="space-y-3">
                            {project.highlights.map((highlight, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                              >
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm">{highlight}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Business Impact */}
                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 mb-8">
                          <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                            <Target className="w-5 h-5 text-green-500" />
                            Business Impact
                          </h4>
                          <p className="text-gray-700 dark:text-gray-300 text-sm">{project.impact}</p>
                        </div>

                        {/* Tech Stack */}
                        <div className="mb-8">
                          <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                            Technology Stack
                          </h4>
                          <div className="flex flex-wrap gap-3">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="px-4 py-2 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-700 dark:to-gray-600 text-white rounded-full text-sm font-medium shadow-lg"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4">
                          <motion.a
                            whileHover={{ 
                              scale: 1.05,
                              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg flex-1 justify-center text-sm"
                          >
                            <Github className="w-4 h-4" />
                            Source Code
                          </motion.a>
                          <motion.a
                            whileHover={{ 
                              scale: 1.05,
                              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg flex-1 justify-center text-sm"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </motion.a>
                        </div>
                      </div>

                      {/* LinkedIn Embed */}
                      <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-700 dark:to-blue-900/20 flex items-center justify-center p-8 border-l border-gray-200 dark:border-gray-700">
                        <div className="w-full max-w-md">
                          <div className="text-center mb-6">
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                              Project Showcase
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              LinkedIn Project Demonstration
                            </p>
                          </div>
                          
                          {/* Embedded LinkedIn Post */}
                          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800">
                            <iframe
                              src={project.linkedinEmbed}
                              height="542"
                              width="100%"
                              frameBorder="0"
                              allowFullScreen
                              title={`LinkedIn Post - ${project.title}`}
                              className="rounded-lg"
                              loading="lazy"
                            />
                          </div>
                          
                          {/* Embed Info */}
                          <div className="mt-4 text-center">
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              Interactive project demonstration embedded from LinkedIn
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-20">
            <div className="bg-gradient-to-r from-gray-900 to-blue-900 dark:from-blue-900 dark:to-purple-900 rounded-3xl p-12 text-white shadow-2xl">
              <h3 className="text-3xl font-black mb-4">Ready to Build Something Amazing?</h3>
              <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
                Let's collaborate to transform your ideas into high-performance, scalable digital solutions that drive real business value.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="inline-flex items-center gap-3 bg-white text-gray-900 px-10 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                <Zap className="w-5 h-5" />
                Start a Project
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;





// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'framer-motion';
// import { useRef } from 'react';
// import { Github, ExternalLink, Users, TrendingUp, Shield, Bell, Zap, Target, Clock, Award } from 'lucide-react';

// const Projects = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, threshold: 0.3 });

//   const projects = [
//     {
//       title: 'Society-360',
//       subtitle: 'Enterprise Society Management Platform',
//       description: 'Revolutionizing community management through complete digital transformation, automating complex administrative workflows and enhancing resident engagement.',
//       image: '/images/society-360.jpg',
//       tech: ['Django', 'Python', 'React', 'MySQL', 'Razorpay API', 'Redis'],
//       github: 'https://github.com/Suhas2002G/Society-360',
//       demo: 'https://society-360.demo.com',
//       featured: true,
//       metrics: [
//         { icon: TrendingUp, value: '80%', label: 'Task Automation', color: 'emerald' },
//         { icon: Users, value: '100+', label: 'Active Users', color: 'blue' },
//         { icon: Clock, value: '40%', label: 'Faster Response', color: 'purple' },
//         { icon: Shield, value: '100%', label: 'Secure Payments', color: 'green' }
//       ],
//       highlights: [
//         'Architected scalable microservices architecture handling 10,000+ monthly transactions',
//         'Implemented real-time notification system reducing communication delays by 60%',
//         'Designed secure payment gateway integration processing ₹50L+ in maintenance fees',
//         'Built comprehensive admin dashboard with advanced analytics and reporting'
//       ],
//       impact: 'Transformed manual society operations into a streamlined digital ecosystem, increasing operational efficiency and resident satisfaction.'
//     },
//     {
//       title: 'Santa\'s Treasure',
//       subtitle: 'Intelligent Logistics Management System',
//       description: 'Advanced supply chain optimization platform leveraging AI-driven route planning and real-time tracking to revolutionize last-mile delivery operations.',
//       image: '/images/logistics-system.jpg',
//       tech: ['FastAPI', 'Python', 'JavaScript', 'PostgreSQL', 'Google Maps API', 'Docker'],
//       github: 'https://github.com/suhas/santas-treasure',
//       demo: 'https://logistics.demo.com',
//       featured: true,
//       metrics: [
//         { icon: Zap, value: '25%', label: 'Efficiency Gain', color: 'yellow' },
//         { icon: Target, value: '99.9%', label: 'Delivery Accuracy', color: 'red' },
//         { icon: Clock, value: '30%', label: 'Time Saved', color: 'blue' },
//         { icon: Award, value: '4.9/5', label: 'Customer Rating', color: 'purple' }
//       ],
//       highlights: [
//         'Engineered dynamic route optimization algorithm reducing fuel costs by 18%',
//         'Implemented OTP-based secure delivery system eliminating package theft',
//         'Built real-time analytics dashboard for performance monitoring and insights',
//         'Developed predictive ETA system with 95% accuracy using machine learning'
//       ],
//       impact: 'Optimized logistics operations resulting in significant cost savings and enhanced customer experience through reliable, trackable deliveries.'
//     }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         delayChildren: 0.3,
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 40, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 12
//       }
//     }
//   };

//   const getMetricColor = (color) => {
//     const colors = {
//       emerald: 'from-emerald-500 to-green-500',
//       blue: 'from-blue-500 to-cyan-500',
//       purple: 'from-purple-500 to-pink-500',
//       green: 'from-green-500 to-emerald-500',
//       yellow: 'from-yellow-500 to-orange-500',
//       red: 'from-red-500 to-pink-500'
//     };
//     return colors[color] || 'from-gray-500 to-gray-600';
//   };

//   return (
//     <section id="projects" ref={ref} className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900/20"></div>
//       <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

//       <div className="container mx-auto px-6 relative z-10">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//         >
//           {/* Section Header */}
//           <motion.div variants={itemVariants} className="text-center mb-20">
//             <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
//               Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               Enterprise-grade solutions delivering measurable business impact through innovative technology
//             </p>
//           </motion.div>

//           {/* Projects Grid */}
//           <div className="space-y-16">
//             {projects.map((project, index) => (
//               <motion.div
//                 key={project.title}
//                 variants={itemVariants}
//                 className="group"
//               >
//                 <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-3xl transition-all duration-500">
//                   <div className="grid lg:grid-cols-2 gap-0">
//                     {/* Project Content */}
//                     <div className="p-8 lg:p-12">
//                       {/* Project Header */}
//                       <div className="mb-6">
//                         <div className="flex items-center gap-3 mb-4">
//                           {project.featured && (
//                             <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
//                               🏆 FEATURED
//                             </div>
//                           )}
//                         </div>
//                         <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-2">
//                           {project.title}
//                         </h3>
//                         <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-4">
//                           {project.subtitle}
//                         </p>
//                         <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
//                           {project.description}
//                         </p>
//                       </div>

//                       {/* Impact Metrics */}
//                       <div className="grid grid-cols-2 gap-4 mb-8">
//                         {project.metrics.map((metric, idx) => {
//                           const IconComponent = metric.icon;
//                           return (
//                             <motion.div
//                               key={metric.label}
//                               whileHover={{ scale: 1.05 }}
//                               className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-4 text-center border border-gray-200 dark:border-gray-600"
//                             >
//                               <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${getMetricColor(metric.color)} text-white mb-2`}>
//                                 <IconComponent className="w-6 h-6" />
//                               </div>
//                               <div className="text-2xl font-black text-gray-900 dark:text-white">{metric.value}</div>
//                               <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{metric.label}</div>
//                             </motion.div>
//                           );
//                         })}
//                       </div>

//                       {/* Technical Highlights */}
//                       <div className="mb-8">
//                         <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
//                           <Zap className="w-5 h-5 text-yellow-500" />
//                           Technical Achievements
//                         </h4>
//                         <ul className="space-y-3">
//                           {project.highlights.map((highlight, idx) => (
//                             <motion.li
//                               key={idx}
//                               initial={{ opacity: 0, x: -20 }}
//                               animate={{ opacity: 1, x: 0 }}
//                               transition={{ delay: idx * 0.1 }}
//                               className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
//                             >
//                               <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
//                               <span>{highlight}</span>
//                             </motion.li>
//                           ))}
//                         </ul>
//                       </div>

//                       {/* Business Impact */}
//                       <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 mb-8">
//                         <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
//                           <Target className="w-5 h-5 text-green-500" />
//                           Business Impact
//                         </h4>
//                         <p className="text-gray-700 dark:text-gray-300">{project.impact}</p>
//                       </div>

//                       {/* Tech Stack */}
//                       <div className="mb-8">
//                         <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
//                           Tech Stack
//                         </h4>
//                         <div className="flex flex-wrap gap-3">
//                           {project.tech.map((tech) => (
//                             <span
//                               key={tech}
//                               className="px-4 py-2 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-700 dark:to-gray-600 text-white rounded-full text-sm font-medium shadow-lg"
//                             >
//                               {tech}
//                             </span>
//                           ))}
//                         </div>
//                       </div>

//                       {/* Action Buttons */}
//                       <div className="flex gap-4">
//                         <motion.a
//                           whileHover={{ 
//                             scale: 1.05,
//                             boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)"
//                           }}
//                           whileTap={{ scale: 0.95 }}
//                           href={project.github}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg flex-1 justify-center"
//                         >
//                           <Github className="w-5 h-5" />
//                           Source Code
//                         </motion.a>
//                         <motion.a
//                           whileHover={{ 
//                             scale: 1.05,
//                             boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
//                           }}
//                           whileTap={{ scale: 0.95 }}
//                           href={project.demo}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg flex-1 justify-center"
//                         >
//                           <ExternalLink className="w-5 h-5" />
//                           Live Demo
//                         </motion.a>
//                       </div>
//                     </div>

//                     {/* Project Visual */}
//                     <div className="relative bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 dark:from-blue-600 dark:via-purple-700 dark:to-pink-600 flex items-center justify-center p-12">
//                       <div className="absolute inset-0 bg-black/10"></div>
//                       <div className="relative text-center text-white">
//                         <div className="text-6xl mb-4">🚀</div>
//                         <h4 className="text-2xl font-black mb-2">Enterprise Solution</h4>
//                         <p className="text-blue-100 text-lg">Scalable • Secure • High-Performance</p>
                        
//                         {/* Floating Tech Icons */}
//                         <div className="absolute top-6 left-6 w-12 h-12 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center">
//                           <span className="text-xs font-bold">API</span>
//                         </div>
//                         <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center">
//                           <span className="text-xs font-bold">DB</span>
//                         </div>
//                         <div className="absolute bottom-6 left-6 w-12 h-12 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center">
//                           <span className="text-xs font-bold">UI</span>
//                         </div>
//                         <div className="absolute bottom-6 right-6 w-12 h-12 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center">
//                           <span className="text-xs font-bold">CLOUD</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Call to Action */}
//           <motion.div variants={itemVariants} className="text-center mt-20">
//             <div className="bg-gradient-to-r from-gray-900 to-blue-900 dark:from-blue-900 dark:to-purple-900 rounded-3xl p-12 text-white shadow-2xl">
//               <h3 className="text-3xl font-black mb-4">Ready to Build Something Amazing?</h3>
//               <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
//                 Let's collaborate to transform your ideas into high-performance, scalable digital solutions that drive real business value.
//               </p>
//               <motion.a
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 href="#contact"
//                 className="inline-flex items-center gap-3 bg-white text-gray-900 px-10 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
//               >
//                 <Zap className="w-5 h-5" />
//                 Start a Project
//               </motion.a>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Projects;