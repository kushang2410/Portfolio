import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Phone, MapPin, Download } from 'lucide-react';

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?id=1Z3n3EnGMkS7Vrx7uT9pJzMWb2E68H5oF&export=download';
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-4 text-gray-800 dark:text-white">KUSHANG TANAWALA</h1>
          <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-8">Full Stack Developer</h2>

          <div className="sm:flex xsm:flex justify-center space-x-6 mb-8">
            <a href="mailto:kushangtanawala@gmail.com" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Mail className="w-5 h-5 mr-2 my-4" />
              kushangtanawala@gmail.com
            </a>
            <a href="tel:+919023918382" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Phone className="w-5 h-5 mr-2" />
              +91 90239 18382
            </a>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/kushang2410" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
            <span className="flex items-center text-gray-600 dark:text-gray-300">
              <MapPin className="w-5 h-5 mr-2" />
              Surat, Gujarat
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadResume}
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium flex items-center mx-auto transition-colors"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
