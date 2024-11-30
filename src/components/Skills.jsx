import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Front-End Development",
      skills: ["HTML5", "CSS3", "jQuery", "Bootstrap", "JavaScript", "React.js"]
    },
    {
      title: "Back-End Development",
      skills: ["Node.js", "Express.js"]
    },
    {
      title: "Databases",
      skills: ["MySQL (Basic)", "MongoDB"]
    },
    {
      title: "Programming Languages",
      skills: ["C Language", "JavaScript", "Python (Basic)"]
    },
    {
      title: "Data Structures",
      skills: ["DSA (Basic)"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Firebase", "Git", "GitHub", "Postman", "Vercel", "Vite", "Render"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-12">
            <Code className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg shadow-md bg-gray-50 dark:bg-gray-700 dark:text-white"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-white">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
