import { motion } from 'framer-motion';
import { ExternalLink, Code, BrainCircuit, Terminal, Medal } from 'lucide-react';
import './CodingProfiles.css';

const CodingProfiles = () => {
    return (
        <section id="profiles" className="profiles-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="heading-section">DSA & Problem Solving</h2>
                    <p className="profiles-subtitle">
                        A showcase of my algorithmic problem-solving skills and coding profiles.
                    </p>
                </motion.div>

                <div className="profiles-content">
                    <motion.div
                        className="dsa-summary glass"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="dsa-header">
                            <BrainCircuit size={40} className="accent-icon" />
                            <h3>Why DSA Matters to Me</h3>
                        </div>
                        <p>
                            I believe that strong problem-solving skills are the foundation of great software engineering.
                            Regularly practicing Data Structures and Algorithms not only sharpens my logical thinking but
                            also helps me write highly optimized, scalable code for complex applications.
                        </p>

                        <div className="dsa-stats-grid">
                            <div className="stat-box">
                                <Terminal size={24} />
                                <span className="stat-number">300+</span>
                                <span className="stat-label">Problems Solved</span>
                            </div>
                            <div className="stat-box">
                                <Medal size={24} />
                                <span className="stat-number">Contests</span>
                                <span className="stat-label">Regular Participant</span>
                            </div>
                        </div>
                    </motion.div>

                    <div className="platforms-grid">
                        <motion.a
                            href="https://leetcode.com/u/sharath_235/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="platform-card leetcode glass"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            whileHover={{ y: -8 }}
                        >
                            <div className="platform-icon">
                                <Code size={32} />
                            </div>
                            <div className="platform-info">
                                <h4>LeetCode</h4>
                                <p>View my problem-solving progress and daily submissions.</p>
                                <span className="view-profile">
                                    View Profile <ExternalLink size={16} />
                                </span>
                            </div>
                        </motion.a>

                        {/* GeeksForGeeks */}
                        <motion.a
                            href="https://www.geeksforgeeks.org/profile/shivashacl5k"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="platform-card gfg glass"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            whileHover={{ y: -8 }}
                        >
                            <div className="platform-icon">
                                <Code size={32} />
                            </div>
                            <div className="platform-info">
                                <h4>GeeksForGeeks</h4>
                                <p>Solving diverse sets of algorithms and data structures questions.</p>
                                <span className="view-profile">
                                    View Profile <ExternalLink size={16} />
                                </span>
                            </div>
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CodingProfiles;
