import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaPhp, FaJs, FaHtml5, FaCss3Alt, 
  FaLaravel, FaReact, FaDatabase, 
  FaBootstrap, FaGithub, FaNpm 
} from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiJquery, SiJson } from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "PHP", icon: <FaPhp className="text-2xl" />, level: 85 },
        { name: "JavaScript", icon: <FaJs className="text-2xl" />, level: 80 },
        { name: "HTML", icon: <FaHtml5 className="text-2xl" />, level: 90 },
        { name: "CSS", icon: <FaCss3Alt className="text-2xl" />, level: 85 }
      ]
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        { name: "Laravel", icon: <FaLaravel className="text-2xl" />, level: 75 },
        { name: "React", icon: <FaReact className="text-2xl" />, level: 70 },
        { name: "jQuery", icon: <SiJquery className="text-2xl" />, level: 80 },
        { name: "Bootstrap", icon: <FaBootstrap className="text-2xl" />, level: 85 }
      ]
    },
    {
      category: "Databases & Data",
      skills: [
        { name: "SQL", icon: <FaDatabase className="text-2xl" />, level: 80 },
        { name: "MySQL", icon: <SiMysql className="text-2xl" />, level: 75 },
        { name: "JSON", icon: <SiJson className="text-2xl" />, level: 85 }
      ]
    },
    {
      category: "Other Technologies",
      skills: [
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-2xl" />, level: 80 },
        { name: "Git", icon: <FaGithub className="text-2xl" />, level: 75 },
        { name: "NPM", icon: <FaNpm className="text-2xl" />, level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-secondary-800 mb-6 text-center">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-primary-600">
                          {skill.icon}
                        </div>
                        <span className="font-medium text-secondary-800">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-primary-600">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-secondary-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) + 0.3 }}
                        className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold text-secondary-800 mb-8">
            Additional <span className="gradient-text">Capabilities</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "RESTful APIs", "AJAX", "Responsive Design", "Version Control",
              "Problem Solving", "Team Collaboration", "Agile Methodologies", "UI/UX Design"
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                className="skill-badge text-center py-3 px-4"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 