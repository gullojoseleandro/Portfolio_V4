import React, { memo } from "react";
import SocialMenu from "../../../Components/SocialMenu/SocialMenu";
import Title from "../Components/Title/Title";
import CVButton from "../Components/Button/CVButton";

const HomeSectionContent = memo(() => {
    return (
        <section
            className={"d-flex flex-column h-100 align-items-center justify-content-center text-center"}
        >
            <div data-aos="fade-down"><SocialMenu /></div>
            <div data-aos="zoom-in"><Title /></div>
            <div data-aos="fade-up"><CVButton /></div>
            
        </section>
    );
});

export default HomeSectionContent;
