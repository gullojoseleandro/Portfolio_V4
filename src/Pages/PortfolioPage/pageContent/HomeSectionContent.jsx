import SocialMenu from "../../../Components/SocialMenu/SocialMenu";
import Title from "../Components/Title/Title";
import CVButton from "../Components/Button/CVButton";

const HomeSectionContent = () => {
    return (
        <section
            className={"d-flex flex-column h-100 align-items-center justify-content-center text-center"}
        >
            <SocialMenu />
            <Title />
            <CVButton />
        </section>
    )

}

export default HomeSectionContent;