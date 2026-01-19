import React, { useState } from 'react';
import PageShell from '../components/PageShell';
import { PhoneIcon, MailIcon } from '../components/IconComponents';

const ContactPage: React.FC = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Thank you for your message! Our AI will route it to the correct human shortly.');
        const form = e.target as HTMLFormElement;
        form.reset();
    };

    return (
        <PageShell title="Connect With Us" subtitle="Have a question or need support? Our team is ready to assist.">
            <div className="grid md:grid-cols-2 gap-16">
                <div className="bg-navy-800/50 p-8 rounded-lg shadow-lg border border-navy-700">
                    <h3 className="font-display text-2xl font-bold text-white mb-6">Send a Secure Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-400">Full Name</label>
                            <input type="text" name="name" id="name" required className="mt-1 block w-full px-4 py-3 bg-navy-900 border-2 border-navy-700 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none text-white" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email Address</label>
                            <input type="email" name="email" id="email" required className="mt-1 block w-full px-4 py-3 bg-navy-900 border-2 border-navy-700 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none text-white" />
                        </div>
                         <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-400">Subject</label>
                            <input type="text" name="subject" id="subject" required className="mt-1 block w-full px-4 py-3 bg-navy-900 border-2 border-navy-700 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none text-white" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
                            <textarea name="message" id="message" rows={4} required className="mt-1 block w-full px-4 py-3 bg-navy-900 border-2 border-navy-700 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none text-white"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-lg font-bold text-navy-900 bg-teal-400 hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400 transition-all transform hover:scale-105">
                                Submit
                            </button>
                        </div>
                    </form>
                    {status && <p className="mt-4 text-center text-green-300 bg-green-900/50 p-3 rounded-md">{status}</p>}
                </div>

                <div className="space-y-8">
                    <div className="bg-navy-800/50 p-8 rounded-lg shadow-lg border border-navy-700">
                        <h3 className="font-display text-2xl font-bold text-white mb-4">Direct Contact</h3>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <PhoneIcon className="h-6 w-6 text-teal-400 mr-4"/>
                                <span className="text-gray-300">1-800-123-4567 (Emergency)</span>
                            </div>
                             <div className="flex items-center">
                                <PhoneIcon className="h-6 w-6 text-teal-400 mr-4"/>
                                <span className="text-gray-300">1-800-123-4568 (General)</span>
                            </div>
                            <div className="flex items-center">
                                <MailIcon className="h-6 w-6 text-teal-400 mr-4"/>
                                 <a href="mailto:contact@medicarehub.com" className="text-gray-300 hover:text-teal-400">contact@medicarehub.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-navy-800/50 p-8 rounded-lg shadow-lg border border-navy-700">
                        <h3 className="font-display text-2xl font-bold text-white mb-4">Global HQ</h3>
                        <p className="text-gray-400 mb-4">123 Health St, Wellness City, 45678</p>
                        <div className="h-64 bg-navy-700 rounded-md">
                            <img src="https://picsum.photos/seed/map-dark/600/400?grayscale" alt="Map to clinic" className="w-full h-full object-cover rounded-md opacity-50" />
                        </div>
                    </div>
                </div>
            </div>
        </PageShell>
    );
};

export default ContactPage;