import React, { useState } from "react";
import CV from "./../../../../assets/Files/Gullo José Leandro - Octubre 2024.pdf";

const CVButton = () => {
    const [activeButton, setActiveButton] = useState(false);

    return (
        <button
            style={{
                backgroundColor: activeButton ? "rgb(190, 38, 33)" : "#FFBA08",
                color: activeButton ? "#FFBA08" : "#03071E",
                fontSize: "0.875rem",
                padding: "10px 20px", 
                borderRadius: "30px", 
                transition: "background-color 0.4s, transform 0.4s, box-shadow 0.4s",
                transform: activeButton ? "scale(1.1)" : "scale(1)", 
                boxShadow: "0 0 7rem #FFBA08",
                outline: "none", 
            }}
            className="btn border border-none fw-bold cursor-pointer"
            onMouseEnter={() => setActiveButton(true)}
            onMouseLeave={() => setActiveButton(false)}
        >
            <a 
                href={CV} 
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "inherit"}}>
                <p className={"p-0 m-0"}>Descargá mi CV</p>
            </a>
        </button>
    );
}

export default CVButton;
