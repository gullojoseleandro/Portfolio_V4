import React, { useEffect, useState } from 'react';
import useWindowWidth from 'Hooks/useWindowWidth';
import MiFoto from './../../../assets/img/yo.jpeg';
import './AboutMe.css';

const AboutMe = () => {
    const activeWidth = useWindowWidth();
    const isLargeScreen = activeWidth > 768;
    const [typingText, setTypingText] = useState('');
    const [hasTyped, setHasTyped] = useState(false);
    const text = 'Hola, ¡te cuento un poco sobre mí!';

    useEffect(() => {
        if (!hasTyped) {
            const typingInterval = setInterval(() => {
                setTypingText(typingText + text[typingText.length]);
                if (typingText.length === text.length) {
                    clearInterval(typingInterval);
                    setHasTyped(true);
                }
            }, 50);
            return () => clearInterval(typingInterval);
        }
    }, [typingText, hasTyped]);

    return (
        <section
            className={`about-section d-flex flex-column align-items-center justify-content-center text-center mt-5 ${isLargeScreen ? 'h-100' : 'w-100 p-3'
                }`}
        >
            <div
                className={`d-flex ${isLargeScreen ? 'flex-row' : 'flex-column'} align-items-center justify-content-evenly w-100`}
            >
                <div className="text-content d-flex flex-column text-light">
                    <h1
                        className="about-heading"
                        style={{ fontSize: isLargeScreen ? "calc(1.5rem + 2vw)" : "1.2rem", marginBottom: isLargeScreen ? '1.5rem' : '1rem' }}
                    >
                        <span className="typing-animation">{hasTyped ? text : typingText}</span>

                    </h1>

                    <p className="about-paragraph" style={{ fontSize: isLargeScreen ? "1.1rem" : "1rem" }}>
                        Soy un desarrollador Full Stack con sólidos conocimientos principalmente en Javascript y React
                        (es lo que utilizo en mi día a día tanto personal como laboralmente).
                        Tengo experiencia laboral en manejo de bases de datos (SQLServer) y manejo de APIs (REST),
                        como también en ejecutables de consola en C# .NET
                    </p>

                    <p className="about-paragraph" style={{ fontSize: isLargeScreen ? "1.1rem" : "1rem" }}>
                        Actualmente, me encuentro trabajando profesionalmente como Desarrollador Full Stack en una empresa multinacional, al mismo
                        tiempo que me sigo formando en una Licenciatura en Seguridad Informática y una Tecnicatura en Programación.
                    </p>

                    <p className="closing-text" style={{ fontSize: isLargeScreen ? "1.1rem" : "1rem", fontWeight: "bold" }}>
                        ¡Gracias por pasarte por mi portfolio!
                    </p>
                </div>

                <img
                    data-aos="flip-left"
                    src={MiFoto}
                    alt="foto de Leandro Gullo"
                    width={isLargeScreen ? 300 : 150}
                    loading="lazy"
                    className="profile-img rounded-circle img-fluid shadow-lg"
                />
            </div>
        </section>
    );
}

export default AboutMe;
