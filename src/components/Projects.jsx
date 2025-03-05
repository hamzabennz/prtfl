import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
            <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                    <div className="text-gray-400 dark:text-gray-500 text-center p-4">
                        {project.title} Screenshot
                    </div>
                )}
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex space-x-3">
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                            <FaGithub className="mr-1" /> Code
                        </a>
                    )}
                    {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                            <FaExternalLinkAlt className="mr-1" /> Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: "8dretna",
            description: "LLM for Maghreb Darija developed as part of a group project course in collaboration with FenTech company.",
            technologies: ["Python", "NLP", "Machine Learning", "Deep Learning"],
            category: "ai",
            github: "#",
            demo: "#",
            image: ""
        },
        {
            id: 2,
            title: "AtfaliSafe",
            description: "Arabic kids' show recommendation system developed as part of the NLP course project.",
            technologies: ["Python", "NLP", "Recommendation Systems"],
            category: "ai",
            github: "#",
            demo: "#",
            image: ""
        },
        {
            id: 3,
            title: "Fire Prediction Model",
            description: "Machine learning model for fire prediction in Bejaia developed for the Data Mining course.",
            technologies: ["Python", "Machine Learning", "Data Mining"],
            category: "ai",
            github: "#",
            demo: "#",
            image: ""
        },
        {
            id: 4,
            title: "Eventy",
            description: "Event management mobile app for organizers and attendees developed for the Mobile Development course.",
            technologies: ["Flutter", "Dart", "Firebase"],
            category: "mobile",
            github: "https://github.com/BillalChaouche/Eventy_App",
            demo: "#",
            image: ""
        },
        {
            id: 6,
            title: "Other freelance projects (not listed due to privacy)",
            description: "",
            technologies: ["Flutter", "Dart", "Firebase", "Supabase", "Django"],
            category: "mobile",
            github: "#",
            demo: "#",
            image: ""
        },
        {
            id: 5,
            title: "Gym Management Web App",
            description: "Web application for gym management developed as part of the Software Engineering course.",
            technologies: ["PHP", "Laravel", "MySQL", "JavaScript"],
            category: "web",
            github: "https://github.com/BillalChaouche/Gym-Managment",
            demo: "#",
            image: ""
        }
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <section id="projects" className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Projects</h2>
                    <div className="w-16 h-1 bg-blue-600 mx-auto mt-2"></div>
                </div>

                <div className="flex justify-center mb-8">
                    <div className="inline-flex rounded-md shadow-sm">
                        <button
                            onClick={() => setFilter('all')}
                            className={`px-4 py-2 text-sm font-medium rounded-l-lg ${filter === 'all'
                                ? 'bg-blue-600 text-white'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                }`}
                        >
                            All
                        </button>
                        <button
                            onClick={() => setFilter('ai')}
                            className={`px-4 py-2 text-sm font-medium ${filter === 'ai'
                                ? 'bg-blue-600 text-white'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                }`}
                        >
                            AI & Data Science
                        </button>
                        <button
                            onClick={() => setFilter('mobile')}
                            className={`px-4 py-2 text-sm font-medium ${filter === 'mobile'
                                ? 'bg-blue-600 text-white'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                }`}
                        >
                            Mobile
                        </button>
                        <button
                            onClick={() => setFilter('web')}
                            className={`px-4 py-2 text-sm font-medium rounded-r-lg ${filter === 'web'
                                ? 'bg-blue-600 text-white'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                }`}
                        >
                            Web
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

