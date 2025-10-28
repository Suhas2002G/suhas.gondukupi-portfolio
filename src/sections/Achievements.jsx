// // src/sections/Achievements.jsx
// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'framer-motion';
// import { useRef } from 'react';
// import { Trophy, Zap, Award, Calendar, ExternalLink, Star } from 'lucide-react';

// const Achievements = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, threshold: 0.3 });

//   const achievements = [
//     {
//       title: '🏆 Champion - Jingle Byte Coding Competition 2025',
//       subtitle: 'Top 1 among 78 Elite Developers',
//       period: 'January 2025',
//       description: 'Dominating performance in competitive programming arena, solving complex algorithmic challenges under time constraints. Demonstrated exceptional problem-solving skills and technical expertise.',
//       highlights: [
//         'Secured 1st position among 78 highly competitive developers',
//         'Solved 8/8 complex algorithmic problems with optimal solutions',
//         'Achieved perfect score in system design and optimization rounds'
//       ],
//       image: '/achievements/winner-jingle-byte.png', // Add your trophy image
//       linkedin: 'https://www.linkedin.com/posts/suhas8838_jinglebytewinner-fullstackdevelopment-django-activity-7292205973933318144-rO62?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEpLqwgBq1x05FspUi0UHlcdPrvOV2HDdV4',
//       icon: Trophy,
//       color: 'yellow'
//     },
//     {
//       title: '🥇 1st Prize - Thunder Bytes Monsoon Hackathon',
//       subtitle: 'Innovation Excellence Award',
//       period: 'August 2024',
//       description: 'Led a cross-functional team to develop an AI-powered logistics optimization platform, showcasing cutting-edge technical skills and innovative problem-solving approach.',
//       highlights: [
//         'Developed real-time route optimization algorithm reducing delivery time by 25%',
//         'Built predictive analytics dashboard with 95% accuracy in ETA predictions',
//         'Implemented secure OTP-based delivery verification system'
//       ],
//       image: '/achievements/thunder-byte.png', // Add your trophy image
//       linkedin: 'https://www.linkedin.com/posts/suhas8838_hackathonwinner-rainyshoppy-fullstackdevelopment-activity-7246465805784109056-WmM5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEpLqwgBq1x05FspUi0UHlcdPrvOV2HDdV4',
//       icon: Zap,
//       color: 'purple'
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
//     hidden: { y: 30, opacity: 0 },
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

//   const getGradient = (color) => {
//     const gradients = {
//       yellow: 'from-yellow-500 to-orange-500',
//       purple: 'from-purple-500 to-pink-500',
//       blue: 'from-blue-500 to-cyan-500'
//     };
//     return gradients[color] || 'from-gray-500 to-gray-600';
//   };

//   return (
//     <section id="achievements" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
//       {/* Background Elements */}
//       {/* <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-yellow-50 to-red-100 dark:from-gray-900 dark:via-orange-900/20 dark:to-red-900/20"></div>
//       <div className="absolute top-10 left-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div> */}

//       <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20"></div>
//       <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

//       <div className="container mx-auto px-6 relative z-10">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className="max-w-6xl mx-auto"
//         >
//           {/* Section Header */}
//           <motion.div variants={itemVariants} className="text-center mb-16">
//             <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
//               Awards & Achievements
//               {/* <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">Achievements</span> */}
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//               Recognitions and competitive accomplishments showcasing technical excellence
//             </p>
//           </motion.div>

//           {/* Achievements Grid */}
//           <div className="grid lg:grid-cols-2 gap-8">
//             {achievements.map((achievement, index) => {
//               const IconComponent = achievement.icon;
//               return (
//                 <motion.div
//                   key={`${achievement.title}-${index}`}
//                   variants={itemVariants}
//                   whileHover={{ y: -8, scale: 1.02 }}
//                   className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 hover:shadow-3xl transition-all duration-500 overflow-hidden group"
//                 >
//                   {/* Achievement Image */}
//                   <div className="relative h-68 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 overflow-hidden">
//                     <img 
//                       src={achievement.image}
//                       alt={achievement.title}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                       onError={(e) => {
//                         e.target.style.display = 'none';
//                         // Show gradient background if image fails to load
//                         e.target.parentElement.className = `relative h-48 bg-gradient-to-r ${getGradient(achievement.color)} overflow-hidden flex items-center justify-center`;
//                       }}
//                     />
//                     {/* Fallback gradient background */}
//                     {/* <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 dark:from-yellow-600/30 dark:to-orange-600/30"></div> */}
                    
//                     {/* Achievement Badge */}
//                     <div className={`absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r ${getGradient(achievement.color)} rounded-full flex items-center justify-center shadow-2xl`}>
//                       <IconComponent className="w-10 h-10 text-white" />
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="p-8">
//                     {/* Header */}
//                     <div className="mb-4">
//                       <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2 leading-tight">
//                         {achievement.title}
//                       </h3>
//                       <p className="text-lg text-gray-600 dark:text-gray-400 font-medium mb-3">
//                         {achievement.subtitle}
//                       </p>
//                       <div className="flex items-center gap-2">
//                         <Calendar className="w-4 h-4 text-gray-400" />
//                         <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
//                           {achievement.period}
//                         </span>
//                       </div>
//                     </div>

