import React from 'react';

interface PageShellProps {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}

const PageShell: React.FC<PageShellProps> = ({ title, subtitle, children }) => {
    return (
        <div className="py-16 sm:py-24 animate-fade-in">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mb-12">
                    <h1 className="relative font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        {title}
                        <span className="absolute -bottom-2 left-0 h-1 w-24 bg-teal-400"></span>
                    </h1>
                    {subtitle && <p className="mt-6 text-lg leading-8 text-gray-400">{subtitle}</p>}
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default PageShell;