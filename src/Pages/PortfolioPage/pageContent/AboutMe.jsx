import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import useWindowWidth from 'Hooks/useWindowWidth';
import MiFoto from './../../../assets/img/yo.jpeg';

const AboutMe = () => {
    const activeWidth = useWindowWidth();
    const isLargeScreen = activeWidth > 768;
    const [typingText, setTypingText] = useState('');
    const [hasTyped, setHasTyped] = useState(false);
    const text = 'Hola, ¡te cuento un poco sobre mí!';

    useEffect(() => {
        if (!hasTyped) {
            const typingInterval = setInterval(() => {
                setTypingText(prevText => {
                    if (prevText.length === text.length) {
                        clearInterval(typingInterval);
                        setHasTyped(true);
                        return prevText;
                    }
                    return prevText + text[prevText.length];
                });
            }, 50);
            return () => clearInterval(typingInterval);
        }
    }, [hasTyped]);

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.1,
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.section
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="d-flex flex-column align-items-center justify-content-center text-center mt-5"
            style={{
                padding: '20px',
                maxWidth: '1200px',
                height: isLargeScreen ? '100%' : 'auto',
                width: isLargeScreen ? 'auto' : '100%'
            }}
        >
            <div
                className={`d-flex ${isLargeScreen ? 'flex-row' : 'flex-column'} align-items-center justify-content-evenly w-100`}
            >
                <motion.div 
                    className="text-content d-flex flex-column text-light"
                    variants={itemVariants}
                    style={{
                        maxWidth: '700px',
                        padding: '20px'
                    }}
                >
                    <h1
                        style={{
                            fontSize: isLargeScreen ? "calc(1.5rem + 2vw)" : "1.2rem",
                            marginBottom: isLargeScreen ? '1.5rem' : '1rem',
                            fontWeight: 'bold',
                            color: '#00c1d4',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        <span>{hasTyped ? text : typingText}</span>
                    </h1>

                    <motion.p variants={itemVariants} style={{ fontSize: isLargeScreen ? "1.1rem" : "1rem", lineHeight: 1.6, marginBottom: '1rem', color: '#e0e0e0' }}>
                        Soy un desarrollador Full Stack con sólidos conocimientos principalmente en <span style={{ color: '#00c1d4', fontWeight: 'bold' }}>Javascript</span> y <span style={{ color: '#00c1d4', fontWeight: 'bold' }}>React</span>
                        (es lo que utilizo en mi día a día tanto personal como laboralmente).
                        Tengo experiencia laboral en manejo de bases de datos (SQLServer) y manejo de APIs (REST),
                        como también en ejecutables de consola en C# .NET
                    </motion.p>

                    <motion.p variants={itemVariants} style={{ fontSize: isLargeScreen ? "1.1rem" : "1rem", lineHeight: 1.6, marginBottom: '1rem', color: '#e0e0e0' }}>
                        Actualmente, me encuentro trabajando profesionalmente como Desarrollador Full Stack en una empresa multinacional, al mismo
                        tiempo que me sigo formando en una Licenciatura en Seguridad Informática y una Tecnicatura en Programación.
                    </motion.p>

                    <motion.p variants={itemVariants} style={{ fontSize: isLargeScreen ? "1.1rem" : "1rem", fontWeight: "bold", color: '#f0db4f', marginTop: '1rem' }}>
                        ¡Gracias por pasarte por mi portfolio!
                    </motion.p>
                </motion.div>

                <motion.img
                    variants={itemVariants}
                    src={MiFoto}
                    alt="foto de Leandro Gullo"
                    width={isLargeScreen ? 300 : 150}
                    height={isLargeScreen ? 300 : 150}
                    loading="lazy"
                    className="rounded-circle img-fluid shadow-lg"
                    style={{
                        border: '4px solid #00c1d4',
                        transition: 'transform 0.3s ease',
                        ...(isLargeScreen && {
                            float: 'right',
                            margin: '0 20px 20px 0',
                            shapeOutside: 'circle(50%)',
                            clipPath: 'circle(50%)'
                        })
                    }}
                    whileHover={{ scale: 1.05 }}
                />
            </div>
        </motion.section>
    );
}

export default AboutMe;