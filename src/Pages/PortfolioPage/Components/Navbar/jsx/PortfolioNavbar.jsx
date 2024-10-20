import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import HomeSectionContent from "Pages/PortfolioPage/pageContent/HomeSectionContent";
import ProjectsSectionContent from "Pages/PortfolioPage/pageContent/ProjectsSectionContent";

const navLinks = [
    {
        label: "Inicio",
        href: "#inicio",
        section: <HomeSectionContent />,
        index: 0,
        state: false
    },
    {
        label: "Proyectos",
        href: "#proyectos",
        section: <ProjectsSectionContent />,
        index: 1,
        state: false
    },
    {
        label: "Contacto",
        href: "#contacto",
        index: 2,
        state: true
    },
    {
        label: "Sobre Mi",
        href: "#sobremi",
        index: 3,
        state: true
    },
];

const PortfolioNavbar = ({ activeIndex, setActiveIndex, setActiveSection }) => {
    const [activeWidth, setActiveWidth] = useState(window.innerWidth);
    const [activeButton, setActiveButton] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    useEffect(() => {
        const handleResize = () => {
            setActiveWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav
            className="navbar navbar-expand-lg fixed-top d-flex justify-content-between align-items-center bg-transparent"
            style={{ userSelect: "none", padding: "10px 20px" }}
        >
            <section className="container-fluid">
                <section
                    className="navbar-brand d-flex align-items-center gap-2"
                    style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" }}
                >
                    <FontAwesomeIcon
                        size="2x"
                        icon={faCode}
                        color="#FFBA08"
                    />
                    <h1
                        className="fw-bold"
                        style={{ color: "#FFBA08", fontSize: "1.5rem" }}>
                        JLG
                    </h1>
                </section>
                {activeWidth > 768 ? (
                    <section>
                        <div className="d-flex mt-3 gap-3">
                            {navLinks.map((link, index) => (
                                <button
                                    key={index}
                                    className="p-2 rounded-3 text-center"
                                    style={{
                                        backgroundColor: activeIndex === index ? "rgba(190, 38, 33, 0.4)" : "transparent",
                                        border: "2px solid #FFBA08",
                                        transition: "background-color 0.4s, transform 0.4s",
                                        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.7)",
                                        width: "120px",
                                        borderRadius: "8px",
                                        position: "relative"
                                    }}
                                    onClick={() => { setActiveIndex(index); setActiveSection(link.section) }}
                                    onMouseEnter={() => {
                                        if (link.state) setHoveredIndex(index);
                                    }}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <p
                                        className="fw-bold m-0"
                                        style={{ color: "#FFBA08" }}
                                    >
                                        {link.label}
                                    </p>
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
                                                zIndex: 10
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
                            onClick={() => setActiveButton(!activeButton)}
                            style={{ background: "none", border: "none", outline: "none", padding: "5px" }}
                        >
                            <FontAwesomeIcon
                                icon={activeButton ? faTimes : faBars}
                                size="3x"
                                style={{ color: "#FFBA08", transition: "transform 0.3s" }}
                            />
                        </button>
                        {activeButton && (
                            <ul
                                className="d-flex flex-column gap-2"
                                style={{
                                    listStyle: "none",
                                    cursor: "pointer",
                                    position: "absolute",
                                    top: "70px",
                                    left: 0,
                                    right: 0,
                                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                                    borderRadius: "8px",
                                    padding: "10px",
                                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                                    transition: "transform 0.3s ease-in-out",
                                    zIndex: 1000,
                                }}
                            >
                                {navLinks.map((link, index) => (
                                    <li
                                        key={index}
                                        className="p-2 text-center rounded-3"
                                        style={{
                                            backgroundColor: activeIndex === index ? "rgba(190, 38, 33, 0.4)" : "transparent",
                                            transition: "background-color 0.4s",
                                        }}
                                        onClick={() => { setActiveIndex(index); setActiveSection(link.section); setActiveButton(false) }}
                                    >
                                        <p className="fw-bold" style={{ color: "#FFBA08" }}>{link.label}</p>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </>
                )}
            </section>
        </nav>
    );
}

export default PortfolioNavbar;
