import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faGraduationCap,
  faLaptopCode,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import useWindowWidth from "Hooks/useWindowWidth";
import MiFoto from "./../../../assets/img/yo.jpeg";
import "./AboutMe.css";

const AboutMe = React.forwardRef(({ setActiveSection }, ref) => {
  const activeWidth = useWindowWidth();
  const isLargeScreen = activeWidth > 768;
  const [typingText, setTypingText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasTyped, setHasTyped] = useState(false);
  const text = "Hola, ¡te cuento un poco sobre mí!";

  const startTyping = () => {
    if (hasTyped) return; // Evitar múltiples ejecuciones
    
    setHasTyped(true);
    setTypingText("");
    setIsTyping(true);

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setTypingText(text.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 120);

    return () => clearInterval(typingInterval);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      ref={ref}
      id="sobremi"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
      className="about-section cv-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: isLargeScreen ? "120px 40px 60px" : "100px 20px 40px",
        paddingTop: isLargeScreen ? "120px" : "100px",
      }}
    >
      <div className="about-container">
        {/* Título Principal */}
        <motion.div
          className="about-header"
          variants={itemVariants}
          onViewportEnter={startTyping}
        >
          <h1 className="about-title">
            <span
              className="typing-text"
              style={{
                display: "inline-block",
              }}
            >
              {typingText}
            </span>
            <motion.span
              className="cursor"
              initial={{ opacity: 0 }}
              animate={{ opacity: isTyping ? [0, 1, 0] : 1 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              |
            </motion.span>
          </h1>
        </motion.div>

        {/* Contenido Principal */}
        <div
          className={`about-content ${
            isLargeScreen ? "desktop-layout" : "mobile-layout"
          }`}
        >
          {/* Información Personal */}
          <motion.div className="about-info" variants={itemVariants}>
            <div className="info-card">
              <div className="card-header">
                <FontAwesomeIcon icon={faCode} className="card-icon" />
                <h3>Desarrollador Full Stack</h3>
              </div>
              <div className="card-content">
                <p>
                  Especializado en <span className="highlight">JavaScript</span>{" "}
                  y <span className="highlight">React</span>, con experiencia
                  sólida en desarrollo tanto frontend como backend. Experiencia personal
                  con <span className="highlight">Node.js</span>,{" "}
                  <span className="highlight">Express</span> y{" "}
                  <span className="highlight">Next.js</span> para proyectos completos.
                </p>
                <div className="tech-badges">
                  <span className="tech-badge">React</span>
                  <span className="tech-badge">Next.js</span>
                  <span className="tech-badge">JavaScript</span>
                  <span className="tech-badge">Node.js</span>
                  <span className="tech-badge">Express</span>
                </div>
              </div>
            </div>

            <div className="info-card">
              <div className="card-header">
                <FontAwesomeIcon icon={faLaptopCode} className="card-icon" />
                <h3>Experiencia Profesional</h3>
              </div>
              <div className="card-content">
                <p>
                  Actualmente trabajando como{" "}
                  <span className="highlight">Desarrollador Full Stack</span> en
                  una empresa multinacional, desarrollando aplicaciones web y
                  APIs REST. Experiencia laboral realizando scripts con{" "}
                  <span className="highlight">C#</span> y{" "}
                  <span className="highlight">Python</span>, manejo de bases de datos
                  con vistas y creación de procedures en{" "}
                  <span className="highlight">SQL Server</span>, y utilizando
                  herramientas DevOps como <span className="highlight">Docker</span>,{" "}
                  <span className="highlight">CI/CD</span> y control de versiones con{" "}
                  <span className="highlight">Bitbucket</span>.
                </p>
                <div className="tech-badges">
                  <span className="tech-badge">C# .NET</span>
                  <span className="tech-badge">Python</span>
                  <span className="tech-badge">SQL Server</span>
                  <span className="tech-badge">Docker</span>
                  <span className="tech-badge">CI/CD</span>
                  <span className="tech-badge">Bitbucket</span>
                </div>
              </div>
            </div>

            <div className="info-card">
              <div className="card-header">
                <FontAwesomeIcon icon={faGraduationCap} className="card-icon" />
                <h3>Formación Académica</h3>
              </div>
              <div className="card-content">
                <p>
                  Estudiando{" "}
                  <span className="highlight">
                    Licenciatura en Seguridad Informática
                  </span>{" "}
                  y
                  <span className="highlight">
                    {" "}
                    Tecnicatura en Programación
                  </span>
                  , manteniéndome actualizado con las últimas tecnologías.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Foto de Perfil y Mensaje - Al final */}
        <motion.div 
          className="about-footer"
          variants={itemVariants}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
            marginTop: "3rem",
            width: "100%"
          }}
        >
          <div className="image-container">
            <div className="image-glow"></div>
            <img
              src={MiFoto}
              alt="Leandro Gullo - Desarrollador Full Stack"
              className="profile-image"
              loading="lazy"
            />
          </div>

          {/* Mensaje de Agradecimiento */}
          <motion.div
            className="thank-you-card"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <FontAwesomeIcon icon={faHeart} className="heart-icon" />
            <p>¡Gracias por visitar mi portfolio!</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
});

export default AboutMe;
