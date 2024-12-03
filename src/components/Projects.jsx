import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Clostore",
      description: "Developed a e-commerce website with dynamic product listings, secure user authentication and many more.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
      link: "",
      features: [
        "Developed a feature-rich e-commerce website for clothing using React, providing a seamless shopping experience.",
        "Implemented dynamic product listing, category filtering, and a responsive design for optimal usability across devices.",
        "Integrated user authentication with JWT for secure login, signup, and profile management.",
        "Utilized MongoDB for efficient data storage and retrieval, ensuring fast and reliable performance.",
        "Designed a robust cart and checkout system with real-time updates."
      ]
    },
    {
      title: "E-Commerce Website",
      description: "A responsive e-commerce website built with modern web technologies.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      link: "https://kushang2410.github.io/E-Commerce/",
      features: [
        "Implemented responsive design using HTML and Bootstrap",
        "Utilized CSS for custom styling",
        "Integrated JavaScript for interactive elements"
      ]
    },
    {
      title: "Cyberfiction",
      description: "A animated On scroll webiste.",
      technologies: ["React", "CSS"],
      link: "https://cyberfiction-ten.vercel.app/",
      features: [
        "on scroll image's was changed and the text was scrolled",
        "image's position was fixed on the top"
      ]
    },
    {
      title: "Smile Detector",
      description: "web application that leverages facial recognition technology to detect and capture users' smiles.",
      technologies: ["React", "Boostrap"],
      link: "https://smile-detector-e66x.vercel.app/",
      features: [
        "Utilizes the face-api.js library to detect facial expressions, specifically focusing on smiles and angry expressions.",
        "Features engaging and flirty messages to make the user experience more enjoyable."
      ]
    },
    {
      title: "Coffee King",
      description: "Developed a static website for a coffee brand with a responsive and interactive design.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://kushang2410.github.io/CoffeeKing/",
      features: [
        "Incorporated an aesthetically pleasing layout to represent the brand effectively.",
        "Added basic interactive features to enhance user engagement.",
        "Ensured responsive design compatibility across various devices."
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-12">
            <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Projects</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md bg-gray-50 dark:bg-gray-700 dark:text-white"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{project.title}</h3>
                  {index === 0 ? (
                    <span className="text-gray-500 italic">Under Development</span>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 flex items-center"
                      style={{ width: '135px' }}
                    >
                      <ExternalLink className="w-5 h-5 mr-1" />
                      View Project
                    </a>
                  )}
                </div>
                <p className="text-gray-600 dark:text-white mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-gray-800 dark:text-white">Key Features:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 dark:text-white">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm dark:text-dark"
                    >
                      {tech}
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

export default Projects;
