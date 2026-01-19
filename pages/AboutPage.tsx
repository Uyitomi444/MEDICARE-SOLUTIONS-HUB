import React from 'react';
import PageShell from '../components/PageShell';
import { Doctor } from '../types';
import CircularGallery from '../components/animations/CircularGallery';
import '../components/animations/CircularGallery.css';

const mockDoctors: Doctor[] = [
    { id: 1, name: 'Dr. Evelyn Reed', specialty: 'Cardiologist', imageUrl: 'https://picsum.photos/seed/doc-evelyn/800/600?grayscale', videoPreviewUrl: 'https://picsum.photos/seed/doc-evelyn-vid/400/400?grayscale', bio: 'Dr. Reed pioneers AI-driven predictive models for cardiac events, leading preventive cardiology into the future.' },
    { id: 2, name: 'Dr. Ben Carter', specialty: 'General Practitioner', imageUrl: 'https://picsum.photos/seed/doc-ben/800/600?grayscale', videoPreviewUrl: 'https://picsum.photos/seed/doc-ben-vid/400/400?grayscale', bio: 'Dr. Carter integrates genomic data into primary care, offering hyper-personalized wellness plans.' },
    { id: 3, name: 'Dr. Olivia Chen', specialty: 'Pediatrician', imageUrl: 'https://picsum.photos/seed/doc-olivia/800/600?grayscale', videoPreviewUrl: 'https://picsum.photos/seed/doc-olivia-vid/400/400?grayscale', bio: 'A specialist in developmental robotics, Dr. Chen uses technology to assist in pediatric therapy.' },
    { id: 4, name: 'Dr. Samuel Jones', specialty: 'Dermatologist', imageUrl: 'https://picsum.photos/seed/doc-samuel/800/600?grayscale', videoPreviewUrl: 'https://picsum.photos/seed/doc-samuel-vid/400/400?grayscale', bio: 'Dr. Jones utilizes machine learning for early detection of skin cancers from dermatoscopic images.' },
    { id: 5, name: 'Dr. Aisha Khan', specialty: 'Neurologist', imageUrl: 'https://picsum.photos/seed/doc-aisha/800/600?grayscale', videoPreviewUrl: 'https://picsum.photos/seed/doc-aisha-vid/400/400?grayscale', bio: 'Dr. Khan researches brain-computer interfaces for restorative neurology.' },
    { id: 6, name: 'Dr. Marcus Holloway', specialty: 'Oncologist', imageUrl: 'https://picsum.photos/seed/doc-marcus/800/600?grayscale', videoPreviewUrl: 'https://picsum.photos/seed/doc-marcus-vid/400/400?grayscale', bio: 'Leading trials on nanobot-based targeted cancer therapy.' },
];

const AboutPage: React.FC = () => {
    const galleryItems = mockDoctors.map(doc => ({
        image: doc.imageUrl,
        text: `${doc.name} - ${doc.specialty}`,
    }));

    return (
        <>
            <PageShell title="About MediCare Hub" subtitle="We're not just a healthcare provider; we're your partner in a new era of wellness.">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-display text-3xl font-bold text-white mb-4">Our Mission: To Decentralize Health</h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        We are a collective of doctors, engineers, and data scientists dedicated to dismantling the old barriers of healthcare. By leveraging AI, blockchain, and human expertise, we're building a more equitable, intelligent, and personalized health ecosystem for everyone, everywhere.
                    </p>
                </div>
            </PageShell>
            <div className="bg-navy-900 py-16">
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                         <h2 className="font-display text-3xl font-bold text-white">Our Innovators</h2>
                         <p className="mt-4 text-lg text-gray-400">The minds behind the medical revolution.</p>
                    </div>
                    <div className="h-[600px] relative">
                         <CircularGallery items={galleryItems} bend={2.5} textColor="#00F5D0" borderRadius={0.03} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPage;