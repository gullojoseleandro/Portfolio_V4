import "../css/CVHeader.css"

const CVHeader = ({headerusername, headerusertitle}) => {
    return(
        <> 
            <div className="cvheader container-fluid border border-dark border-inner">
                <div className="row h-100 justify-content-center align-content-center align-items-center">
                    <div className="col text-center ">
                        <h1 className="headername h1 mt-2 text-light fw-bold">{headerusername}</h1>
                        <p className="headertitle text-light fw-bold">{headerusertitle}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CVHeader;