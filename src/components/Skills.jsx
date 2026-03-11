import { motion } from 'framer-motion';
import { Layout, Palette, FileJson, Layers, Server, Database } from 'lucide-react';
import './Skills.css';

const Skills = () => {
    const customVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5
            }
        })
    };

    const skillsList = [
        { name: 'HTML5', icon: <Layout size={32} />, category: 'Frontend', level: 90 },
        { name: 'CSS3 / Grid', icon: <Palette size={32} />, category: 'Frontend', level: 85 },
        { name: 'JavaScript', icon: <FileJson size={32} />, category: 'Language', level: 88 },
        { name: 'React', icon: <Layers size={32} />, category: 'Frontend', level: 85 },
        { name: 'Node.js', icon: <Server size={32} />, category: 'Backend', level: 80 },
        { name: 'Express', icon: <Server size={32} />, category: 'Backend', level: 82 },
        { name: 'MongoDB', icon: <Database size={32} />, category: 'Database', level: 75 },
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="heading-section">Technical Skills</h2>
                    <p className="skills-subtitle">
                        A comprehensive list of the technologies and tools I work with.
                    </p>
                </motion.div>

                <div className="skills-grid">
                    {skillsList.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="skill-card glass"
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-50px' }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="skill-icon">
                                {skill.icon}
                            </div>
                            <div className="skill-info">
                                <h3>{skill.name}</h3>
                                <span className="skill-category">{skill.category}</span>
                                <div className="progress-bar-container">
                                    <motion.div
                                        className="progress-bar"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                                    ></motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
