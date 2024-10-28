import React from 'react';
import './TechnologiesBadge.css';

const technologies = [
    // Frontend Technologies
    { name: "react", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" },
    { name: "javascript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "html5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" },
    { name: "css3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" },
    { name: "bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" },
    // Backend Technologies
    { name: "nodejs", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" },
    { name: "php", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" },
    { name: "spring", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg" },
    // Database Technologies
    { name: "mysql", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" },
    { name: "microsoftsqlserver", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg" },
    // Development Tools
    { name: "git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" },
    { name: "npm", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
];

const TechnologiesBadge = () => {
    const repetitions = 4;
    const repeatedTechnologies = Array(repetitions).fill(technologies).flat();

    return (
        <div className="technologies-container">
            <div className="technologies-list">
                {repeatedTechnologies.map((tech, index) => (
                    <img
                        key={`${tech.name}-${index}`}
                        src={tech.img}
                        alt={`${tech.name} logo`} 
                    />
                ))}
            </div>
        </div>
    );
};

export default TechnologiesBadge;
