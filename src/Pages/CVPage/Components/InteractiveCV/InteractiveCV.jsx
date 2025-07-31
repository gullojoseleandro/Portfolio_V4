import React, { useState, useEffect, useRef, useCallback } from 'react';
import SideNav from '../SideNav/SideNav';
import './InteractiveCV.css';
import HomeSectionContent from 'Pages/PortfolioPage/pageContent/HomeSectionContent';
import ProjectsSectionContent from 'Pages/PortfolioPage/pageContent/ProjectsSectionContent';
import AboutMe from 'Pages/PortfolioPage/pageContent/AboutMe';
import ContactsSectionContent from 'Pages/PortfolioPage/pageContent/ContactsSectionContent';

const InteractiveCV = () => {
    const [activeSection, setActiveSection] = useState('resumen');
    
    const sectionRefs = useRef({});
    sectionRefs.current = {
        resumen: useRef(null),
        proyectos: useRef(null),
        contacto: useRef(null),
        sobremi: useRef(null),
    };

    const sectionIds = Object.keys(sectionRefs.current);

    const handleNavClick = (sectionId) => {
        sectionRefs.current[sectionId].current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    const observerCallback = useCallback((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
            }
        });
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(observerCallback, { 
            rootMargin: '-20% 0px -20% 0px',
            threshold: 0.3
        });
        const refs = sectionRefs.current;

        sectionIds.forEach(id => {
            if (refs[id].current) {
                observer.observe(refs[id].current);
            }
        });

        return () => {
            sectionIds.forEach(id => {
                if (refs[id].current) {
                    observer.unobserve(refs[id].current);
                }
            });
        };
    }, [sectionIds, observerCallback]);

    return (
        <div className="interactive-cv-container">
            <SideNav sections={sectionIds} activeSection={activeSection} onNavClick={handleNavClick} />

            <HomeSectionContent ref={sectionRefs.current.resumen} onNavClick={handleNavClick} />

            <ProjectsSectionContent ref={sectionRefs.current.proyectos} setActiveSection={setActiveSection} />

            <ContactsSectionContent ref={sectionRefs.current.contacto} setActiveSection={setActiveSection} />

            <AboutMe ref={sectionRefs.current.sobremi} setActiveSection={setActiveSection} />

        </div>
    );
};

export default InteractiveCV;
