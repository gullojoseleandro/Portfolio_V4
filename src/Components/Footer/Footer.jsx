import React, { useState } from 'react';

export const Footer = () => {
    const [isFooterHovered, setIsFooterHovered] = useState(false);
    const [isLinkHovered, setIsLinkHovered] = useState(false);

    return (
        <footer
            className={'fixed-bottom d-flex justify-content-center align-items-center'}
            style={{
                transform: isFooterHovered ? "scale(1.2)" : "scale(0.9)",
                transition: "transform 0.3s ease-in-out",
                userSelect: "none",
            }}
        >
            <h6
                className={'text-light fw-bold text-center p-3 rounded-7'}
                style={{
                    backgroundColor: "rgba(3, 7, 30, 0.7)",
                    boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.7)",
                    borderRadius: "10px",
                    width: "auto",
                    maxWidth: "400px",
                    fontSize: "14px",
                    lineHeight: "1.5",
                    textAlign: "center"
                }}
                onMouseEnter={() => setIsFooterHovered(true)}
                onMouseLeave={() => setIsFooterHovered(false)}
            >
                &copy; Diseñado con mucho
                <span className={'text-danger'}>&nbsp;♥&nbsp;</span>por&nbsp;
                <a
                    style={{
                        textDecoration: "none",
                        color: isLinkHovered ? "#be2621" : "#FFBA08",
                        textShadow: isLinkHovered
                            ? "0 0 5px rgba(190, 38, 33, 0.7), 0 0 10px rgba(190, 38, 33, 0.4)"
                            : "0 0 3px rgba(0, 0, 0, 0.3)",
                        transition: "color 0.3s ease, text-shadow 0.3s ease",
                        fontWeight: "bold"
                    }}
                    href="https://www.linkedin.com/in/gullo-jose-leandro/"
                    target="_blank"
                    rel='noreferrer'
                    onMouseEnter={() => setIsLinkHovered(true)}
                    onMouseLeave={() => setIsLinkHovered(false)}
                >
                    José Leandro Gullo
                </a>
            </h6>
        </footer>
    )
}
