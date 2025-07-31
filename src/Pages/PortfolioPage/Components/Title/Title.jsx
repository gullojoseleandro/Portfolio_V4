import React, { memo } from "react";
import './Title.css';

const Title = memo(() => {
    return (
        <>
            <h1 className="mt-1 m-0 p-0 title-main">
                José Leandro <span className="title-highlight">Gullo</span>
            </h1>
            <p className={"m-0 p-0 title-sub"}>
                Desarrollador Full<span className="title-highlight">_</span>Stack
            </p>
        </>
    );
});

export default Title;
