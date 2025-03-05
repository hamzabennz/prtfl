import React from 'react';
import { FaGraduationCap, FaLaptopCode, FaMedal, FaUserTie } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
                    <div className="w-16 h-1 bg-blue-600 mx-auto mt-2"></div>
                </div>

                <div className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
                    <p className="mb-6">
                        Passionate Data Science, AI, and Computer Science student with expertise in Machine Learning, Deep Learning, NLP, and Time Series Analysis. Experienced in Software Development, including Mobile, Desktop, and Backend systems using technologies like Python, Java, and NodeJS.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mt-12">
                        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md flex">
                            <div className="mr-4 text-blue-600 dark:text-blue-400 text-2xl">
                                <FaGraduationCap />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 dark:text-white">Education</h3>
                                <p>National Higher School of Artificial Intelligence, Algiers</p>
                                <p>Current 4th-year student</p>
                            </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md flex">
                            <div className="mr-4 text-blue-600 dark:text-blue-400 text-2xl">
                                <FaLaptopCode />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 dark:text-white">Experience</h3>
                                <p>Freelance Developer</p>
                                <p>Mobile apps & website development</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
