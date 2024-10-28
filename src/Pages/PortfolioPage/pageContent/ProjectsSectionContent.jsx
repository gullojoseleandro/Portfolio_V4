import React, { useMemo } from 'react';
import Card from '../../../Components/Cards/Card';
import Slider from "react-slick";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import useWindowWidth from 'Hooks/useWindowWidth';
import useWindowHeight from 'Hooks/useWindowHeight';

const projects = [
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

const determineSlidesToShow = (width, height) => {
    if (width >= 1200) return height >= 1080 ? 3 : (height > 900 ? 3 : 2);
    if (width >= 900) return height >= 900 ? 3 : 1;
    return 1;
};

const ProjectsSectionContent = () => {
    const activeWidth = useWindowWidth();
    const activeHeight = useWindowHeight();

    const slidesToShow = useMemo(() => determineSlidesToShow(activeWidth, activeHeight), [activeWidth, activeHeight]);

    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow,
        slidesToScroll: 1,
    };

    return (
        <section className="d-flex align-items-center justify-content-center h-100">
            <div 
                className={`${activeWidth > 768 ? "row align-items-center w-100 p-4" : "w-100 mb-5"}`} 
                style={{ width: "90%", height: "600px", overflow: activeWidth > 768 ? "hidden" : "auto" }}
            >
                {activeWidth > 768 ? (
                    <div className={"container-fluid"}>
                    <Slider {...settings}>
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000"
                            >
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
                </div>
                ) : (
                    projects.map((project, index) => (
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