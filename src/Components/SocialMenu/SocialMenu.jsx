import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';
import './SocialMenu.css';

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
    return (
        <aside className="d-flex justify-content-center align-items-center w-auto rounded-3 p-3 gap-5">
            {icons.map((icon, index) => (
                <a
                    key={index}
                    aria-label={icon.alt}
                    alt={icon.alt}
                    href={icon.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-link"
                >
                    <FontAwesomeIcon icon={icon.icon} className="social-icon" />
                </a>
            ))}
        </aside>
    );
};

export default SocialMenu;