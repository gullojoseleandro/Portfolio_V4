import React, { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faBars, faTimes, faHome, faProjectDiagram, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import HomeSectionContent from "Pages/PortfolioPage/pageContent/HomeSectionContent";
import ProjectsSectionContent from "Pages/PortfolioPage/pageContent/ProjectsSectionContent";
import ContactsSectionContent from "Pages/PortfolioPage/pageContent/ContactsSectionContent";
import AboutMe from "Pages/PortfolioPage/pageContent/AboutMe";
import useWindowWidth from "Hooks/useWindowWidth";
import useWindowHeight from "Hooks/useWindowHeight";

const navLinks = [
    { label: "Inicio", href: "#inicio", section: <HomeSectionContent />, index: 0, state: false, icon: faHome },
    { label: "Proyectos", href: "#proyectos", section: <ProjectsSectionContent />, index: 1, state: true, icon: faProjectDiagram },
    { label: "Contacto", href: "#contacto", section: <ContactsSectionContent />, index: 2, state: false, icon: faEnvelope },
    { label: "Sobre Mi", href: "#sobremi", section: <AboutMe />, index: 3, state: false, icon: faUser },
];

const PortfolioNavbar = ({ activeIndex, setActiveIndex, setActiveSection }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const activeWidth = useWindowWidth();
    const activeHeight = useWindowHeight();

    const handleNavLinkClick = useCallback((index, sectionComponent) => {
        setActiveIndex(index);
        setActiveSection(sectionComponent);
        setHoveredIndex(null);
        if (activeWidth <= 768) {
            setMobileMenuOpen(false);
        }
    }, [setActiveIndex, setActiveSection, activeWidth]);

    const NavLink = useMemo(() => ({ label, href, icon, index, state }) => (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`d-flex align-items-center justify-content-center gap-2 p-2 rounded-3`}
            style={{
                backgroundColor: activeIndex === index ? "rgba(190, 38, 33, 0.7)" : "rgba(255, 186, 8, 1)",
                boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
                width: activeWidth > 768 ? "150px" : "100%",
                border: activeWidth > 768 ? "2px solid #FFBA08" : "none",
                transition: "background-color 0.4s, transform 0.4s",
                position: "relative",
            }}
            onClick={() => handleNavLinkClick(index, navLinks[index].section)}
            onMouseEnter={() => { if (state) setHoveredIndex(index); }}
            onMouseLeave={() => setHoveredIndex(null)}
        >
            <FontAwesomeIcon icon={icon} style={{ color: activeIndex === index ? "#FFF" : "#000" }} />
            <span className="fw-bold m-0" style={{ color: activeIndex === index ? "#FFF" : "#000" }}>{label}</span>
            {state && hoveredIndex === index && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    style={{
                        position: "absolute",
                        top: "100%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        backgroundColor: "#FFBA08",
                        color: "#000",
                        padding: "5px 10px",
                        borderRadius: "5px",
                        fontSize: "0.8rem",
                        whiteSpace: "nowrap",
                        zIndex: 10,
                    }}
                >
                    En Construcción
                </motion.div>
            )}
        </motion.button>
    ), [activeIndex, activeWidth, handleNavLinkClick, hoveredIndex]);

    return (
        <nav className="navbar fixed-top d-flex justify-content-between align-items-center bg-tranparent" style={{ userSelect: "none", padding: "10px 20px"}}>
            <div className="container-fluid">
                <motion.div 
                    className="navbar-brand d-flex align-items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" }}
                >
                    <FontAwesomeIcon size="2x" icon={faCode} color="#FFBA08" />
                    <p className="fw-bold m-0 p-0" style={{ color: "#FFBA08", fontSize: "1.5rem" }}>JLG</p>
                </motion.div>
                {activeWidth > 768 ? (
                    <div className="d-flex gap-1" style={{width: activeHeight >= 950 ? "auto" : "28rem", height: "auto"}}>
                        {navLinks.map((link, index) => (
                            <NavLink key={link.href} {...link} />
                        ))}
                    </div>
                ) : (
                    <>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="btn"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            style={{ background: "none", border: "none", outline: "none", padding: "5px", marginLeft: 'auto' }}
                        >
                            <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} size="3x" style={{ color: "#FFBA08", transition: "transform 0.3s" }} />
                        </motion.button>
                        <AnimatePresence>
                            {mobileMenuOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="d-flex flex-column gap-2"
                                    style={{
                                        position: "absolute",
                                        top: "100%",
                                        left: 0,
                                        right: 0,
                                        backgroundColor: "rgba(255, 186, 8, 0.3)",
                                        borderRadius: "8px",
                                        padding: "10px",
                                        zIndex: 1000,
                                    }}
                                >
                                    {navLinks.map((link, index) => (
                                        <NavLink key={link.href} {...link} />
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </>
                )}
            </div>
        </nav>
    );
};

export default PortfolioNavbar;