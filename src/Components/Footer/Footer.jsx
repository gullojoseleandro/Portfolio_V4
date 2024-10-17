import React, { useState } from 'react';

export const Footer = ({ ...props }) => {
    const [isFooterHovered, setIsFooterHovered] = useState(false);
    const [isLinkHovered, setIsLinkHovered] = useState(false);

    return (
        <>
            <footer
                className={'fixed-bottom d-flex justify-content-center align-items-center'}
                style={{ transform: isFooterHovered ? "scale(1.1)" : "scale(0.7)", transition: "transform 0.4s" }}>
                <h6
                    className={'text-light fw-bold text-center p-4 w-auto rounded-7 d-flex align-items-center'}
                    style={{ width: "100px", height: "10px", backgroundColor: "rgb(3, 7, 30, 0.7)", boxShadow: "0px 0px 5px 2px rgba(0, 0, 0, 1)" }}
                    onMouseEnter={() => setIsFooterHovered(true)}
                    onMouseLeave={() => setIsFooterHovered(false)}
                >
                    &copy; Diseñado con mucho
                    <span className={'text-danger'}>&nbsp;♥&nbsp;</span> por&nbsp;
                    <a
                        style={{
                            textDecoration: "none",
                            color: isLinkHovered ? "rgb(190, 38, 33)" : "#FFBA08",
                            textShadow: isLinkHovered
                                ? "0 0 3px rgba(190, 38, 33, 0.8), 0 0 20px rgba(190, 38, 33, 0.5), 0 0 30px rgba(190, 38, 33, 0.3)"
                                : "",
                            transition: "all 0.3s ease",
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
        </>
    )
}