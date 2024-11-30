import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {

  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Vidhyadeep Institute of Computer And Information Technology",
      year: "Expected - 2025-26",
      current: true
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Jeevan-Bharti Kumar bhavan",
      location: "Gandhi Smruti Bhavan, Timaliawad, Nanpura, Surat, Gujarat",
      year: "2023-2024"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-12">
            <GraduationCap className="w-8 h-8 text-blue-600 mr-3 " />
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Education</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md bg-gray-50 dark:bg-gray-700 dark:text-white"
              >
                <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                <p className="text-blue-600 mb-1 dark:text-white">{edu.institution}</p>
                {edu.location && <p className="text-gray-600 mb-2 dark:text-white">{edu.location}</p>}
                <p className="text-gray-500 dark:text-white">{edu.year}</p>
                {edu.current && (
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded mt-2">
                    Currently Pursuing
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;