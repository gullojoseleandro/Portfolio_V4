import React from 'react';

const MainLayout = ({ backgroundImage, content }) => {
    return (
        <main
            style={{
                height: "100vh",
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
