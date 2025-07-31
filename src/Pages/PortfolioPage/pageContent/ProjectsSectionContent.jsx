import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Card from "../../../Components/Cards/Card";
import Slider from "react-slick";

import {
  SiJavascript,
  SiReact,
  SiDotnet,
  SiAstro,
  SiPython,
  SiNodedotjs,
  SiMongodb,
  SiVite,
  SiCss3,
  SiCplusplus,
  SiNginx,
  SiMysql,
  SiNextdotjs,
  SiStorybook,
  SiFigma,
} from "react-icons/si";
import { FaDatabase, FaFilePdf } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import useWindowWidth from "Hooks/useWindowWidth";
import useWindowHeight from "Hooks/useWindowHeight";
import FacilCV from "./../../../assets/img/FacilCV.png";
import SanamenteOnline from "./../../../assets/img/SanamenteOnline.png";
import DotDagerWeb from "./../../../assets/img/DotDagerWeb.png";


const projects = [
  {
    title: "FacilCV",
    content: `App web que permitirá a los usuarios crear y compartir su CV público así como también descargarlo en formato PDF. 
Desarrollada con C# y ASP.NET en el backend y Astro con React en el frontend. (En desarrollo)`,
    image: FacilCV, // IMAGEN_PLACEHOLDER
    technologies: ["Astro", "React", "C#", "JavaScript"],
    href: "https://facilcv.netlify.app/",
    github: "https://github.com/gullojoseleandro/facilCV",
  },
  {
    title: "SanamenteOnline",
    content: `Plataforma web de salud mental que conecta pacientes con profesionales de la psicología. 
Incluye sistema de citas, chat en tiempo real, gestión de historiales clínicos, dashboard para profesionales y tareas programadas con cron. 
Desarrollada con Node.js, Express, Next.js y MySQL. 
Proyecto freelance para cliente privado.`,
    image: SanamenteOnline, 
    technologies: ["Node.js", "Express", "Next.js", "MySQL", "JavaScript"],
    href: "#", 
    github: null, 
  },
  {
    title: "DotDager Web",
    content: `Sitio web desarrollado para el YouTuber DotDager, incluyendo sección de videos, noticias y contenido interactivo. \nDiseño moderno y responsivo con animaciones fluidas. \nDesarrollada con React y Vite para óptimo rendimiento.`,
    image: DotDagerWeb, 
    technologies: ["React", "Vite", "JavaScript", "CSS3"],
    href: "https://dotdagerbyjlg.netlify.app/",
    github: "https://github.com/gullojoseleandro/Dot-Dager---Landing-Page",
  },
  {
    title: "Prismatica UI",
    content: `Mi primera librería de componentes para React, desarrollada con TypeScript para seguridad de tipos y código mantenible. 
Utiliza CSS Modules para estilos modulares y con alcance específico, Storybook para desarrollo y testing aislado de componentes, y Rollup como empaquetador para distribución eficiente. 
Publicada en NPM para uso en proyectos React.`,
    image: null, // IMAGEN_PLACEHOLDER - Agregar imagen de Prismatica UI
    technologies: ["React", "JavaScript", "CSS3", "Storybook", "Figma"],
    href: "https://www.npmjs.com/package/prismatica-ui",
    github: null, // Agregar GitHub cuando esté disponible
  },
  {
    title: "MU Online Server",
    content: `Servidor privado de MU Online completamente funcional con sistema de ranking, eventos automáticos y web de administración. \nInfraestructura robusta con base de datos optimizada y sistema de respaldos. \nWeb en desarrollo con React para gestión de usuarios y estadísticas.`,
    image: null, // IMAGEN_PLACEHOLDER - Agregar imagen de MU Online Server
    technologies: ["C++", "SQL Server", "React", "Nginx"],
  },
  {
    title: "Sistema Veterinaria",
    content: `Aplicación de escritorio para gestión integral de veterinarias con CRUD completo de pacientes, dueños y citas. \nInterfaz intuitiva con Swing, base de datos MySQL y reportes en PDF. \nIncluye control de inventario y historial médico de mascotas.`,
    image: null, // IMAGEN_PLACEHOLDER - Agregar imagen de Sistema Veterinaria
    technologies: ["Java", "Swing", "MySQL", "PDF"],
    github: "https://github.com/gullojoseleandro/CRUD_peluqueria_canina",
  },
];

const formatContent = (content) => {
  return content.split("\n").map((text, index) => (
    <span key={index}>
      {text}
      <br />
    </span>
  ));
};

