import MUICard from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import NoImage from 'assets/img/no-image.jpeg';
import SimpleSeparationLine from 'Components/Bars/SimpleSeparationLine';
import useWindowWidth from 'Hooks/useWindowWidth';
import useWindowHeight from 'Hooks/useWindowHeight';
import { useMemo, useCallback } from 'react';
import "./Card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const projectIcons = [
    {
        href: "https://github.com/gullojoseleandro/facilCV",
        icon: faGithub,
        alt: "github link"
    },
    {
        href: "https://facilcv.netlify.app/",
        icon: faGlobe,
        alt: "project demo"
    },
];

const colorsCircles = [
    { color: "#00FF00" },
    { color: "#00BFFF" },
    { color: "#FF1493" },
    { color: "#FFFF00" },
];

const getRandomDelay = () => `${Math.random() * 2}s`;
const getRandomDuration = () => `${2 + Math.random() * 3}s`;

const Card = ({ image, title, content }) => {
    const activeWidth = useWindowWidth();
    const activeHeight = useWindowHeight();

    const animationStyle = useMemo(() => ({
        animation: `${activeWidth > 768 ? 'moveUpwards' : 'moveSideways'} ${getRandomDuration()} ease-in-out infinite alternate`,
        animationDelay: getRandomDelay(),
    }), [activeWidth]);

    const neonCircleStyle = useCallback((color) => ({
        width: activeWidth > 768 ? "15px" : "15px",
        height: activeWidth > 768 ? "15px" : "15px",
        borderRadius: "50%",
        backgroundColor: color,
        boxShadow: `0 0 5px ${color}, 0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}`,
        transition: "transform 0.3s ease",
    }), [activeWidth]);

    const handleMouseEnter = useCallback((e) => {
        e.currentTarget.style.transform = "scale(1.3)";
    }, []);

    const handleMouseLeave = useCallback((e) => {
        e.currentTarget.style.transform = "scale(1)";
    }, []);

    const cardHeight = useMemo(() => {
        if (activeHeight >= 940) {  
            return "580px";
        } else if (activeHeight >= 600) {  
            return "490px";  
        } else if (activeHeight >= 1080) {  
            return "590px";
        } else if (activeWidth < 768) {  
            return "450px";
        }
        return "470px"; 
    }, [activeWidth, activeHeight]);

    return (
        <section
            className="d-flex flex-column align-items-center justify-content-center text-center m-3"
            style={{ height: cardHeight }}  
        >
            <MUICard
                className="Card p-0 m-0 border rounded-5 shadow h-100"
                sx={{
                    width: activeWidth > 768 ? (activeWidth < 1024 ? "300px" : "500px") : "100%",
                    backgroundColor: 'transparent',
                    overflow: activeWidth > 768 ? "" : "hidden",
                    transition: 'transform 0.2s ease-in-out',
                    cursor: 'none',
                    ...animationStyle,
                }}
            >
                <header className="d-flex m-3 gap-2">
                    {colorsCircles.map((color, index) => (
                        <div
                            key={index}
                            style={neonCircleStyle(color.color)}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        />
                    ))}
                </header>
                <section style={{ height: activeWidth > 768 ? "250px" : "220px" }}>
                    <SimpleSeparationLine />
                    <img
                        src={image || NoImage}
                        alt="card"
                        style={{
                            backgroundColor: 'black',
                            filter: 'brightness(80%)',
                            height: '100%',
                            borderRadius: '5px 5px 0 0',
                        }}
                        className="w-100 img-fluid"
                    />
                    <SimpleSeparationLine />
                </section>
                <div className={"flex-grow-1 p-3 overflow-y-auto"}>
                    <Typography
                        align="left"
                        className="text-light text-shadow fw-bold"
                        sx={{ fontSize: "calc(0.6rem + 1vw)", textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        align="left"
                        sx={{ fontSize: activeWidth > 768 ? "calc(0.4rem + 0.6vw)" : "calc(0.6rem + 1vw)", color: '#FFBA08' }}
                    >
                        {content}
                    </Typography>
                </div>
                <footer className={"d-flex justify-content-center gap-5 p-1 border-top position-absolute bottom-0 w-100"}>
                    {projectIcons.map((projectIcon, index) => (
                        <a
                            key={index}
                            href={projectIcon.href}
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: '#FFBA08' }}
                        >
                            <FontAwesomeIcon
                                size="2x"
                                color="#FFBA08"
                                icon={projectIcon.icon}
                            />
                        </a>
                    ))}
                </footer>
            </MUICard>
        </section>
    );
};

export default Card;