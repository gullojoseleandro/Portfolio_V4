import React from 'react';
import useWindowWidth from 'Hooks/useWindowWidth';

const MainLayout = ({ backgroundImage, content }) => {
    const activeWidth = useWindowWidth();
    return (
        <main
            style={{
                height: activeWidth > 768 ? "100vh" : "100dvh",
                position: "relative",
                overflow: "hidden",
                userSelect: "none"
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundPosition: "center",
                    filter: "blur(2px)",
                    zIndex: -1
                }}
            ></div>
            {content}
        </main>
    );
}

export default MainLayout;
