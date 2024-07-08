import React, { lazy, Suspense } from "react";
import ProgrammingImgTwo from "./../../assets/img/image_4_codigofondonegro.jpg";
import PortfolioImg from "./../../assets/img/image_6.jpg";
import MainLayout from "layouts/jsx/MainLayout";
import backgroundImage from "./../../assets/img/image_7.jpg";

const LazyCard = lazy(() => import("../../Components/Cards/jsx/HomeCards.jsx"));

const HomePage = () => {
    return (
        <>
            <Suspense fallback={<span> ...Loading </span>}>
                <MainLayout
                    backgroundImage={backgroundImage}
                    firstCard={
                        <LazyCard 
                            title={"Curriculum Vitae."} 
                            image={PortfolioImg} />
                    }
                    secondCard={
                        <LazyCard
                            title={"Portafolio WEB (Proximamente)"}
                            image={ProgrammingImgTwo}
                        />
                    }
                />
            </Suspense>
        </>
    );
};

export default HomePage;