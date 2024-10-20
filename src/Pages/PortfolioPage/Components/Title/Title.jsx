import React, { memo } from "react";

const Title = memo(() => {
    return (
        <>
            <h1 className="mt-3 m-0 p-0" style={{ fontSize: "5.5rem", color: "whitesmoke" }}>
                José Leandro <span style={{ color: "#FFBA08" }}>Gullo</span>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "whitesmoke" }} className={"mb-6 p-0"}>
                Desarrollador Full<span style={{ color: "#FFBA08" }}>_</span>Stack
            </p>
        </>
    );
});

export default Title;
