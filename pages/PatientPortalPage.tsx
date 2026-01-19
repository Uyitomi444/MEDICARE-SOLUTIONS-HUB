import React from 'react';
import PageShell from '../components/PageShell';
import { Link } from 'react-router-dom';

const PatientPortalPage: React.FC = () => {
    return (
        <PageShell title="Patient Portal" subtitle="Your secure gateway to your health data.">
            <div className="max-w-md mx-auto bg-navy-800/50 p-8 rounded-xl shadow-lg border border-navy-700">
                <h3 className="font-display text-2xl font-bold text-center text-white mb-6">Secure Biometric Login</h3>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="patient-id" className="block text-sm font-medium text-gray-400">Patient ID or Email</label>
                        <input type="text" id="patient-id" required className="mt-1 block w-full px-4 py-3 bg-navy-900 border-2 border-navy-700 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none text-white" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-400">Password</label>
                        <input type="password" id="password" required className="mt-1 block w-full px-4 py-3 bg-navy-900 border-2 border-navy-700 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none text-white" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-teal-400 focus:ring-teal-500 border-navy-700 rounded bg-navy-900" />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">Remember me</label>
                        </div>
                        <div className="text-sm">
                            <a href="#" className="font-medium text-teal-400 hover:text-teal-500">Forgot password?</a>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-lg font-bold text-navy-900 bg-teal-400 hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400 transition-all transform hover:scale-105">
                            Sign In
                        </button>
                    </div>
                </form>
                 <p className="mt-6 text-center text-sm text-gray-400">
                    Need an account?{' '}
                    <Link to="/book-appointment" className="font-medium text-teal-400 hover:text-teal-500">
                        Register here
                    </Link>
                </p>
            </div>
        </PageShell>
    );
};

export default PatientPortalPage;