import Logo from "../../../assets/pngwing.com.png";
import "../css/CVHeader.css"

const CVHeader = ({divclass, headerusername, headerusertitle}) => {
    return(
        <> 
            <div className={`cvheader d-flex flex-column justify-content-center text-center ${divclass}`}>
                <h1 className="headername">{headerusername}</h1>
                <h7 className="headertitle ">{headerusertitle}</h7>
            </div>
        </>
    );
}

export default CVHeader;