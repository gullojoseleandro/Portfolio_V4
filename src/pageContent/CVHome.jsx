import CVHeader from "../Components/Header/jsx/CVHeader";
import CVBody from "./CVBody";
import "./css/CVHome.css";

const CVHome = ({...props}) => {
    return(
        <>
            <div className="cvhome">
                <CVHeader headerusername={"Gullo José Leandro"} headerusertitle={"Desarrollador Full Stack"}/>
                <CVBody />
            </div>
        </>
    );
}

export default CVHome;