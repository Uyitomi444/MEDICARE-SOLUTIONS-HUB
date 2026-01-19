import React from 'react';
import FlowingMenu from '../components/animations/FlowingMenu';
import '../components/animations/FlowingMenu.css';

const ServicesPage: React.FC = () => {
    const menuItems = [
        { link: '/telemedicine', text: 'AI Telemedicine', image: 'https://picsum.photos/seed/service-telemed/600/400?grayscale' },
        { link: '/supplies', text: 'Medical Supplies', image: 'https://picsum.photos/seed/service-supplies/600/400?grayscale' },
        { link: '/blog', text: 'Health-Tech Insights', image: 'https://picsum.photos/seed/service-blog/600/400?grayscale' },
    ];

    return (
        <div className="h-[calc(100vh-80px)] w-full">
            <FlowingMenu items={menuItems} />
        </div>
    );
};

export default ServicesPage;
