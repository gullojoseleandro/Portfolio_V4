import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';

const icons = [
    {
        href: "https://github.com/gullojoseleandro",
        icon: faGithub,
        alt: "github link"
    },
    {
        href: "https://www.linkedin.com/in/gullo-jose-leandro/",
        icon: faLinkedin,
        alt: "linkedin link"
    },
    {
        href: "https://wa.me/3489594918",
        icon: faWhatsapp,
        alt: "whatsapp link"
    }
];

const SocialMenu = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    return (
        <>
            <aside
                className="d-flex justify-content-center align-items-center w-auto rounded-3 p-3 gap-5"
            >
                {icons.map((icon, index) => (
                    <a
                        key={index}
                        aria-label={icon.alt}
                        alt={icon.alt}
                        href={icon.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(null)}
                    >
                        <FontAwesomeIcon size="3x" color={activeIndex === index ? "rgb(190, 38, 33)" : '#FFBA08'} icon={icon.icon} bounce={activeIndex === index} />
                    </a>
                ))}
            </aside>
        </>
    )
}

export default SocialMenu;