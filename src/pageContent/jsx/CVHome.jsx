import CVBody from "./CVBody";
import BasicButton from "../../Components/Buttons/jsx/BasicButton";
import { useNavigate } from 'react-router-dom';
import "./../css/CVHome.css";


const CVHome = ({ ...props }) => {

    const navigate = useNavigate();

    return (
        <>
            <div className="cvhome">
                <CVBody />
                <BasicButton Contained={"Volver"} href={"/"} buttonclass="fixed-button" />
            </div>
        </>
    );
}

export default CVHome;