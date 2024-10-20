import React, { useState } from "react";
import CV from "./../../../../assets/Files/Gullo José Leandro - Octubre 2024.pdf";
import "./CVButton.css"; 

const CVButton = () => {
    const [activeButton, setActiveButton] = useState(false);

    return (
        <button
            className={`cv-button ${activeButton ? 'active' : ''}`}
            onMouseEnter={() => setActiveButton(true)}
            onMouseLeave={() => setActiveButton(false)}
        >
            <a 
                href={CV} 
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}>
                <p className="cv-button-text">Descargá mi CV</p>
            </a>
        </button>
    );
}

export default CVButton;
