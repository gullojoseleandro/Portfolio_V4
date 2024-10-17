import "./CVHeader.css"

const CVHeader = ({ divclass, headerusername, headerusertitle }) => {
    return (
        <>
            <header className={`cvheader d-flex flex-column justify-content-center text-center ${divclass}`}>
                <h1 className="headername">{headerusername}</h1>
                <h7 className="headertitle ">{headerusertitle}</h7>
            </header>
        </>
    );
}

export default CVHeader;