import React, { useState } from "react";
import fondoGalaxia from "../../assets/img/fondo_galaxia.gif";
import { SocialMenu } from "Components/SocialMenu/SocialMenu";
import PortfolioNavbar from "./Components/Navbar/jsx/PortfolioNavbar";
import ReturnToHomeButton from "Components/Buttons/jsx/ReturnToHomeButton";

const PortfolioPage = () => {

    const [activeButton, setActiveButton] = useState();

    return (
        <>
            <PortfolioNavbar />
            <main style={{ backgroundImage: `url(${fondoGalaxia})`, backgroundPosition: "center" }}>
                <section
                    id={"inicio"}
                    className={"d-flex flex-column justify-content-center align-items-center text-center"}
                    style={{ minHeight: "100dvh" }}
                >
                    <SocialMenu />
                    <h1 className="mt-3 m-0 p-0" style={{ fontSize: "5.5rem", color: "whitesmoke" }}>José Leandro <span style={{ color: "#FFBA08" }}>Gullo</span></h1>
                    <p style={{ fontSize: "1.1rem", color: "whitesmoke" }} className={"m-0 p-0"}>Desarrollador Full<span style={{ color: "#FFBA08" }}>_</span>Stack</p>
                    <hr
                        style={{ backgroundColor: "#FFBA08", height: "6px", width: "150px" }}
                        className={"rounded-5 border border-none m-0 p-0 mb-6"}
                    />
                    <button
                        style={{
                            backgroundColor: activeButton ? "rgb(190, 38, 33)" : "#FFBA08",
                            color: activeButton ? "#FFBA08" : "#03071E",
                            fontSize: "1rem",
                            transition: "background-color 0.4s, transform 0.4s",
                            transform: activeButton ? "scale(1.2)" : "scale(.8)",
                            boxShadow: "0 0 7rem #FFBA08",
                        }}
                        className="btn border border-none rounded-5 fw-bold"
                        href=""
                        onMouseEnter={() => setActiveButton(true)}
                        onMouseLeave={() => setActiveButton(false)}
                    >
                        Descargá mi CV
                    </button>
                </section>
            </main>

            <ReturnToHomeButton />
        </>
    );
}

export default PortfolioPage;