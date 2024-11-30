import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6 text-blue-500" />,
      title: "Full Stack Development",
      description: "Experienced in both frontend and backend technologies"
    },
    {
      icon: <Briefcase className="w-6 h-6 text-blue-500" />,
      title: "Project Experience",
      description: "Worked on various web development projects"
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-blue-500" />,
      title: "Continuous Learning",
      description: "Currently pursuing BCA and enhancing React.js expertise"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center mb-12">
            <User className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">About Me</h2>
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-center mb-12">
            Aspiring Full Stack Developer with foundational knowledge and practical experience in front-end and back-end development. 
            Skilled in HTML5, CSS3, JavaScript, Node.js and MongoDB, and various modern frameworks. 
            Eager to leverage skills in web development to contribute to innovative projects and drive technological advancements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {item.icon}
                  <h3 className="text-xl font-semibold ml-3 text-gray-800 dark:text-white">{item.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;