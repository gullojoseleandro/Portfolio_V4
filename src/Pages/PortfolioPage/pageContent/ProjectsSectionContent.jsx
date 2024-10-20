import React from 'react';
import Card from '../../../Components/Cards/Card';
import image from '../../../assets/img/image_6.webp';
import OldPortfolio from '../../../assets/img/OldPortfolio.png';
import Slider from "react-slick";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import useWindowWidth from 'Hooks/useWindowWidth';

const projects = [
    {
        title: "Mi antiguo portfolio",
        content: "Realizado con HTML5, CSS3 y JavaScript vanilla.",
        image: OldPortfolio,
    },
    {
        title: "Proyecto X",
        content: "En construcción.",
    },
    {
        title: "Proyecto X",
        content: "En construcción.",
    },
    {
        title: "Proyecto X",
        content: "En construcción.",
    },
    {
        title: "Proyecto X",
        content: "En construcción.",
    },
    {
        title: "Proyecto X",
        content: "En construcción.",
    },
];

const icons = [
    {
        href: "https://github.com/gullojoseleandro/gullojoseleandro.github.io",
        icon: faGithub,
        alt: "Enlace al antiguo portfolio",
    },
    {
        href: "https://gullojoseleandro.github.io/",
        icon: faGlobe,
        alt: "Enlace al portfolio actual",
    },
];

const settings = {
    dots: true,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,

};

const ProjectsSectionContent = () => {
    const activeWidth = useWindowWidth();

    return (
        <section className="d-flex align-items-center justify-content-center h-100">
            <div className={`${activeWidth > 768 ? "row align-items-center" : "w-100 mb-5"}`} style={{ width: "90%", height: "600px", overflow: activeWidth > 768 ? "" : "auto" }}>
                {activeWidth > 768 ? (
                    <Slider {...settings}>
                        {projects.map((project, index) => (
                            <Card
                                key={index}
                                title={project.title}
                                content={project.content}
                                image={project.image}
                                socialIcons={true}
                                icons={icons}
                            />
                        ))}
                    </Slider>
                ) : (
                    projects.map((project, index) => (
                        <Card
                            key={index}
                            title={project.title}
                            content={project.content}
                            image={project.image}
                            socialIcons={true}
                            icons={icons}
                        />
                    ))
                )}
            </div>
        </section>
    );
}

export default ProjectsSectionContent;
