import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Palette, Smartphone } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'EEG Signal Processing for Neurological Disorder Detection',
      description: 'This project focuses on the analysis of Electroencephalography (EEG) signals to study brain activity patterns and derive meaningful insights for research, medical, or BCI (Brain–Computer Interface) applications. EEG measures electrical activity of the brain using multiple electrodes placed on the scalp, producing multi-channel time-series data.',
      image: '🧠',
      tech: ['Python', 'Numpy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Machine Learning(CNN, SVM, Random Forest)', 'Deep Learning(Chrononet, EDF)','Web App(Streamlit)'],
      category: 'Machine Learning',
      icon: Code,
      github: 'https://github.com/NaveenDevX/Epileptic-Seizure-Detection-in-EEG-Signals-Using-Machine-Learning-and-Deep-Learning-Techniques',
      demo: '#',
      color: 'from-neon-blue to-neon-purple'
    },
    {
      title: 'Predicting Prostate Cancer Risk Based on PSA and Clinical Factors',
      description: 'An advanced machine learning and attention-based deep learning project designed to predict prostate cancer risk using PSA levels and clinical factors. This project combines domain knowledge with state-of-the-art techniques to provide accurate predictions that can aid in early diagnosis and treatment.',
      image: '🏥',
      tech: ['Python', 'Numpy', 'Pandas(DataFrame)', 'Matplotlib', 'Scikit-learn (Logistic Regression, Random Forest, XGBoost)','TensorFlow', 'Jupyter Notebook'],
      category: 'Data Science',
      icon: Palette,
      github: 'https://github.com/NaveenDevX/Predicting-Prostate-Cancer-Risk-Based-on-PSA-and-Clinical-Factors-Using-Machine-Learning-',
      demo: '#',
      color: 'from-neon-purple to-neon-pink'
    },
    {
      title: 'Personal Finance Tracker',
      description: 'The Finance Tracker is a console-based Java program designed to help users record andmonitor their financial transactions using simple text-based commands.It allows users to log incomes and expenses, categorize them, view summaries, and store data ina relational database for persistence.',
      image: '🏦',
      tech: ['Java', 'MySQL', 'Git & Github'],
      category: 'Java(OOPs)',
      icon: Smartphone,
      github: 'https://github.com/NaveenDevX/finance-tracker-java',
      demo: '#',
      color: 'from-neon-green to-neon-blue'
    },
    {
      title: 'AI-Powered RAG Chatbot ',
      description: '"Developed an AI-powered Retrieval-Augmented Generation (RAG) Chatbot integrating LangChain, OpenAI, and ChromaDB for intelligent query handling. Built a FastAPI backend and an interactive Streamlit interface enabling real-time chat, document upload, and management with seamless stateful conversations.',
      image: '🤖',
      tech: ['Python', 'Langchain', 'OpenAI API', 'FastAPI', 'Streamlit', 'ChromaDB'],
      category: 'AI & NLP',
      icon: Code,
      github: 'https://github.com/NaveenDevX/FAISS_BASE_LANGCHAIN',
      demo: '#',
      color: 'from-neon-pink to-neon-purple'
    }
  ];

  const categories = ['All', 'Full Stack', 'UI/UX', 'Mobile', 'AI/ML', 'FinTech', 'Enterprise'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-purple/5"></div>
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-neon-purple/10 rounded-full filter blur-3xl"></div>
      
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
            Featured{' '}
            <span className="bg-gradient-cyber bg-clip-text text-transparent">
              Projects
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
            A showcase of my recent work, ranging from full-stack applications to AI-powered solutions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-glow-primary'
                  : 'bg-cyber-surface border border-border text-muted-foreground hover:text-primary hover:border-primary/50'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                rotateX: 5,
                rotateY: 5,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              className="group relative"
            >
              <div className="cyber-card h-full">
                {/* Project Header */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 rounded-lg blur-xl`}></div>
                  <div className="relative bg-cyber-elevated rounded-lg p-8 flex items-center justify-center">
                    <span className="text-6xl">{project.image}</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-cyber-elevated border border-border rounded text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyber-elevated border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:shadow-glow-primary transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;