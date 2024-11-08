import React, { useMemo, useState } from 'react';
import Card from '../../../Components/Cards/Card';
import Slider from "react-slick";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { SiJavascript, SiReact, SiCsharp, SiAstro, SiPython } from 'react-icons/si';
import { FaJava } from "react-icons/fa";
import useWindowWidth from 'Hooks/useWindowWidth';
import useWindowHeight from 'Hooks/useWindowHeight';
import FacilCV from './../../../assets/img/FacilCV.png'

const projects = [
    {
        title: "FacilCV",
        content: "Desarrollé una aplicación web que permite a los usuarios crear y compartir su CV público. La aplicación utiliza C# con ASP.NET en el backend y Astro con React en el frontend. Los usuarios pueden crear y editar su CV en formato PDF y ver el número de visitas a su CV en tiempo real. (En construcción).",
        image: FacilCV,
        technologies: ["Astro", "React", "C#", "JavaScript"],
        href: "https://facilcv.netlify.app/",
    },
    {
        title: "Sistema para peluquería canina",
        content: "En construcción.",
        technologies: ["Java"],
        href: "https://github.com/gullojoseleandro/CRUD_peluqueria_canina",
    },
    {
        title: "Mi web personal",
        content: "En construcción.",
        technologies: ["JavaScript, React"],
        href: "https://gullojl-dev.netlify.app/HomePage",
    },
    {
        title: "Proyecto X",
        content: "En construcción.",
        technologies: ["none"]
    },
];

const techIcons = [
    { tech: "Astro", icon: SiAstro },
    { tech: "JavaScript", icon: SiJavascript },
    { tech: "React", icon: SiReact },
    { tech: "C#", icon: SiCsharp },
    { tech: "Java", icon: FaJava },
    { tech: "Python", icon: SiPython },
];

const icons = [
    {
        icon: faGithub,
        alt: "icono de github",
    },
    {
        icon: faGlobe,
        alt: "icono de web",
    },
];

const determineSlidesToShow = (width, height) => {
    if (width >= 1200) return height >= 1080 ? 3 : (height > 900 ? 3 : 2);
    if (width >= 900) return height >= 900 ? 3 : 1;
    return 1;
};

const ProjectsSectionContent = () => {
    const activeWidth = useWindowWidth();
    const activeHeight = useWindowHeight();
    const [selectedTechnology, setSelectedTechnology] = useState(null);

    const filteredProjects = selectedTechnology
        ? projects.filter(project => project.technologies.includes(selectedTechnology))
        : projects;

    const slidesToShow = useMemo(() => determineSlidesToShow(activeWidth, activeHeight), [activeWidth, activeHeight]);

    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow,
        slidesToScroll: 1,
    };

    return (
        <section className={`d-flex flex-column align-items-center justify-content-center h-100`}>
            <div
                className={`${activeWidth > 768 ? activeHeight >= 950 ? "row align-items-end w-100 px-4 mb-5" : "row align-items-end w-100 px-4" : "w-100 mb-5"}`}
                style={{ width: "90%", height: "600px", overflow: activeWidth > 768 ? "inherit" : "auto" }}
            >
                <div style={{ width: '100%' }}>
                    <div className="tech-icons d-flex flex-column justify-content-center align-items-center">
                        <label htmlFor="filter" className={"mb-2"} style={{color: "#FFBA08"}}>Filtra por tecnología:</label>
                        <div className={"d-flex gap-4"}>
                        {techIcons.map(({ tech, icon: IconComponent }) => (
                            <IconComponent
                                key={tech}
                                size="2em"
                                style={{
                                    cursor: "pointer",
                                    color: selectedTechnology === tech ? "#FFBA08" : "rgba(255, 186, 8, 0.3)"
                                }}
                                onClick={() => setSelectedTechnology(selectedTechnology === tech ? null : tech)}
                                title={`Filtrar por ${tech}`}
                            />
                        ))}
                        </div>
                    </div>
                </div>
                {activeWidth > 768 ? (
                        <Slider style={{height: "1000px"}} {...settings}>
                            {filteredProjects.map((project, index) => (
                                <div key={index} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                    <Card
                                        title={project.title}
                                        content={project.content}
                                        image={project.image}
                                        socialIcons={true}
                                        icons={icons}
                                    />
                                </div>
                            ))}
                        </Slider>
                ) : (
                    filteredProjects.map((project, index) => (
                        <Card
                            key={index}
                            title={project.title}
                            content={project.content}
                            image={project.image}
                        />
                    ))
                )}
            </div>
        </section>
    );
}

export default ProjectsSectionContent;