//                     {/* Description */}
//                     <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
//                       {achievement.description}
//                     </p>

//                     {/* Highlights */}
//                     <div className="space-y-3 mb-6">
//                       <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
//                         <Star className="w-5 h-5 text-yellow-500" />
//                         Key Highlights
//                       </h4>
//                       <ul className="space-y-2">
//                         {achievement.highlights.map((highlight, idx) => (
//                           <motion.li
//                             key={idx}
//                             initial={{ opacity: 0, x: -20 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ delay: idx * 0.1 }}
//                             className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
//                           >
//                             <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
//                             <span className="text-sm leading-relaxed">{highlight}</span>
//                           </motion.li>
//                         ))}
//                       </ul>
//                     </div>

//                     {/* LinkedIn Link */}
//                     {achievement.linkedin && (
//                       <motion.a
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         href={achievement.linkedin}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg w-full justify-center"
//                       >
//                         <ExternalLink size={16} />
//                         View Achievement Post
//                       </motion.a>
//                     )}
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>

       
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Achievements;






// src/sections/Achievements.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Zap, Award, Calendar, ExternalLink, Star, MapPin, Gift } from 'lucide-react';

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const achievements = [
    {
      title: 'Winner – Jingle Byte Coding Competition',
      subtitle: 'Issued by Itvedant Education Pvt Ltd',
      period: 'January 2025',
      description: 'Developed a web application that simulates Santa\'s gift delivery logistics. The system optimizes delivery routes using Google Maps API, integrates Razorpay for secure payments, and ensures OTP-based delivery verification.',
      technologies: ['Python', 'Django', 'SQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Google Maps API', 'Razorpay'],
      features: [
        'Real-time admin tracking and order management',
        'Automated report generation using ReportLab',
        'Secure OTP-based delivery verification system',
        'Route optimization for efficient gift delivery'
      ],
      image: '/achievements/winner-jingle-byte.png',
      linkedin: 'https://www.linkedin.com/posts/suhas8838_jinglebytewinner-fullstackdevelopment-django-activity-7292205973933318144-rO62?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEpLqwgBq1x05FspUi0UHlcdPrvOV2HDdV4',
      icon: Trophy,
      color: 'yellow'
    },
    {
      title: '1st Prize Winner – Thunder Bytes Monsoon Hackathon 2024',
      subtitle: 'Issued by Itvedant Education Pvt Ltd',
      period: 'September 2024',
      description: 'Developed RainyShoppy, an e-commerce platform for monsoon gear (umbrellas, raincoats), featuring user authentication, product listings, shopping cart functionality, and secure payment processing.',
      technologies: ['Python', 'Django', 'SQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      features: [
        'Complete user authentication system',
        'Product catalog with shopping cart functionality',
        'Secure payment processing integration',
        'Responsive design for mobile and desktop'
      ],
      image: '/achievements/thunder-byte.png',
      linkedin: 'https://www.linkedin.com/posts/suhas8838_hackathonwinner-rainyshoppy-fullstackdevelopment-activity-7246465805784109056-WmM5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEpLqwgBq1x05FspUi0UHlcdPrvOV2HDdV4',
      icon: Zap,
      color: 'purple'
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

  const getGradient = (color) => {
    const gradients = {
      yellow: 'from-yellow-500 to-orange-500',
      purple: 'from-purple-500 to-pink-500',
      blue: 'from-blue-500 to-cyan-500'
    };
    return gradients[color] || 'from-gray-500 to-gray-600';
  };

  return (
    <section id="achievements" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

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
              Honors & Awards
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Recognized for technical excellence and innovative project development in competitive environments
            </p>
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div
                  key={`${achievement.title}-${index}`}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 hover:shadow-3xl transition-all duration-500 overflow-hidden group"
                >
                  {/* Achievement Image */}
                  <div className="relative h-64 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 overflow-hidden">
                    <img 
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.className = `relative h-64 bg-gradient-to-r ${getGradient(achievement.color)} overflow-hidden flex items-center justify-center`;
                      }}
                    />
                    {/* Fallback Content */}
                    {/* <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 dark:from-yellow-600/20 dark:to-orange-600/20 flex items-center justify-center">
                      <div className="text-center text-white p-6">
                        <IconComponent className="w-16 h-16 mx-auto mb-4" />
                        <h3 className="text-xl font-bold">{achievement.title.split('–')[0].trim()}</h3>
                      </div>
                    </div> */}
                    
                    {/* Achievement Badge */}
                    <div className={`absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r ${getGradient(achievement.color)} rounded-full flex items-center justify-center shadow-2xl border-4 border-white dark:border-gray-900`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2 leading-tight">
                        {achievement.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <p className="text-gray-600 dark:text-gray-400 font-medium">
                          {achievement.subtitle}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                          {achievement.period}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                      {achievement.description}
                    </p>

                    {/* Technologies Used */}
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                        <Award className="w-5 h-5 text-blue-500" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {achievement.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                        <Star className="w-5 h-5 text-yellow-500" />
                        Project Features
                      </h4>
                      <ul className="space-y-2">
                        {achievement.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                          >
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm leading-relaxed">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* LinkedIn Link */}
                    {achievement.linkedin && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={achievement.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg w-full justify-center mt-4"
                      >
                        <ExternalLink size={16} />
                        View Achievement Post
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

   
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;