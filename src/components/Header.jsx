import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Header = ({ darkMode, toggleDarkMode }) => {
    return (
        <header className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-colors duration-300">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">Hamza Benzaoui</h1>
                <nav className="hidden md:block">
                    <ul className="flex space-x-6">
                        <li><a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a></li>
                        <li><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a></li>
                        <li><a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a></li>
                        <li><a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a></li>
                        <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a></li>
                    </ul>
                </nav>

            </div>
        </header>
    );
};

export default Header;
