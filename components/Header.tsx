import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
    const location = useLocation();
    const isActive = location.pathname === to || (to === '/services' && ['/telemedicine', '/supplies', '/blog'].includes(location.pathname));

    return (
        <Link 
            to={to} 
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 relative group ${
                isActive 
                ? 'text-white' 
                : 'text-gray-300 hover:text-white'
            }`}
        >
            {children}
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${isActive ? 'scale-x-100' : ''}`}></span>
        </Link>
    );
};

const Header: React.FC = () => {
    return (
        <header className="bg-navy-900/80 backdrop-blur-sm shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link to="/">
                        <Logo textClassName="text-white" />
                    </Link>
                    <nav className="hidden md:flex items-center space-x-4">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/supplies">Supplies</NavLink>
                        <NavLink to="/blog">Health Blog</NavLink>
                        <NavLink to="/about">About Us</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </nav>
                    <div className="flex items-center space-x-4">
                         <Link to="/portal" className="hidden sm:block px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                            Patient Portal
                        </Link>
                        <Link to="/book-appointment" className="bg-teal-400 hover:bg-teal-500 text-navy-900 font-bold py-2 px-6 rounded-full shadow-lg transition-all transform hover:scale-105 animate-pulse-heart">
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;