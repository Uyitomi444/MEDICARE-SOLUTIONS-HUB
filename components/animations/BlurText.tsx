import React from "react";
import { motion, Variants } from "framer-motion";

interface BlurTextProps {
  text: string;
  className?: string;
  staggerAmount?: number;
  once?: boolean;
}

const BlurText: React.FC<BlurTextProps> = ({
  text,
  className = "",
  staggerAmount = 0.02,
  once = true,
}) => {
  const letters = Array.from(text);

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: staggerAmount, delayChildren: i * 0.04 },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      filter: "blur(8px)",
    },
  };

  return (
    <motion.h1
      className={className}
      style={{ display: "flex", overflow: "hidden" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default BlurText;
