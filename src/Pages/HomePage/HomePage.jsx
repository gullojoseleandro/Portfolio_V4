import React, { lazy, Suspense } from "react";
import { Link } from 'react-router-dom';
import SocialMenu from "./../../Components/SocialMenu/SocialMenu";
import MainLayout from "layouts/jsx/MainLayout";
import CurriculumImg from "./../../assets/img/image_4_codigofondonegro.webp";
import PortfolioImg from "./../../assets/img/image_6.webp";
import backgroundImage from "./../../assets/img/image_7.webp";

import SimpleSeparationLine from "Components/Bars/SimpleSeparationLine";

import "./HomePage.css";

const LazyCard = React.memo(lazy(() => import("./Components/Cards/HomeCards")));

const fallback =
    <div
        className="d-flex justify-content-center align-items-center align-content-center"
        style={{ width: "100%", height: "100%" }}
    >
        <span className={"card_loader"}>
        </span>
    </div>;

const firstCard =
    <Suspense fallback={fallback}>
        <LazyCard
            title={"Curriculum Vitae versión WEB."}
            image={PortfolioImg}
        />
    </Suspense>

const secondCard =
    <Suspense fallback={fallback}>
        <LazyCard
            title={"Mi Portfolio (En construccion)."}
            image={CurriculumImg}
        />
    </Suspense>


const HomePage = () => {
    return (
        <>
            <MainLayout
                backgroundImage={backgroundImage}
                content=
                {
                    <>
                        <header 
                            data-aos="fade-down"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            style={{ backgroundColor: "rgb(3, 7, 30, 0.1)" }}>
                            <SocialMenu />
                            <SimpleSeparationLine />
                        </header>
                        <section className="row h-75 align-items-center">
                            <article
                                data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine"
                                className="col-lg-6 col-md-6 col-sm-6 m-0 p-5">
                                <Link to="/CVPage">
                                    {firstCard}
                                </Link>
                            </article>
                            <article
                                data-aos="fade-left"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine"
                                className="col-lg-6 col-md-6 col-sm-6 m-0 p-0 p-5">
                                <Link to="/PortfolioPage">
                                    {secondCard}
                                </Link>
                            </article>
                        </section>
                    </>
                }
            />
        </>
    );
};

export default HomePage;