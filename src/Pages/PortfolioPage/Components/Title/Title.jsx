import React, { memo } from "react";

const Title = memo(() => {
    return (
        <>
            <h1 className="mt-1 m-0 p-0" style={{ fontSize: "calc(4rem + 3vw)", color: "whitesmoke" }}>
                José Leandro <span style={{ color: "#FFBA08" }}>Gullo</span>
            </h1>
            <p style={{ fontSize: "1.5rem", color: "whitesmoke" }} className={"m-0 p-0"}>
                Desarrollador Full<span style={{ color: "#FFBA08" }}>_</span>Stack
            </p>
        </>
    );
});

export default Title;
