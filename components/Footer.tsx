import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MailIcon, PhoneIcon, HomeIcon, StethoscopeIcon, PillIcon, BookOpenIcon } from './IconComponents';
import { Logo } from './Logo';
import Dock from './animations/Dock';
import './animations/Dock.css';

const LiveMetric: React.FC<{ label: string; initialValue: number }> = ({ label, initialValue }) => {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        const interval = setInterval(() => {
            setValue(v => v + Math.floor(Math.random() * 3));
        }, Math.random() * 5000 + 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-center md:text-left">
            <p className="font-display text-3xl font-bold text-teal-400">{value.toLocaleString()}</p>
            <p className="text-sm text-gray-400 uppercase tracking-wider">{label}</p>
        </div>
    );
};

const Footer: React.FC = () => {
    const navigate = useNavigate();
    const dockItems = [
        { icon: <HomeIcon className="h-6 w-6 text-gray-300" />, label: 'Home', onClick: () => navigate('/') },
        { icon: <StethoscopeIcon className="h-6 w-6 text-gray-300" />, label: 'Services', onClick: () => navigate('/services') },
        { icon: <PillIcon className="h-6 w-6 text-gray-300" />, label: 'Supplies', onClick: () => navigate('/supplies') },
        { icon: <BookOpenIcon className="h-6 w-6 text-gray-300" />, label: 'Blog', onClick: () => navigate('/blog') },
    ];


    return (
        <footer className="bg-navy-900 border-t border-navy-700 text-white pt-12 pb-8 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-b border-navy-700 pb-8 mb-8">
                    <h3 className="font-display text-2xl font-bold text-center mb-6">Live Health Metrics</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <LiveMetric label="Appointments Today" initialValue={1243} />
                        <LiveMetric label="Satisfied Patients" initialValue={89452} />
                        <LiveMetric label="Prescriptions Filled" initialValue={15320} />
                        <LiveMetric label="Health Articles Read" initialValue={45678} />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <Link to="/">
                            <Logo textClassName="text-white" />
                        </Link>
                        <p className="text-gray-400">The future of healthcare is here. Accessible, intelligent, and compassionate care for all.</p>
                    </div>

                    <div className="relative h-24 md:h-auto">
                         <h3 className="font-display text-lg font-semibold mb-4 md:text-left text-center">Quick Links</h3>
                        <Dock items={dockItems} />
                    </div>

                    <div>
                        <h3 className="font-display text-lg font-semibold mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            <li><Link to="/telemedicine" className="text-gray-400 hover:text-teal-400 transition-colors">Telemedicine</Link></li>
                            <li><Link to="/supplies" className="text-gray-400 hover:text-teal-400 transition-colors">Medical Supplies</Link></li>
                            <li><Link to="/book-appointment" className="text-gray-400 hover:text-teal-400 transition-colors">Appointments</Link></li>
                            <li><Link to="/portal" className="text-gray-400 hover:text-teal-400 transition-colors">Patient Portal</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-display text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-start">
                                <PhoneIcon className="h-5 w-5 mr-3 mt-1 text-teal-400 flex-shrink-0" />
                                <span>Emergency: 1-800-123-4567</span>
                            </li>
                            <li className="flex items-start">
                                <MailIcon className="h-5 w-5 mr-3 mt-1 text-teal-400 flex-shrink-0" />
                                <a href="mailto:contact@medicarehub.com" className="hover:text-teal-400 transition-colors">contact@medicarehub.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-navy-700 pt-8 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} MediCare Solutions Hub 2.0. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;