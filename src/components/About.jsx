import { motion } from 'framer-motion';
import { User, Code2, Briefcase } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="heading-section">About Me</h2>
                </motion.div>

                <div className="about-content">


                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >

                        <p className="about-description">
                            I'm Golla Sharath, a dedicated web developer with a strong foundation in modern web technologies.
                            My journey began with a curiosity about how things work on the internet,
                            which quickly evolved into a passion for building seamless, scalable, and visually appealing applications.
                        </p>
                        <p className="about-description">
                            With extensive experience in the MERN stack (MongoDB, Express, React, Node.js),
                            I specialize in bridging the gap between beautiful user interfaces and robust backend architectures.
                            I believe in writing clean, maintainable code and always strive to learn the latest industry standards.
                        </p>

                        <div className="about-highlights">
                            <motion.div
                                className="highlight-item"
                                whileHover={{ y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="highlight-icon">
                                    <Code2 size={32} />
                                </div>
                                <div className="highlight-text">
                                    <h4>Frontend Dev</h4>
                                    <div className="tech-tags">
                                        <span className="tech-tag">React</span>
                                        <span className="tech-tag">HTML5</span>
                                        <span className="tech-tag">CSS3</span>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                className="highlight-item"
                                whileHover={{ y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="highlight-icon">
                                    <Briefcase size={32} />
                                </div>
                                <div className="highlight-text">
                                    <h4>Backend Dev</h4>
                                    <div className="tech-tags">
                                        <span className="tech-tag">Node.js</span>
                                        <span className="tech-tag">Express</span>
                                        <span className="tech-tag">MongoDB</span>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                className="highlight-item"
                                whileHover={{ y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="highlight-icon">
                                    <User size={32} />
                                </div>
                                <div className="highlight-text">
                                    <h4>Problem Solving</h4>
                                    <div className="tech-tags">
                                        <span className="tech-tag">DSA</span>
                                        <span className="tech-tag">Logic</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
