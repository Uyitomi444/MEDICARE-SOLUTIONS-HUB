import React from 'react';

export const Logo: React.FC<{ className?: string; textClassName?: string }> = ({ className, textClassName = 'text-white' }) => {
    return (
        <div className={`flex items-center space-x-3 ${className}`}>
            <svg className="h-8 w-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" rx="20" className="text-navy-700 fill-current" />
              <path d="M25 50 H40 L45 35 L55 65 L60 50 H75" className="text-teal-400" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className={`font-display text-2xl font-bold tracking-wider ${textClassName}`}>MediCare</span>
        </div>
    );
};