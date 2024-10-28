import React, { useState, useEffect } from 'react';
import useWindowWidth from 'Hooks/useWindowWidth';

const MainLayout = ({ backgroundImage, content }) => {
    const activeWidth = useWindowWidth();
    const [dynamicHeight, setDynamicHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setDynamicHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const backgroundStyle = backgroundImage ? {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        filter: "blur(2px)",
        zIndex: -1
    } : {};

    return (
        <main
            style={{
                height: activeWidth > 768 ? "100vh" : `${dynamicHeight}px`, 
                position: "relative",
                overflow: "hidden",
                userSelect: "none"
            }}
        >
            <div style={backgroundStyle}></div>
            {content}
        </main>
    );
}

export default MainLayout;
