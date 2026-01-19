
import React from 'react';
import { Link } from 'react-router-dom';
import { StethoscopeIcon, PillIcon, BookOpenIcon } from '../components/IconComponents';
import BlurText from '../components/animations/BlurText';
import RotatingText from '../components/animations/RotatingText';
import CardSwap, { Card } from '../components/animations/CardSwap';
import '../components/animations/CardSwap.css';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string; link: string }> = ({ icon, title, description, link }) => (
    <div className="bg-navy-800/50 p-8 rounded-xl shadow-lg hover:shadow-teal-400/10 border border-navy-700 hover:border-teal-400/50 transition-all duration-300 transform hover:-translate-y-2 group">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-navy-700 mb-6 group-hover:bg-teal-400 transition-colors">
            {icon}
        </div>
        <h3 className="font-display text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>
        <Link to={link} className="font-semibold text-teal-400 hover:text-white transition-colors group">
            Explore &rarr;
        </Link>
    </div>
);

const HomePage: React.FC = () => {
    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <div className="relative text-white overflow-hidden">
                <div className="absolute inset-0 bg-navy-900">
                     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')] opacity-5"></div>
                     <div className="absolute bottom-0 left-[-20%] right-[-20%] top-[20%] h-[500px] rounded-[50%] bg-radial-gradient(circle at 50% 50%, rgba(0, 245, 208, 0.1), rgba(0, 245, 208, 0) 70%)"></div>
                </div>
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-40 text-center">
                    <h1 className="font-display text-4xl sm:text-7xl font-extrabold tracking-tight text-white flex flex-col items-center">
                        <span>Intelligent Healthcare.</span>
                        <BlurText text="Instantly Accessible." className="text-teal-400" />
                    </h1>
                    <p className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto text-gray-300">
                        Experience the future of medicine with AI-powered{' '}
                        <RotatingText 
                            texts={['consultations.', 'supply delivery.', 'health insights.']} 
                            className="text-teal-400 font-semibold"
                        />
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/book-appointment" className="bg-teal-400 hover:bg-teal-500 text-navy-900 font-bold py-4 px-10 rounded-full shadow-lg transition-all transform hover:scale-105 animate-pulse-heart">
                            Connect to a Doctor Now
                        </Link>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <section className="py-20 bg-navy-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-3xl sm:text-5xl font-bold text-white">Your Health Ecosystem</h2>
                        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">One platform for all your healthcare needs, powered by technology.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ServiceCard 
                            icon={<StethoscopeIcon className="h-8 w-8 text-teal-400" />}
                            title="AI Telemedicine"
                            description="Connect with certified doctors enhanced by AI for faster, more accurate diagnoses."
                            link="/telemedicine"
                        />
                        <ServiceCard 
                            icon={<PillIcon className="h-8 w-8 text-teal-400" />}
                            title="Smart Medical Supply"
                            description="Order curated medical products and get automated restock reminders."
                            link="/supplies"
                        />
                        <ServiceCard 
                            icon={<BookOpenIcon className="h-8 w-8 text-teal-400" />}
                            title="Personalized Health-AI"
                            description="Access a wealth of AI-generated articles and insights tailored to your health profile."
                            link="/blog"
                        />
                    </div>
                </div>
            </section>

            {/* Explainer Section */}
            <section className="py-24 bg-navy-900 border-y border-navy-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h2 className="font-display text-