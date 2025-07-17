import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaChevronDown, FaGraduationCap, FaLaptopCode, FaUsers, FaTrophy } from 'react-icons/fa';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeAccordion, setActiveAccordion] = useState(0);

  const experiences = [
    {
      title: "Education",
      icon: <FaGraduationCap className="text-2xl text-primary-600"/>,
      items: [
        {
          title: "Bachelor of Computer Application",
          institution: (
            <span className="flex items-center gap-2">
              <img
                src="https://pngfind.com/mpng/irjhxro_ignou-logo-png-transparent-png/"
                alt="IGNOU Logo"
                className="w-6 h-6"
              />
              Indira Gandhi National Open University
            </span>
          ),
          duration: "Start-July2023 - End-July2026",
          description: "pursuing with a Bachelor's degree in Computer Application with focus on web development and software engineering principles.",
          achievements: [
            "Best precticer in Web Development",
            "Member of Programming Club"
          ]
        },
        {
          title: "Web Development Learning Path",
          institution: "Online Platform",
          duration: "2023-to-Present",
          description: "Comprehensive certification covering modern web development technologies and best practices.",
          achievements: [
            "Full Stack Development",
            "Database Design",
            "API Development",
            "Project Management"
          ]
        }
      ]
    },
    {
      title: "Projects & Internships",
      icon: <FaLaptopCode className="text-2xl text-primary-600" />,
      items: [
        {
          title: "Freelance Web Developer",
          institution: "Self-Employed",
          duration: "2023-to-Present",
          description: "Working on various projects, building responsive websites and web applications.",
          achievements: [
            "Completed 10+ projects",
            "100% satisfaction rate",
            "Specialized in HTML, CSS, JavaScript, PHP,Laravel and React",
            "Managed project timelines and budgets"
          ]
        },
        {
          title: "Student Developer Intern",
          institution: "Tech Startup",
          duration: "2023-to-Present",
          description: "Internship focused on learning modern development practices and contributing to real projects.",
          achievements: [
            "Contributed to 2 production applications",
            "Learned agile development methodologies",
            "Collaborated with senior developers",
            "Improved code review skills"
          ]
        }
      ]
    },
    {
      title: "Skills Development",
      icon: <FaUsers className="text-2xl text-primary-600" />,
      items: [
        {
          title: "Online Learning & Courses",
          institution: "Various Platforms",
          duration: "2023-to-Present",
          description: "Continuous learning through online courses, tutorials, and hands-on projects.",
          achievements: [
            "Completed online courses",
            "Built 10+ personal projects",
            "Learned 8+ programming languages/frameworks",
            "Participated in coding challenges"
          ]
        },
        {
          title: "Open Source Contributions",
          institution: "GitHub Community",
          duration: "2023 - Present",
          description: "Contributing to open source projects to improve skills and give back to the community.",
          achievements: [
            "Contributed to 2+ open source projects",
            "Improved documentation",
            "Fixed bugs and added features",
            "Learned from experienced developers"
          ]
        }
      ]
    },
    {
      title: "Achievements & Certifications",
      icon: <FaTrophy className="text-2xl text-primary-600" />,
      items: [
        {
          title: "Technical Certifications",
          institution: "Various Organizations",
          duration: "2022 - 2024",
          description: "Earned multiple certifications to validate skills and knowledge in various technologies.",
          achievements: [
            "Laravel Certification",
            "React Developer Certification",
            "MySQL Database Certification",
            "Web Development Bootcamp Certificate"
          ]
        },
        {
          title: "Competitions & Hackathons",
          institution: "Coding Online",
          duration: "2022 - present",
          description: "Participated in various coding competitions and hackathons to improve problem-solving skills.",
          achievements: [
            "solved 50+ coding problems",
            "Top 10% in Online Coding Competition",
            "Best UI/UX Designing Learner",
            "Developed Innovative Solution"
          ]
        }
      ]
    }
  ];

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? -1 : index);
  };

  return (
    <section id="experience" className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-800 mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            My journey in software development, from education to hands-on projects
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="mb-6"
            >
              <button
                onClick={() => toggleAccordion(categoryIndex)}
                className="w-full bg-white rounded-lg shadow-lg p-6 text-left hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-secondary-800">
                      {category.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: activeAccordion === categoryIndex ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-primary-600"
                  >
                    <FaChevronDown />
                  </motion.div>
                </div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: activeAccordion === categoryIndex ? "auto" : 0,
                  opacity: activeAccordion === categoryIndex ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-b-lg p-6 space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView && activeAccordion === categoryIndex ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                      className="border-l-4 border-primary-500 pl-6"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h4 className="text-xl font-bold text-secondary-800">
                          {item.title}
                        </h4>
                        <div className="text-sm text-secondary-600 mt-1 md:mt-0">
                          {item.duration}
                        </div>
                      </div>
                      
                      <div className="text-primary-600 font-medium mb-2">
                        {item.institution}
                      </div>
                      
                      <p className="text-secondary-600 mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h5 className="font-semibold text-secondary-800">Key Achievements:</h5>
                        <ul className="list-disc list-inside space-y-1 text-secondary-600">
                          {item.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-secondary-800 mb-4">
              Ready to Start My Professional Journey
            </h3>
            <p className="text-secondary-600 mb-6">
              I'm excited to bring my skills, enthusiasm, and fresh perspective to your team. 
              Let's work together to create amazing solutions!
            </p>
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              Let's Connect
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 