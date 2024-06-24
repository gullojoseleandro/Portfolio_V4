import "../css/CVHeader.css"

const CVHeader = ({headerusername, headerusertitle}) => {
    return(
        <> 
            <div className="cvheader">
                <div className="py-2">
                    <h1 className="headername text-light">{headerusername}</h1>
                    <h7 className="headertitle text-light">{headerusertitle}</h7>
                </div>
            </div>
        </>
    );
}

export default CVHeader;