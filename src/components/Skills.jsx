import React from 'react';
import {
    FaPython, FaReact, FaJava, FaNodeJs, FaDatabase, FaDocker, FaGitAlt, FaMobileAlt,
    FaDesktop, FaServer, FaLinux, FaTerminal, FaUserFriends, FaLightbulb, FaCrown,
    FaExchangeAlt, FaComments
} from 'react-icons/fa';
import {
    SiTensorflow, SiFlutter, SiJavascript, SiPhp, SiDjango, SiLaravel, SiKeras,
    SiHuggingface, SiR, SiFlask, SiElectron, SiGit
} from 'react-icons/si';

// Component for regular skills
const SkillCard = ({ skill }) => {
    return (
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow transition-transform hover:scale-105">
            <div className="flex items-center mb-2">
                <div className="text-2xl text-blue-600 dark:text-blue-400 mr-3">{skill.icon}</div>
                <h4 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h4>
            </div>

            {skill.technologies && skill.name !== 'Soft Skills' && skill.name !== 'Technical Tools' && (
                <div className="mt-2">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Technologies:</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                        {skill.technologies.map((tech, idx) => (
                            <span key={idx} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            )}
            {skill.technologies && (skill.name === 'Soft Skills' || skill.name === 'Technical Tools') && (
                <div className="flex flex-wrap gap-1 mt-1">
                    {skill.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                            {tech}
                        </span>
                    ))}
                </div>
            )}
            {skill.subskills && (
                <div className="mt-3 border-t border-gray-200 dark:border-gray-700 pt-2">
                    {skill.subskills.map((subskill, idx) => (
                        <div key={idx} className="mt-2">
                            <div className="flex items-center">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                <span className="font-medium text-gray-800 dark:text-gray-200">{subskill.name}</span>
                            </div>
                            {subskill.technologies && (
                                <div className="flex flex-wrap gap-1 ml-4 mt-1">
                                    {subskill.technologies.map((tech, techIdx) => (
                                        <span key={techIdx} className="px-2 py-0.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}
                            {subskill.subsubskills && (
                                <div className="ml-4 mt-1">
                                    {subskill.subsubskills.map((subsubskill, subsubIdx) => (
                                        <div key={subsubIdx} className="mt-1 flex flex-col">
                                            <div className="flex items-center">
                                                <div className="w-1.5 h-1.5 border border-blue-500 rounded-full mr-2"></div>
                                                <span className="text-sm text-gray-700 dark:text-gray-300">{subsubskill.name}</span>
                                            </div>
                                            {subsubskill.technologies && (
                                                <div className="flex flex-wrap gap-1 ml-5 mt-0.5">
                                                    {subsubskill.technologies.map((tech, techIdx) => (
                                                        <span key={techIdx} className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-400 text-xs rounded">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const Skills = () => {
    const skills = [
        {
            name: 'Software Development',
            icon: <FaJava />,
            subskills: [
                {
                    name: 'Software Architecture Design',
                    technologies: []
                },
                {
                    name: 'Mobile Development',
                    technologies: ['Flutter']
                },
                {
                    name: 'Desktop Application Development',
                    technologies: ['Java', 'Electron JS']
                },
                {
                    name: 'Backend Development',
                    subsubskills: [
                        { name: 'Python', technologies: ['Django', 'Flask'] },
                        { name: 'PHP', technologies: ['Laravel'] },
                        { name: 'JavaScript', technologies: ['NodeJS'] }
                    ]
                }
            ]
        },
        {
            name: 'Data Mining',
            icon: <FaDatabase />,
            technologies: ['Python', 'R']
        },
        {
            name: 'Machine Learning',
            icon: <FaLightbulb />,
            technologies: ['Python']
        },
        {
            name: 'Deep Learning',
            icon: <SiTensorflow />,
            technologies: ['Python', 'Keras', 'TensorFlow']
        },
        {
            name: 'Natural Language Processing',
            icon: <SiTensorflow />,
            technologies: ['Python', 'NLTK', 'Keras', 'Hugging Face']
        },
        {
            name: 'Time Series Analysis',
            icon: <FaExchangeAlt />,
            technologies: ['Python', 'R']
        },

        {
            name: 'Technical Tools',
            icon: <FaGitAlt />,
            technologies: ['Git', 'Docker', 'Linux', 'Bash', 'SQL', 'NoSQL']
        },
        {
            name: 'Soft Skills',
            icon: <FaUserFriends />,
            technologies: ['Teamwork', 'Problem-solving', 'Leadership', 'Adaptability', 'Communication']
        }
    ];

    return (
        <section id="skills" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Skills</h2>
                    <div className="w-16 h-1 bg-blue-600 mx-auto mt-2"></div>
                    <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
                        A comprehensive overview of my technical abilities and expertise across various domains.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-6">
                        {skills.map((skill, index) => (
                            <SkillCard key={index} skill={skill} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;