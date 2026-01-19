import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RotatingTextProps {
    texts: string[];
    rotationInterval?: number;
    className?: string;
}

const RotatingText: React.FC<RotatingTextProps> = ({ texts, rotationInterval = 3000, className }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, rotationInterval);

        return () => clearTimeout(timer);
    }, [index, texts.length, rotationInterval]);

    return (
        <span className={`inline-flex overflow-hidden h-8 sm:h-9 items-center ${className}`}>
            <AnimatePresence mode="popLayout">
                <motion.span
                    key={texts[index]}
                    initial={{ y: '100%' }}
                    animate={{ y: '0%' }}
                    exit={{ y: '-100%' }}
                    transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                    className="inline-block"
                >
                    {texts[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
};

export default RotatingText;
