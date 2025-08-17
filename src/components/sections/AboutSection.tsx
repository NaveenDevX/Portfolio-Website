import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Award, Code2 } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Code2, label: 'Years of Experience', value: 'Fresher' },
    { icon: Award, label: 'Projects Completed', value: '5+' },
    
  ];

  const education = [
    {
      degree: 'Bachelor of Technology',
      College: 'St. Josephs College of Engineering',
      year: '2022-2026',
      description: 'Specialized in AI and Data Science',
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 via-transparent to-neon-green/5"></div>
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-neon-green/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <motion.div
                whileHover={{ rotateY: 15, rotateX: 15 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="relative w-80 h-80 mx-auto lg:mx-0"
              >
                <div className="absolute inset-0 bg-gradient-cyber rounded-2xl blur-xl opacity-30"></div>
                <div className="relative w-full h-full bg-cyber-surface rounded-2xl border border-border/50 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="cyber-card text-center"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Section Header */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                About{' '}
                <span className="bg-gradient-cyber bg-clip-text text-transparent">
                  Me
                </span>
              </motion.h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100px' }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-cyber rounded-full mb-8"
              />
            </div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg text-muted-foreground"
            >
              <p>
                I’m Naveen G G, a passionate AI & Data Science student with hands-on experience in machine learning, web development, and cloud technologies.
                 I enjoy building data-driven solutions and scalable applications that create real-world impact.
              </p>
              <p>
                I’ve worked on projects such as AI-powered accessibility tools and intelligent systems, applying my skills to solve meaningful challenges.
                Beyond academics, I’ve actively participated in hackathons and open-source programs, collaborating with teams to bring innovative ideas to life.
              </p>
              <p>
                When I’m not coding, I enjoy exploring football,
                 learning new tech stacks, and contributing to open-source communities.
              </p>
            </motion.div>

            {/* Education */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">Education</h3>
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="border-l-2 border-primary/30 pl-6 relative"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <h4 className="text-xl font-semibold text-foreground">{edu.degree}</h4>
                  <p className="text-primary font-medium">{edu.school}</p>
                  <p className="text-sm text-muted-foreground mb-2">{edu.year}</p>
                  <p className="text-muted-foreground">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;