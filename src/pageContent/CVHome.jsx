import CVHeader from "../Components/Header/jsx/CVHeader";
import CVBody from "./CVBody";

const CVHome = ({...props}) => {
    return(
        <>
        <div className="container-lg container-md container-sm">
            <CVHeader headerusername={"Gullo José Leandro"} headerusertitle={"Desarrollador Full Stack"}/>
            <CVBody />
        </div>
        </>
    );
}

export default CVHome;