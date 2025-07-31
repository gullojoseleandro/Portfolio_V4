import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import SocialMenu from "../../../Components/SocialMenu/SocialMenu";
import Title from "../Components/Title/Title";
import TechnologiesBadge from "Components/Badges/TechnologiesBadge";

const HomeSectionContent = forwardRef(({ onNavClick }, ref) => {

    return (
        <motion.section 
            ref={ref}
            id="resumen"
            className="cv-section d-flex flex-column h-100 align-items-center justify-content-center text-center px-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { 
                        duration: 0.8,
                        when: "beforeChildren",
                        staggerChildren: 0.2
                    } 
                }
            }}
        >
            <div className="d-flex flex-column align-items-center w-100" style={{ paddingBottom: '2rem' }}>
                {/* Sección superior: Redes + Título */}
                <motion.div
                    variants={{
                        hidden: { y: -50, opacity: 0 },
                        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
                    }}
                    className="mb-3"
                >
                    <SocialMenu />
                </motion.div>

                <motion.div
                    variants={{
                        hidden: { scale: 0.8, opacity: 0 },
                        visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
                    }}
                    className="mb-5"
                >
                    <Title />
                </motion.div>

                {/* Sección media: Tecnologías */}
                <motion.div
                    variants={{
                        hidden: { y: 50, opacity: 0 },
                        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
                    }}
                    className="mb-3 py-4 w-100"
                >
                    <TechnologiesBadge />
                </motion.div>

                {/* Sección inferior: Botones */}
                <motion.div
                    variants={{
                        hidden: { y: 50, opacity: 0 },
                        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
                    }}
                    className="d-flex justify-content-center gap-4 flex-wrap pt-5"
                    style={{ marginTop: 'auto' }}
                >
                    <motion.button
                        whileHover={{ 
                            scale: 1.05,
                            backgroundColor: 'rgba(255, 186, 8, 0.15)',
                            boxShadow: '0 4px 20px rgba(255, 186, 8, 0.2)'
                        }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onNavClick('sobremi')}
                        style={modernButtonStyle}
                        title="Sobre mí"
                        className="modern-btn"
                    >
                        <FontAwesomeIcon icon={faUser} style={{ fontSize: '1rem' }} />
                        <span>Sobre mí</span>
                    </motion.button>
                    <motion.button
                        whileHover={{ 
                            scale: 1.05,
                            backgroundColor: 'rgba(255, 186, 8, 0.15)',
                            boxShadow: '0 4px 20px rgba(255, 186, 8, 0.2)'
                        }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onNavClick('proyectos')}
                        style={modernButtonStyle}
                        title="Proyectos"
                        className="modern-btn"
                    >
                        <FontAwesomeIcon icon={faProjectDiagram} style={{ fontSize: '1rem' }} />
                        <span>Proyectos</span>
                    </motion.button>
                    <motion.button
                        whileHover={{ 
                            scale: 1.05,
                            backgroundColor: 'rgba(255, 186, 8, 0.15)',
                            boxShadow: '0 4px 20px rgba(255, 186, 8, 0.2)'
                        }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onNavClick('contacto')}
                        style={modernButtonStyle}
                        title="Contacto"
                        className="modern-btn"
                    >
                        <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '1rem' }} />
                        <span>Contacto</span>
                    </motion.button>
                </motion.div>
            </div>
        </motion.section>
    );
});

const modernButtonStyle = {
    background: 'rgba(255, 186, 8, 0.02)',
    border: 'none',
    borderRadius: '25px',
    padding: '14px 24px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: '#FFBA08',
    fontSize: '0.95rem',
    fontWeight: '400',
    fontFamily: 'Neue Montreal, sans-serif',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
    outline: 'none',
    textTransform: 'none',
    letterSpacing: '0.2px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
};

export default HomeSectionContent;