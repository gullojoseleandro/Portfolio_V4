import React, { memo } from "react";
import SocialMenu from "../../../Components/SocialMenu/SocialMenu";
import Title from "../Components/Title/Title";
import CVButton from "../Components/Button/CVButton";
import TechnologiesBadge from "Components/Badges/TechnologiesBadge";
import ContactsSectionContent from "./ContactsSectionContent";

const HomeSectionContent = memo(({setActiveSection}) => {
    return (
        <section className={"d-flex flex-column h-100 align-items-center justify-content-center text-center"}>
            <div data-aos="fade-down"><SocialMenu /></div>
            <div data-aos="zoom-in"><Title /></div>
            <div className={"py-5"} data-aos="zoom-in"><TechnologiesBadge /></div>
            <div data-aos="fade-up"><CVButton onClick={()=>setActiveSection(<ContactsSectionContent />)} content="Contactá conmigo"/></div>
        </section>
    );
});

export default HomeSectionContent;
