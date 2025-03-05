import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Typewriter from 'react-typewriter-effect';

const Hero = () => {
    return (
        <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
                <div className="md:w-3/5 mt-8 md:mt-0">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">Hi, I'm Hamza Benzaoui</h2>
                    <div className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium mb-4">
                        <Typewriter
                            options={{
                                strings: [
                                    'AI & Data Science Student',
                                    'Machine Learning Engineer',
                                    'Flutter Developer',
                                    'Software Engineer'
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                        Passionate about creating innovative solutions at the intersection of Data Science, AI, and Software Development.
                    </p>
                    <div className="flex space-x-4">
                        <a href="https://www.linkedin.com/in/hamza-benzaoui-92813a317/" target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/hamzabennz" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors">
                            <FaGithub />
                        </a>
                        <a href="mailto:hamza.benzaoui@ensia.edu.dz" className="p-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors">
                            <FaEnvelope />
                        </a>
                        <a href="#contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            Contact Me
                        </a>
                    </div>
                </div>
                <div className="md:w-2/5 flex justify-center">
                    <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg flex items-center justify-center overflow-hidden border-4 border-white dark:border-gray-800">
                        {/* Replace with your profile image */}
                        <img src="/placeholder-profile.jpg" alt="Hamza Benzaoui" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
