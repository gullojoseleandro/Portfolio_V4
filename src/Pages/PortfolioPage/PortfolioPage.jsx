import React, { useState, lazy, Suspense, useCallback } from "react";
import fondoGalaxia from "../../assets/img/fondo_galaxia.gif";
import PortfolioNavbar from "./Components/Navbar/jsx/PortfolioNavbar";
import ReturnToHomeButton from "Components/Buttons/jsx/ReturnToHomeButton";
import MainLayout from "layouts/jsx/MainLayout";

const HomeSectionContent = lazy(() => import("./pageContent/HomeSectionContent"));

const PortfolioPage = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeSection, setActiveSection] = useState(<HomeSectionContent />);

    const handleSectionChange = useCallback((index) => {
        setActiveIndex(index);
        switch (index) {
            case 0:
                setActiveSection(<HomeSectionContent />);
                break;
            default:
                setActiveSection(<HomeSectionContent />);
        }
    }, []);

    return (
        <>
            <PortfolioNavbar
                activeIndex={activeIndex}
                setActiveIndex={handleSectionChange}
                setActiveSection={setActiveSection}
            />
            <MainLayout
                backgroundImage={fondoGalaxia}
                content={
                    <Suspense fallback={<div>Cargando...</div>}>
                        {activeSection}
                        <ReturnToHomeButton />
                    </Suspense>
                }
            />
        </>
    );
}

export default PortfolioPage;
