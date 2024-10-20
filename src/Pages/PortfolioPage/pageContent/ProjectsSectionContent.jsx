import Card from '../../../Components/Cards/Card';
import OldPortfolio from '../../../assets/img/OldPortfolio.png';
import Slider from "react-slick";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import useWindowWidth from 'Hooks/useWindowWidth';
import useWindowHeight from 'Hooks/useWindowHeight';

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

const determineSlidesToShow = (width, height) => {
    if (width >= 1200) {
        // Pantallas grandes (1200px o más de ancho)
        if (height >= 1080) {
            return 3;
        } else if (height > 900) {
            return 3;
        } else {
            return 2;
        }
    } else if (width >= 900) {
        // Pantallas medianas (900px - 1199px de ancho)
        if (height >= 900) {
            return 3;
        } else if (height >= 600) {
            return 1;
        } else {
            return 1;
        }
    } else {
        // Pantallas pequeñas (menos de 900px de ancho)
        if (height >= 900) {
            return 1;
        } else if (height >= 600) {
            return 1;
        } else {
            return 1;
        }
    }
};

const ProjectsSectionContent = () => {
    const activeWidth = useWindowWidth();
    const activeHeight = useWindowHeight();

    const slidesToShow = determineSlidesToShow(activeWidth, activeHeight);

    const settings = {
        dots: true,
        infinite: false,
        arrows: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
    };

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
