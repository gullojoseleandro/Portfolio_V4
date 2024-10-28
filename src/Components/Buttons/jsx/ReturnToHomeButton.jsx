import React, { useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import "./ReturnToHomeButton.css";

const ReturnToHomeButton = () => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = useCallback(() => {
        setHovered(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setHovered(false);
    }, []);

    return (
        <Link
            to="/"
            className={`return-home-button ${hovered ? 'hovered' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <FontAwesomeIcon
                icon={faArrowLeft}
                size="lg"
                style={{ color: "#FFBA08" }}
            />
            <p
                className="label"
                style={{ color: "#FFBA08" }}
            >
                Home
            </p>
        </Link>
    );
}

export default ReturnToHomeButton;