const techIcons = [
  { tech: "Astro", icon: SiAstro },
  { tech: "JavaScript", icon: SiJavascript },
  { tech: "React", icon: SiReact },
  { tech: "C#", icon: SiDotnet },
  { tech: "Java", icon: FaJava },
  { tech: "Python", icon: SiPython },
  { tech: "Node.js", icon: SiNodedotjs },
  { tech: "Express", icon: SiNodedotjs }, // Usando mismo icono que Node.js
  { tech: "Next.js", icon: SiNextdotjs },
  { tech: "MongoDB", icon: SiMongodb },
  { tech: "Vite", icon: SiVite },
  { tech: "CSS3", icon: SiCss3 },
  { tech: "C++", icon: SiCplusplus },
  { tech: "SQL Server", icon: FaDatabase }, // Usando FaDatabase como alternativa
  { tech: "Nginx", icon: SiNginx },
  { tech: "Swing", icon: FaJava }, // Usa el mismo icono de Java
  { tech: "MySQL", icon: SiMysql },
  { tech: "PDF", icon: FaFilePdf }, // Usando FaFilePdf
  { tech: "Storybook", icon: SiStorybook },
  { tech: "Figma", icon: SiFigma },
];

const determineSlidesToShow = (width, height) => {
  if (width >= 1400) return 3;
  if (width >= 1000) return 2.5;
  if (width >= 800) return 2;
  return 1;
};

const ProjectsSectionContent = React.forwardRef((props, ref) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const activeWidth = useWindowWidth();
  const activeHeight = useWindowHeight();
  const [selectedTechnology, setSelectedTechnology] = useState(null);

  const usedTechnologies = useMemo(() => {
    const technologies = new Set();
    projects.forEach((project) => {
      project.technologies.forEach((tech) => technologies.add(tech));
    });
    return technologies;
  }, []);

  const availableTechIcons = useMemo(() => {
    return techIcons.filter((icon) => usedTechnologies.has(icon.tech));
  }, [usedTechnologies]);

  const filteredProjects = selectedTechnology
    ? projects.filter((project) =>
        project.technologies.includes(selectedTechnology)
      )
    : projects;

  const slidesToShow = useMemo(
    () => determineSlidesToShow(activeWidth, activeHeight),
    [activeWidth, activeHeight]
  );

  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2.8,
          variableWidth: false,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2.2,
          variableWidth: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1.5,
          variableWidth: false,
        },
      },
    ],
  };

  return (
    <motion.section
      ref={ref}
      id="proyectos"
      className={`cv-section d-flex flex-column align-items-center justify-content-center`}
      style={{ height: "100vh" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={sectionVariants}
    >
      <motion.div
        variants={itemVariants}
        className={`${
          activeWidth > 768
            ? "d-flex flex-column justify-content-center w-100 h-100"
            : "w-100 d-flex flex-column h-100"
        }`}
        style={{
          width: "90%",
          maxWidth: "100%",
          paddingTop: activeWidth <= 768 ? "2rem" : "0",
          overflow: "hidden",
        }}
      >
        <motion.div
          variants={itemVariants}
          style={{ width: "100%", flexShrink: 0 }}
        >
          <div className="tech-icons d-flex flex-column justify-content-center align-items-center">
            <label
              htmlFor="filter"
              className={"mb-2"}
              style={{ color: "#FFBA08" }}
            >
              Filtra por tecnología:
            </label>
            <div className={"d-flex flex-wrap justify-content-center gap-4"}>
              {availableTechIcons.map(({ tech, icon: IconComponent }) => (
                <IconComponent
                  key={tech}
                  size="2em"
                  style={{
                    cursor: "pointer",
                    color:
                      selectedTechnology === tech
                        ? "#FFBA08"
                        : "rgba(255, 186, 8, 0.3)",
                  }}
                  onClick={() =>
                    setSelectedTechnology(
                      selectedTechnology === tech ? null : tech
                    )
                  }
                  title={`Filtrar por ${tech}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
        {activeWidth > 768 ? (
          <div
            style={{
              width: "100%",
              marginTop: "1.5rem",
              overflow: "visible",
              padding: "20px 0",
              height: "620px",
            }}
            className="custom-slick-container"
          >
            <style>{`
                            .custom-slick-container .slick-list { 
                                overflow: visible !important; 
                                margin: 0 -10px;
                                padding: 20px 0;
                            }
                            .custom-slick-container .slick-track {
                                display: flex !important;
                                align-items: stretch;
                                justify-content: center;
                                height: 580px !important;
                            }
                            .custom-slick-container .slick-slide {
                                height: 580px !important;
                                display: flex !important;
                                justify-content: center;
                            }
                            .custom-slick-container .slick-slide > div {
                                width: 100%;
                                max-width: 460px;
                                min-width: 340px;
                                height: 580px !important;
                            }
                            .custom-slick-container .slick-slide .Card {
                                height: 580px !important;
                                min-height: 580px !important;
                                max-height: 580px !important;
                            }
                        `}</style>
            <Slider {...settings}>
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  style={{
                    padding: "0 24px",
                    height: "580px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Card
                    title={project.title}
                    content={formatContent(project.content)}
                    image={project.image || null}
                    projectData={project}
                  />
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <motion.div
            variants={itemVariants}
            style={{
              flex: 1,
              overflowY: "auto",
              marginTop: "1.5rem",
              padding: "0 10px",
            }}
          >
            {filteredProjects.map((project, index) => (
              <div key={index} style={{ marginBottom: "20px" }}>
                <Card
                  title={project.title}
                  content={project.content}
                  image={project.image || null}
                  projectData={project}
                />
              </div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </motion.section>
  );
});

export default ProjectsSectionContent;
