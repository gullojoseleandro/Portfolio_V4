import CVBody from "./CVBody";
import "./css/CVHome.css";

const CVHome = ({...props}) => {
    return(
        <>
            <div className="cvhome">
                <CVBody />
            </div>
        </>
    );
}

export default CVHome;