import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaLightbulb, FaUsers, FaRocket } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: <FaCode className="text-3xl text-primary-600" />,
      title: "Clean Code",
      description: "Writing maintainable, readable, and efficient code that stands the test of time."
    },
    {
      icon: <FaLightbulb className="text-3xl text-primary-600" />,
      title: "Innovation",
      description: "Always exploring new technologies and finding creative solutions to complex problems."
    },
    {
      icon: <FaUsers className="text-3xl text-primary-600" />,
      title: "Collaboration",
      description: "Working effectively in teams and communicating clearly with stakeholders."
    },
    {
      icon: <FaRocket className="text-3xl text-primary-600" />,
      title: "Growth",
      description: "Continuously learning and improving skills to deliver better solutions."
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Get to know me better and understand what drives my passion for software development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-secondary-800 mb-6">
              Junior Software Developer
            </h3>
            
            <div className="space-y-4 text-secondary-600 leading-relaxed">
              <p>
                I'm a passionate Junior Software Developer with a strong foundation in web development 
                technologies. My journey in software development began with a curiosity to understand 
                how things work on the web, and it has evolved into a deep passion for creating 
                meaningful digital experiences.
              </p>
              
              <p>
                With expertise in PHP, Laravel, React, JavaScript, and modern web technologies, 
                I specialize in building robust, scalable web applications. I believe in writing 
                clean, maintainable code and following best practices to ensure the longevity and 
                success of every project I work on.
              </p>
              
              <p>
                As a fresh graduate, I bring enthusiasm, adaptability, and a strong desire to learn 
                and grow. I'm always eager to take on new challenges and contribute to innovative 
                projects that make a difference.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <div className="text-2xl font-bold text-primary-600 mb-1">1+</div>
                <div className="text-sm text-secondary-600">Years Learning</div>
              </div>
              <div className="text-center p-4 bg-accent-50 rounded-lg">
                <div className="text-2xl font-bold text-accent-600 mb-1">5+</div>
                <div className="text-sm text-secondary-600">Projects Completed</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Profile Image & Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Profile Image Placeholder */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary-400 to-accent-400 rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-2">👨‍💻</div>
                    <div className="text-secondary-600 font-medium">Junior Software Developer</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-500 rounded-full flex items-center justify-center">
                <FaCode className="text-white text-2xl" />
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center p-4 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors duration-300"
                >
                  <div className="flex justify-center mb-3">
                    {value.icon}
                  </div>
                  <h4 className="font-semibold text-secondary-800 mb-2">{value.title}</h4>
                  <p className="text-sm text-secondary-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 