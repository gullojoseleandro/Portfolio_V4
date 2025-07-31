import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './ScrollToTopButton.css';

const ScrollToTopButton = ({ isVisible }) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const buttonVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    className="scroll-to-top"
                    onClick={scrollToTop}
                    aria-label="Volver arriba"
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={{ type: 'spring', stiffness: 120, damping: 15 }}
                >
                    <FaArrowUp />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTopButton;
