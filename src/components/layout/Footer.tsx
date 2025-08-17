import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

const Footer = () => {
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  const particlesConfig = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push" as const,
        },
        onHover: {
          enable: true,
          mode: "repulse" as const,
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 2,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#8B5CF6",
      },
      links: {
        color: "#00D4FF",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none" as const,
        enable: true,
        outModes: {
          default: "bounce" as const,
        },
        random: false,
        speed: 0.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 30,
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'Medium', href: '#' },
  ];

  return (
    <footer className="relative bg-cyber-bg border-t border-border/50 overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          id="footer-particles"
          init={particlesInit}
          options={particlesConfig}
          className="w-full h-full"
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 via-transparent to-neon-blue/5 z-10"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-cyber bg-clip-text text-transparent">
              Naveen G G
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              AI & Data Science student passionate about technology and problem-solving
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and lots of ☕</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5, color: 'hsl(var(--primary))' }}
                    transition={{ duration: 0.2 }}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-foreground">Connect</h4>
            <ul className="space-y-2">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <motion.a
                    href={social.href}
                    whileHover={{ x: 5, color: 'hsl(var(--primary))' }}
                    transition={{ duration: 0.2 }}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {social.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-foreground">Stay Updated</h4>
            <p className="text-sm text-muted-foreground">
              Get the latest updates on my projects and articles.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 bg-cyber-elevated border border-border rounded text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px hsl(var(--neon-blue) / 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-2 bg-primary text-primary-foreground rounded text-sm font-medium transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-cyber mb-8"
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground"
          >
            © {currentYear} Naveen G G. All rights reserved.
          </motion.p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ 
              scale: 1.1, 
              backgroundColor: 'hsl(var(--primary))',
              boxShadow: "0 0 20px hsl(var(--neon-blue) / 0.5)"
            }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 px-4 py-2 bg-cyber-elevated border border-border rounded-lg text-muted-foreground hover:text-primary-foreground transition-all duration-300 group"
          >
            <span className="text-sm">Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;