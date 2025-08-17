import React from 'react';
import { motion } from 'framer-motion';

const FloatingSkillBadge = ({ text, index }: { text: string; index: number }) => {
  return (
    <motion.div
      className="absolute text-sm font-medium px-3 py-1 bg-primary/20 text-primary rounded-full border border-primary/30"
      style={{
        left: `${(index / 8) * 80 + 10}%`,
        top: `${Math.sin(index * 0.8) * 30 + 50}%`,
      }}
      animate={{
        y: [0, -15, 0],
        rotate: [0, 5, -5, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 3 + index * 0.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.2,
        boxShadow: "0 0 20px hsl(var(--neon-blue) / 0.5)",
      }}
    >
      {text}
    </motion.div>
  );
};

const SkillsSection = () => {
  // Floating badges in the visualization
  const technologies = [
    'Machine Learning', 'Deep Learning', 'NLP', 'Generative AI',
    'React', 'Node.js', 'Python', 'AWS'
  ];

  // Skill categories (AI First)
  const skillCategories = [
    {
      title: 'AI & Data Science',
      icon: '🤖',
      color: 'from-neon-cyan to-neon-green',
      skills: [
        { name: 'Machine Learning', level: 85 },
        { name: 'Deep Learning', level: 70 },
        { name: 'Natural Language Processing', level: 75 },
        { name: 'Generative AI', level: 65 },
        { name: 'Computer Vision', level: 70 },
        { name: 'Data Structures & Algorithms', level: 80 },
        { name: 'Statistics & Probability', level: 75 },
        { name: 'Model Deployment (Flask/FastAPI/Streamlit)', level: 70 }
      ]
    },
    {
      title: 'Frontend Development',
      icon: '🎨',
      color: 'from-neon-blue to-neon-purple',
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'TailwindCSS', level: 80 },
        { name: 'Framer Motion', level: 75 },
        { name: 'Three.js', level: 70 },
        { name: 'HTML/CSS/JavaScript', level: 90 },
        { name: 'Spring Boot', level: 70 }
      ]
    },
    {
      title: 'Backend & Database',
      icon: '⚙️',
      color: 'from-neon-purple to-neon-pink',
      skills: [
        { name: 'Java', level: 85 },
        { name: 'Python', level: 90 },
        { name: 'C', level: 70 },
        { name: 'SQL', level: 80 },
        { name: 'MySQL', level: 80 },
        { name: 'MongoDB', level: 65 }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: '☁️',
      color: 'from-neon-green to-neon-blue',
      skills: [
        { name: 'AWS Cloud', level: 65 },
        { name: 'Oracle Cloud', level: 70 },
        { name: 'Databricks', level: 75 },
        { name: 'Microsoft Fabric', level: 70 },
        { name: 'Git & GitHub', level: 90 },
        { name: 'CI/CD', level: 65 }
      ]
    },
    {
      title: 'Design & Tools',
      icon: '🛠️',
      color: 'from-neon-pink to-neon-purple',
      skills: [
        { name: 'Power BI', level: 75 },
        { name: 'Excel', level: 85 },
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 70 },
        { name: 'Photoshop', level: 65 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 via-transparent to-neon-blue/5"></div>
      <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-neon-green/10 rounded-full filter blur-3xl"></div>
      
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
            Technical{' '}
            <span className="bg-gradient-cyber bg-clip-text text-transparent">
              Skills
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
            A comprehensive overview of my technical expertise and proficiency levels.
          </p>
        </motion.div>

        {/* Interactive Skills Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative h-64 mb-16 rounded-2xl bg-cyber-surface border border-border/50 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-transparent to-neon-purple/10"></div>
          <div className="relative h-full flex items-center justify-center">
            <motion.div
              className="text-center"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <h3 className="text-2xl font-bold bg-gradient-cyber bg-clip-text text-transparent mb-2">
                Interactive Technologies
              </h3>
              <p className="text-muted-foreground">Hover the floating badges to explore</p>
            </motion.div>
            {technologies.map((tech, index) => (
              <FloatingSkillBadge key={tech} text={tech} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="cyber-card group hover:scale-105 transition-transform duration-300"
            >
              {/* Category Header */}
              <div className="text-center mb-6">
                <div className={`inline-block p-4 rounded-full bg-gradient-to-br ${category.color} mb-4`}>
                  <span className="text-3xl">{category.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05, 
                      duration: 0.4 
                    }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground">{skill.name}</span>
                      <span className="text-xs text-primary font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-cyber-elevated rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2, 
                          duration: 0.8 
                        }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color} relative`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Skills Icons */}
        <div className="relative mt-16 h-32">
          {['🤖', '⚛️', '🐍', '☁️', '📊', '🎨', '🔧', '🚀'].map((icon, index) => (
            <motion.div
              key={icon}
              className="absolute text-4xl opacity-20"
              style={{
                left: `${(index / 8) * 100}%`,
                top: `${Math.sin(index) * 50 + 50}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 3 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {icon}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
