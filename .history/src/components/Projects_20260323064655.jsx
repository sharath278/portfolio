import { motion } from 'framer-motion';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'MediConnect',
            description: 'A full-stack healthcare platform where patients can connect with doctors, book appointments, and manage medical information. Focused on improving accessibility to healthcare through a modern web interface.',
            tech: ['React', 'Node.js', 'Express', 'MongoDB'],
            github: '#',
            live: '#'
        },
        {
            id: 2,
            title: 'Wanderlust',
            description: 'A comprehensive travel and accommodation platform. Features include browsing destinations, viewing dynamic listings, and managing travel stays, demonstrating strong full-stack skills.',
            tech: ['HTML', 'CSS', 'Bootstrap', 'Node.js', 'MongoDB'],
            github: 'https://github.com/sharath278/wander_lust',
            live: 'https://wander-lust-ztxk.onrender.com'
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="heading-section">Featured Projects</h2>
                    <p className="projects-subtitle">
                        Some of my recent work that showcases my skills.
                    </p>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="project-card glass"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="project-content">
                                <div className="project-header">
                                    <FolderGit2 size={40} className="project-folder-icon" />
                                    <div className="project-links">
                                        <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub Link">
                                            <Github size={20} />
                                        </a>
                                        <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live Demo Link">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                            </div>

                            <ul className="project-tech-list">
                                {project.tech.map(tech => (
                                    <li key={tech}>{tech}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
