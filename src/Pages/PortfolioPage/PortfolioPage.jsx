/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import fondoGalaxia from "../../assets/img/fondo_galaxia.gif";
import PortfolioNavbar from "./Components/Navbar/jsx/PortfolioNavbar";
import ReturnToHomeButton from "Components/Buttons/jsx/ReturnToHomeButton";
import MainLayout from "layouts/jsx/MainLayout";
import HomeSectionContent from "./pageContent/HomeSectionContent";

const PortfolioPage = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeSection, setActiveSection] = useState(null);

    useEffect(() => {
        setActiveSection(
            <HomeSectionContent
                setActiveIndex={setActiveIndex}
                setActiveSection={setActiveSection}
                activeSection={activeSection}
            />
        );
    }, []);

    return (
        <>
            <PortfolioNavbar
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                setActiveSection={setActiveSection}
            />
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
