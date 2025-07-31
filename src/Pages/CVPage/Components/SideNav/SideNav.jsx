import React from 'react';
import './SideNav.css';

const SideNav = ({ sections, activeSection, onNavClick }) => {
    return (
        <nav className="side-nav">
            <ul>
                {sections.map(sectionId => (
                    <li key={sectionId}>
                        <a 
                            href={`#${sectionId}`}
                            className={activeSection === sectionId ? 'active' : ''}
                            onClick={(e) => {
                                e.preventDefault();
                                onNavClick(sectionId);
                            }}
                            aria-label={`Ir a la sección ${sectionId}`}
                        ></a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default SideNav;
