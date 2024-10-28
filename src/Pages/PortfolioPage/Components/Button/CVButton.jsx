import React, { useState } from "react";
import CV from "./../../../../assets/Files/Gullo José Leandro - Octubre 2024.pdf";
import "./CVButton.css"; 

const CVButton = ({...props}) => {
    const { content, type, href, width, onClick } = props;
    const [activeButton, setActiveButton] = useState(false);

    return (
        <button
            className={`cv-button w-100 ${activeButton ? 'active' : ''}`}
            onMouseEnter={() => setActiveButton(true)}
            onMouseLeave={() => setActiveButton(false)}
            type={type}
            width={width}
            onClick={onClick}
        >
            <a 
                href={href ? {href}: null} 
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}>
                <p className="cv-button-text">{content}</p>
            </a>
        </button>
    );
}

export default CVButton;
