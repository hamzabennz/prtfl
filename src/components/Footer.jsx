import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-xl font-bold text-white">Hamza Benzaoui</h2>
                        <p className="text-sm">Data Science | AI | Software Development</p>
                    </div>

                    <div className="flex space-x-4">
                        <a href="https://www.linkedin.com/in/hamza-benzaoui-92813a317/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://github.com/hamzabennz" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                            <FaGithub size={24} />
                        </a>
                        <a href="mailto:hamza.benzaoui@ensia.edu.dz" className="text-gray-300 hover:text-red-400 transition-colors">
                            <FaEnvelope size={24} />
                        </a>
                    </div>
                </div>

                <hr className="border-gray-800 my-6" />

                <div className="text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Hamza Benzaoui. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
