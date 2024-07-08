import CVBody from "./CVBody";
import BasicButton from "../../Components/Buttons/jsx/BasicButton";
import "./../css/CVHome.css";
import { useMemo } from "react";

const CVHome = ({ ...props }) => {

    const memoBody = useMemo(() => <CVBody />, []);

    return (
        <>
            <div className="cvhome">
                {memoBody}
                <BasicButton Contained={"Volver"} href={"/"} buttonclass="fixed-button" />
            </div>
        </>
    );
}

export default CVHome;