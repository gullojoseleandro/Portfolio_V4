import MUICard from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import NoImage from "assets/img/no-image.jpeg";
import SimpleSeparationLine from "Components/Bars/SimpleSeparationLine";
import useWindowWidth from "Hooks/useWindowWidth";
import { useMemo, useCallback } from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";



const colorsCircles = [
  { color: "#00FF88", name: "power" },
  { color: "#0088FF", name: "data" },
  { color: "#FF0088", name: "signal" },
  { color: "#FFAA00", name: "energy" },
];

const getRandomDelay = () => `${Math.random() * 2}s`;
const getRandomDuration = () => `${2 + Math.random() * 3}s`;

const Card = ({ image, title, content, projectData }) => {
  const activeWidth = useWindowWidth();

  const animationStyle = useMemo(
    () => ({
      animation: `${
        activeWidth > 768 ? "moveUpwards" : "moveSideways"
      } ${getRandomDuration()} ease-in-out infinite alternate`,
      animationDelay: getRandomDelay(),
    }),
    [activeWidth]
  );

  const neonCircleStyle = useCallback(
    (color) => ({
      width: activeWidth > 768 ? "16px" : "14px",
      height: activeWidth > 768 ? "16px" : "14px",
      borderRadius: "50%",
      backgroundColor: color,
      boxShadow: `
            0 0 8px ${color}, 
            0 0 16px ${color}, 
            0 0 24px ${color}, 
            0 0 32px ${color},
            inset 0 0 8px rgba(255, 255, 255, 0.3)
        `,
      transition: "all 0.3s ease",
      border: `1px solid rgba(255, 255, 255, 0.2)`,
      position: "relative",
      animation: "circleGlow 2s ease-in-out infinite alternate",
    }),
    [activeWidth]
  );

  const handleMouseEnter = useCallback((e) => {
    e.currentTarget.style.transform = "scale(1.4) rotate(180deg)";
    e.currentTarget.style.animationDuration = "0.5s";
  }, []);

  const handleMouseLeave = useCallback((e) => {
    e.currentTarget.style.transform = "scale(1) rotate(0deg)";
    e.currentTarget.style.animationDuration = "2s";
  }, []);

  const cardHeight = useMemo(() => {
    if (activeWidth < 768) {
      return "450px"; // Mobile optimizado
    } else {
      return "580px"; // Altura fija para desktop para uniformidad
    }
  }, [activeWidth]);

  return (
    <MUICard
      className="Card p-0 border rounded-4 shadow h-100"
      sx={{
        height: cardHeight,
        backgroundColor: "transparent",
        transition: "transform 0.2s ease-in-out",
        cursor: "none",
        ...animationStyle,
        display: "flex",
        flexDirection: "column",
        margin: "0 8px",
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
      <section style={{ height: activeWidth > 768 ? "280px" : "200px" }}>
        <SimpleSeparationLine />
        <img
          src={image || NoImage}
          alt="card"
          style={{
            backgroundColor: "black",
            filter: "brightness(80%)",
            height: "100%",
            width: "100%",
            objectFit: "cover",
            borderRadius: "5px 5px 0 0",
          }}
          className="img-fluid"
        />
        <SimpleSeparationLine />
      </section>
      <div
        className={
          activeWidth > 768
            ? "flex-grow-1 p-3 d-flex flex-column"
            : "flex-grow-1 d-flex flex-column"
        }
        style={activeWidth <= 768 ? { padding: "12px" } : {}}
      >
        {activeWidth > 768 ? (
          // Desktop layout (optimizado para altura fija)
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ flex: 1, overflow: "hidden" }}>
              <Typography
                align="left"
                className="text-light text-shadow fw-bold mb-2"
                sx={{
                  fontSize: "1.2rem",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)",
                  lineHeight: 1.2,
                }}
              >
                {title}
              </Typography>
              <Typography
                align="left"
                sx={{
                  fontSize: "0.9rem",
                  color: "#FFBA08",
                  lineHeight: 1.4,
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 8,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {content}
              </Typography>
            </div>
          </div>
        ) : (
          // Mobile layout (optimized)
          <div
            className="content-area"
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Typography
                align="left"
                className="text-light text-shadow fw-bold mb-2"
                sx={{
                  fontSize: "1.1rem",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)",
                  lineHeight: 1.2,
                }}
              >
                {title}
              </Typography>
              <Typography
                align="left"
                sx={{
                  fontSize: "0.85rem",
                  color: "#FFBA08",
                  lineHeight: 1.4,
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 5,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {content}
              </Typography>
            </div>
          </div>
        )}
      </div>
      {/* Footer solo si hay iconos para mostrar */}
      {(projectData?.github || (projectData?.href && projectData.href !== "#")) && (
        <footer
          className={"d-flex justify-content-center gap-5 p-1 border-top w-100"}
        >
          {/* Icono de GitHub solo si existe repositorio público */}
          {projectData?.github && (
            <a
              href={projectData.github}
              target="_blank"
              rel="noreferrer"
              style={{ color: "#FFBA08" }}
            >
              <FontAwesomeIcon
                size="2x"
                color="#FFBA08"
                icon={faGithub}
              />
            </a>
          )}
          {/* Icono de web si existe URL */}
          {projectData?.href && projectData.href !== "#" && (
            <a
              href={projectData.href}
              target="_blank"
              rel="noreferrer"
              style={{ color: "#FFBA08" }}
            >
              <FontAwesomeIcon
                size="2x"
                color="#FFBA08"
                icon={faGlobe}
              />
            </a>
          )}
        </footer>
      )}
    </MUICard>
  );
};

export default Card;
