import React, { useEffect } from "react";
import RoutesHandle from "routes/jsx/RoutesHandle";
import { Footer } from 'Components/Footer/Footer';
import AOS from "aos";
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
        duration: 1000, 
        once: true, 
    });
}, []);
  return (
    <>
      <RoutesHandle />
      <Footer />
    </>
  );
}

export default App;
