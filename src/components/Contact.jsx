import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="heading-section">Get In Touch</h2>
                    <p className="contact-subtitle">
                        Have a question or want to work together? I'm currently looking for new opportunities.
                    </p>
                </motion.div>

                <div className="contact-content">
                    <motion.div
                        className="contact-info glass"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3>Let's Connect</h3>
                        <p>
                            Whether you have a question or just want to say hi,
                            I'll try my best to get back to you!
                        </p>

                        <div className="info-items">
                            <div className="info-item">
                                <div className="info-icon">
                                    <Mail size={24} />
                                </div>
                                <div className="info-text">
                                    <h4>Email</h4>
                                    <a href="mailto:shivasharath23@gmail.com">shivasharath23@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="social-links-contact">
                            <h4>Follow Me</h4>
                            <div className="social-icons">
                                <a href="https://github.com/sharath278" aria-label="GitHub"><Github size={22} /></a>
                                <a href="https://www.linkedin.com/in/gsharath6302059681/" aria-label="LinkedIn"><Linkedin size={22} /></a>
                                <a href="https://x.com/home" aria-label="Twitter"><Twitter size={22} /></a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
