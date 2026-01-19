import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TelemedicinePage from './pages/TelemedicinePage';
import SuppliesPage from './pages/SuppliesPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';
import PatientPortalPage from './pages/PatientPortalPage';
import ScrollToTop from './components/ScrollToTop';
import ChatbotWidget from './components/ChatbotWidget';
import ServicesPage from './pages/ServicesPage';

const App: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time for the preloader
        const timer = setTimeout(() => {
            const preloader = document.getElementById('preloader');
            if (preloader) {
                preloader.classList.add('preloader-hidden');
            }
            setLoading(false);
        }, 2000); // Corresponds to the animation duration

        return () => clearTimeout(timer);
    }, []);

    return (
        <HashRouter>
            <div className="bg-navy-900 text-gray-300 font-sans flex flex-col min-h-screen">
                {!loading && (
                    <>
                        <Header />
                        <main className="flex-grow">
                            <ScrollToTop />
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/services" element={<ServicesPage />} />
                                <Route path="/telemedicine" element={<TelemedicinePage />} />
                                <Route path="/supplies" element={<SuppliesPage />} />
                                <Route path="/blog" element={<BlogPage />} />
                                <Route path="/about" element={<AboutPage />} />
                                <Route path="/contact" element={<ContactPage />} />
                                <Route path="/book-appointment" element={<BookingPage />} />
                                <Route path="/portal" element={<PatientPortalPage />} />
                            </Routes>
                        </main>
                        <Footer />
                        <ChatbotWidget />
                    </>
                )}
            </div>
        </HashRouter>
    );
};

export default App;