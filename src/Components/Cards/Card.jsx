import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MUICard from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import NoImage from 'assets/img/no-image.jpeg';
import SimpleSeparationLine from 'Components/Bars/SimpleSeparationLine';
import useWindowWidth from 'Hooks/useWindowWidth';

import "./Card.css"

const colorsCircles = [
    { color: "#00FF00" }, // Verde neón
    { color: "#00BFFF" }, // Azul neón
    { color: "#FF1493" }, // Rosa neón
    { color: "#FFFF00" }, // Amarillo neón
];

const getRandomDelay = () => `${Math.random() * 2}s`;
const getRandomDuration = () => `${2 + Math.random() * 3}s`;

const getAnimation = (activeWidth) => {
    return activeWidth > 768
        ? 'moveUpwards'
        : 'moveSideways';
};

const Card = ({ ...props }) => {
    const { image, title, content } = props;
    const activeWidth = useWindowWidth();

    const animationStyle = {
        animation: `${getAnimation(activeWidth)} ${getRandomDuration()} ease-in-out infinite alternate`,
        animationDelay: getRandomDelay(),
    };

    const neonCircleStyle = (color) => ({
        width: activeWidth > 768 ? "15px" : "10px",
        height: activeWidth > 768 ? "15px" : "10px",
        borderRadius: "50%",
        backgroundColor: color,
        boxShadow: `0 0 5px ${color}, 
                    0 0 10px ${color}, 
                    0 0 20px ${color}, 
                    0 0 30px ${color}`,
        transition: "transform 0.3s ease",
    });

    return (
        <section className="d-flex flex-column align-items-center justify-content-center text-center m-3" style={{ height: activeWidth > 768 ? "400px" : "350px" }}>
            <MUICard
                className="p-0 m-0 border rounded-5 shadow hover-shadow h-100"
                sx={{
                    width: activeWidth > 768 ? (activeWidth < 1024 ? "300px" : "470px") : "100%",
                    backgroundColor: 'transparent',
                    overflow: "hidden",
                    transition: 'transform 0.2s ease-in-out',
                    ...animationStyle,
                    '&:hover': {
                        transform: 'scale(1.05)',
                    },
                }}
            >
                <header className="d-flex m-3 gap-2" style={{ height: "3%" }}>
                    {colorsCircles.map((color, index) => (
                        <div
                            key={index}
                            style={neonCircleStyle(color.color)}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "scale(1.1)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "scale(1)";
                            }}
                        />
                    ))}
                </header>
                <section style={{ height: "65%" }}>
                    <SimpleSeparationLine />
                    <img
                        src={image ? image : NoImage}
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
                <div
                    className={`d-flex flex-column ps-3 py-3 ${activeWidth > 768 ? 'gap-2' : 'gap-2'}`}
                    style={{ backgroundColor: 'transparent' }}
                >
                    <Typography
                        align="left"
                        className="text-light"
                        sx={{ fontSize: "calc(0.9rem + 1vw)", textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        align="left"
                        sx={{ fontSize: activeWidth > 768 ? "calc(0.4rem + 1vw)" : "calc(0.6rem + 1vw)", color: '#FFBA08' }}
                    >
                        {content}
                    </Typography>
                </div>
            </MUICard>
        </section>
    );
};

export default Card;
