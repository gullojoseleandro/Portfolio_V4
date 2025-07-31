import CVHome from "../../Pages/CVPage/CVPage.jsx";
import HomePage from "../../Pages/HomePage/HomePage.jsx";
import PortfolioPage from "../../Pages/PortfolioPage/PortfolioPage.jsx";

const mainRoutes = [
  { path: "/HomePage", access: "HomePage", component: <HomePage /> },
  { path: "/CVPage", access: "CVPage", component: <CVHome /> },
  { path: "/PortfolioPage", access: "PortfolioPage", component: <PortfolioPage /> },  
];

const routes = { mainRoutes, mainPage: '/CVPage' };

export default routes;