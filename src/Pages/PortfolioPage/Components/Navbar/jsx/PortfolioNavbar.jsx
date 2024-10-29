/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faBars, faTimes, faHome, faProjectDiagram, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import HomeSectionContent from "Pages/PortfolioPage/pageContent/HomeSectionContent";
import ProjectsSectionContent from "Pages/PortfolioPage/pageContent/ProjectsSectionContent";
import ContactsSectionContent from "Pages/PortfolioPage/pageContent/ContactsSectionContent";
import AOS from 'aos';
import useWindowWidth from "Hooks/useWindowWidth";

import "./PortfolioNavbar.css";
import AboutMe from "Pages/PortfolioPage/pageContent/AboutMe";


const PortfolioNavbar = ({ activeIndex, setActiveIndex, setActiveSection }) => {
    const [activeButton, setActiveButton] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isClosing, setIsClosing] = useState(false);
    const activeWidth = useWindowWidth();

    const navLinks = [
        {
            label: "Inicio",
            href: "#inicio",
            section: <HomeSectionContent />,
            index: 0,
            state: false,
            icon: faHome,
        },
        {
            label: "Proyectos",
            href: "#proyectos",
            section: <ProjectsSectionContent />,
            index: 1,
            state: true,
            icon: faProjectDiagram,
        },
        {
            label: "Contacto",
            href: "#contacto",
            section: <ContactsSectionContent />,
            index: 2,
            state: false,
            icon: faEnvelope,
        },
        {
            label: "Sobre Mi",
            href: "#sobremi",
            section: <AboutMe />,
            index: 3,
            state: false,
            icon: faUser,
        },
    ];
    
    const handleToggleButtons = useCallback(() => {
        setActiveButton(prev => !prev);
        if (!activeButton) {
            AOS.refresh();
        }
    }, [activeButton]);

    const handleNavLinkClick = useCallback((index, sectionComponent) => {
        setActiveIndex(index);
        setActiveSection(sectionComponent);
        setHoveredIndex(null);
        if (activeWidth <= 768) {
            setIsClosing(true);
            setTimeout(() => {
                setActiveButton(false);
                setIsClosing(false);
            }, 300);
        }
    }, [setActiveIndex, setActiveSection, activeWidth]);

    const renderedNavLinks = useMemo(() => (
        navLinks.map((link, index) => (
            <button
                key={index}
                className="d-flex align-items-center justify-content-center gap-2 p-2 rounded-3"
                style={{
                    backgroundColor: activeIndex === index ? "rgba(190, 38, 33, 0.7)" : "rgba(255, 186, 8, 1)",
                    borderRadius: "8px",
                    padding: "15px",
                    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                onClick={() => handleNavLinkClick(index, link.section)}
                onMouseEnter={() => { if (link.state) setHoveredIndex(index); }}
                onMouseLeave={() => setHoveredIndex(null)}
            >
                <FontAwesomeIcon icon={link.icon} style={{ marginRight: '8px', color: activeIndex === index ? "#FFF" : "#000" }} />
                <p className="p-0 m-0" style={{ color: activeIndex === index ? "#FFF" : "#000" }}>{link.label}</p>
                {link.state && hoveredIndex === index && (
                    <div
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
                        {"In Construction"}
                    </div>
                )}
            </button>
        ))
    ), [activeIndex, hoveredIndex, handleNavLinkClick]);

    return (
        <nav className="navbar fixed-top d-flex justify-content-between align-items-center" style={{ userSelect: "none", padding: "10px 20px" }}>
            <section className="container-fluid">
                <section className="navbar-brand d-flex align-items-center gap-2" style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" }}>
                    <FontAwesomeIcon size="2x" icon={faCode} color="#FFBA08" />
                    <p className="fw-bold m-0 p-0" style={{ color: "#FFBA08", fontSize: "1.5rem" }}>JLG</p>
                </section>
                {activeWidth > 768 ? (
                    <section>
                        <div className="d-flex mt-3 gap-1">
                            {navLinks.map((link, index) => (
                                <button
                                    key={index}
                                    className="d-flex align-items-center justify-content-center gap-1 p-2 rounded-3"
                                    style={{
                                        backgroundColor: activeIndex === index ? "rgba(190, 38, 33, 0.4)" : "transparent",
                                        border: "2px solid #FFBA08",
                                        transition: "background-color 0.4s, transform 0.4s",
                                        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.7)",
                                        width: "150px",
                                        borderRadius: "8px",
                                        position: "relative",
                                    }}
                                    onClick={() => { setActiveIndex(index); setActiveSection(link.section); }}
                                    onMouseEnter={() => { if (link.state) setHoveredIndex(index); }}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <FontAwesomeIcon icon={link.icon} style={{ color: "#FFBA08" }} />
                                    <p className="fw-bold m-0" style={{ color: "#FFBA08" }}>{link.label}</p>
                                    {link.state && hoveredIndex === index && (
                                        <div
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
                                            {"In Construction"}
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </section>
                ) : (
                    <>
                        <button
                            type="button"
                            className="btn"
                            onClick={handleToggleButtons}
                            style={{ background: "none", border: "none", outline: "none", padding: "5px", marginLeft: 'auto' }}
                        >
                            <FontAwesomeIcon icon={activeButton ? faTimes : faBars} size="3x" style={{ color: "#FFBA08", transition: "transform 0.3s" }} />
                        </button>
                        {activeButton && (
                            <div
                                data-aos={isClosing ? "fade-up" : "fade-down"}
                                className={`d-flex flex-column gap-2`}
                                style={{
                                    listStyle: "none",
                                    cursor: "pointer",
                                    position: "absolute",
                                    width: "40%",
                                    top: "70px",
                                    right: "15px",
                                    backgroundColor: "rgba(255, 186, 8, 0.3)",
                                    borderRadius: "8px",
                                    padding: "10px",
                                    zIndex: 1000,
                                }}>
                                {renderedNavLinks}
                            </div>
                        )}
                    </>
                )}
            </section>
        </nav>
    );
};

export default PortfolioNavbar;
