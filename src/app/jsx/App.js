import React, { useEffect } from "react";
import RoutesHandle from "routes/jsx/RoutesHandle";
import AOS from "aos";
import 'aos/dist/aos.css';

console.log('%c Hola! gracias por pasarte por mi web :D', 'color: #FFBA08; font-size: 20px; font-weight: bold;');

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
    </>
  );
}

export default App;
