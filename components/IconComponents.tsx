import React from 'react';

// A modern, stylized stethoscope
export const StethoscopeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M17 3a4 4 0 00-4 4v2.068A5.5 5.5 0 008.5 14h-1A3.5 3.5 0 004 17.5V18a3 3 0 003 3h.5a3 3 0 003-3v-.5A3.5 3.5 0 007 14v- relazione.5A3.5 3.5 0 0110.5 10H13V7a2 2 0 012-2h2a2 2 0 012 2v3h.5a2.5 2.5 0 110 5H19a2 2 0 100-4h-.5V7a4 4 0 00-4-4zM7.5 19a1 1 0 100-2 1 1 0 000 2z"/>
  </svg>
);

// A modern capsule pill
export const PillIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2a10 10 0 00-7.071 17.071 10 10 0 1014.142-14.142A10 10 0 0012 2zm3.536 12.071L6.464 5.001a8 8 0 0111.314 11.313l-4.242-4.243z"/>
    </svg>
);

// A modern, open book icon
export const BookOpenIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2a2 2 0 00-2 2v13.06a4.5 4.5 0 112-2.587V4a2 2 0 00-2-2h-1a2 2 0 00-2 2v13.5a2.5 2.5 0 103 2.45V4a2 2 0 00-2-2h-1zM14 4a2 2 0 012-2h1a2 2 0 012 2v15.5a2.5 2.5 0 11-3-2.45V4z"/>
    </svg>
);

// A modern phone/receiver icon
export const PhoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M3.003 3.003a11 11 0 0115.556 0l-1.414 1.414A9 9 0 004.417 4.417L3.003 3.003zM7.55 7.55a5 5 0 017.07 0L13.207 8.964a3 3 0 00-4.242 0L7.55 7.55zM19.07 4.929a11 11 0 010 15.556l-1.414-1.414a9 9 0 000-12.728l1.414-1.414zM8.965 13.207L7.55 14.62a5 5 0 007.07 0l1.415-1.414a3 3 0 01-4.242 0L8.965 13.207z" />
    </svg>
);

// A modern, abstract mail icon
export const MailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M2 6a4 4 0 014-4h12a4 4 0 014 4v12a4 4 0 01-4 4H6a4 4 0 01-4-4V6zm2 1.545V18a2 2 0 002 2h12a2 2 0 002-2V7.545l-6.95 4.344a1 1 0 01-1.1 0L4 7.545zM6 4a2 2 0 00-2 2v.281l8 5 8-5V6a2 2 0 00-2-2H6z"/>
    </svg>
);

// A modern video camera icon
export const VideoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M2 6a4 4 0 014-4h8a4 4 0 014 4v4.586l4.707-4.707A1 1 0 0124 6.586v10.828a1 1 0 01-1.707.707L18 13.414V18a4 4 0 01-4 4H6a4 4 0 01-4-4V6zm16 .586l-4 4V12a1 1 0 00-2 0v1.414l4 4V6.586zM4 6a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V8a2 2 0 00-2-2H4z"/>
  </svg>
);

// A modern emergency/siren icon for the chatbot
export const EmergencyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 1.07A9.01 9.01 0 004.07 4.07 9.01 9.01 0 0013 22.93a9.01 9.01 0 008.93-8.93 9.01 9.01 0 00-8.93-12.93zM12 20a7 7 0 117-7 7 7 0 01-7 7z" />
        <path d="M11 6h2v7h-2zM11 15h2v2h-2z" />
    </svg>
);

// A modern, abstract icon for AR
export const ArIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4h4v4H4zM16 4h4v4h-4zM4 16h4v4H4zM16 16h4v4h-4zM12 6a6 6 0 100 12 6 6 0 000-12zm0 2a4 4 0 110 8 4 4 0 010-8z" />
    </svg>
);

// A modern, simple home icon
export const HomeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.83l9 8.1V21h-6v-6h-6v6H3V10.93l9-8.1zM12 1L2 11h3v10h14V11h3L12 1z"/>
  </svg>
);