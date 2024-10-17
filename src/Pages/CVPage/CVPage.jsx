import CVBody from "./pageContent/Body/CVBody";
import CVHeader from "./pageContent/Header/CVHeader";
import ReturnToHomeButton from "Components/Buttons/jsx/ReturnToHomeButton";

import "./CVPage.css";

const CVPage = () => {

    return (
        <>
            <div className="cvhome">
                <CVHeader
                    headerusername={"Gullo José Leandro"}
                    headerusertitle={"Desarrollador Full Stack"}
                />
                <CVBody />
                <ReturnToHomeButton />
            </div>
        </>
    );
}

export default CVPage;