import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faBars } from "@fortawesome/free-solid-svg-icons";

const navLinks = [
    {
        label: "Inicio",
        href: "#inicio"
    },
    {
        label: "Proyectos",
        href: "#proyectos"
    },
    {
        label: "Contacto",
        href: "#contacto"
    },
    {
        label: "Sobre Mi",
        href: "#sobremi"
    },
];

const PortfolioNavbar = () => {
    const [activeWidth, setActiveWidth] = useState(window.innerWidth);
    const [activeIndex, setActiveIndex] = useState();
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
        <>
            <nav className={"navbar navbar-expand-lg fixed-top d-flex justify-content-between align-items-center"}>
                <section className="container-fluid px-4">
                    <section className={"navbar-brand gap-2"} style={{ boxShadow: "0px 0px 5px 2px rgba(0, 0, 0, 1)" }}>
                        <FontAwesomeIcon size="2x" icon={faCode} color="#FFBA08" />
                        <h7 className={"fw-bold"} style={{ color: "#FFBA08" }}>JLG</h7>
                    </section>
                    {activeWidth > 768 ? (
                        <>
                            <section>
                                <ul
                                    style={{ listStyle: "none", cursor: "pointer" }}
                                    className="d-flex mt-3 gap-3"
                                >
                                    {navLinks.map((link, index) => (
                                        <li
                                            key={index}
                                            className={"p-2 rounded-2 text-center"}
                                            style={{
                                                backgroundColor: activeIndex === index ? "rgb(3, 7, 30)" : "rgb(0, 0, 0)",
                                                border: "2px solid #FFBA08",
                                                transition: "background-color 0.4s, transform 0.4s",
                                                boxShadow: "0px 0px 5px 2px rgba(0, 0, 0, 1)",
                                                width: "110px",
                                            }}
                                            onMouseLeave={() => setActiveIndex(null)}
                                            onMouseEnter={() => setActiveIndex(index)}
                                        >
                                            <a
                                                href={link.href}
                                                className={"text-decoration-none fw-bold"}
                                                style={{ color: "#ffba08" }}
                                            >{link.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </>
                    ) : (
                        <>
                            <button type="button" className="btn" >
                                <FontAwesomeIcon icon={faBars} size="3x" style={{ color: "#FFBA08" }} />
                            </button>
                        </>
                    )}
                </section>
            </nav>
        </>
    )
}

export default PortfolioNavbar;