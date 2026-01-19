import React, { useState, useCallback } from 'react';
import PageShell from '../components/PageShell';
import { generateHealthArticle } from '../services/geminiService';
import MarkdownRenderer from '../components/MarkdownRenderer';

const BlogPage: React.FC = () => {
    const [topic, setTopic] = useState<string>('');
    const [article, setArticle] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerateArticle = useCallback(async (event: React.FormEvent) => {
        event.preventDefault();
        if (!topic.trim()) {
            setError('Please enter a topic to generate an article.');
            return;
        }

        setIsLoading(true);
        setError(null);
        setArticle(null);

        try {
            const generatedArticle = await generateHealthArticle(topic);
            setArticle(generatedArticle);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred.');
        } finally {
            setIsLoading(false);
        }
    }, [topic]);
    
    const quickTopics = ["Biohacking for Beginners", "The Future of Wearable Tech", "Mental Health in a Digital Age", "Understanding Your Genetic Data"];

    const handleQuickTopicClick = (quickTopic: string) => {
        setTopic(quickTopic);
        const form = document.getElementById('article-form') as HTMLFormElement;
        if (form) {
            setTimeout(() => form.requestSubmit(), 0);
        }
    };

    return (
        <PageShell title="Health-Tech Insights" subtitle="Explore AI-generated articles on the future of health and wellness.">
            <div className="max-w-4xl mx-auto">
                <div className="bg-navy-800/50 p-8 rounded-xl shadow-lg border border-navy-700">
                    <h2 className="font-display text-2xl font-bold text-white mb-4">AI Article Generator</h2>
                    <p className="text-gray-400 mb-6">Enter any health-tech topic, and our AI will craft a unique, insightful article in seconds.</p>
                    <form id="article-form" onSubmit={handleGenerateArticle}>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="text"
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                                placeholder="e.g., 'CRISPR Gene Editing Explained'"
                                className="flex-grow px-4 py-3 bg-navy-900 border-2 border-navy-700 rounded-lg focus:ring-2 focus:ring-teal-400 focus:outline-none text-white disabled:opacity-50"
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                className="bg-teal-400 text-navy-900 font-bold py-3 px-6 rounded-lg hover:bg-teal-500 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed flex items-center justify-center"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-navy-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Generating...
                                    </>
                                ) : 'Generate'}
                            </button>
                        </div>
                    </form>
                    <div className="mt-4">
                         <p className="text-sm text-gray-500">Or try a trending topic:</p>
                         <div className="flex flex-wrap gap-2 mt-2">
                             {quickTopics.map(t => (
                                 <button key={t} onClick={() => handleQuickTopicClick(t)} disabled={isLoading} className="text-sm bg-navy-700 text-teal-400 px-3 py-1 rounded-full hover:bg-teal-400 hover:text-navy-900 transition-colors disabled:opacity-50">
                                     {t}
                                 </button>
                             ))}
                         </div>
                    </div>
                </div>

                <div className="mt-12">
                    {error && (
                        <div className="bg-red-900/50 border border-red-500 text-red-300 p-4 rounded-lg" role="alert">
                            <p className="font-bold">Generation Error</p>
                            <p>{error}</p>
                        </div>
                    )}
                    {article && (
                        <div className="bg-navy-800/50 p-8 sm:p-10 rounded-xl shadow-lg border border-navy-700 animate-fade-in">
                            <MarkdownRenderer content={article} />
                        </div>
                    )}
                </div>
            </div>
        </PageShell>
    );
};

export default BlogPage;