import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "kushangtanawala@gmail.com",
      href: "mailto:kushangtanawala@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 90239 18382",
      href: "tel:+919023918382"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "kushang2410",
      href: "https://github.com/kushang2410"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Surat, Gujarat",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-12">
            <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Contact Me</h2>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg shadow-md bg-gray-50 dark:bg-gray-700 dark:text-white"
              >
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.label === "GitHub" ? "_blank" : undefined}
                    rel={info.label === "GitHub" ? "noopener noreferrer" : undefined}
                    className="flex items-center space-x-4 text-gray-600 dark:text-white hover:text-blue-600 transition-colors"
                  >
                    <div className="text-blue-600 dark:text-blue-400">{info.icon}</div>
                    <div>
                      <h3 className="font-semibold">{info.label}</h3>
                      <p>{info.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center space-x-4 text-gray-600 dark:text-white">
                    <div className="text-blue-600 dark:text-blue-400">{info.icon}</div>
                    <div>
                      <h3 className="font-semibold">{info.label}</h3>
                      <p>{info.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;