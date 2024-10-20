import React, { useState } from "react";
import fondoGalaxia from "../../assets/img/fondo_galaxia.gif";
import PortfolioNavbar from "./Components/Navbar/jsx/PortfolioNavbar";
import ReturnToHomeButton from "Components/Buttons/jsx/ReturnToHomeButton";
import MainLayout from "layouts/jsx/MainLayout";
import HomeSectionContent from "./pageContent/HomeSectionContent";


const PortfolioPage = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeSection, setActiveSection] = useState(<HomeSectionContent />);

    return (
        <>
            <PortfolioNavbar 
                activeIndex={activeIndex} 
                setActiveIndex={setActiveIndex} 
                activeSection={activeSection} 
                setActiveSection={setActiveSection} />
            <MainLayout
                backgroundImage={fondoGalaxia}
                content={
                    <>
                        {activeSection}
                        <ReturnToHomeButton />
                    </>
                }
            />
        </>
    );
}

export default PortfolioPage;