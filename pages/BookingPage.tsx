import React, { useState } from 'react';
import PageShell from '../components/PageShell';

const BookingPage: React.FC = () => {
    const [bookingStatus, setBookingStatus] = useState<string>('');

    const handleBookingSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setBookingStatus('Your appointment request has been submitted to our AI scheduler! We will contact you via encrypted message to confirm.');
        const form = e.target as HTMLFormElement;
        form.reset();
    };

    return (
        <PageShell title="Book a Virtual Appointment" subtitle="Schedule your consultation in just a few simple steps.">
            <div className="max-w-2xl mx-auto bg-navy-800/50 p-8 rounded-xl shadow-lg border border-navy-700">
                {!bookingStatus ? (
                    <form onSubmit={handleBookingSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-400">Full Name</label>
                            <input type="text" id="fullName" required className="mt-1 block w-full px-4 py-3 bg-navy-900 border-2 border-navy-700 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none text-white" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
                            <input type="email" id="email" required className="mt-1 block w-full px-4 py-3 bg-navy-900 border-2 border-navy-700 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none text-white" />
                        </div>
                        <div>
                            <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-400">Preferred Date</label>
                            <input type="date" id="appointmentDate" required min={new Date().toISOString().split("T")[0]} className="mt-1 block w-full px-4 py-3 bg-navy-900 border-2 border-navy-700 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none text-white [color-scheme:dark]" />
                        </div>
                        <div>
                            <label htmlFor="reason" className="block text-sm font-medium text-gray-400">Reason for Visit (AI Symptom Analysis)</label>
                            <textarea id="reason" rows={4} required placeholder="Briefly describe your symptoms. Our AI will pre-analyze this for your doctor." className="mt-1 block w-full px-4 py-3 bg-navy-900 border-2 border-navy-700 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none text-white"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-lg font-bold text-navy-900 bg-teal-400 hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400 transition-all transform hover:scale-105">
                                Request Appointment
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className="text-center">
                        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-teal-400/20 mb-4">
                            <svg className="h-10 w-10 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="font-display text-2xl font-bold text-white">Request Submitted!</h3>
                        <p className="mt-4 text-gray-300">{bookingStatus}</p>
                    </div>
                )}
            </div>
        </PageShell>
    );
};

export default BookingPage;