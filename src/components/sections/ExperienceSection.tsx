import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'MERN Stack Development Intern',
      company: 'Codec Technologies.',
      location: 'Remote',
      period: 'May 2025- June 2025',
      type: 'Internship',
      description: [
        'Worked on MERN stack applications (MongoDB, Express.js, React.js, Node.js).',
        'Assisted in developing RESTful APIs for backend communication.',
        'Implemented React.js components with responsive UI using Tailwind CSS/Material UI.',
        'Contributed to frontend-backend integration and tested API endpoints.',
        'Participated in bug fixing, code reviews, and optimization of existing features.',
        'Learned and applied state management, authentication (JWT), and CRUD operations.'
      ],
      icon: '🚀',
      color: 'from-neon-blue to-neon-purple'
    },
    {
      title: 'Machine Learning Intern',
      company: 'iNeuron.ai',
      location: 'Remote',
      period: 'September 2024 -October 2024',
      type: 'Internship',
      description: [
        'Developed and optimized a Fraud Transaction Detection system leveraging machine learning algorithms.',
        'Worked on data preprocessing, feature engineering, and model training for accurate anomaly detection.',
        'Assisted in product development and Proof-of-Concepts (PoCs) to validate model performance in real-world scenarios.',
        'Gained hands-on experience with AI workflows, performance evaluation, and collaborative development under iNeuron.'
      ],
      icon: '💻',
      color: 'from-neon-purple to-neon-pink'
    },
    {
      title: 'AI & Data Science Intern',
      company: 'CodingJr',
      location: 'Remote',
      period: 'June 2024- August 2024',
      type: 'Internship',
      description: [
        'Contributed as an AI & Data Science Intern focusing on teaching, mentoring, and applied ML tasks.',
        'Assisted in developing and delivering AI/ML learning modules for students.',
        'Gained hands-on exposure to real-world AI concepts, data handling, and model building.',
        'Enhanced communication and teamwork skills through remote collaboration and mentorship sessions.'
      ],
      icon: '🎓',
      color: 'from-neon-green to-neon-blue'
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 via-transparent to-neon-green/5"></div>
      <div className="absolute top-1/3 right-20 w-80 h-80 bg-neon-purple/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work{' '}
            <span className="bg-gradient-cyber bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-cyber rounded-full mx-auto mb-8"
          />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key accomplishments in software development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-cyber opacity-30 hidden lg:block"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden lg:block">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center text-2xl shadow-lg`}
                  >
                    {exp.icon}
                  </motion.div>
                </div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`cyber-card flex-1 max-w-lg ${
                    index % 2 === 0 ? 'lg:mr-auto lg:ml-8' : 'lg:ml-auto lg:mr-8'
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        <span className={`px-2 py-1 text-xs rounded-full bg-gradient-to-r ${exp.color} text-white`}>
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-primary font-medium mb-1">{exp.company}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${exp.color} lg:hidden`}>
                      <span className="text-xl">{exp.icon}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + idx * 0.05, duration: 0.4 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="cyber-card max-w-2xl mx-auto">
            <Briefcase className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Want to work together?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can create something amazing together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(var(--neon-blue) / 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="btn-cyber-primary"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;