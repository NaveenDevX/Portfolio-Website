import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ExternalLink, BookOpen, TrendingUp } from 'lucide-react';

const ArticlesSection = () => {
  const articles = [
    {
      title: 'Building Scalable React Applications with TypeScript',
      excerpt: 'Learn best practices for structuring large-scale React applications using TypeScript, including proper typing strategies and component architecture.',
      readTime: '8 min read',
      date: '2024-01-15',
      category: 'React',
      image: '⚛️',
      views: '2.1k',
      link: '#',
      featured: true
    },
    {
      title: 'Mastering CSS Grid: A Complete Guide',
      excerpt: 'Deep dive into CSS Grid layout system with practical examples and real-world use cases for modern web development.',
      readTime: '12 min read',
      date: '2024-01-08',
      category: 'CSS',
      image: '🎨',
      views: '1.8k',
      link: '#',
      featured: false
    },
    {
      title: 'Microservices Architecture with Node.js',
      excerpt: 'Implementing microservices architecture using Node.js, Docker, and Kubernetes for scalable backend systems.',
      readTime: '15 min read',
      date: '2024-01-01',
      category: 'Backend',
      image: '🔧',
      views: '3.2k',
      link: '#',
      featured: true
    },
    {
      title: 'Advanced Animation Techniques with Framer Motion',
      excerpt: 'Creating smooth, performant animations in React applications using Framer Motion library and best practices.',
      readTime: '10 min read',
      date: '2023-12-28',
      category: 'Animation',
      image: '🎭',
      views: '1.5k',
      link: '#',
      featured: false
    },
    {
      title: 'Optimizing Web Performance in 2024',
      excerpt: 'Latest techniques and tools for optimizing web application performance, including Core Web Vitals and modern optimization strategies.',
      readTime: '14 min read',
      date: '2023-12-20',
      category: 'Performance',
      image: '⚡',
      views: '2.7k',
      link: '#',
      featured: true
    },
    {
      title: 'Introduction to Three.js for Web Developers',
      excerpt: 'Getting started with 3D graphics on the web using Three.js library, from basic concepts to interactive experiences.',
      readTime: '11 min read',
      date: '2023-12-15',
      category: '3D Graphics',
      image: '🎮',
      views: '1.9k',
      link: '#',
      featured: false
    }
  ];

  const categories = ['All', 'React', 'CSS', 'Backend', 'Animation', 'Performance', '3D Graphics'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <section id="articles" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 via-transparent to-neon-purple/5"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-neon-green/10 rounded-full filter blur-3xl"></div>
      
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
            Latest{' '}
            <span className="bg-gradient-cyber bg-clip-text text-transparent">
              Articles
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
            Thoughts, tutorials, and insights on modern web development and technology.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-glow-primary'
                  : 'bg-cyber-surface border border-border text-muted-foreground hover:text-primary hover:border-primary/50'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Article */}
        {filteredArticles.find(article => article.featured) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <TrendingUp className="text-primary" size={24} />
              Featured Article
            </h3>
            {(() => {
              const featured = filteredArticles.find(article => article.featured);
              if (!featured) return null;
              
              return (
                <motion.article
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="cyber-card"
                >
                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div className="text-center">
                      <div className="text-8xl mb-4">{featured.image}</div>
                      <span className="text-sm px-3 py-1 bg-primary/20 text-primary rounded-full">
                        {featured.category}
                      </span>
                    </div>
                    <div className="md:col-span-2 space-y-4">
                      <h4 className="text-2xl font-bold text-foreground hover:text-primary transition-colors duration-300">
                        {featured.title}
                      </h4>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {featured.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            {featured.readTime}
                          </div>
                          <div className="flex items-center gap-1">
                            <BookOpen size={14} />
                            {featured.views} views
                          </div>
                          <span>{featured.date}</span>
                        </div>
                        <motion.a
                          href={featured.link}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300"
                        >
                          Read More
                          <ExternalLink size={16} />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })()}
          </motion.div>
        )}

        {/* Articles Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredArticles.filter(article => !article.featured).map((article, index) => (
            <motion.article
              key={article.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              className="cyber-card group h-full flex flex-col"
            >
              {/* Article Header */}
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{article.image}</div>
                <span className="text-xs px-2 py-1 bg-secondary/20 text-secondary rounded-full">
                  {article.category}
                </span>
              </div>

              {/* Article Content */}
              <div className="flex-1 space-y-4">
                <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              {/* Article Footer */}
              <div className="pt-6 mt-auto">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    {article.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen size={12} />
                    {article.views}
                  </div>
                  <span>{article.date}</span>
                </div>
                <motion.a
                  href={article.link}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 w-full py-2 bg-cyber-elevated border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                >
                  Read Article
                  <ExternalLink size={14} />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="cyber-card max-w-2xl mx-auto">
            <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to my newsletter for the latest articles, tutorials, and insights 
              on web development and technology trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-cyber-elevated border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(var(--neon-blue) / 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="btn-cyber-primary whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticlesSection;