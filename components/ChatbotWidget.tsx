import React, { useState } from 'react';
import { EmergencyIcon, PhoneIcon } from './IconComponents';

const ChatbotWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
            {isOpen && (
                <div className="bg-navy-800 border border-navy-700 rounded-lg shadow-2xl w-80 mb-4 p-6 animate-fade-in">
                    <h3 className="font-display text-lg text-white font-bold mb-2">Immediate Assistance</h3>
                    <p className="text-gray-400 text-sm mb-4">Are you experiencing a medical emergency? Please dial your local emergency number immediately.</p>
                    <a href="tel:911" className="w-full flex items-center justify-center gap-2 bg-red-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-red-700 transition-colors">
                        <PhoneIcon className="h-5 w-5" />
                        Call Emergency Services
                    </a>
                    <p className="text-gray-500 text-xs mt-4 text-center">For non-emergencies, please use our contact page or book an appointment.</p>
                </div>
            )}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-red-500 text-white rounded-full p-4 shadow-lg hover:bg-red-600 transition-all transform hover:scale-110 flex items-center justify-center gap-2"
                aria-label="Emergency Help"
            >
                <EmergencyIcon className="h-8 w-8 animate-pulse" />
                <span className="font-display font-bold text-lg pr-2">{isOpen ? "Close" : "EMERGENCY?"}</span>
            </button>
        </div>
    );
};

export default ChatbotWidget;
