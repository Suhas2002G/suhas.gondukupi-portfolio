// src/App.jsx
import React from 'react';
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

function App() {
  return (
    <ThemeProvider>
      {/* <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div> */}


      {/* MaintenancePage  */}
      <MaintenancePage/>
    </ThemeProvider>
  );
}

export default App;