import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <motion.p
                        className="hero-greeting"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Hi there, I am Sharath
                    </motion.p>

                    <motion.h1
                        className="heading-brand"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        A Passionate <br />
                        <span className="text-gradient">Full Stack Developer</span>
                    </motion.h1>

                    <motion.h2
                        className="hero-tagline"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        Specializing in the MERN Stack.
                    </motion.h2>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        I build modern, responsive, and robust web applications with clean code and beautiful design. Let's turn your ideas into functional digital realities.
                    </motion.p>

                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <a href="#projects" className="btn btn-primary">
                            View Projects <ArrowRight size={18} />
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Contact Me <Mail size={18} />
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="hero-blob"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
