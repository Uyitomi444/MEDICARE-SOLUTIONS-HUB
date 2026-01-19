import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
    const renderContent = () => {
        const lines = content.split('\n');
        const elements: React.ReactNode[] = [];
        let listItems: string[] = [];

        const flushList = (key: string) => {
            if (listItems.length > 0) {
                elements.push(
                    <ul key={key} className="list-disc list-outside pl-6 my-4 space-y-2 text-gray-300 leading-relaxed">
                        {listItems.map((item, itemIndex) => <li key={itemIndex} className="pl-2">{item}</li>)}
                    </ul>
                );
                listItems = [];
            }
        };

        lines.forEach((line, index) => {
            if (line.startsWith('## ')) {
                flushList(`list-before-h2-${index}`);
                elements.push(<h2 key={index} className="font-display text-2xl font-bold mt-8 mb-4 text-teal-400">{line.substring(3)}</h2>);
            } else if (line.startsWith('# ')) {
                flushList(`list-before-h1-${index}`);
                elements.push(<h1 key={index} className="font-display text-4xl font-bold my-6 text-white border-b-2 border-navy-700 pb-2">{line.substring(2)}</h1>);
            } else if (line.startsWith('* ')) {
                listItems.push(line.substring(2));
            } else if (line.trim() !== '') {
                flushList(`list-before-p-${index}`);
                const parts = line.split('**');
                elements.push(
                    <p key={index} className="mb-4 text-gray-300 leading-relaxed">
                        {parts.map((part, i) =>
                            i % 2 === 1 ? <strong key={i} className="font-semibold text-white">{part}</strong> : part
                        )}
                    </p>
                );
            } else {
                 if (listItems.length === 0) {
                    elements.push(<div key={`br-${index}`} className="h-4" />);
                }
            }
        });

        flushList('list-at-end');
        return elements;
    };

    return <div className="prose max-w-none">{renderContent()}</div>;
};

export default MarkdownRenderer;