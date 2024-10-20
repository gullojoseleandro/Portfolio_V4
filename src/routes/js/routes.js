import CVHome from "../../Pages/CVPage/CVPage.jsx";
import HomePage from "../../Pages/HomePage/HomePage.jsx";
import PortfolioPage from "../../Pages/PortfolioPage/PortfolioPage.jsx";

// const basename = "/PORTFOLIO-GULLO-JOSE-LEANDRO";
const mainPage = "/Home";

const mainRoutes = [
  { path: "/", access: "Home", component: <HomePage /> },
  { path: "/CV", access: "CV", component: <CVHome /> },
  { path: "/PORTFOLIO", access: "PORTFOLIO", component: <PortfolioPage /> },  
];

const routes = { mainRoutes, mainPage };

export default routes;