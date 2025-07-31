import React, { useState, useRef, forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMobileScreen, faCheck, faPaperPlane, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faCopy, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import useWindowWidth from 'Hooks/useWindowWidth';
import emailjs from '@emailjs/browser';

import "./ContactsSectionContent.css";

const icons = [
    {
        href: "https://github.com/gullojoseleandro",
        icon: faGithub,
        alt: "github link",
        name: "Github"
    },
    {
        href: "https://www.linkedin.com/in/gullo-jose-leandro/",
        icon: faLinkedin,
        alt: "linkedin link",
        name: "Linkedin"
    },
    {
        href: "https://wa.me/3489594918",
        icon: faWhatsapp,
        alt: "whatsapp link",
        name: "Whatsapp"
    },
    {
        icon: faMobileScreen,
        alt: "phone link",
        name: "+54 9 3489 59-4918"
    },
    {
        icon: faEnvelope,
        alt: "email link",
        name: "joseleandrogullo@gmail.com"
    },
];



const ContactsSectionContent = forwardRef(({ setActiveSection }, ref) => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };
    const activeWidth = useWindowWidth();
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const [feedback, setFeedback] = useState('');
    const [copiedIconIndex, setCopiedIconIndex] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [formErrors, setFormErrors] = useState({});
    const [focusedField, setFocusedField] = useState(null);

    const validateForm = () => {
        const errors = {};
        if (!formData.name.trim()) errors.name = 'Nombre requerido';
        if (!formData.email.trim()) errors.email = 'Email requerido';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email inválido';
        if (!formData.message.trim()) errors.message = 'Mensaje requerido';
        return errors;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (formErrors[name]) {
            setFormErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();
        
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        setIsSubmitting(true);
        
        emailjs.sendForm('service_3mig6ie', 'template_98hkkr2', form.current, {
            publicKey: 'K9fLKbceuELgaLo1H',
        })
        .then(() => {
            setIsSubmit(true);
            setFormData({ name: '', email: '', message: '' });
            setIsSubmitting(false);
            setTimeout(() => {
                setIsSubmit(false);
            }, 3000);
        }, (error) => {
            console.log('FAILED...', error.text);
            setIsSubmitting(false);
        });
    };

    const handleCopy = (text, index) => {
        navigator.clipboard.writeText(text);
        setFeedback(`Copiado: ${text}`);
        setCopiedIconIndex(index);
        setTimeout(() => { setFeedback(''); setCopiedIconIndex(null) }, 1500);
    };



    return (
        <motion.section
            ref={ref}
            id="contacto"
            className="cv-section d-flex align-items-center justify-content-center px-4"
            style={{ minHeight: '100vh' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            <div className="w-100" style={{ maxWidth: '1200px' }}>
                {activeWidth > 768 ? (
                    <div className="row g-4">
                        {/* Columna izquierda - Información de contacto */}
                        <div className="col-lg-5">
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="futuristic-card h-100 p-4"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    backdropFilter: 'blur(20px)',
                                    borderRadius: '20px',
                                    border: '1px solid rgba(255, 186, 8, 0.2)',
                                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                                }}
                            >
                                <div className="d-flex flex-column h-100">
                                    <motion.h2 
                                        initial={{ y: -20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-center text-light mb-4"
                                        style={{ 
                                            fontSize: "1.8rem", 
                                            fontWeight: "600",
                                            background: "linear-gradient(135deg, #FFBA08, #FFD700)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            backgroundClip: "text"
                                        }}
                                    >
                                        Conectemos
                                    </motion.h2>
                                    
                                    <div className="d-flex flex-column gap-3 flex-grow-1">
                                        {/* Redes Sociales */}
                                        <motion.div 
                                            initial={{ x: -30, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.4 }}
                                            className="mb-3"
                                        >
                                            <h3 className="text-light mb-3" style={{ fontSize: "1.1rem", opacity: 0.9 }}>Redes Sociales</h3>
                                            <div className="d-flex flex-column gap-2">
                                                {icons.filter((icon) => icon.icon !== faMobileScreen && icon.icon !== faEnvelope).map((icon, index) => (
                                                    <motion.a
                                                        key={index}
                                                        href={icon.href}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="d-flex align-items-center gap-3 p-3 text-decoration-none"
                                                        whileHover={{ 
                                                            scale: 1.02,
                                                            x: 5,
                                                            transition: { duration: 0.2 }
                                                        }}
                                                        style={{
                                                            background: "rgba(255, 186, 8, 0.05)",
                                                            borderRadius: "12px",
                                                            border: "1px solid rgba(255, 186, 8, 0.1)",
                                                            transition: "all 0.3s ease"
                                                        }}
                                                        onMouseEnter={(e) => {
                                                            e.target.style.background = "rgba(255, 186, 8, 0.1)";
                                                            e.target.style.borderColor = "rgba(255, 186, 8, 0.3)";
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            e.target.style.background = "rgba(255, 186, 8, 0.05)";
                                                            e.target.style.borderColor = "rgba(255, 186, 8, 0.1)";
                                                        }}
                                                    >
                                                        <FontAwesomeIcon 
                                                            icon={icon.icon} 
                                                            size="lg" 
                                                            style={{ color: "#FFBA08", width: "20px" }}
                                                        />
                                                        <span className="text-light" style={{ fontSize: "0.95rem" }}>
                                                            {icon.name}
                                                        </span>
                                                    </motion.a>
                                                ))}
                                            </div>
                                        </motion.div>
                                        
                                        {/* Contacto Directo */}
                                        <motion.div
                                            initial={{ x: -30, opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.5 }}
                                        >
                                            <h3 className="text-light mb-3" style={{ fontSize: "1.1rem", opacity: 0.9 }}>Contacto Directo</h3>
                                            <div className="d-flex flex-column gap-2">
                                                {icons.filter((icon) => icon.icon === faMobileScreen || icon.icon === faEnvelope).map((icon, index) => (
                                                    <motion.div
                                                        key={index}
                                                        className="d-flex align-items-center justify-content-between p-3"
                                                        whileHover={{ 
                                                            scale: 1.02,
                                                            transition: { duration: 0.2 }
                                                        }}
                                                        style={{
                                                            background: "rgba(255, 186, 8, 0.05)",
                                                            borderRadius: "12px",
                                                            border: "1px solid rgba(255, 186, 8, 0.1)"
                                                        }}
                                                    >
                                                        <div className="d-flex align-items-center gap-3">
                                                            <FontAwesomeIcon 
                                                                icon={icon.icon} 
                                                                size="lg" 
                                                                style={{ color: "#FFBA08", width: "20px" }}
                                                            />
                                                            <span className="text-light" style={{ fontSize: "0.95rem" }}>
                                                                {icon.name}
                                                            </span>
                                                        </div>
                                                        <motion.button
                                                            type="button"
                                                            className="btn p-2"
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            style={{
                                                                background: "rgba(255, 186, 8, 0.1)",
                                                                border: "1px solid rgba(255, 186, 8, 0.3)",
                                                                borderRadius: "8px",
                                                                color: "#FFBA08"
                                                            }}
                                                            onClick={() => handleCopy(icon.name, index)}
                                                        >
                                                            <FontAwesomeIcon
                                                                icon={copiedIconIndex === index ? faCheck : faCopy}
                                                                size="sm"
                                                            />
                                                        </motion.button>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                                {/* Toast Notifications */}
                                <AnimatePresence>
                                    {feedback && (
                                        <motion.div 
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            className="position-fixed bottom-0 start-50 translate-middle-x mb-4"
                                            style={{
                                                background: "rgba(255, 186, 8, 0.9)",
                                                color: "#000",
                                                padding: "12px 24px",
                                                borderRadius: "25px",
                                                fontSize: "0.9rem",
                                                fontWeight: "500",
                                                zIndex: 1000,
                                                backdropFilter: "blur(10px)",
                                                boxShadow: "0 4px 20px rgba(255, 186, 8, 0.3)"
                                            }}
                                        >
                                            {feedback}
                                        </motion.div>
                                    )}
                                    {isSubmit && (
                                        <motion.div 
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            className="position-fixed bottom-0 start-50 translate-middle-x mb-4"
                                            style={{
                                                background: "linear-gradient(135deg, #4CAF50, #45a049)",
                                                color: "white",
                                                padding: "12px 24px",
                                                borderRadius: "25px",
                                                fontSize: "0.9rem",
                                                fontWeight: "500",
                                                zIndex: 1000,
                                                backdropFilter: "blur(10px)",
                                                boxShadow: "0 4px 20px rgba(76, 175, 80, 0.3)"
                                            }}
                                        >
                                            ¡Mensaje enviado con éxito!
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                        
                        {/* Columna derecha - Formulario */}
                        <div className="col-lg-7">
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="futuristic-card h-100 p-4"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    backdropFilter: 'blur(20px)',
                                    borderRadius: '20px',
                                    border: '1px solid rgba(255, 186, 8, 0.2)',
                                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                                }}
                            >
                                <div className="d-flex flex-column h-100">
                                    <motion.h2 
                                        initial={{ y: -20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                        className="text-center text-light mb-4"
                                        style={{ 
                                            fontSize: "1.8rem", 
                                            fontWeight: "600",
                                            background: "linear-gradient(135deg, #FFBA08, #FFD700)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            backgroundClip: "text"
                                        }}
                                    >
                                        Envíame un mensaje
                                    </motion.h2>
                                    
                                    <motion.form 
                                        ref={form} 
                                        onSubmit={sendEmail} 
                                        className="d-flex flex-column gap-4 flex-grow-1"
                                        initial={{ y: 30, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        {/* Campo Nombre */}
                                        <div className="form-floating">
                                            <motion.input
                                                type="text"
                                                name="name"
                                                id="name"
                                                className="form-control"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                onFocus={() => setFocusedField('name')}
                                                onBlur={() => setFocusedField(null)}
                                                style={{
                                                    background: "rgba(255, 255, 255, 0.05)",
                                                    border: `2px solid ${formErrors.name ? '#ff4757' : focusedField === 'name' ? '#FFBA08' : 'rgba(255, 186, 8, 0.3)'}`,
                                                    borderRadius: "12px",
                                                    color: "#fff",
                                                    fontSize: "1rem",
                                                    padding: "12px 16px",
                                                    backdropFilter: "blur(10px)",
                                                    transition: "all 0.3s ease"
                                                }}
                                                whileFocus={{ scale: 1.02 }}
                                                required
                                            />
                                            <label 
                                                htmlFor="name" 
                                                style={{ 
                                                    color: focusedField === 'name' ? '#FFBA08' : 'rgba(255, 255, 255, 0.7)',
                                                    fontSize: '0.9rem'
                                                }}
                                            >
                                                Tu nombre
                                            </label>
                                            {formErrors.name && (
                                                <motion.div 
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-danger mt-1" 
                                                    style={{ fontSize: '0.8rem' }}
                                                >
                                                    {formErrors.name}
                                                </motion.div>
                                            )}
                                        </div>

                                        {/* Campo Email */}
                                        <div className="form-floating">
                                            <motion.input
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="form-control"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                onFocus={() => setFocusedField('email')}
                                                onBlur={() => setFocusedField(null)}
                                                style={{
                                                    background: "rgba(255, 255, 255, 0.05)",
                                                    border: `2px solid ${formErrors.email ? '#ff4757' : focusedField === 'email' ? '#FFBA08' : 'rgba(255, 186, 8, 0.3)'}`,
                                                    borderRadius: "12px",
                                                    color: "#fff",
                                                    fontSize: "1rem",
                                                    padding: "12px 16px",
                                                    backdropFilter: "blur(10px)",
                                                    transition: "all 0.3s ease"
                                                }}
                                                whileFocus={{ scale: 1.02 }}
                                                required
                                            />
                                            <label 
                                                htmlFor="email" 
                                                style={{ 
                                                    color: focusedField === 'email' ? '#FFBA08' : 'rgba(255, 255, 255, 0.7)',
                                                    fontSize: '0.9rem'
                                                }}
                                            >
                                                Tu email
                                            </label>
                                            {formErrors.email && (
                                                <motion.div 
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-danger mt-1" 
                                                    style={{ fontSize: '0.8rem' }}
                                                >
                                                    {formErrors.email}
                                                </motion.div>
                                            )}
                                        </div>

                                        {/* Campo Mensaje */}
                                        <div className="form-floating flex-grow-1">
                                            <motion.textarea
                                                name="message"
                                                id="message"
                                                className="form-control h-100"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                onFocus={() => setFocusedField('message')}
                                                onBlur={() => setFocusedField(null)}
                                                style={{
                                                    background: "rgba(255, 255, 255, 0.05)",
                                                    border: `2px solid ${formErrors.message ? '#ff4757' : focusedField === 'message' ? '#FFBA08' : 'rgba(255, 186, 8, 0.3)'}`,
                                                    borderRadius: "12px",
                                                    color: "#fff",
                                                    fontSize: "1rem",
                                                    padding: "12px 16px",
                                                    backdropFilter: "blur(10px)",
                                                    transition: "all 0.3s ease",
                                                    resize: "none",
                                                    minHeight: "120px"
                                                }}
                                                whileFocus={{ scale: 1.02 }}
                                                required
                                            />
                                            <label 
                                                htmlFor="message" 
                                                style={{ 
                                                    color: focusedField === 'message' ? '#FFBA08' : 'rgba(255, 255, 255, 0.7)',
                                                    fontSize: '0.9rem'
                                                }}
                                            >
                                                Tu mensaje
                                            </label>
                                            {formErrors.message && (
                                                <motion.div 
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-danger mt-1" 
                                                    style={{ fontSize: '0.8rem' }}
                                                >
                                                    {formErrors.message}
                                                </motion.div>
                                            )}
                                        </div>

                                        {/* Botón Enviar */}
                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="btn d-flex align-items-center justify-content-center gap-2 mt-3"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            style={{
                                                background: isSubmitting ? "rgba(255, 186, 8, 0.5)" : "linear-gradient(135deg, #FFBA08, #FFD700)",
                                                border: "none",
                                                borderRadius: "12px",
                                                color: "#000",
                                                fontSize: "1.1rem",
                                                fontWeight: "600",
                                                padding: "12px 32px",
                                                boxShadow: "0 4px 20px rgba(255, 186, 8, 0.3)",
                                                cursor: isSubmitting ? "not-allowed" : "pointer"
                                            }}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <FontAwesomeIcon icon={faSpinner} spin />
                                                    Enviando...
                                                </>
                                            ) : (
                                                <>
                                                    <FontAwesomeIcon icon={faPaperPlane} />
                                                    Enviar mensaje
                                                </>
                                            )}
                                        </motion.button>
                                    </motion.form>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                ) : (
                    <div className="d-flex flex-column gap-3 p-3 mobile-contact-container">
                        {/* Sección de contacto directo */}
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="futuristic-card p-4"
                            style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                backdropFilter: 'blur(20px)',
                                borderRadius: '20px',
                                border: '1px solid rgba(255, 186, 8, 0.2)',
                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                            }}
                        >
                            <motion.h2 
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-center text-light mb-4"
                                style={{ 
                                    fontSize: "1.5rem", 
                                    fontWeight: "600",
                                    background: "linear-gradient(135deg, #FFBA08, #FFD700)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text"
                                }}
                            >
                                Contacto Directo
                            </motion.h2>
                            
                            <div className="d-flex flex-column gap-3">
                                {icons.filter((icon) => icon.icon === faMobileScreen || icon.icon === faEnvelope).map((icon, index) => (
                                    <motion.div
                                        key={index}
                                        className="d-flex align-items-center justify-content-between p-3"
                                        whileHover={{ scale: 1.02 }}
                                        style={{
                                            background: "rgba(255, 186, 8, 0.05)",
                                            borderRadius: "12px",
                                            border: "1px solid rgba(255, 186, 8, 0.1)"
                                        }}
                                    >
                                        <div className="d-flex align-items-center gap-3">
                                            <FontAwesomeIcon 
                                                icon={icon.icon} 
                                                size="lg" 
                                                style={{ color: "#FFBA08", width: "20px" }}
                                            />
                                            <span className="text-light" style={{ fontSize: "0.9rem" }}>
                                                {icon.name}
                                            </span>
                                        </div>
                                        <motion.button
                                            type="button"
                                            className="btn p-2"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            style={{
                                                background: "rgba(255, 186, 8, 0.1)",
                                                border: "1px solid rgba(255, 186, 8, 0.3)",
                                                borderRadius: "8px",
                                                color: "#FFBA08"
                                            }}
                                            onClick={() => handleCopy(icon.name, index)}
                                        >
                                            <FontAwesomeIcon
                                                icon={copiedIconIndex === index ? faCheck : faCopy}
                                                size="sm"
                                            />
                                        </motion.button>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        
                        {/* Sección de formulario */}
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="futuristic-card p-4"
                            style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                backdropFilter: 'blur(20px)',
                                borderRadius: '20px',
                                border: '1px solid rgba(255, 186, 8, 0.2)',
                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                            }}
                        >
                            <motion.h2 
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-center text-light mb-4"
                                style={{ 
                                    fontSize: "1.5rem", 
                                    fontWeight: "600",
                                    background: "linear-gradient(135deg, #FFBA08, #FFD700)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text"
                                }}
                            >
                                Envíame un mensaje
                            </motion.h2>
                            
                            <motion.form 
                                ref={form} 
                                onSubmit={sendEmail} 
                                className="d-flex flex-column gap-3"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                {/* Campo Nombre */}
                                <div className="form-floating">
                                    <motion.input
                                        type="text"
                                        name="name"
                                        id="name-mobile"
                                        className="form-control"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        onFocus={() => setFocusedField('name')}
                                        onBlur={() => setFocusedField(null)}
                                        style={{
                                            background: "rgba(255, 255, 255, 0.05)",
                                            border: `2px solid ${formErrors.name ? '#ff4757' : focusedField === 'name' ? '#FFBA08' : 'rgba(255, 186, 8, 0.3)'}`,
                                            borderRadius: "12px",
                                            color: "#fff",
                                            fontSize: "1rem",
                                            padding: "12px 16px",
                                            backdropFilter: "blur(10px)"
                                        }}
                                        required
                                    />
                                    <label htmlFor="name-mobile" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
                                        Tu nombre
                                    </label>
                                    {formErrors.name && (
                                        <div className="text-danger mt-1" style={{ fontSize: '0.8rem' }}>
                                            {formErrors.name}
                                        </div>
                                    )}
                                </div>

                                {/* Campo Email */}
                                <div className="form-floating">
                                    <motion.input
                                        type="email"
                                        name="email"
                                        id="email-mobile"
                                        className="form-control"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        onFocus={() => setFocusedField('email')}
                                        onBlur={() => setFocusedField(null)}
                                        style={{
                                            background: "rgba(255, 255, 255, 0.05)",
                                            border: `2px solid ${formErrors.email ? '#ff4757' : focusedField === 'email' ? '#FFBA08' : 'rgba(255, 186, 8, 0.3)'}`,
                                            borderRadius: "12px",
                                            color: "#fff",
                                            fontSize: "1rem",
                                            padding: "12px 16px",
                                            backdropFilter: "blur(10px)"
                                        }}
                                        required
                                    />
                                    <label htmlFor="email-mobile" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
                                        Tu email
                                    </label>
                                    {formErrors.email && (
                                        <div className="text-danger mt-1" style={{ fontSize: '0.8rem' }}>
                                            {formErrors.email}
                                        </div>
                                    )}
                                </div>

                                {/* Campo Mensaje */}
                                <div className="form-floating">
                                    <motion.textarea
                                        name="message"
                                        id="message-mobile"
                                        className="form-control"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField(null)}
                                        style={{
                                            background: "rgba(255, 255, 255, 0.05)",
                                            border: `2px solid ${formErrors.message ? '#ff4757' : focusedField === 'message' ? '#FFBA08' : 'rgba(255, 186, 8, 0.3)'}`,
                                            borderRadius: "12px",
                                            color: "#fff",
                                            fontSize: "1rem",
                                            padding: "12px 16px",
                                            backdropFilter: "blur(10px)",
                                            resize: "none",
                                            minHeight: "100px"
                                        }}
                                        required
                                    />
                                    <label htmlFor="message-mobile" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
                                        Tu mensaje
                                    </label>
                                    {formErrors.message && (
                                        <div className="text-danger mt-1" style={{ fontSize: '0.8rem' }}>
                                            {formErrors.message}
                                        </div>
                                    )}
                                </div>

                                {/* Botón Enviar */}
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn d-flex align-items-center justify-content-center gap-2 mt-3"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        background: isSubmitting ? "rgba(255, 186, 8, 0.5)" : "linear-gradient(135deg, #FFBA08, #FFD700)",
                                        border: "none",
                                        borderRadius: "12px",
                                        color: "#000",
                                        fontSize: "1rem",
                                        fontWeight: "600",
                                        padding: "12px 24px",
                                        boxShadow: "0 4px 20px rgba(255, 186, 8, 0.3)",
                                        cursor: isSubmitting ? "not-allowed" : "pointer"
                                    }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <FontAwesomeIcon icon={faSpinner} spin />
                                            Enviando...
                                        </>
                                    ) : (
                                        <>
                                            <FontAwesomeIcon icon={faPaperPlane} />
                                            Enviar mensaje
                                        </>
                                    )}
                                </motion.button>
                            </motion.form>
                        </motion.div>
                        
                        {/* Toast Notifications para móvil */}
                        <AnimatePresence>
                            {feedback && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="position-fixed bottom-0 start-50 translate-middle-x mb-4"
                                    style={{
                                        background: "rgba(255, 186, 8, 0.9)",
                                        color: "#000",
                                        padding: "12px 24px",
                                        borderRadius: "25px",
                                        fontSize: "0.9rem",
                                        fontWeight: "500",
                                        zIndex: 1000,
                                        backdropFilter: "blur(10px)",
                                        boxShadow: "0 4px 20px rgba(255, 186, 8, 0.3)"
                                    }}
                                >
                                    {feedback}
                                </motion.div>
                            )}
                            {isSubmit && (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    className="position-fixed bottom-0 start-50 translate-middle-x mb-4"
                                    style={{
                                        background: "linear-gradient(135deg, #4CAF50, #45a049)",
                                        color: "white",
                                        padding: "12px 24px",
                                        borderRadius: "25px",
                                        fontSize: "0.9rem",
                                        fontWeight: "500",
                                        zIndex: 1000,
                                        backdropFilter: "blur(10px)",
                                        boxShadow: "0 4px 20px rgba(76, 175, 80, 0.3)"
                                    }}
                                >
                                    ¡Mensaje enviado con éxito!
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}
            </div>
        </motion.section>
    );
});

export default ContactsSectionContent;