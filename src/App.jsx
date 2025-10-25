import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './hooks/useTheme';
import MaintenancePage from './components/MaintenancePage';
import Achievements from './sections/Achievements';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Achievements/>
          <Contact />
        </main>
        <Footer />


        {/* vercel monitoring component  */}
         <Analytics />
         <SpeedInsights />
      </div>


      {/* MaintenancePage  */}
      {/* <MaintenancePage/> */}
      
    </ThemeProvider>
  );
}

export default App;