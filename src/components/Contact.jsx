import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

const ContactItem = ({ icon, title, value, link }) => {
    return (
        <div className="flex items-start mb-6">
            <div className="text-blue-600 dark:text-blue-400 text-xl mt-1 mr-4">{icon}</div>
            <div>
                <h3 className="font-bold text-gray-900 dark:text-white">{title}</h3>
                {link ? (
                    <a href={link} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                        {value}
                    </a>
                ) : (
                    <p className="text-gray-700 dark:text-gray-300">{value}</p>
                )}
            </div>
        </div>
    );
};

const Contact = () => {
    return (
        <section id="contact" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Contact Me</h2>
                    <div className="w-16 h-1 bg-blue-600 mx-auto mt-2"></div>
                </div>

                <div className="flex flex-col max-w-4xl mx-auto">
                    <div className="md:w-full md:pr-8 mb-8 md:mb-0 mx-auto">
                        <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white text-center">Get In Touch</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-6 text-center max-w-2xl mx-auto">
                            I'm interested in freelance opportunities, internships, and project collaborations. If you have any questions or want to work together, feel free to contact me.
                        </p>

                        <div className="max-w-md mx-auto">
                            <ContactItem
                                icon={<FaEnvelope />}
                                title="Email"
                                value="hamza.benzaoui@ensia.edu.dz"
                                link="mailto:hamza.benzaoui@ensia.edu.dz"
                            />

                            <ContactItem
                                icon={<FaPhone />}
                                title="Phone"
                                value="+213549464857"
                                link="tel:+213549464857"
                            />

                            <ContactItem
                                icon={<FaMapMarkerAlt />}
                                title="Location"
                                value="Setif, Algeria"
                            />

                            <ContactItem
                                icon={<FaLinkedin />}
                                title="LinkedIn"
                                value="Hamza Benzaoui"
                                link="https://www.linkedin.com/in/hamza-benzaoui-92813a317/"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
