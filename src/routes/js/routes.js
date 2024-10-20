import CVHome from "../../Pages/CVPage/CVPage.jsx";
import HomePage from "../../Pages/HomePage/HomePage.jsx";
import PortfolioPage from "../../Pages/PortfolioPage/PortfolioPage.jsx";

// const basename = "/portfolio_2024";

// const CVPageAnimation = <div 
//                           data-aos="fade-zoom-in"
//                           data-aos-delay="0"
//                           data-aos-offset="0"
//                         >
//                             <CVHome />
//                         </div>

// const PortfolioPageAnimation = <div 
//                                 data-aos="fade-zoom-in"
//                                 data-aos-delay="0"
//                                 data-aos-offset="0"
//                               >
//                                 <PortfolioPage />
//                               </div>

const mainRoutes = [
  { path: "/HomePage", access: "HomePage", component: <HomePage /> },
  { path: "/CVPage", access: "CVPage", component: <CVHome /> },
  { path: "/PortfolioPage", access: "PortfolioPage", component: <PortfolioPage /> },  
];

const routes = { mainRoutes, mainPage: '/HomePage' };

export default routes;