import React from 'react';
import { Link } from 'react-router-dom';
import PageShell from '../components/PageShell';
import { VideoIcon, StethoscopeIcon, PillIcon, ArIcon } from '../components/IconComponents';
import Carousel from '../components/animations/Carousel';
import '../components/animations/Carousel.css';


const TelemedicinePage: React.FC = () => {
    const features = [
        {
            id: 1,
            title: "Bank-Grade Security",
            description: "All data and video streams are protected with 256-bit end-to-end encryption.",
            icon: <VideoIcon className="carousel-icon" />,
        },
        {
            id: 2,
            title: "AI Co-Pilot Diagnostics",
            description: "Our AI assists doctors by highlighting potential conditions based on symptoms.",
            icon: <StethoscopeIcon className="carousel-icon" />,
        },
        {
            id: 3,
            title: "Instant e-Prescriptions",
            description: "Approved prescriptions are instantly and securely sent to your preferred pharmacy.",
            icon: <PillIcon className="carousel-icon" />,
        },
    ];

    return (
        <PageShell title="AI-Enhanced Telemedicine" subtitle="Smarter consultations, faster diagnoses, better outcomes.">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <h2 className="font-display text-3xl font-bold text-white">Your Doctor, Supercharged by AI.</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Our telemedicine platform isn't just a video call. It's an intelligent diagnostic partner. We leverage secure, cutting-edge AI to assist our doctors, analyzing symptoms in real-time to provide a second opinion and ensure nothing is missed.
                    </p>
                    <div className="flex justify-center md:justify-start">
                         <Carousel items={features} baseWidth={340} autoplay={true} loop={true} />
                    </div>
                </div>
                <div className="bg-navy-800/50 p-8 rounded-lg shadow-lg border border-navy-700">
                    <img src="https://picsum.photos/seed/telemed-dark/600/500" alt="Doctor on a futuristic video call interface" className="rounded-lg shadow-md mb-8" />
                    <h3 className="font-display text-2xl font-semibold text-center mb-4 text-white">Ready for the Future of Health?</h3>
                    <p className="text-center text-gray-400 mb-6">Book an intelligent consultation in seconds. Experience healthcare that's finally caught up with technology.</p>
                     <Link to="/book-appointment" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-full text-navy-900 bg-teal-400 hover:bg-teal-500 md:py-4 md:text-lg md:px-10 transition-transform transform hover:scale-105 animate-pulse-heart">
                        Book an Intelligent Consult
                    </Link>
                </div>
            </div>
        </PageShell>
    );
};

export default TelemedicinePage;